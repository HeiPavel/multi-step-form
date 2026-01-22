'use client'

import { useContext, ReactNode } from 'react'
import { StepContext } from '../Context/CurrentStepContext'
import { FormStepStateContext, defaultFormStepStateValue } from '../Context/StepStateContext'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { schema, UserData } from '@/app/util/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Fieldset, FieldsetProps } from './Fieldset'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour/StepFour'
import { Buttons } from './Buttons/Buttons'
import { UpdateStorage } from '../UpdateStorage/UpdateStorage'
import { UpdateFieldsValidity } from '../UpdateFieldsValidity/UpdateFieldsValidity'

type StepContentType = {
  fieldsetProps: Omit<FieldsetProps, 'children'>
  Step: () => ReactNode
}

const stepContent: StepContentType[] = [
  {
    fieldsetProps: {
      legend: 'Personal info',
      description: 'Please provide your name, email address, and phone number.'
    },
    Step: StepOne
  },
  {
    fieldsetProps: {
      legend: 'Select your plan',
      description: 'You have option of monthly or yearly billing.'
    },
    Step: StepTwo
  },
  {
    fieldsetProps: {
      legend: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.'
    },
    Step: StepThree
  },
  {
    fieldsetProps: {
      legend: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.'
    },
    Step: StepFour
  }
]

export const defaultValues: UserData = {
  name: '',
  email: '',
  phoneNumber: '',
  plan: 'arcade',
  isAnnually: false,
  add: []
}

const getInitialState = async () => {
  const formDataRaw = localStorage.getItem('formData')

  return formDataRaw ? JSON.parse(formDataRaw) as UserData : defaultValues
}

export function Form() {
  const {currentStep, setCurrentStep} = useContext(StepContext)
  const {setStepsValidityState} = useContext(FormStepStateContext)

  const methods = useForm<UserData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: getInitialState
  })

  const {handleSubmit} = methods

  const onSubmit: SubmitHandler<UserData> = () => {
    localStorage.removeItem('stepsState')
    localStorage.removeItem('formData')

    setStepsValidityState(defaultFormStepStateValue)
    setCurrentStep(stepContent.length)
  }

  if (currentStep < 0 || currentStep >= stepContent.length) return null

  const {fieldsetProps, Step} = stepContent[currentStep]

  return (
    <FormProvider {...methods}>
      <form 
        className='laptop:w-113 max-laptop:grow flex flex-col justify-between items-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='relative -top-18 sm:-top-26 tablet:-top-32 md:-top-40 laptop:top-0 max-tablet:px-4 w-full max-w-150'>
          <div className='pt-7 laptop:pt-11 max-laptop:px-6 pb-8 bg-white rounded-xl max-laptop:shadow-xl'>
            <Fieldset {...fieldsetProps}>
              <Step/>
            </Fieldset>
          </div>
        </div>
        <Buttons/>
      </form>
      <UpdateStorage/>
      <UpdateFieldsValidity/>
    </FormProvider>
  )
}
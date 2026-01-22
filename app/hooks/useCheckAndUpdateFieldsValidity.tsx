'use client'

import { useEffect, useRef, useContext } from 'react'
import { FormStepStateContext, MultiStepFormState } from '../components/Context/StepStateContext'
import { StepContext } from '../components/Context/CurrentStepContext'
import { useFormContext, useWatch } from 'react-hook-form'
import { UserData, isFieldRequired, fieldsByStep } from '../util/schema'
import { defaultValues } from '../components/Form/Form'
import { defaultFormStepStateValue } from '../components/Context/StepStateContext'

export function useCheckAndUpdateFieldsValidity() {
  const {setStepsValidityState} = useContext(FormStepStateContext)
  const {currentStep} = useContext(StepContext)
  const fields = fieldsByStep[currentStep]
  const isLastStep = currentStep === defaultFormStepStateValue.length - 1
  const triggeredFieldsRef = useRef<boolean[][]>(fieldsByStep.map(step => new Array(step.length).fill(false)))

  const {
    trigger,
    formState: {
      isValid
    },
    control,
    getFieldState
  } = useFormContext<UserData>()

  const formData = useWatch({
    name: fields,
    control
  })

  useEffect(() => {
    if (formData.some(data => data === undefined)) return
    
    let active = true

    const checkAndUpdateFieldState = async () => {
      const fieldsState = await Promise.all(fields.map(async (field, index) => {
        if (!isFieldRequired[field]) return true

        const value = formData[index]
        const defaultValue = defaultValues[field]

        let state = false

        if (
          typeof value === 'object' && JSON.stringify(value) !== JSON.stringify(defaultValue) ||
          value !== defaultValue
        ) {
          if (triggeredFieldsRef.current && !triggeredFieldsRef.current[currentStep][index]) {
            state = await trigger(field)
            triggeredFieldsRef.current[currentStep][index] = true
          } else state = !getFieldState(field).invalid
        }

        return state
      }))

      const stepState = isLastStep ? isValid : fieldsState.every(field => field)

      if (!active) return

      setStepsValidityState(prev => {
        if (prev[currentStep] === stepState) return prev

        const newState: MultiStepFormState = [...prev]
        newState[currentStep] = stepState

        return newState
      })
    }

    const timeoutID = setTimeout(checkAndUpdateFieldState, 200)

    return () => {
      active = false
      clearTimeout(timeoutID)
    }
  }, [JSON.stringify(formData), fields, isValid, isLastStep, currentStep])
}
'use client'

import { useContext, useMemo } from 'react'
import { useMounted } from '@/app/hooks/useMounted'
import { StepContext } from '../../Context/CurrentStepContext'
import { FormStepStateContext } from '../../Context/StepStateContext'
import { isFieldRequired, fieldsByStep } from '@/app/util/schema'
import { twJoin } from 'tailwind-merge'

export function NextButton() {
  const {currentStep, setCurrentStep} = useContext(StepContext)
  const {stepsValidityState} = useContext(FormStepStateContext)
  const isMounted = useMounted()
  const isStepRequireValidation = useMemo(() => fieldsByStep[currentStep].some(field => isFieldRequired[field]), [currentStep])

  const isDisabled = isStepRequireValidation ? !stepsValidityState[currentStep] : false
  const isLastStep = currentStep === stepsValidityState.length - 1 

  return (
    <button
      key={isLastStep ? 'submit button' : 'next button'}
      type={isLastStep ? 'submit' : 'button'}
      className={twJoin(
        'disabled:bg-grey disabled:opacity-45',
        'justify-self-end',
        'w-24 h-9.5 tablet:w-30 tablet:h-12 rounded-sm tablet:rounded-lg',
        'flex justify-center items-center',
        'font-medium text-white',
        'drop-shadow-xl/50 enabled:hover:drop-shadow-xl/65',
        isLastStep ? 'enabled:bg-blue-bright enabled:hover:bg-purple' : 'enabled:bg-blue-dark enabled:hover:bg-blue-medium',
        'enabled:cursor-pointer',
        'transition-[background-color,filter] will-change-[filter] ease-in-out duration-300'
      )}
      disabled={isMounted ? isDisabled : true}
      onClick={!isLastStep ? () => setCurrentStep(prev => prev + 1) : undefined}
      suppressHydrationWarning={true}
    >
      {isLastStep ? 'Confirm' : 'Next Step'}
    </button>
  )
}
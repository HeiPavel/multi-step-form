'use client'

import { useContext, memo } from 'react'
import { useMounted } from '@/app/hooks/useMounted'
import { StepContext } from '../Context/CurrentStepContext'
import { FormStepStateContext } from '../Context/StepStateContext'
import { twJoin } from 'tailwind-merge'

type NavigationButtonType = {
  stepIndex: number
  description: string
}

export const NavigationButton = memo(function NavigationButton({stepIndex, description}: NavigationButtonType) {
  const {currentStep, setCurrentStep} = useContext(StepContext)
  const {stepsValidityState} = useContext(FormStepStateContext)
  const isMounted = useMounted()

  const firstInvalidStep = stepsValidityState.indexOf(false)
  const allowedStep = firstInvalidStep < 0 ? stepsValidityState.length : firstInvalidStep
  const isDisabled = stepIndex > allowedStep
  const isActive = stepIndex === currentStep

  return (
    <div className='relative z-10 flex items-center gap-4'>
      <button
        onClick={() => setCurrentStep(stepIndex)}
        disabled={isMounted ? isDisabled : true}
        className={twJoin(
          'flex justify-center items-center',
          'size-10 tablet:size-12 laptop:size-10', 
          'font-bold text-sm leading-3.5 tablet:max-laptop:text-base tablet:max-laptop:leading-4',
          'rounded-full border', 
          'disabled:opacity-50',
          'will-change-[filter] transition-all duration-300 ease-in-out',
          isActive && 'text-blue-dark border-blue-light bg-blue-light',
          !isActive && [
            'enabled:cursor-pointer', 
            'enabled:hover:text-blue-dark', 
            'enabled:hover:bg-white-blue-light', 
            'enabled:hover:border-white-blue-light',
            'text-white',
            'border-white',
            'navigation-button-shadow'
          ]
        )}
        suppressHydrationWarning={true}
      >
        {stepIndex + 1}
      </button>
      <div className='hidden laptop:block uppercase text-sm font-ubuntu'>
        <p className='text-blue'>{`step ${stepIndex + 1}`}</p>
        <p className='text-white font-bold tracking-wider'>{description}</p>
      </div>
    </div>
  )
})
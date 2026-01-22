'use client'

import { useContext } from 'react'
import { StepContext } from '../../Context/CurrentStepContext'
import { twJoin } from 'tailwind-merge'

export function PrevButton() {
  const {currentStep, setCurrentStep} = useContext(StepContext)

  if (currentStep <= 0) return null

  return (
    <button
      type='button'
      onClick={() => setCurrentStep(prev => prev - 1)}
      className={twJoin(
        'justify-self-start',
        'font-medium text-grey hover:text-blue-dark hover:text-shadow-lg/20',
        'transition-all ease-in-out duration-300',
        'cursor-pointer'
      )}
    >
      Go Back
    </button>
  )
}
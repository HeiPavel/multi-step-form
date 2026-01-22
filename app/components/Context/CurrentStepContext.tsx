'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { defaultFormStepStateValue } from './StepStateContext'

type CurrentStepContextType = {
  isFormSubmited: boolean
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}

const defaultCurrentStepContextValue: CurrentStepContextType = {
  isFormSubmited: false,
  currentStep: 0,
  setCurrentStep: () => undefined
}

export const StepContext = createContext<CurrentStepContextType>(defaultCurrentStepContextValue)

export function CurrentStepContext({children}: Readonly<{children: ReactNode}>) {
  const [currentStep, setCurrentStep] = useState(0)
  const isFormSubmited = currentStep >= defaultFormStepStateValue.length

  const contextValue: CurrentStepContextType = {
    isFormSubmited,
    currentStep,
    setCurrentStep
  }

  return (
    <StepContext.Provider value={contextValue}>
      {children}
    </StepContext.Provider>
  )
}
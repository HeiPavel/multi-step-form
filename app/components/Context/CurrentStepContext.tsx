'use client'

import { createContext, useState, ReactNode } from 'react'

type CurrentStepContextType = {
  currentStep: number
  setCurrentStep: (value: number) => void
}

const defaultCurrentStepContextValue: CurrentStepContextType = {
  currentStep: 0,
  setCurrentStep: () => undefined
}

export const StepContext = createContext<CurrentStepContextType>(defaultCurrentStepContextValue)

export function CurrentStepContext({children}: Readonly<{children: ReactNode}>) {
  const [currentStep, setCurrentStep] = useState(0)

  const contextValue: CurrentStepContextType = {
    currentStep,
    setCurrentStep
  }

  return (
    <StepContext.Provider value={contextValue}>
      {children}
    </StepContext.Provider>
  )
}
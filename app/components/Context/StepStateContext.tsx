'use client'

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react'
import { stepsStateKey } from '@/app/hooks/useLocalStorage'

type SetStepFormStateType = Dispatch<SetStateAction<MultiStepFormState>>

type FormStepStateContextType = {
  stepsValidityState: MultiStepFormState
  setStepsValidityState: SetStepFormStateType
}

export const defaultFormStepStateValue: MultiStepFormState = [false, false, false, false]

export const defaultFormStepStateContextValue: FormStepStateContextType = {
  stepsValidityState: defaultFormStepStateValue,
  setStepsValidityState: () => undefined
}

export type MultiStepFormState = [boolean, boolean, boolean, boolean]

export const FormStepStateContext = createContext<FormStepStateContextType>(defaultFormStepStateContextValue)

const getInitialState = (): MultiStepFormState => {
  try {
    const state = localStorage.getItem(stepsStateKey)
    return state ? JSON.parse(state) : defaultFormStepStateValue
  } catch {
    return defaultFormStepStateValue
  }
}

export function MultiStepSateContext({children}: Readonly<{children: ReactNode}>) {
  const [stepsValidityState, setStepsValidityState] = useState<MultiStepFormState>(getInitialState)

  const contextValue: FormStepStateContextType = {
    stepsValidityState,
    setStepsValidityState
  }

  return (
    <FormStepStateContext.Provider value={contextValue}>
      {children}
    </FormStepStateContext.Provider>
  )
}
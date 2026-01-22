'use client'

import { useEffect, useContext } from 'react'
import { FormStepStateContext } from '../components/Context/StepStateContext'
import { useWatch, Control } from 'react-hook-form'
import { UserData } from '../util/schema'

export const dataKey = 'formData'
export const stepsStateKey = 'stepsState'

export function useLocalStorage(control: Control<UserData>) {
  const {stepsValidityState} = useContext(FormStepStateContext)

  const formData = useWatch({control})

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      localStorage.setItem(dataKey, JSON.stringify(formData))
    }, 200)

    return () => clearTimeout(timeoutID)
  }, [formData])

  useEffect(() => {
    localStorage.setItem(stepsStateKey, JSON.stringify(stepsValidityState))
  }, [stepsValidityState])
}
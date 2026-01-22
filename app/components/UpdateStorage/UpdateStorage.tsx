'use client'

import { useFormContext } from 'react-hook-form'
import { useLocalStorage } from '@/app/hooks/useLocalStorage'
import { UserData } from '@/app/util/schema'

export function UpdateStorage() {
  const {control} = useFormContext<UserData>()

  useLocalStorage(control)

  return null
}
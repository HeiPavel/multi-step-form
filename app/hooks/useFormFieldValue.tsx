'use client'

import { useFormContext, useWatch, FieldPath, FieldPathValues } from 'react-hook-form'
import { UserData } from '../util/schema'

export function useFormFieldValue<const T extends readonly FieldPath<UserData>[]>(fieldName: T): FieldPathValues<UserData, T> {
  const {control} = useFormContext<UserData>()

  const value = useWatch<UserData, T>({
    name: fieldName,
    control
  })

  return value
}
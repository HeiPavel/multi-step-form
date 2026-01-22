'use client'

import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors } from 'react-hook-form'
import { UserData, FieldNames } from '@/app/util/schema'

type InputErrorProp = {
  name: FieldNames,
  errors: FieldErrors<UserData>
}

export function InputError({name, errors}: InputErrorProp) {
  return (
    <div className='mt-1 h-3.5'>
      <ErrorMessage
        name={name}
        errors={errors}
        render={({message}) => <p className='text-xs text-red'>{message}</p>}
      />
    </div>
  )
}
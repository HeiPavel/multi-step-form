'use client'

import { TextInput, TextInputProps } from '../Inputs/TextInput'

const inputData: TextInputProps[] = [
  {
    name: 'name',
    type: 'text',
    label: 'name',
    placeholder: 'e.g. Stephen King'
  },
  {
    name: 'email',
    type: 'email',
    label: 'email address',
    placeholder: 'e.g. stephenking@loren.com'
  },
  {
    name: 'phoneNumber',
    type: 'tel',
    label: 'phone number',
    placeholder: 'e.g. +1 234 567 890'
  }
]

export function StepOne() {
  return (
    <div className='mt-6 tablet:mt-10 flex flex-col gap-1 tablet:gap-3'>
      {inputData.map((props, index) => (
        <TextInput
          key={index}
          {...props}
        />
      ))}
    </div>
  )
}
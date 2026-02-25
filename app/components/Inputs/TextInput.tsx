'use client'

import { InputText } from 'primereact/inputtext'
import { InputError } from './InputError'
import { motion } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { useFormContext, Controller } from 'react-hook-form'
import { UserData } from '@/app/util/schema'
import { ChangeEvent, InputEvent, ClipboardEvent } from 'react'
import { formatPhoneNumber } from '@/app/util/formatPhoneNumber'

type InputNameType = keyof Omit<UserData, 'plan' | 'isAnnually' | 'add'>

export type TextInputProps = {
  type: 'text' | 'email' | 'tel'
  name: InputNameType
  label: string
  placeholder: string
}

export function TextInput({type, name, label, placeholder}: TextInputProps) {
  const {
    control,
    formState: {
      errors
    }
  } = useFormContext<UserData>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>, onChange: (...event: any[]) => void) => {
    const {value} = event.target

    type === 'tel' ? onChange(formatPhoneNumber(value)) : onChange(value)
  }

  const handleBeforeInput = (event: InputEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement, curentIndex = target.selectionStart ?? 0
    if (
      event.data === ' ' && 
      (
        curentIndex === 0 || 
        target.value[curentIndex] === ' ' || 
        target.value[curentIndex - 1] === ' ' || 
        target.value[curentIndex + 1] === ' '
      )) event.preventDefault()
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const text = event.clipboardData.getData('text')
    if (type === 'text' && /^\s|\s{2,}|\s$/.test(text) || /^\s|\s{1,}|\s$/.test(text)) event.preventDefault()
  }

  return (
    <motion.div variants={fadeVariants}>
      <div className='flex flex-col gap-1 tablet:gap-2'>
        <label 
          htmlFor={name}
          className='text-sm leading-3.5 text-blue-dark capitalize'
        >{label}</label>
        <Controller
          control={control}
          name={name}
          defaultValue=''
          render={({field, fieldState}) => (
            <InputText
              id={name}
              type={type}
              {...field}
              onBeforeInput={handleBeforeInput}
              onChange={(event) => handleChange(event, field.onChange)}
              onPaste={handlePaste}
              value={field.value}
              placeholder={placeholder}
              invalid={fieldState.invalid}
            />
          )}
        />
      </div>
      <InputError
        name={name}
        errors={errors}
      />
    </motion.div>
  )
}
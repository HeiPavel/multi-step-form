'use client'

import { Checkbox } from 'primereact/checkbox'
import { Price } from './Price'
import { motion } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { useFormContext, Controller } from 'react-hook-form'
import { UserData } from '@/app/util/schema'
import {ReactComponent as CheckmarkIcon} from '@/public/assets/icons/icon-checkmark.icon.svg'
import { twJoin } from 'tailwind-merge'

const addOns: UserData['add'] = ['service', 'storage', 'profile']

type AddOnsType = UserData['add'][number]

export type CheckboxInputProps = {
  value: AddOnsType
  price: number
  title: string
  description: string
}

export function CheckboxInput({value, price, title, description}: CheckboxInputProps) {
  const {control} = useFormContext<UserData>()

  const handleChange = (prevSelectedValues: UserData['add'], checked: boolean | undefined, value: AddOnsType) => {
    const selectedValues: UserData['add'] = []

    for (const ons of addOns) {
      if (ons === value) {
        if (checked) selectedValues.push(ons)
      } else {
        if (prevSelectedValues.includes(ons)) selectedValues.push(ons)
      }
    }

    return selectedValues
  }

  return (
    <motion.label
      htmlFor={value}
      className={twJoin(
        'w-full px-4 tablet:px-6 h-15 tablet:h-20 rounded-lg',
        'flex items-center justify-between',
        'bg-white',
        'border border-grey-light hover:border-blue-dark hover:drop-shadow-lg/15',
        'has-checked:bg-white-blue-medium has-checked:border-blue-dark',
        'has-checked:drop-shadow-lg/20',
        'transition-[background-color,border-color,filter] will-change-[filter] duration-300 ease-in-out',
        'cursor-pointer'
      )}
      variants={fadeVariants}
    >
      <div className='flex items-center gap-4 tablet:gap-6'>
        <Controller
          control={control}
          name='add'
          render={({field}) => {
            const selectedValues = field.value || []

            return (
              <Checkbox
                inputId={value}
                checked={selectedValues.includes(value)}
                onChange={(event) => (
                  field.onChange(handleChange(selectedValues, event.checked, value))
                )}
                value={value}
                icon={<CheckmarkIcon className='w-3 h-3 transition-all duration-200 text-white text-base'/>}
              />
            )
          }}
        />
        <div className='flex flex-col gap-1 tablet:gap-2'>
          <p className='font-medium text-sm tablet:text:base text-blue-dark leading-3.5 tablet:leading-4'>{title}</p>
          <p className='text-xs tablet:text-sm text-grey-medium leading-3 tablet:leading-3.5'>{description}</p>
        </div>
      </div>
      <Price
        price={price}
        color='purple'
        textSize='small'
        isPlusSign={true}
      />
    </motion.label>
  )
}
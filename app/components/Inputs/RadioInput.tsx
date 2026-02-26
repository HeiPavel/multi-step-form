'use client'

import { useFormContext } from 'react-hook-form'
import { Price } from './Price'
import { ProfitMessage } from './ProfitMessage'
import { motion } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { UserData } from '@/app/util/schema'
import { ReactComponentType } from '../Types/Common'
import { twJoin } from 'tailwind-merge'

export type RadioInputProps = {
  value: UserData['plan']
  price: number
  Icon: ReactComponentType
}

export function RadioInput({value, price, Icon}: RadioInputProps) {
  const {register} = useFormContext<UserData>()

  return (
    <motion.label
      htmlFor={value}
      className={twJoin(
        'px-4 pt-4 pb-4 tablet:pb-7',
        'h-19 tablet:w-34 tablet:h-42 rounded-lg',
        'flex tablet:flex-col tablet:justify-between max-tablet:items-center max-tablet:gap-4',
        'bg-white',
        'border border-grey-light hover:border-blue-dark hover:drop-shadow-xl/15',
        'has-checked:bg-white-blue-medium has-checked:border-blue-dark',
        'has-checked:drop-shadow-lg/25 tablet:has-checked:drop-shadow-xl/30',
        'transition-[background-color,border-color,filter] will-change-[filter,transform] duration-300 ease-in-out',
        'cursor-pointer'
      )}
      variants={fadeVariants}
    >
      <input
        id={value}
        type='radio'
        {...register('plan')}
        value={value}
        className='hidden'
      />
      <Icon className='size-10'/>
      <div className='flex flex-col gap-2'>
        <p className='capitalize font-medium text-blue-dark leading-4'>{value}</p>
        <div className='relative max-tablet:flex max-tablet:items-center gap-1.5'>
          <Price
            price={price}
            color='grey'
            textSize='small'
          />
          <ProfitMessage/>
        </div>
      </div>
    </motion.label>
  )
} 
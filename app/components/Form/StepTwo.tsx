'use client'

import { RadioInput, RadioInputProps } from '../Inputs/RadioInput'
import { SwitchInput } from '../Inputs/SwitchInput'
import { motion } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { planPrice, ServicePriceType } from '@/app/util/schema'
import { ReactComponentType } from '../Types/Common'
import {ReactComponent as ArcadeIcon} from '@/public/assets/icons/icon-arcade.icon.svg'
import {ReactComponent as AdvancedIcon} from '@/public/assets/icons/icon-advanced.icon.svg'
import {ReactComponent as ProIcon} from '@/public/assets/icons/icon-pro.icon.svg'
import { twJoin } from 'tailwind-merge'

export type RadioInputIconsType = {
  [k in keyof ServicePriceType<'plan'>]: ReactComponentType
}

export const radioInputIcons: RadioInputIconsType = {
  arcade: ArcadeIcon,
  advanced: AdvancedIcon,
  pro: ProIcon
}

export const radioInputData: RadioInputProps[] = Object.entries(planPrice).map(([key, value]) => {
  const planServiceKey = key as keyof ServicePriceType<'plan'>

  return {
    value: planServiceKey,
    price: value,
    Icon: radioInputIcons[planServiceKey]
  }
})

export function StepTwo() {
  return (
    <div className='flex tablet:max-laptop:justify-center'>
      <div className='max-tablet:grow'>
        <div
          className={twJoin(
            'mt-6 tablet:mt-11',
            'flex max-tablet:flex-col',
            'gap-3 tablet:gap-4'
          )}
        >
          {
            radioInputData.map((data, index) => (
              <RadioInput
                key={index}
                {...data}
              />
            ))
          }
        </div>
        <motion.div 
          className='mt-6 tablet:mt-9 h-12 flex justify-center items-center bg-white-blue-medium rounded-md'
          variants={fadeVariants}
        >
          <SwitchInput/>
        </motion.div>
      </div>
    </div>
  )
}
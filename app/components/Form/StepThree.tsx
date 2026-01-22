'use client'

import { CheckboxInput, CheckboxInputProps } from '../Inputs/CheckboxInput'
import { addPrice, ServicePriceType } from '@/app/util/schema'

export type CheckboxTextData = {
  [k in keyof ServicePriceType<'add'>]: {
    title: string
    description: string
  }
}

export const checkboxTextData: CheckboxTextData = {
  service: {
    title: 'Online service',
    description: 'Access to multiplayer games'
  },
  storage: {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save'
  },
  profile: {
    title: 'Customizable profile',
    description: 'Custom theme on your profile'
  }
}

export const checkboxInputData: CheckboxInputProps[] = Object.entries(addPrice).map(([key, value]) => {
  const addServiceKey = key as keyof ServicePriceType<'add'>

  return {
    value: addServiceKey,
    price: value,
    ...checkboxTextData[addServiceKey]
  }
})

export function StepThree() {
  return (
    <div className='mt-6 tablet:mt-11 flex flex-col gap-3 tablet:gap-4'>
      {
        checkboxInputData.map((data) => (
          <CheckboxInput
            key={data.value}
            {...data}
          />
        ))
      }
    </div>
  )
}
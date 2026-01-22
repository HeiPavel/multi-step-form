'use client'

import { MouseEvent } from 'react'
import { isAnnuallyFieldName } from './SwitchInput'
import { twJoin } from 'tailwind-merge'

type SwitchLabelProps = {
  text: 'monthly' | 'yearly'
  isActive: boolean
}

export function SwitchLabel({text, isActive}: SwitchLabelProps) {
  const handleClick = (event: MouseEvent) => {
    if (isActive) event.preventDefault()
  }

  return (
    <label
        htmlFor={isAnnuallyFieldName}
        className={twJoin(
          'capitalize font-medium',
          isActive && 'text-blue-dark',
          !isActive && 'text-grey hover:text-blue-dark hover:text-shadow-lg/20 cursor-pointer',
          'transition-all ease-in-out duration-300'
        )}
        onClick={handleClick}
      >
        {text}
    </label>
  )
}
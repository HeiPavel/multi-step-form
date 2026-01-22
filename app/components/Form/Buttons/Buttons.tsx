'use client'

import { memo } from 'react'
import { NextButton } from './NextButton'
import { PrevButton } from './PrevButton'
import { twJoin } from 'tailwind-merge'

export const Buttons = memo(function Buttons() {
  return (
    <div 
      className={twJoin(
        'px-4 tablet:px-6 md:px-10 laptop:px-0 py-5 tablet:py-4',
        'w-full',
        'grid grid-cols-[1fr_auto] items-center',
        'bg-white',
        'text-sm tablet:text-base'
      )}
    >
      <PrevButton/>
      <NextButton/>
    </div>
  )
})
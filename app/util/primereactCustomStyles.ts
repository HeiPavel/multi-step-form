'use client'

import { PrimeReactPTOptions } from 'primereact/api'
import { classNames } from 'primereact/utils'

export const PrimeReactCustomStyles: PrimeReactPTOptions = {
  inputtext: {
    root: (inputtext) => ({
      className: classNames(
        'block w-full pl-4 h-9.5 tablet:h-12 rounded-md tablet:rounded-lg border text-blue-dark font-medium', 
        'placeholder:text-grey-medium placeholder:font-medium',
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-2',
        'input-autofill-bg',
        {
          'border-grey-light hover:border-purple-medium outline-purple-medium focus-visible:outline-purple-medium focus:outline-purple-medium focus:border-purple-medium': !inputtext?.props.invalid,
          'border-red hover:border-red outline-red focus-visible:outline-red focus:outline-red': inputtext?.props.invalid,
        }
      )
    })
  },
  inputswitch: {
    root: {
      className: 'inline-block relative w-10 h-5'
    },
    input: {
      className: classNames(
        'size-full top-0 left-0 p-0 m-0',
        'absolute appearance-none opacity-0 z-10 outline-none cursor-pointer',
        'transition-colors duration-300 ease-in-out'
      )
    },
    slider: (inputswitch) => ({
      className: classNames(
        'absolute inset-0',
        'border border-transparent',
        'rounded-2xl',
        'cursor-pointer',
        'focus:outline-none focus:outline-offset-0',
        "before:absolute before:content-'' before:top-1/2 before:bg-white",
        'before:size-3 before:left-1 before:-mt-1.5 before:rounded-full',
        'before:transition-transform before:duration-300 before:ease-in-out bg-blue-dark before:origin-left',
        {
          'before:transform before:translate-x-4.5': inputswitch?.props.checked
        }
      )
    })
  },
  checkbox: {
    root: {
      className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'size-5')
    },
    input: {
      className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
    },
    box: (checkbox) => ({
      className: classNames(
        'flex items-center justify-center',
        'border size-5 rounded-sm transition-colors duration-200',
        {
          'border-grey-light bg-white': !checkbox?.context.checked,
          'border-purple-dark bg-blue-bright': checkbox?.context.checked
        }
      )
    })
  }
}
import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

export type FieldsetProps = {
  legend: string
  description: string
  children: ReactNode
}

export function Fieldset({legend, description, children}: FieldsetProps) {
  return (
    <fieldset>
      <legend 
        className={twJoin(
          'text-2xl tablet:text-3xl',
          'leading-6 tablet:leading-7.5',
          'font-bold text-blue-dark'
        )}
      >
        {legend}
      </legend>
      <p className='mt-3 tablet:mt-4 tablet:leading-4 text-grey-medium'>{description}</p>
      {children}
    </fieldset>
  )
}
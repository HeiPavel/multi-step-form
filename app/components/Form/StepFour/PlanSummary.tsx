'use client'

import { useContext } from 'react'
import { StepContext } from '../../Context/CurrentStepContext'
import { Price } from '../../Inputs/Price'
import { fieldsByStep, UserData } from '@/app/util/schema'
import { twJoin } from 'tailwind-merge'

type PlanSummaryProps = {
  plan: UserData['plan']
  price: number
  isAnnually: boolean
}

const indexOfStepWithPlan = fieldsByStep.findIndex(fields => fields.includes('plan'))

export function PlanSummary({plan, price, isAnnually}: PlanSummaryProps) {
  const {setCurrentStep} = useContext(StepContext)

  return (
    <div className='flex justify-between items-center'>
      <div>
        <p className={twJoin(
          'font-medium',
          'text-blue-dark text-sm leading-3.5 tablet:text-base tablet:leading-4',
          'capitalize'
        )}>
          {`${plan} (${isAnnually ? 'Yearly' : 'Monthly'})`}
        </p>
        <button
          className={twJoin(
            'block mt-1.5',
            'text-sm text-grey leading-3.5',
            'underline underline-offset-1 decoration-grey decoration-2',
            'hover:text-purple-light hover:decoration-purple-light hover:text-shadow-lg/15',
            'transition-all ease-in-out duration-300',
            'cursor-pointer'
          )}
          type='button'
          onClick={() => setCurrentStep(indexOfStepWithPlan)}
        >
          Change
        </button>
      </div>
      <Price
        price={price}
        textSize='base'
        color='blue'
        isBold={true}
      />
    </div>
  )
}
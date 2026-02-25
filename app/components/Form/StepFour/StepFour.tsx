'use client'

import { useFormFieldValue } from '@/app/hooks/useFormFieldValue'
import { PlanSummary } from './PlanSummary'
import { AddOnsSummary } from './AddOnsSummary'
import { Price } from '../../Inputs/Price'
import { motion } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { planPrice, addPrice } from '@/app/util/schema'
import { twJoin } from 'tailwind-merge'

export function StepFour() {
  const [isAnnually, plan, addOns] = useFormFieldValue(['isAnnually', 'plan', 'add'])

  const planCost = planPrice[plan]
  const addOnsCost = addOns.reduce((sum, service) => sum += addPrice[service], 0)
  const totalCost = planCost + addOnsCost

  return (
    <div className='mt-6 tablet:mt-11'>
      <motion.div 
        className={twJoin(
          'max-tablet:px-4 max-tablet:py-5 tablet:p-6',
          'bg-white-blue-medium rounded-md'
        )}
        variants={fadeVariants}
      >
        <PlanSummary
          plan={plan}
          price={planCost}
          isAnnually={isAnnually}
        />
        {addOns.length > 0 && <AddOnsSummary addOns={addOns}/>}
      </motion.div>
      <motion.div 
        className={twJoin(
          'px-4 pt-7 tablet:px-6',
          'flex justify-between items-center'
        )}
        variants={fadeVariants}
      >
        <p className='text-grey text-sm leading-3.5 tablet:text-base tablet:leading-4'>
          {`Total (per ${isAnnually ? 'year': 'month'})`}
        </p>
        <Price
          price={totalCost}
          color='purple'
          textSize='large'
          isBold={true}
          isPlusSign={true}
        />
      </motion.div>
    </div>
  )
}
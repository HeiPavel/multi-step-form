import { ReactNode } from 'react'
import { motion, stagger, Variants } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import { twJoin } from 'tailwind-merge'

export type FieldsetProps = {
  legend: string
  description: string
  children: ReactNode
}

const fieldsetVariants: Variants = {
  hidden: {},
  enter: {
    transition: {delayChildren: stagger(0.07, {startDelay: 0.2})}
  }
}

export function Fieldset({legend, description, children}: FieldsetProps) {
  return (
    <motion.fieldset
      initial='hidden'
      animate='enter'
      variants={fieldsetVariants}
    >
      <motion.legend 
        className={twJoin(
          'text-2xl tablet:text-3xl',
          'leading-6 tablet:leading-7.5',
          'font-bold text-blue-dark'
        )}
        variants={fadeVariants}
      >
        {legend}
      </motion.legend>
      <motion.p 
        className='mt-3 tablet:mt-4 tablet:leading-4 text-grey-medium'
        variants={fadeVariants}
      >
        {description}
      </motion.p>
      {children}
    </motion.fieldset>
  )
}
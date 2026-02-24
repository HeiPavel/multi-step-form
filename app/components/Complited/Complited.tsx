import { motion, stagger, Variants } from 'motion/react'
import { fadeVariants } from '@/app/util/motionVariants'
import {ReactComponent as ThanksIcon} from '@/public/assets/icons/icon-thank-you.icon.svg'
import { twJoin } from 'tailwind-merge'

const containerVariants: Variants = {
    hidden: {
      flexBasis: '300px'
    },
    enter: {
      flexBasis: '400px',
      transition: {
        duration: 0.5,
        flexBasis: {
          stiffness: 100
        },
        ease: 'easeInOut',
        delayChildren: stagger(0.07, {startDelay: 0.2})
      }
    }
  }

export function Complited() {
  return (
    <div className={twJoin(
      'max-tablet:px-4',
      'laptop:w-113 max-laptop:grow',
      'relative -top-18 sm:-top-26 tablet:-top-32 md:-top-40 laptop:top-0',
      'flex flex-col items-center'
    )}>
      <motion.div 
        className={twJoin(
          'laptop:grow w-full max-w-150',
          'rounded-lg',
          'bg-white',
          'flex flex-col justify-center items-center',
          'max-laptop:shadow-xl'
        )}
        variants={containerVariants}
        initial='hidden'
        animate='enter'
        layout
      >
        <motion.div variants={fadeVariants}>
          <ThanksIcon className='size-14 tablet:size-20'/>
        </motion.div>
        <motion.p 
          className={twJoin(
            'mt-6 tablet:mt-8',
            'text-2xl leading-6 tablet:text-3xl tablet:leading-7.5 text-blue-dark',
            'font-bold'
          )}
          variants={fadeVariants}
        >
          Thank you!
        </motion.p>
        <motion.p 
          className={twJoin(
            'mt-4 tablet:mt-7 max-laptop:px-6',
            'text-grey text-center'
          )}
          variants={fadeVariants}
        >
          Thanks for confirming your subscription! We hope you have fun using our platform. 
          If you ever need support, please feel free to email us at support@loremgaming.com.
        </motion.p>
      </motion.div>
    </div>
  )
}
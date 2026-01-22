'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useMounted } from '@/app/hooks/useMounted'
import { useFormFieldValue } from '@/app/hooks/useFormFieldValue'

export function ProfitMessage() {
  const isMounted = useMounted()
  const [isAnnually] = useFormFieldValue(['isAnnually'])
  
  return (
    <AnimatePresence>
      {
        isAnnually && 
          <motion.div 
            key='yearly profit'
            initial={{opacity: isMounted ? 0 : 1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className='tablet:absolute tablet:mt-1.5'
          >
            <p className='text-xs leading-3 text-blue-dark'>2 months free</p>
          </motion.div>
      }
    </AnimatePresence>
  )
}
import { Variants } from 'motion'

export const fadeVariants: Variants = {
  hidden: {
    y: -50,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100}
    }
  }
}
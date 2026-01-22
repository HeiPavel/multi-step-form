'use client'

import { useFormFieldValue } from '@/app/hooks/useFormFieldValue'
import { twJoin } from 'tailwind-merge'

type ColorType = 'grey' | 'purple' | 'blue' | 'black'

type TextSizeType = 'small' | 'base' | 'large'

type PriceProps = {
  price: number
  isPlusSign?: boolean
  isBold?: boolean
  textSize: TextSizeType
  color: ColorType
}

type PickType<T extends string> = {
  [K in T]: string
}

type ColorPickType = PickType<ColorType>

type TextSizePickType = PickType<TextSizeType>

const colorPick: ColorPickType = {
  grey: 'text-grey-medium',
  purple: 'text-purple-dark',
  black: 'text-black',
  blue: 'text-blue-dark'
}

const textSizePick: TextSizePickType = {
  small: 'text-xs leading-3 tablet:text-sm tablet:leading-3.5',
  base: 'text-sm leading-3.5 tablet:text-base tablet:leading-4',
  large: 'text-base leading-4 tablet:text-lg tablet:leading-4.5'
}

export function Price({price, isPlusSign, isBold, textSize, color}: PriceProps) {
  const [isAnnually] = useFormFieldValue(['isAnnually'])
  const totalPrice = price * (isAnnually ? 10 : 1)
  const subscriptionPeriod = isAnnually ? 'yr' : 'mo'

  return (
    <p
      className={twJoin(
        isBold && 'font-bold',
        `${textSizePick[textSize]}`,
        `${colorPick[color]}`
      )}
    >
      {`${isPlusSign ? '+' : ''}$${totalPrice}/${subscriptionPeriod}`}
    </p>
  )
}
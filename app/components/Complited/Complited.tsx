import {ReactComponent as ThanksIcon} from '@/public/assets/icons/icon-thank-you.icon.svg'
import { twJoin } from 'tailwind-merge'

export function Complited() {
  return (
    <div className={twJoin(
      'max-tablet:px-4',
      'laptop:w-113 max-laptop:grow',
      'relative -top-18 sm:-top-26 tablet:-top-32 md:-top-40 laptop:top-0',
      'flex flex-col items-center'
    )}>
      <div className={twJoin(
        'grow w-full max-w-150 max-laptop:max-h-100',
        'rounded-lg',
        'bg-white',
        'flex flex-col justify-center items-center',
        'max-laptop:shadow-xl'
      )}>
        <ThanksIcon className='size-14 tablet:size-20'/>
        <p className={twJoin(
          'mt-6 tablet:mt-8',
          'text-2xl leading-6 tablet:text-3xl tablet:leading-7.5 text-blue-dark',
          'font-bold'
        )}>
          Thank you!
        </p>
        <p className={twJoin(
          'mt-4 tablet:mt-7 max-laptop:px-6',
          'text-grey text-center'
        )}>
          Thanks for confirming your subscription! We hope you have fun using our platform. 
          If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}
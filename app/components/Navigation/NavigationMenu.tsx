import Image from 'next/image'
import { NavigationButton } from './NavigationButton'
import menuBgDesktop from '@/public/assets/icons/bg-sidebar-desktop.svg'
import menuBgMobile from '@/public/assets/icons/bg-sidebar-mobile.svg'

const stepDescription = [
  'your info',
  'select plan',
  'add-ons',
  'summary'
]

export function NavigationMenu() {
  return (
    <div className='relative max-laptop:aspect-375/172 laptop:w-68 laptop:h-full laptop:py-10 laptop:px-8 laptop:rounded-xl overflow-hidden'>
      <Image
        src={menuBgDesktop}
        alt='Desktop menu background image'
        className='hidden laptop:block object-cover z-0'
        fill
      />
      <Image
        src={menuBgMobile}
        alt='Mobile menu background image'
        className='laptop:hidden object-cover z-0'
        fill
      />
      <div className='mt-8 sm:mt-12 tablet:mt-16 md:mt-20 laptop:mt-0 flex max-laptop:justify-center laptop:flex-col gap-4 tablet:gap-8'>
        {stepDescription.map((description, index) => (
          <NavigationButton
            key={index}
            stepIndex={index}
            description={description}
          />
        ))}
      </div>
    </div>
  )
}
import { NavigationMenu } from './components/Navigation/NavigationMenu'

export default function Home() {
  return (
    <main className='laptop:py-10 desktop:py-6 min-h-screen laptop:flex laptop:justify-center desktop:items-center bg-white-blue font-ubuntu'>
      <div className='relative laptop:p-4 h-screen laptop:w-235 laptop:h-150 laptop:flex laptop:gap-25 laptop:rounded-2xl laptop:bg-white laptop:shadow-xl desktop:shadow-2xl'>
        <NavigationMenu/>
        <div className='relative -top-18 sm:-top-26 tablet:-top-32 md:-top-40 laptop:top-0 px-4 laptop:w-113 h-full'>
          <div className='bg-blue rounded-xl h-full'></div>
        </div>
      </div>
    </main>
  )
}
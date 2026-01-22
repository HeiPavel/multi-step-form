import { NavigationMenu } from './components/Navigation/NavigationMenu'
import { MainContent } from './components/MainContent/MainContent'
import { twJoin } from 'tailwind-merge'

export default function Home() {
  return (
    <main
      className={twJoin(
        'relative laptop:p-4 laptop:w-235 max-laptop:min-h-screen laptop:h-150',
        'flex max-laptop:flex-col laptop:gap-25',
        'laptop:rounded-2xl laptop:bg-white laptop:shadow-xl desktop:shadow-2xl'
      )}
    >
      <NavigationMenu/>
      <MainContent/>
    </main>
  )
}
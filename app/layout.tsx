import { MultiStepSateContext } from './components/Context/StepStateContext'
import { CurrentStepContext } from './components/Context/CurrentStepContext'
import {PrimeReactProvider} from 'primereact/api'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import { PrimeReactCustomStyles } from './util/primereactCustomStyles'
import { twJoin } from 'tailwind-merge'
import './globals.css'

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Multi Step Form',
  description: 'Multi step form',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={twJoin(
          `${ubuntu.variable} antialiased`,
          'laptop:py-10 desktop:py-6',
          'min-h-screen',
          'laptop:flex laptop:justify-center desktop:items-center',
          'bg-white-blue font-ubuntu'
        )}
      >
        <MultiStepSateContext>
          <CurrentStepContext>
            <PrimeReactProvider value={{unstyled: true, pt: PrimeReactCustomStyles}}>
              {children}
            </PrimeReactProvider>
          </CurrentStepContext>
        </MultiStepSateContext>
      </body>
    </html>
  )
}

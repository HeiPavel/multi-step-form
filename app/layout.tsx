import { MultiStepSateContext } from './components/Context/StepStateContext'
import { CurrentStepContext } from './components/Context/CurrentStepContext'
import {PrimeReactProvider} from 'primereact/api'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
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
        className={`${ubuntu.variable} antialiased`}
      >
        <MultiStepSateContext>
          <CurrentStepContext>
            <PrimeReactProvider value={{unstyled: true, pt: {}}}>
              {children}
            </PrimeReactProvider>
          </CurrentStepContext>
        </MultiStepSateContext>
      </body>
    </html>
  )
}

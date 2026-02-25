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

const project_url = process.env.VERCEL_ENV === 'production' ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) : process.env.VERCEL_ENV === 'preview' ? new URL(`https://${process.env.VERCEL_BRANCH_URL}`) : new URL('http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: project_url,
  title: 'Multi Step Form',
  description: 'Multi step form',
  twitter: {
    card: 'summary_large_image'
  }
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

import { MultiStepSateContext } from './components/Context/StepStateContext'
import { CurrentStepContext } from './components/Context/CurrentStepContext'
import {PrimeReactProvider} from 'primereact/api'
import { getBaseUrl } from './util/getBaseUrl'
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

const project_url = new URL(getBaseUrl())

export const metadata: Metadata = {
  metadataBase: project_url,
  title: 'Multi Step Form',
  description: 'Multi-step form for entering personal details, selecting a plan, and choosing additional options with a smooth step-by-step experience.',
  twitter: {
    card: 'summary_large_image'
  },
  alternates: {
    canonical: project_url
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

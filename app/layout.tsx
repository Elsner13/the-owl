import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Fraunces, Jost } from 'next/font/google'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})
const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://thesamelsner.com'),
  title: {
    default: "Sam Elsner | See What's Already There",
    template: "%s | See What's Already There",
  },
  description:
    'An 8-week perceptual calibration cohort. The information you need to change your life is already in your environment. You just have not been taught to read it. Starts July 6. 20 spots.',
  openGraph: {
    title: 'The Educated Eye',
    description:
      "You don't have an effort problem. You have a seeing problem.",
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${fraunces.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Poppins, Roboto_Mono } from 'next/font/google'
import '../../globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  adjustFontFallback: false,
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-robotomono',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Booking Summary',
  description: 'Booking Summary by Black Owl',
}

export default function BookingSummaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}

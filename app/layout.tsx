import type { Metadata } from 'next'
import { Poppins, Roboto_Mono } from 'next/font/google'
import './globals.css'

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
  title: {
    template: 'Black Owl | %s',
    default: 'Black Owl',
  },
  description: 'Small House Base IT Industry',
  keywords: ['Black Owl', 'black owl', 'BlackOwl', 'blackowl'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}

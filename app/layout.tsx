import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'LMFIT Private | Executive Health & Performance Coaching for Women | London',
  description:
    'Private, fully personalised health and performance coaching for high-achieving women in London. Hormone and biomarker testing, a specialist team, and 1-to-1 coaching with Liz Marsland, BSc Sports Science, 20+ years experience.',
  openGraph: {
    title: 'LMFIT Private | Health & Performance Coaching for Women',
    description:
      'Private, fully personalised health and performance coaching for high-achieving women in London.',
    images: ['/images/liz-portrait.jpg'],
    locale: 'en_GB',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#060d1f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${poppins.variable} bg-background`}>
      <body className="bg-background font-sans font-light leading-relaxed text-foreground">
        {children}
      </body>
    </html>
  )
}

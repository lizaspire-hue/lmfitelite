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

const seoDescription =
  'Private health and performance coaching for women in leadership in London. Build strength, power, calm, focus and resilience with hormone and biomarker testing, a specialist team, and 1-to-1 coaching with Liz Marsland, BSc Sports Science, 20+ years experience.'

const siteUrl = 'https://www.lmfitelitecoaching.space'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  title: 'LMFIT Private | Leadership Performance, Strength & Resilience Coaching for Women | London',
  description: seoDescription,
  keywords: [
    'leadership',
    'executive performance coaching',
    'women in leadership',
    'power',
    'strength training for women',
    'calm',
    'focus',
    'performance',
    'resilience',
    'executive health coaching London',
    'high-performance coaching for women',
    'stress resilience',
    'mental focus and clarity',
    'hormone and biomarker testing',
    'private personal training London',
    'LMFIT Private',
    'Liz Marsland',
  ],
  authors: [{ name: 'Liz Marsland' }],
  creator: 'LMFIT Private',
  category: 'Health & Fitness',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'LMFIT Private | Leadership, Strength & Resilience Coaching for Women',
    description:
      'Lead with power, calm and focus. Private health and performance coaching for high-achieving women in London.',
    siteName: 'LMFIT Private',
    url: siteUrl,
    images: ['/images/liz-portrait.jpg'],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LMFIT Private | Leadership, Strength & Resilience Coaching for Women',
    description:
      'Lead with power, calm and focus. Private health and performance coaching for high-achieving women in London.',
    images: ['/images/liz-portrait.jpg'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'LMFIT Private',
  url: siteUrl,
  image: `${siteUrl}/images/liz-portrait.jpg`,
  description: seoDescription,
  areaServed: 'London, United Kingdom',
  founder: { '@type': 'Person', name: 'Liz Marsland', jobTitle: 'Health & Performance Coach' },
  knowsAbout: ['Leadership', 'Power', 'Strength', 'Calm', 'Focus', 'Performance', 'Resilience'],
}

export const viewport: Viewport = {
  themeColor: '#060d1f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${poppins.variable} bg-background`}>
      <body className="bg-background font-sans font-light leading-relaxed text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}

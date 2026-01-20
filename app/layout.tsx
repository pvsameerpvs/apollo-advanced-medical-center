import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'
import { site } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { cn } from '@/lib/utils'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Apollo Advanced Medical Center | Medical, Dental & Aesthetic Clinic in Deira, Dubai',
    template: '%s | Apollo Advanced Medical Center',
  },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    title: 'Apollo Advanced Medical Center',
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: '/appolo-logo.png',
        width: 1200,
        height: 630,
        alt: 'Apollo Advanced Medical Center Logo',
      },
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/images/fevic.png' }],
    apple: [{ url: '/images/fevic.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: site.name,
    url: site.url,
    telephone: site.contact.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
      streetAddress: site.address.street,
    },
    areaServed: 'Deira, Dubai, UAE',
    sameAs: [site.instagram.url],
  }

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-white font-sans antialiased', fontSans.variable, fontHeading.variable)}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        <Script
          id="schema-medicalclinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </body>
    </html>
  )
}

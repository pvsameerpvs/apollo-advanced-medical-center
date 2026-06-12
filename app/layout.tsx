import type { Metadata } from 'next'
import { Inter, Outfit, Oswald } from 'next/font/google'

import './globals.css'
import { site } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { cn } from '@/lib/utils'

const fontSans = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-sans',
})

const fontHeading = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
})

const fontOswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-oswald',
})

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...(googleVerification
    ? {
        other: {
          'google-site-verification': googleVerification,
        },
      }
    : {}),
  title: {
    default: 'Apollo Advanced Medical Center | Medical, Dental & Aesthetic Clinic in Al Rigga, Union Dubai',
    template: '%s | Apollo AMC',
  },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: site.url,
    title: 'Apollo Advanced Medical Center',
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: '/images/apollo-medical-center-al-rigga-dubai.webp',
        width: 1829,
        height: 900,
        alt: 'Apollo Advanced Medical Center in Al Rigga, Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo Advanced Medical Center',
    description: site.description,
    images: ['/images/apollo-medical-center-al-rigga-dubai.webp'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/images/apollo-advanced-medical-center-favicon.png' }],
    apple: [{ url: '/images/apollo-advanced-medical-center-favicon.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${site.url}/#medical-clinic`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phoneE164,
    email: site.contact.email,
    image: `${site.url}/images/apollo-advanced-medical-center-logo.png`,
    logo: `${site.url}/images/apollo-advanced-medical-center-logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2717,
      longitude: 55.3072,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '23:00',
      },
    ],
    areaServed: [
      { '@type': 'Place', name: 'Al Rigga' },
      { '@type': 'Place', name: 'Union' },
      { '@type': 'City', name: 'Deira' },
      { '@type': 'City', name: 'Dubai' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical & Aesthetic Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laser Hair Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aesthetic & Beauty Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facial & Skin Care' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Slimming & Body Contouring' } },
      ],
    },
    sameAs: [
      site.instagram.url,
      site.facebook.url,
      site.linkedin.url,
    ],
  }

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-white font-sans antialiased', fontSans.variable, fontHeading.variable, fontOswald.variable)}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />

        <script
          id="schema-medicalclinic"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </body>
    </html>
  )
}

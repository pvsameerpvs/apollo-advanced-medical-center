import type { Metadata } from 'next'

import { Hero } from '@/components/sections/hero'
import { ServiceCards } from '@/components/sections/service-cards'
import { DoctorCards } from '@/components/sections/doctor-cards'
import { InstagramGrid } from '@/components/sections/instagram-grid'
import { CtaBand } from '@/components/sections/cta-band'

const homeTitle = 'Medical Center in Al Rigga, Union Dubai | Apollo Advanced Medical Center'
const homeDescription =
  'Apollo Advanced Medical Center in Al Rigga, Union Dubai offers dental care, aesthetics, laser hair removal, facials, skin care, slimming and DHA-licensed doctors. Book today.'

export const metadata: Metadata = {
  title: {
    absolute: homeTitle,
  },
  description: homeDescription,
  alternates: { canonical: '/' },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: '/',
  },
  twitter: {
    title: homeTitle,
    description: homeDescription,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <DoctorCards />
      <InstagramGrid />
      <CtaBand />
    </>
  )
}

import type { Metadata } from 'next'

import { Hero } from '@/components/sections/hero'
import { ServiceCards } from '@/components/sections/service-cards'
import { DoctorCards } from '@/components/sections/doctor-cards'
import { InstagramGrid } from '@/components/sections/instagram-grid'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Medical, Dental & Aesthetic Clinic in Deira, Dubai',
  description:
    'Apollo Advanced Medical Center in Deira, Dubai offers trusted medical, dental and aesthetic services with DHA-licensed doctors. Book an appointment today.',
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

import type { Metadata } from 'next'
import Image from 'next/image'

import { AppointmentForm } from '@/components/sections/appointment-form'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Book Appointment | Apollo Advanced Medical Center - Deira, Dubai',
  description:
    'Book an appointment at Apollo Advanced Medical Center in Deira, Dubai. Choose your service and DHA-licensed doctor/therapist. Quick confirmation by phone or WhatsApp.',
}

export default function AppointmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/about-hero.png"
          alt="Apollo Medical Center Clinic"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Book Your Appointment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
             Take the first step towards your health and confidence goals. Our expert team is ready to welcome you.
          </p>
        </div>
      </section>

      <section className="bg-ui-bg py-20">
        <div className="container">
          <AppointmentForm />
        </div>
      </section>

      <CtaBand />
    </>
  )
}

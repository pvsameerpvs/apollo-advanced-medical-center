import Image from 'next/image'

import { AppointmentForm } from '@/components/sections/appointment-form'
import { CtaBand } from '@/components/sections/cta-band'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Book an Appointment in Al Rigga, Dubai',
  description:
    'Book an appointment at Apollo Advanced Medical Center in Al Rigga, Union Dubai. Choose your service and DHA-licensed doctor/therapist. Quick confirmation by phone or WhatsApp.',
  path: '/appointment',
  image: '/images/apollo-medical-center-about-dubai.webp',
})

export default function AppointmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/apollo-medical-center-about-dubai.webp"
          alt="Apollo Advanced Medical Center clinic reception for appointment booking in Al Rigga, Union Dubai"
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

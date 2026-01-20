import type { Metadata } from 'next'

import { AppointmentForm } from '@/components/sections/appointment-form'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Book Appointment | Apollo Advanced Medical Center - Deira, Dubai',
  description:
    'Book an appointment at Apollo Advanced Medical Center in Deira, Dubai. Choose your service and DHA-licensed doctor/therapist. Quick confirmation by phone or WhatsApp.',
}

export default function AppointmentPage() {
  return (
    <main className="bg-ui-bg">
      <section className="border-b border-ui-border bg-white">
        <div className="container py-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-brand-green sm:text-4xl">
            Appointment Booking
          </h1>
          <p className="mt-3 max-w-3xl text-ui-text">
            Trusted medical, dental & aesthetic care in Deira, Dubai. Choose your service and preferred clinician — our
            team will confirm quickly.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <AppointmentForm />
      </section>

      <CtaBand />
    </main>
  )
}

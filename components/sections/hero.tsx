import Link from 'next/link'
import { Calendar, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-orangeSoft px-4 py-2 text-sm font-medium text-brand-green">
              <ShieldCheck className="h-4 w-4 text-brand-orange" />
              DHA-licensed doctors & therapists
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">
              Your Health & Beauty, In Expert Hands
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ui-text/80 md:text-lg">
              Trusted medical, dental & aesthetic care in Deira, Dubai. Personalized treatment plans, modern equipment, and transparent pricing.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/appointment" className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-ui-border bg-ui-bg p-4">
                <p className="font-semibold text-brand-green">Free Consultation</p>
                <p className="mt-1 text-ui-text/75">Discuss goals and options before you commit.</p>
              </div>
              <div className="rounded-2xl border border-ui-border bg-ui-bg p-4">
                <p className="font-semibold text-brand-green">Modern Equipment</p>
                <p className="mt-1 text-ui-text/75">Medical-grade technology for safe outcomes.</p>
              </div>
              <div className="rounded-2xl border border-ui-border bg-ui-bg p-4">
                <p className="font-semibold text-brand-green">Affordable Packages</p>
                <p className="mt-1 text-ui-text/75">Clear pricing and value-driven bundles.</p>
              </div>
              <div className="rounded-2xl border border-ui-border bg-ui-bg p-4">
                <p className="font-semibold text-brand-green">Patient Safety First</p>
                <p className="mt-1 text-ui-text/75">Hygiene, protocols, and comfort built in.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-ui-border bg-brand-orangeSoft p-6 shadow-soft">
              <div className="rounded-2xl bg-white p-6">
                <p className="text-sm font-semibold text-brand-green">Quick Booking</p>
                <p className="mt-2 text-sm text-ui-text/80">
                  Choose your service and preferred doctor. We will confirm your appointment by phone/WhatsApp.
                </p>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-ui-border bg-ui-bg p-4">
                    <p className="text-sm font-medium text-ui-text">Dental</p>
                    <p className="mt-1 text-xs text-ui-text/70">Whitening, scaling, root canal, veneers</p>
                  </div>
                  <div className="rounded-xl border border-ui-border bg-ui-bg p-4">
                    <p className="text-sm font-medium text-ui-text">Aesthetic & Beauty</p>
                    <p className="mt-1 text-xs text-ui-text/70">Laser hair removal, hydrafacial, BB glow</p>
                  </div>
                  <div className="rounded-xl border border-ui-border bg-ui-bg p-4">
                    <p className="text-sm font-medium text-ui-text">Facial & Skin Care</p>
                    <p className="mt-1 text-xs text-ui-text/70">Deep cleansing, glow facials, skin rejuvenation</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild variant="green" className="w-full">
                    <Link href="/appointment">Start Booking</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

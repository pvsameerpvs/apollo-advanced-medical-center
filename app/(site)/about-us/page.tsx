import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Stethoscope, Sparkles } from 'lucide-react'

import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Apollo Advanced Medical Center — a trusted medical center in Deira Dubai focused on patient safety, personalized care and advanced technology.',
  alternates: { canonical: '/about-us' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold text-brand-orange">Medical Center in Deira Dubai</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">About Apollo Advanced Medical Center</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ui-text/80 md:text-lg">
            Apollo Advanced Medical Center is a UAE-based medical, dental & aesthetic clinic in Deira, Dubai. We combine
            DHA-licensed expertise with modern equipment and calm, premium care environments — so every patient feels
            safe, understood, and confident in their treatment plan.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orangeSoft">
                <ShieldCheck className="h-5 w-5 text-brand-orange" />
              </div>
              <p className="mt-4 text-lg font-semibold text-brand-green">Patient Safety First</p>
              <p className="mt-2 text-sm text-ui-text/80">
                Sterilization, hygiene, and clinical protocols are built into every step — from consultation to aftercare.
              </p>
            </div>
            <div className="rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orangeSoft">
                <Stethoscope className="h-5 w-5 text-brand-orange" />
              </div>
              <p className="mt-4 text-lg font-semibold text-brand-green">Personalized Treatment</p>
              <p className="mt-2 text-sm text-ui-text/80">
                We listen first, assess carefully, and then recommend options that fit your goals, timeline, and comfort.
              </p>
            </div>
            <div className="rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orangeSoft">
                <Sparkles className="h-5 w-5 text-brand-orange" />
              </div>
              <p className="mt-4 text-lg font-semibold text-brand-green">Advanced Technology</p>
              <p className="mt-2 text-sm text-ui-text/80">
                Modern equipment supports accurate diagnosis, comfortable procedures, and consistent, high-quality outcomes.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-green">What you can expect</h2>
              <ul className="mt-4 grid gap-3 text-sm text-ui-text/80">
                <li className="rounded-xl bg-white px-4 py-3">Clear consultation with realistic outcomes and safety guidance.</li>
                <li className="rounded-xl bg-white px-4 py-3">DHA-licensed doctors & therapists — with respectful, judgment-free care.</li>
                <li className="rounded-xl bg-white px-4 py-3">Transparent pricing, package options, and easy scheduling.</li>
                <li className="rounded-xl bg-white px-4 py-3">Aftercare instructions designed to protect your results.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-ui-border bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-brand-green">Our focus areas</h2>
              <p className="mt-3 text-sm text-ui-text/80">
                We provide carefully-selected treatments across dental care and aesthetic services. Whether your goal is oral health,
                smoother skin, a glowing complexion, or body contouring support — our team guides you with safe, medical-grade standards.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { title: 'Dental Services', href: '/services/dental-services' },
                  { title: 'Aesthetic & Beauty', href: '/services/aesthetic-beauty-services' },
                  { title: 'Laser Hair Removal', href: '/services/laser-hair-removal' },
                  { title: 'Facial & Skin Care', href: '/services/facial-skin-care' },
                ].map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="rounded-2xl border border-ui-border bg-ui-bg px-4 py-4 text-sm font-medium text-ui-text hover:bg-brand-orangeSoft"
                  >
                    {i.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

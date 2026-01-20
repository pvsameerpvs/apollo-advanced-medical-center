import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck } from 'lucide-react'

import { doctors } from '@/lib/doctors'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Doctors & Therapists',
  description:
    'Meet DHA-licensed doctors & therapists at Apollo Advanced Medical Center in Deira, Dubai. View profiles and book an appointment.',
  alternates: { canonical: '/doctors' },
}

export default function DoctorsPage() {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <h1 className="text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">Doctors & Therapists</h1>
          <p className="mt-4 max-w-3xl text-base text-ui-text/80 md:text-lg">
            Every profile highlights expertise, DHA licensing, and the services offered — so patients can book with confidence.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <Link
                key={d.slug}
                href={`/doctors/${d.slug}`}
                className="rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <p className="text-lg font-semibold text-brand-green">{d.name}</p>
                <p className="mt-1 text-sm text-ui-text/80">{d.role}</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-ui-text">
                  <BadgeCheck className="h-4 w-4 text-brand-orange" />
                  {d.dha}
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-ui-text/75">
                  {d.services.slice(0, 3).map((s) => (
                    <li key={s} className="rounded-xl bg-white px-3 py-2">{s}</li>
                  ))}
                </ul>
                <div className="mt-5 text-sm font-medium text-brand-orange">View Profile</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

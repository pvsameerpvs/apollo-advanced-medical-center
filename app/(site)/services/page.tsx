import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { serviceCategories } from '@/lib/services'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore dental and aesthetic services at Apollo Advanced Medical Center in Deira, Dubai. Book an appointment with DHA-licensed doctors & therapists.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <h1 className="text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">Services</h1>
          <p className="mt-4 max-w-3xl text-base text-ui-text/80 md:text-lg">
            Clear options, medical-grade protocols, and conversion-focused booking. Choose a category to view benefits, the treatment process, and who it&apos;s for.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-brand-green">{cat.title}</p>
                    <p className="mt-2 text-sm text-ui-text/80">{cat.description}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <ChevronRight className="h-5 w-5 text-brand-orange transition group-hover:translate-x-0.5" />
                  </span>
                </div>

                <ul className="mt-5 grid gap-2 text-sm text-ui-text/75 sm:grid-cols-2">
                  {cat.items.slice(0, 8).map((i) => (
                    <li key={i} className="rounded-xl bg-white px-3 py-2">
                      {i}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

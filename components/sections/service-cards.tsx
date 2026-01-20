import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { serviceCategories } from '@/lib/services'

export function ServiceCards() {
  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-brand-green md:text-3xl">Services Designed Around Your Goals</h2>
          <p className="mt-2 text-sm text-ui-text/80 md:text-base">
            Dental and aesthetic treatments delivered with medical-grade safety, transparent plans, and results you can trust.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceCategories.slice(0, 4).map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group rounded-2xl border border-ui-border bg-white p-6 shadow-soft transition hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-brand-green">{cat.title}</p>
                  <p className="mt-2 text-sm text-ui-text/80">{cat.description}</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orangeSoft">
                  <ChevronRight className="h-5 w-5 text-brand-orange transition group-hover:translate-x-0.5" />
                </span>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-ui-text/75 sm:grid-cols-2">
                {cat.items.slice(0, 6).map((i) => (
                  <li key={i} className="rounded-xl bg-ui-bg px-3 py-2">
                    {i}
                  </li>
                ))}
              </ul>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-orange">
                View Details
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-ui-border bg-white px-5 py-3 text-sm font-medium text-ui-text hover:bg-brand-orangeSoft"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

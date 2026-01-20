import Link from 'next/link'
import { BadgeCheck } from 'lucide-react'

import { doctors } from '@/lib/doctors'

export function DoctorCards() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-brand-green md:text-3xl">Meet Our DHA-Licensed Team</h2>
          <p className="mt-2 text-sm text-ui-text/80 md:text-base">
            Our doctors and therapists are committed to patient safety, clear guidance, and outcomes you can feel confident about.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <Link
              key={d.slug}
              href={`/doctors/${d.slug}`}
              className="group rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft transition hover:-translate-y-0.5"
            >
              <p className="text-lg font-semibold text-brand-green">{d.name}</p>
              <p className="mt-1 text-sm text-ui-text/80">{d.role}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-ui-text">
                <BadgeCheck className="h-4 w-4 text-brand-orange" />
                {d.dha}
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-ui-text/75">
                {d.expertise.slice(0, 3).map((e) => (
                  <li key={e} className="rounded-xl bg-white px-3 py-2">
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm font-medium text-brand-orange">View Profile</div>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/doctors" className="inline-flex items-center justify-center rounded-xl border border-ui-border bg-ui-bg px-5 py-3 text-sm font-medium text-ui-text hover:bg-brand-orangeSoft">
            View All Doctors & Therapists
          </Link>
        </div>
      </div>
    </section>
  )
}

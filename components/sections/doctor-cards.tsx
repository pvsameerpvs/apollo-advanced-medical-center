import Link from 'next/link'
import Image from 'next/image'
import { BadgeCheck, Calendar, ChevronRight } from 'lucide-react'

import { doctors } from '@/lib/doctors'

export function DoctorCards() {
  return (
    <section className="bg-ui-bg py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green shadow-sm mb-4">
            <BadgeCheck className="h-4 w-4" />
            Exceptional Care
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-ui-text md:text-4xl">
            Meet Our <span className="text-brand-green">DHA-Licensed</span> Team
          </h2>
          <p className="mt-4 text-lg text-ui-text/80">
            Expert doctors and therapists committed to your safety, comfort, and results.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <Link
              key={d.slug}
              href={`/doctors/${d.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-green/5">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                   <div className="flex items-center justify-center rounded-xl bg-white/95 py-3 text-sm font-bold text-brand-green backdrop-blur">
                      View Profile <ChevronRight className="ml-1 h-4 w-4" />
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2">
                   <span className="inline-block rounded-md bg-brand-orangeSoft/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-orange">
                     {d.role}
                   </span>
                </div>
                <h3 className="text-xl font-bold text-ui-text group-hover:text-brand-green transition-colors">
                  {d.name}
                </h3>
                <p className="mt-1 text-sm text-ui-text/60 line-clamp-1">{d.qualifications}</p>

                <div className="mt-4 grid flex-1 content-start gap-2">
                  {d.expertise.slice(0, 2).map((e) => (
                    <div key={e} className="flex items-start gap-2 text-xs text-ui-text/80">
                       <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                       {e}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-orange"
          >
            View Full Team Details
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

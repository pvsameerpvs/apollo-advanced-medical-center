import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Check } from 'lucide-react'

import { serviceCategories } from '@/lib/services'

export function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-ui-bg/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl">
            Services Designed Around Your Goals
          </h2>
          <p className="mt-4 text-lg text-ui-text/80">
            Dental and aesthetic treatments delivered with medical-grade safety, transparent plans, and results you can trust.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, index) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-ui-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index < 2 ? 'md:col-span-1 lg:col-span-1' : '' // Keep consistent grid
              }`}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-brand-green/5">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-50" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orangeSoft transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-6 text-sm leading-relaxed text-ui-text/80">
                  {cat.description}
                </p>

                {/* Service List */}
                <ul className="mb-6 flex-1 space-y-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ui-text/75">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                        <Check className="h-2.5 w-2.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="text-xs font-medium text-brand-orange">
                      + {cat.items.length - 4} more treatments
                    </li>
                  )}
                </ul>

                {/* Footer / CTA */}
                <div className="mt-auto flex items-center justify-between border-t border-ui-border/50 pt-4">
                  <span className="text-sm font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    Learn More
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orangeSoft/50 text-brand-orange transition-all group-hover:bg-brand-orange group-hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-brand-green px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-green/25 transition-all hover:bg-brand-green/90 hover:shadow-xl hover:shadow-brand-green/35"
          >
            View Full Service Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

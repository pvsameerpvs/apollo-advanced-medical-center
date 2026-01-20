import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BadgeCheck, ChevronRight, Star, Heart, ShieldCheck } from 'lucide-react'

import { doctors } from '@/lib/doctors'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Our Medical Team | Apollo Advanced Medical Center',
  description:
    'Meet our team of DHA-licensed doctors and therapists at Apollo Advanced Medical Center in Deira, Dubai. Excellence in dental, aesthetic, and skin care.',
  alternates: { canonical: '/doctors' },
}

export default function DoctorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/doctors-hero.jpg"
          alt="Our medical team"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
           <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-white backdrop-blur-md">
             MEET OUR SPECIALISTS
           </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Expert Care, <br className="hidden md:block" /> Personalized for You.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Our team of DHA-licensed doctors and therapists combine years of experience with a commitment to patient safety and exceptional results.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-ui-bg py-12">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <span className="font-semibold text-ui-text">DHA Licensed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Star className="h-6 w-6" />
              </div>
              <span className="font-semibold text-ui-text">Expert Specialists</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Heart className="h-6 w-6" />
              </div>
              <span className="font-semibold text-ui-text">Compassionate Care</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <span className="font-semibold text-ui-text">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold text-brand-green md:text-5xl">Our Medical Experts</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ui-text/80">
              Passionate professionals dedicated to your health and confidence in Deira, Dubai.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => (
              <Link
                key={d.slug}
                href={`/doctors/${d.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/10"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-green/5">
                  <Image
                    src={d.image}
                    alt={d.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                     <div className="flex items-center justify-center rounded-xl bg-white/95 py-3 text-sm font-bold text-brand-green backdrop-blur shadow-lg">
                        View Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                     </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3">
                     <span className="inline-block rounded-md bg-brand-orangeSoft/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                       {d.role}
                     </span>
                  </div>
                  <h3 className="text-xl font-bold text-ui-text group-hover:text-brand-green transition-colors">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-sm text-ui-text/60 line-clamp-1">{d.qualifications}</p>

                  <div className="mt-5 space-y-2.5">
                    {d.expertise.slice(0, 2).map((e) => (
                      <div key={e} className="flex items-start gap-2.5 text-xs text-ui-text/80">
                         <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                         <span className="leading-relaxed">{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'

import { serviceCategories } from '@/lib/services'
import { CtaBand } from '@/components/sections/cta-band'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Our Services | Apollo Advanced Medical Center',
  description:
    'Discover our range of premium dental, aesthetic, and skincare services in Deira, Dubai. Personalized treatments with DHA-licensed expertise.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
     

 <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/service-hero.jpg"
          alt="Modern Clinic Interior"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
          
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            World-Class Care
          </h1>
         <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            From routine dental checkups to advanced aesthetic treatments, our specialists deliver personalized care using the latest technology.
          </p>
        </div>
      </section>



      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-ui-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Holder */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8 text-left">
                  <h3 className="text-2xl font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ui-text/70">
                    {cat.description}
                  </p>
                  
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cat.items.slice(0, 3).map((item) => (
                      <li key={item} className="rounded-full bg-ui-bg px-3 py-1 text-xs font-medium text-ui-text/80">
                        {item}
                      </li>
                    ))}
                    {cat.items.length > 3 && (
                      <li className="rounded-full bg-ui-bg px-3 py-1 text-xs font-medium text-ui-text/80">
                        +{cat.items.length - 3} more
                      </li>
                    )}
                  </ul>

                  <div className="mt-8 flex items-center font-bold text-brand-green group-hover:text-brand-orange transition-colors">
                    View Treatments <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="bg-ui-bg py-16">
        <div className="container">
           <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ChevronRight className="h-6 w-6 text-brand-orange" />
                 </div>
                 <h4 className="mt-4 font-bold text-brand-green">DHA Licensed</h4>
                 <p className="mt-2 text-sm text-ui-text/60">Fully compliant with Dubai Health Authority standards.</p>
              </div>
               <div className="flex flex-col items-center text-center">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ChevronRight className="h-6 w-6 text-brand-orange" />
                 </div>
                 <h4 className="mt-4 font-bold text-brand-green">Expert Doctors</h4>
                 <p className="mt-2 text-sm text-ui-text/60">Dedicated specialists with years of clinical experience.</p>
              </div>
               <div className="flex flex-col items-center text-center">
                 <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ChevronRight className="h-6 w-6 text-brand-orange" />
                 </div>
                 <h4 className="mt-4 font-bold text-brand-green">Modern Facility</h4>
                 <p className="mt-2 text-sm text-ui-text/60">Equipped with the latest diagnostic technology.</p>
              </div>
           </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, CheckCircle2, Phone, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden bg-gradient-to-br from-white via-white to-brand-orangeSoft/20 py-12 lg:py-0">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/10 bg-white px-4 py-1.5 shadow-sm transition-transform hover:scale-105">
              <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-orange">
                <Star className="h-3 w-3 fill-current" />
                Rated 4.9/5
              </span>
              <span className="text-xs font-medium text-ui-text/60">by 500+ Happy Patients</span>
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-[1.1] tracking-tight text-brand-green md:text-6xl lg:text-7xl">
              World-Class <br />
              <span className="text-brand-orange">Dental Care</span> & <br />
              Aesthetics.
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-ui-text/80 md:text-xl">
              Experience the perfect blend of advanced medical technology and artistic precision. 
              From routine checkups to smile makeovers, we are committed to your confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-brand-green/20 transition-all hover:shadow-xl hover:shadow-brand-green/30">
                <Link href="/appointment" className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group h-14 border-brand-green/20 px-8 text-base hover:bg-brand-green/5 hover:text-brand-green">
                <a href={`tel:${site.contact.phone}`} className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5 text-brand-orange transition-transform group-hover:rotate-12" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-ui-text/80 sm:grid-cols-4 delay-200 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                DHA Licensed
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                Latest Tech
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                0% Installments
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                Free Parking
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out">
             {/* Decorative Elements */}
            <div className="absolute -left-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-orange/20 blur-3xl" />
            <div className="absolute -right-12 top-0 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] border border-white/50 bg-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] lg:rounded-[3rem]">
               {/* 
                  TODO: The user should add a real image at /images/dental-hero.jpg
               */}
              <div className="absolute inset-0 flex items-center justify-center bg-brand-green/5 text-brand-green/20">
                 <p className="font-bold">Dental Hero Image</p>
              </div>
              <Image
                src="/images/dental-hero.jpg"
                alt="Happy patient with a beautiful smile"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur md:left-auto md:right-8 md:w-64 animate-in fade-in slide-in-from-bottom-4 delay-500 duration-700 fill-mode-forwards">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10">
                    <Star className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-green">Best in Class</p>
                    <p className="text-xs text-ui-text/70">Award winning services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

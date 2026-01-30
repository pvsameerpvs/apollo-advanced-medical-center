import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Stethoscope, Sparkles, CheckCircle2 } from 'lucide-react'

import { CtaBand } from '@/components/sections/cta-band'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us | Apollo Advanced Medical Center',
  description:
    'Learn about Apollo Advanced Medical Center in Deira Dubai. A premium clinic combining DHA-licensed expertise, advanced technology, and patient-centered care.',
  alternates: { canonical: '/about-us' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/about-hero.png"
          alt="Modern Clinic Interior"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
           <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-white backdrop-blur-md">
             ESTABLISHED IN DUBAI
           </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Redefining Healthcare <br className="hidden md:block" /> with Compassion.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Steps away from the heart of Deira, we bring together world-class medical expertise and a calm, premium environment designed for your well-being.
          </p>
        </div>
      </section>

      {/* Intro / Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/dental-about.jpg"
                  alt="Doctor treating patient"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
               <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 flex-col items-center justify-center rounded-full bg-brand-orange p-4 text-center text-white shadow-xl md:flex animate-in fade-in zoom-in duration-1000 delay-300">
                  <span className="text-4xl font-bold">100%</span>
                  <span className="text-xs font-medium uppercase tracking-wide">Patient Satisfaction</span>
               </div>
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Who We Are</h2>
              <h3 className="mt-4 text-3xl font-bold text-brand-green md:text-4xl">
                More Than Just a Clinic. <br /> A Partner in Your Health.
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-ui-text/80">
                At Apollo Advanced Medical Center, we believe that visiting a doctor should feel reassuring, not stressful. 
                Our team of DHA-licensed specialists is dedicated to providing personalized medical, dental, and aesthetic care that puts you first.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ui-text/80">
                From our state-of-the-art diagnostic tools to our warm, welcoming reception, every detail is curated to ensure you leave feeling better than when you arrived.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <span className="font-semibold text-ui-text">DHA Licensed</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <span className="font-semibold text-ui-text">Latest Technology</span>
                </div>
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <span className="font-semibold text-ui-text">Premium Care</span>
                </div>
                 <div className="flex items-center gap-3">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                     <CheckCircle2 className="h-5 w-5" />
                   </div>
                   <span className="font-semibold text-ui-text">Convenient Location</span>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/doctors">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-2xl md:aspect-[21/9]">
            <Image
              src="/images/about-bg.jpeg"
              alt="Apollo Advanced Medical Center Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-ui-bg py-20">
        <div className="container">
           <div className="mx-auto max-w-2xl text-center">
             <h2 className="text-3xl font-bold text-brand-green md:text-4xl">Why Choose Apollo?</h2>
             <p className="mt-4 text-lg text-ui-text/80">Built on a foundation of trust, expertise, and unwavering commitment to patient safety.</p>
           </div>

           <div className="mt-12 grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                 <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <ShieldCheck className="h-7 w-7" />
                 </div>
                 <h3 className="mt-6 text-xl font-bold text-ui-text">Patient Safety First</h3>
                 <p className="mt-3 text-ui-text/70">
                   We adhere to the strictest international sterilization and clinical protocols. Your safety is non-negotiable in every procedure we perform.
                 </p>
              </div>

               {/* Card 2 */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                 <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <Stethoscope className="h-7 w-7" />
                 </div>
                 <h3 className="mt-6 text-xl font-bold text-ui-text">Personalized Care</h3>
                 <p className="mt-3 text-ui-text/70">
                   No two patients are alike. We create tailored treatment plans that align with your health goals, budget, and lifestyle.
                 </p>
              </div>

               {/* Card 3 */}
              <div className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                 <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orangeSoft/50 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Sparkles className="h-7 w-7" />
                 </div>
                 <h3 className="mt-6 text-xl font-bold text-ui-text">Advanced Technology</h3>
                 <p className="mt-3 text-ui-text/70">
                   Investment in the latest diagnostic and therapeutic equipment ensures precision, comfort, and superior results for every visit.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-green py-16 text-white">
        <div className="container">
           <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                 <p className="text-4xl font-bold md:text-5xl">5+</p>
                 <p className="mt-2 text-sm text-white/70">Years of Excellence</p>
              </div>
               <div className="text-center">
                 <p className="text-4xl font-bold md:text-5xl">1k+</p>
                 <p className="mt-2 text-sm text-white/70">Happy Patients</p>
              </div>
               <div className="text-center">
                 <p className="text-4xl font-bold md:text-5xl">15+</p>
                 <p className="mt-2 text-sm text-white/70">Medical Experts</p>
              </div>
               <div className="text-center">
                 <p className="text-4xl font-bold md:text-5xl">4.9</p>
                 <p className="mt-2 text-sm text-white/70">Google Rating</p>
              </div>
           </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

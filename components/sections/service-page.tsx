import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, Sparkles, User, Settings, ArrowLeft, Clock, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ServicePageTemplate(props: {
  title: string
  intro: string
  benefits: string[]
  process: string[]
  who: string[]
  included?: string[]
  image: string
}) {
  const { title, intro, benefits, process, who, included, image } = props

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-green py-20">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
          <Link href="/services" className="mb-8 inline-flex items-center text-sm font-medium text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> All Services
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
             {intro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
             <Button size="lg" className="h-14 rounded-xl px-8 text-lg font-bold shadow-xl shadow-brand-orange/20" asChild>
                <Link href="/appointment">Book a Consultation</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <div className="bg-ui-bg/50 border-b border-ui-border">
         <div className="container py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-bold uppercase tracking-widest text-brand-green/60">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand-orange" /> DHA Licensed
               </div>
               <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-orange" /> Expert Results
               </div>
               <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-brand-orange" /> Professional Care
               </div>
            </div>
         </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-20 lg:grid-cols-12">
            
            {/* Left Content: Details */}
            <div className="lg:col-span-12 xl:col-span-8 space-y-16">
               
               {/* Included Items */}
               {included?.length ? (
                 <div className="space-y-8">
                    <div className="flex items-center gap-4">
                       <div className="h-px flex-1 bg-ui-border" />
                       <h2 className="text-2xl font-bold text-brand-green">What&apos;s Included</h2>
                       <div className="h-px flex-1 bg-ui-border" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                       {included.map((i) => (
                         <div key={i} className="flex items-center gap-4 rounded-2xl border border-ui-border bg-white p-5 shadow-soft transition-all hover:border-brand-orange/30">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                               <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-brand-green">{i}</span>
                         </div>
                       ))}
                    </div>
                 </div>
               ) : null}

               {/* Process & Benefits in 2 columns for wider area */}
               <div className="grid gap-12 md:grid-cols-2">
                  {/* Process */}
                  <div className="space-y-8">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-brand-green">
                       <Settings className="h-6 w-6 text-brand-orange" /> Treatment Process
                    </h3>
                    <div className="space-y-6">
                       {process.map((p, idx) => (
                         <div key={p} className="relative flex gap-6">
                            {idx !== process.length - 1 && (
                              <div className="absolute left-[15px] top-8 h-full w-px border-l-2 border-dotted border-ui-border" />
                            )}
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white relative z-10">
                               {idx + 1}
                            </div>
                            <p className="text-ui-text/80 pt-1 leading-relaxed">{p}</p>
                         </div>
                       ))}
                    </div>
                  </div>

                  {/* Who it's for */}
                  <div className="space-y-8">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-brand-green">
                       <User className="h-6 w-6 text-brand-orange" /> Who It&apos;s For
                    </h3>
                    <div className="space-y-4">
                       {who.map((w) => (
                         <div key={w} className="flex gap-4 rounded-2xl bg-ui-bg p-5 border border-ui-border/50">
                            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                            <p className="text-sm font-medium text-ui-text/80">{w}</p>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Sidebar Benefits */}
            <div className="lg:col-span-12 xl:col-span-4 lg:pt-12">
               <div className="sticky top-28 space-y-8">
                  <div className="rounded-[2.5rem] bg-brand-green p-10 text-white shadow-2xl shadow-brand-green/20">
                    <h3 className="text-2xl font-bold">Key Benefits</h3>
                    <ul className="mt-8 space-y-6">
                       {benefits.map((b) => (
                         <li key={b} className="flex gap-4">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                               <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium leading-relaxed text-white/90">{b}</span>
                         </li>
                       ))}
                    </ul>
                    <Button className="mt-10 w-full bg-white text-brand-green hover:bg-white/90 font-bold h-14" size="lg" asChild>
                       <Link href="/appointment">Start Your Plan</Link>
                    </Button>
                  </div>

                  {/* Support Card */}
                  <div className="rounded-[2.5rem] border border-ui-border p-8 text-center bg-white shadow-soft">
                     <Clock className="mx-auto h-8 w-8 text-brand-orange" />
                     <h4 className="mt-4 font-bold text-brand-green">Quick Confirmation</h4>
                     <p className="mt-2 text-sm text-ui-text/60">Response within 2 hours during clinic hours.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

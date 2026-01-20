import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, MessageCircle, Clock, Mail, ChevronRight } from 'lucide-react'

import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { InstagramGrid } from '@/components/sections/instagram-grid'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Contact Us | Apollo Advanced Medical Center - Deira, Dubai',
  description:
    'Visit Apollo Advanced Medical Center in Deira, Dubai. Call or WhatsApp to book an appointment, view clinic timings, and find us on the map.',
}

export default function ContactUsPage() {
  const waLink = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`
  const mapEmbed =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    'https://www.google.com/maps?q=Deira%20Dubai&output=embed'

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/service-hero.jpg"
          alt="Contact Apollo AMC"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
             We&apos;re here to answer your questions and help you schedule your professional health or aesthetic consultation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-12">
            
            {/* Left Column: Info Cards */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Reach Us Anywhere</h2>
                  <h3 className="text-3xl font-bold text-brand-green md:text-4xl">Visit Our Clinic in Deira</h3>
                  <p className="text-lg text-ui-text/70">
                    Located in the heart of Deira, our clinic offers a serene and professional environment for all your medical and aesthetic needs.
                  </p>
               </div>

               <div className="grid gap-6">
                  {/* Phone & WhatsApp */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                     <a href={`tel:${site.contact.phone}`} className="group flex flex-col rounded-3xl bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                           <Phone className="h-6 w-6" />
                        </div>
                        <h4 className="mt-4 font-bold text-brand-green">Call Support</h4>
                        <p className="mt-1 text-sm text-ui-text/60">{site.contact.phone}</p>
                     </a>
                     <a href={waLink} target="_blank" rel="noreferrer" className="group flex flex-col rounded-3xl bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                           <MessageCircle className="h-6 w-6" />
                        </div>
                        <h4 className="mt-4 font-bold text-brand-green">WhatsApp Chat</h4>
                        <p className="mt-1 text-sm text-ui-text/60">Fast response & booking</p>
                     </a>
                  </div>

                  {/* Address & Email */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                     <div className="flex flex-col rounded-3xl bg-white p-6 shadow-soft border border-ui-border">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ui-bg text-brand-green">
                           <MapPin className="h-6 w-6" />
                        </div>
                        <h4 className="mt-4 font-bold text-brand-green">Our Location</h4>
                        <p className="mt-1 text-sm text-ui-text/60 line-clamp-2">Deira, Dubai, UAE</p>
                     </div>
                     <div className="flex flex-col rounded-3xl bg-white p-6 shadow-soft border border-ui-border">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ui-bg text-brand-green">
                           <Mail className="h-6 w-6" />
                        </div>
                        <h4 className="mt-4 font-bold text-brand-green">Email Us</h4>
                        <p className="mt-1 text-sm text-ui-text/60">info@apollo-amc.com</p>
                     </div>
                  </div>
               </div>

               {/* Opening Hours */}
               <div className="rounded-3xl bg-brand-green p-8 text-white shadow-xl shadow-brand-green/10">
                  <div className="flex items-center gap-3 mb-6">
                     <Clock className="h-5 w-5 text-brand-orange" />
                     <h4 className="text-xl font-bold">Clinic Opening Hours</h4>
                  </div>
                  <ul className="space-y-3">
                     {site.openingHours.map((o) => (
                       <li key={o.day} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                          <span className="text-sm text-white/70">{o.day}</span>
                          <span className="text-sm font-bold">{o.hours}</span>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Right Column: Map Embed */}
            <div className="lg:col-span-12 xl:col-span-7">
               <div className="h-full min-h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white ring-1 ring-ui-border">
                  <iframe
                     title="Apollo Advanced Medical Center Map"
                     src={mapEmbed}
                     className="h-full w-full grayscale contrast-125 brightness-105"
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  />
               </div>
               
               {/* Quick CTA */}
               <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                     <a href={waLink} target="_blank" rel="noreferrer">
                        Message on WhatsApp <ChevronRight className="ml-2 h-5 w-5" />
                     </a>
                  </Button>
                  <div className="flex items-center gap-3">
                     <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                     <span className="text-sm font-medium text-ui-text/70 tracking-wide">Available for Consultation Today</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-ui-bg py-20">
         <div className="container">
            <InstagramGrid title="Our Work in Action" />
         </div>
      </section>

      <CtaBand />
    </>
  )
}

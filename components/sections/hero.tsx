'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons/whatsapp'
import { cn } from '@/lib/utils'

const slides = [
  {
    id: 'medical',
    title: 'Advanced Care',
    highlight: 'Excellence',
    description: 'Discover a new standard of healthcare at Apollo. Our specialists combine cutting-edge technology with artisanal precision.',
    label: 'Advanced Medical • Dental • Aesthetics'
  }
]

const bgImages = [
  '/images/hero-bg.jpeg',
  '/images/hero-bg-2.jpeg'
]

export function Hero() {
  const slide = slides[0]
  const [currentBg, setCurrentBg] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-brand-green/5 flex flex-col">
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, idx) => (
          <div
            key={img}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              idx === currentBg ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={img}
              alt="Hero Background"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex-1 container relative z-10 flex flex-col items-start justify-center py-12">
        <div className="max-w-4xl text-left flex flex-col items-start">
          
          {/* Main Brand Message */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/10 bg-brand-green/5 px-4 py-1.5 mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {slide.label}
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1] animate-in fade-in slide-in-from-left-6 duration-1000 delay-100 uppercase py-4">
            <span className="relative inline-block text-brand-green [paint-order:stroke_fill] [-webkit-text-stroke:12px_white] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-2">
              {slide.highlight}
            </span>
            <br />
            <span className="relative inline-block text-brand-orange [paint-order:stroke_fill] [-webkit-text-stroke:12px_white] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] mb-2">
              {slide.title}
            </span>
            <br />
            <span className="relative inline-block text-brand-green [paint-order:stroke_fill] [-webkit-text-stroke:12px_white] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              Personalized.
            </span>
          </h1>
          
          <p className="mt-8 text-lg text-white font-bold max-w-2xl leading-relaxed md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            {slide.description}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start justify-start w-full animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
            <Button asChild size="lg" className="h-16 px-12 rounded-full bg-brand-green hover:bg-brand-greenDark shadow-xl shadow-brand-green/20 text-base font-semibold group w-full sm:w-auto">
              <Link href="/appointment" className="inline-flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Social Icons - Fixed to Section Bottom */}
      <div className="absolute bottom-0  right-4 lg:bottom-8 lg:right-8 flex gap-4 z-20 animate-in fade-in slide-in-from-right-4 duration-1000 delay-500">
        <a 
          href={site.instagram.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-soft group"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-soft group"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  )
}

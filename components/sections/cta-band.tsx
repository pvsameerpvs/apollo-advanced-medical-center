import Link from 'next/link'
import { MessageCircle, PhoneCall } from 'lucide-react'

import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'

export function CtaBand() {
  const wa = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`

  return (
    <section className="py-14">
      <div className="container">
        <div className="rounded-3xl border border-ui-border bg-brand-orangeSoft p-6 shadow-soft md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-brand-green md:text-3xl">
                Ready to book your visit?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-ui-text/80 md:text-base">
                Share your preferred service, doctor, and timing. We will confirm your appointment quickly by phone or WhatsApp.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${site.contact.phone}`} className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-brand-orange" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="green">
                <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

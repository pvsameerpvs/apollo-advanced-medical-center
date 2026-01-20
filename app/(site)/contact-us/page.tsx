import type { Metadata } from 'next'
import { MapPin, Phone, MessageCircle, Clock, Instagram } from 'lucide-react'

import { site } from '@/lib/site'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
    <main className="bg-ui-bg">
      <section className="border-b border-ui-border bg-white">
        <div className="container py-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-brand-green sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-3xl text-ui-text">
            Apollo Advanced Medical Center — trusted medical, dental & aesthetic care in Deira, Dubai. Call or WhatsApp
            us to book.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-brand-green">Find Us on the Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-ui-border bg-white shadow-sm">
                <iframe
                  title="Apollo Advanced Medical Center Map"
                  src={mapEmbed}
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-4 text-sm text-ui-text">
                <span className="font-medium text-brand-green">Location:</span> Deira, Dubai, UAE
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-brand-green">Call / WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-ui-text">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-brand-green">Phone</p>
                    <a className="hover:underline" href={`tel:${site.contact.phone}`}>
                      {site.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-brand-green">WhatsApp</p>
                    <a className="hover:underline" href={waLink} target="_blank" rel="noreferrer">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="grid gap-3 pt-2">
                  <Button asChild>
                    <a href={waLink} target="_blank" rel="noreferrer">
                      WhatsApp Now
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={`tel:${site.contact.phone}`}>Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-brand-green">Clinic Timings</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-ui-text">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-brand-green">Opening Hours</p>
                    <ul className="mt-2 grid gap-2">
                      {site.openingHours.map((o) => (
                        <li key={o.day} className="flex items-center justify-between rounded-xl bg-white p-3 border border-ui-border">
                          <span>{o.day}</span>
                          <span className="font-medium text-brand-green">{o.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-brand-green">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-ui-text">
                <div className="flex items-start gap-3">
                  <Instagram className="mt-0.5 h-5 w-5 text-brand-orange" />
                  <div>
                    <p className="font-semibold text-brand-green">Social Proof</p>
                    <p className="mt-1">Watch treatments in action and see real results.</p>
                    <a className="mt-2 inline-block font-medium text-brand-green hover:underline" href={site.instagram.url} target="_blank" rel="noreferrer">
                      Visit our Instagram
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-ui-border bg-white">
        <div className="container py-10">
          <InstagramGrid title="Watch Our Treatments in Action" />
        </div>
      </section>

      <CtaBand />
    </main>
  )
}

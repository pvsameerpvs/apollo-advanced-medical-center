import Link from 'next/link'
import { Instagram, MapPin, Phone } from 'lucide-react'

import { site } from '@/lib/site'

const footerLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/contact-us', label: 'Contact Us' },
]

export function SiteFooter() {
  const wa = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`

  return (
    <footer className="border-t border-ui-border bg-white">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-brand-green">Apollo Advanced Medical Center</p>
            <p className="mt-3 text-sm text-ui-text/80">
              Trusted medical, dental & aesthetic care in Deira, Dubai. DHA-licensed doctors, advanced technology, and personalized treatment plans.
            </p>

            <div className="mt-5 grid gap-3 text-sm">
              <a className="inline-flex items-center gap-2 text-brand-green hover:text-brand-greenDark" href={`tel:${site.contact.phone}`}>
                <Phone className="h-4 w-4 text-brand-orange" />
                {site.contact.phone}
              </a>
              <a className="inline-flex items-center gap-2 text-brand-green hover:text-brand-greenDark" href={site.instagram.url} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4 text-brand-orange" />
                {site.instagram.handle}
              </a>
              <div className="inline-flex items-center gap-2 text-ui-text/80">
                <MapPin className="h-4 w-4 text-brand-orange" />
                Deira, Dubai, UAE
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ui-text">Quick Links</p>
            <ul className="mt-4 grid gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-ui-text/80 hover:text-brand-green" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ui-text">Clinic Timings</p>
            <div className="mt-4 rounded-2xl border border-ui-border bg-ui-bg p-5">
              <div className="grid gap-2">
                {site.openingHours.map((oh) => (
                  <div key={oh.day} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-ui-text">{oh.day}</span>
                    <span className="text-ui-text/80">{oh.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3">
                <a className="inline-flex items-center justify-center rounded-xl bg-brand-orange px-5 py-3 text-sm font-medium text-white hover:bg-[#e67234]" href={wa} target="_blank" rel="noreferrer">
                  WhatsApp for Appointment
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ui-border pt-6 text-xs text-ui-text/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Apollo Advanced Medical Center. All rights reserved.
          </p>
          <p className="text-ui-text/70">
            DHA-licensed doctors & therapists. Patient safety and privacy prioritized.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold text-ui-text">Watch Our Treatments in Action</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { href: site.instagram.url, label: 'Laser Hair Removal' },
              { href: site.instagram.url, label: 'Hydrafacial' },
              { href: site.instagram.url, label: 'Teeth Whitening' },
              { href: site.instagram.url, label: 'BB Glow' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-ui-border bg-ui-bg p-4"
              >
                <div className="text-sm font-medium text-ui-text">{item.label}</div>
                <div className="mt-2 text-xs text-ui-text/70">Open on Instagram</div>
                <div className="pointer-events-none absolute inset-0 bg-brand-orange/0 transition group-hover:bg-brand-orange/15" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

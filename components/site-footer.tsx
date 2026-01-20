import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react'

import { site } from '@/lib/site'

const footerLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/doctors', label: 'Our Doctors' },
  { href: '/blog', label: 'Health Blog' },
  { href: '/contact-us', label: 'Contact Us' },
]

const servicesLinks = [
  { href: '/services/dental-services', label: 'Dental Care' },
  { href: '/services/aesthetic-beauty-services', label: 'Aesthetics' },
  { href: '/services/laser-hair-removal', label: 'Laser Hair Removal' },
  { href: '/services/facial-skin-care', label: 'Facials & Skin' },
]

export function SiteFooter() {
  const wa = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`

  return (
    <footer className="bg-brand-green text-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand & Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/appolo-logo.png"
                alt="Apollo Advanced Medical Center"
                width={200}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Your trusted destination for advanced medical, dental, and aesthetic care in Deira, Dubai. Licensed excellence you can rely on.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-brand-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 transition-colors hover:text-brand-orange">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact & Hours</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>
                  {site.address.street}, {site.address.city}, {site.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                 <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                 <a href={`tel:${site.contact.phone}`} className="hover:text-white">{site.contact.phone}</a>
              </li>
               <li className="flex items-center gap-3 text-sm text-white/80">
                 <Mail className="h-4 w-4 shrink-0 text-brand-orange" />
                 <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <div className="flex flex-col gap-1">
                   {site.openingHours.map(oh => (
                       <span key={oh.day}>{oh.day}: {oh.hours}</span>
                   ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-white/60 md:flex-row md:text-left">
           <p>© {new Date().getFullYear()} Apollo Advanced Medical Center. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}

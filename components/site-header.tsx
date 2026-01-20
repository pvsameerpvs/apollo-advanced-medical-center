'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { Menu, Phone, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { site } from '@/lib/site'
import { Button } from '@/components/ui/button'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/blog', label: 'Blog' },
  { href: '/appointment', label: 'Appointment' },
  { href: '/contact-us', label: 'Contact Us' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-ui-border bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-green text-white font-semibold">
            A
          </span>
          <span className="font-semibold text-ui-text">
            <span className="text-brand-green">Apollo</span> Advanced Medical Center
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-greenDark',
                  active ? 'text-brand-green' : 'text-ui-text'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.contact.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:text-brand-greenDark"
          >
            <Phone className="h-4 w-4 text-brand-orange" />
            {site.contact.phone}
          </a>
          <Button asChild>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-ui-border bg-white p-2 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5 text-brand-green" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-brand-green">Menu</span>
              <button
                type="button"
                className="rounded-xl border border-ui-border bg-white p-2"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5 text-ui-text" />
              </button>
            </div>

            <div className="mt-5 grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-ui-text hover:bg-brand-orangeSoft"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${site.contact.phone}`}>Call Now</a>
              </Button>
              <Button asChild variant="green">
                <a href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

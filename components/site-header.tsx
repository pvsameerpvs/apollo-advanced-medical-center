'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'

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
    <header className="sticky top-0 z-40 border-b border-ui-border bg-white/80 backdrop-blur-md transition-all">
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
             src="/appolo-logo.png"
             alt="Apollo Advanced Medical Center"
             width={300}
             height={80}
             className="h-20 w-auto object-contain"
             priority
          />
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

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[100] lg:hidden">
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setOpen(false)}
              />
              <div
                className="fixed inset-y-0 right-0 z-[101] w-[85%] max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out animate-in slide-in-from-right"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-ui-border/50 pb-6">
                  <div className="relative h-12 w-40">
                    <Image
                      src="/appolo-logo.png"
                      alt="Apollo Advanced Medical Center"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-ui-bg p-2.5 text-ui-text hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-8 grid gap-1">
                  {nav.map((item) => {
                    const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
                          active 
                            ? "bg-brand-green/10 text-brand-green font-semibold translate-x-1" 
                            : "text-ui-text hover:bg-ui-bg hover:translate-x-1"
                        )}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
                </div>

                <div className="mt-8 grid gap-3 border-t border-ui-border/50 pt-6">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/appointment">Book Appointment</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full justify-center">
                    <a href={`tel:${site.contact.phone}`} className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-orange" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="green" size="lg" className="w-full justify-center">
                    <a href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <span className="font-bold">WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}

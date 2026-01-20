import { Instagram } from 'lucide-react'

import { site } from '@/lib/site'

const reels = [
  { title: 'Laser Hair Removal', href: site.instagram.url },
  { title: 'Hydrafacial', href: site.instagram.url },
  { title: 'Teeth Whitening', href: site.instagram.url },
  { title: 'BB Glow', href: site.instagram.url },
  { title: 'Scaling & Polishing', href: site.instagram.url },
  { title: 'Lip Blushing', href: site.instagram.url },
]

export function InstagramGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'py-10' : 'py-14 md:py-20'}>
      <div className="container">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-brand-green md:text-3xl">
              Watch Our Treatments in Action
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ui-text/80 md:text-base">
              Explore real before/after results, clinic hygiene standards, and behind-the-scenes treatment reels on Instagram.
            </p>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-ui-border bg-white px-4 py-2 text-sm font-medium text-ui-text hover:bg-brand-orangeSoft"
          >
            <Instagram className="h-4 w-4 text-brand-orange" />
            Open Instagram
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-ui-border bg-white p-6 shadow-soft"
            >
              <div className="text-sm font-semibold text-brand-green">{r.title}</div>
              <div className="mt-2 text-sm text-ui-text/70">Tap to watch on Instagram</div>
              <div className="pointer-events-none absolute inset-0 bg-brand-orange/0 transition group-hover:bg-brand-orange/15" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

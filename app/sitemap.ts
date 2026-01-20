import type { MetadataRoute } from 'next'

import { site } from '@/lib/site'
import { doctors } from '@/lib/doctors'

const servicePages = [
  '/services',
  '/services/dental-services',
  '/services/aesthetic-beauty-services',
  '/services/laser-hair-removal',
  '/services/facial-skin-care',
  '/services/slimming-body-contouring',
]

const staticPages = ['/', '/about-us', '/doctors', '/blog', '/appointment', '/contact-us']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = site.url.replace(/\/$/, '')

  const urls: MetadataRoute.Sitemap = [...staticPages, ...servicePages].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }))

  urls.push(
    ...doctors.map((d) => ({
      url: `${base}/doctors/${d.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return urls
}

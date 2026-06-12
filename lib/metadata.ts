import type { Metadata } from 'next'

import { site } from '@/lib/site'

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  absoluteTitle?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  image = '/images/apollo-medical-center-al-rigga-dubai.webp',
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonical = path === '/' ? '/' : `${path.replace(/\/$/, '')}/`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: site.locale,
      siteName: site.name,
      title,
      description,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

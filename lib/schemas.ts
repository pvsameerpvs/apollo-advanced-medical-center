import { site } from '@/lib/site'

export type FAQ = {
  question: string
  answer: string
}

export function faqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export function medicalServiceSchema(name: string, description: string, areaName: string, path: string) {
  const url = `${site.url}${path.replace(/\/$/, '')}/`

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalService',
    '@id': `${url}#service`,
    name,
    description,
    url,
    provider: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#medical-clinic`,
      name: site.name,
      url: site.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.countryCode,
      },
    },
    areaServed: { '@type': 'Place', name: areaName },
  }
}

export function physicianSchema(doctor: {
  name: string
  role: string
  qualifications: string
  description: string
  image: string
  specialty: string[]
  services: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${site.url}/doctors/${doctor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/#physician`,
    name: doctor.name,
    description: doctor.description,
    image: `https://apolloadvancemedicalcenter.com${doctor.image}`,
    medicalSpecialty: doctor.specialty,
    availableService: doctor.services.map((s) => ({
      '@type': 'MedicalService',
      name: s,
    })),
    affiliatedWith: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#medical-clinic`,
      name: site.name,
    },
  }
}

import type { Metadata } from 'next'

import { ServicePageTemplate } from '@/components/sections/service-page'

export const metadata: Metadata = {
  title: 'Aesthetic & Beauty Services in Deira, Dubai',
  description:
    'Laser, facial and beauty treatments at Apollo Advanced Medical Center in Deira, Dubai. Book your consultation with DHA-licensed therapists.',
  alternates: { canonical: '/services/aesthetic-beauty-services' },
}

export default function AestheticBeautyServicesPage() {
  return (
    <ServicePageTemplate
      title="Aesthetic & Beauty Services"
      intro="Our aesthetic and beauty services focus on safe, medical-grade protocols for smoother skin, a healthier glow, and confident results. Every plan is personalized after a consultation, with clear aftercare guidance to protect your skin."
      included={[
        'Laser Hair Removal',
        'Facial Treatments',
        'Hydrafacial',
        'BB Glow',
        'Lip Blushing',
        'Micro Shading',
        'Slimming Treatment',
      ]}
      benefits={[
        'Treatments tailored to your skin type and goals',
        'Medical-grade hygiene and safety standards',
        'Comfort-focused sessions with clear aftercare',
        'Packages that make ongoing care affordable',
      ]}
      process={[
        'Consultation and skin assessment to confirm suitability',
        'Customized plan (sessions, intervals, and aftercare)',
        'Treatment performed by DHA-licensed therapist',
        'Post-treatment instructions and follow-up recommendations',
      ]}
      who={[
        'Clients looking for smoother skin and long-term hair reduction',
        'Anyone wanting brighter, more hydrated, healthier-looking skin',
        'Those seeking natural-looking enhancement (BB Glow / lip blushing)',
        'Clients who want professional guidance and safe protocols',
      ]}
    />
  )
}

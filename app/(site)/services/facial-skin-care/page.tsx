import type { Metadata } from 'next'

import { ServicePageTemplate } from '@/components/sections/service-page'

export const metadata: Metadata = {
  title: 'Facial & Skin Care in Al Rigga, Union Dubai',
  description: 'Facial treatments, deep cleansing, hydration, and glow facials in Al Rigga, Union Dubai. Book your consultation today.',
  alternates: { canonical: '/services/facial-skin-care' },
}

export default function FacialSkinCarePage() {
  return (
    <ServicePageTemplate
      title="Facial & Skin Care"
      intro="Personalized facials and skin care protocols for deep cleansing, hydration, and a healthier glow. Every session begins with skin analysis and ends with clear aftercare steps."
      image="/images/services/facial.jpeg"
      imageAlt="Facial and skin care treatment service at Apollo Advanced Medical Center in Al Rigga, Union Dubai"
      included={["Deep Cleansing", "Hydration & Glow", "Acne Care", "Skin Rejuvenation"]}
      benefits={[
        'Improves skin texture, hydration, and overall glow',
        'Targets congestion, dullness, and uneven tone',
        'Professional extraction and calming protocols when needed',
        'Aftercare guidance to maintain results between sessions',
      ]}
      process={[
        'Skin assessment and goal setting',
        'Cleanse, exfoliation, and targeted steps',
        'Mask, hydration, and protection',
        'Aftercare recommendations and optional follow-up',
      ]}
      who={[
        'Clients seeking a cleaner, brighter complexion',
        'Those managing acne, oiliness, or congestion',
        'Anyone wanting hydration and glow before events',
        'People looking for a professional skin care plan',
      ]}
    />
  )
}

import { ServicePageTemplate } from '@/components/sections/service-page'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Facial & Skin Care in Al Rigga, Union Dubai',
  description: 'Facial treatments, deep cleansing, hydration, and glow facials in Al Rigga, Union Dubai. Book your consultation today.',
  path: '/services/facial-skin-care',
  image: '/images/facial-skin-care-al-rigga-dubai.webp',
})

export default function FacialSkinCarePage() {
  return (
    <ServicePageTemplate
      title="Facial & Skin Care"
      intro="Personalized facials and skin care protocols for deep cleansing, hydration, and a healthier glow. Every session begins with skin analysis and ends with clear aftercare steps."
      image="/images/facial-skin-care-al-rigga-dubai.webp"
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
      faqs={[
        {
          question: 'Which facial is best for glowing skin in Dubai?',
          answer: 'Hydrafacial is one of the best options for instant glow as it combines cleansing, exfoliation, extraction, and hydration in one session. For long-term results, our Hydration & Glow facial is also excellent for Dubai\'s climate.',
        },
        {
          question: 'How much does a facial cost in Al Rigga, Dubai?',
          answer: 'Facial prices at Apollo Advanced Medical Center depend on the type and customizations. We offer affordable packages. Contact our Al Rigga clinic for pricing during your free skin consultation.',
        },
        {
          question: 'Can facials help with acne in Dubai\'s climate?',
          answer: 'Yes, our Acne Care facial is specifically designed for congested and acne-prone skin. It includes deep cleansing, professional extraction, and calming ingredients to reduce breakouts and inflammation.',
        },
        {
          question: 'How often should I get a facial?',
          answer: 'For maintenance, once a month is ideal as it aligns with your skin\'s natural renewal cycle. For specific concerns like acne or hyperpigmentation, your therapist may recommend more frequent sessions initially.',
        },
        {
          question: 'What skincare routine works best in Dubai\'s heat and humidity?',
          answer: 'Lightweight, non-comedogenic products with SPF are essential in Dubai. Our skin care therapists recommend gentle cleansing, antioxidant serums, daily SPF 50+, and regular professional facials to maintain skin health.',
        },
      ]}
      areaName="Al Rigga, Union Dubai"
      path="/services/facial-skin-care"
    />
  )
}

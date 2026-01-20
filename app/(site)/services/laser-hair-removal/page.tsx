import type { Metadata } from 'next'

import { ServicePageTemplate } from '@/components/sections/service-page'

export const metadata: Metadata = {
  title: 'Laser Hair Removal in Deira, Dubai',
  description:
    'Safe laser hair removal for face and body in Deira, Dubai. Customized settings for your skin type with DHA-licensed therapists.',
  alternates: { canonical: '/services/laser-hair-removal' },
}

export default function LaserHairRemovalPage() {
  return (
    <ServicePageTemplate
      title="Laser Hair Removal"
      intro="Our laser hair removal treatments are designed for comfort, safety, and consistent hair reduction. We tailor settings to your skin type and treatment area, and provide aftercare guidance to protect your results."
      benefits={[
        'Long-term hair reduction and smoother skin',
        'Fast sessions with targeted areas available',
        'Customized settings for safety and comfort',
        'Reduced ingrown hairs with proper aftercare',
      ]}
      process={[
        'Consultation to review skin type, history, and target areas',
        'Patch test (when needed) and treatment plan scheduling',
        'Laser session with protective steps and comfort checks',
        'Aftercare instructions and ideal session intervals',
      ]}
      who={[
        'Clients seeking long-term hair reduction for face or body',
        'Those experiencing irritation or ingrown hairs from shaving',
        'Busy schedules needing efficient, professional sessions',
        'Clients who prefer clinic-grade hygiene and supervision',
      ]}
      included={['Full Body', 'Face & Neck', 'Underarms', 'Bikini', 'Legs', 'Arms']}
    />
  )
}

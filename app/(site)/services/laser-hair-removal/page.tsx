import { ServicePageTemplate } from '@/components/sections/service-page'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Laser Hair Removal in Al Rigga, Union Dubai',
  description:
    'Safe laser hair removal for face and body in Al Rigga, Union Dubai. Customized settings for your skin type with DHA-licensed therapists.',
  path: '/services/laser-hair-removal',
  image: '/images/laser-hair-removal-al-rigga-dubai.webp',
})

export default function LaserHairRemovalPage() {
  return (
    <ServicePageTemplate
      title="Laser Hair Removal"
      intro="Our laser hair removal treatments are designed for comfort, safety, and consistent hair reduction. We tailor settings to your skin type and treatment area, and provide aftercare guidance to protect your results."
      image="/images/laser-hair-removal-al-rigga-dubai.webp"
      imageAlt="Laser hair removal service for face and body at Apollo Advanced Medical Center in Al Rigga, Union Dubai"
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
      faqs={[
        {
          question: 'How much does laser hair removal cost in Al Rigga, Dubai?',
          answer: 'Laser hair removal costs vary based on the treatment area. At Apollo Advanced Medical Center in Al Rigga, Union Dubai, we offer competitive pricing with package options. Contact us for a personalized quote during your free consultation.',
        },
        {
          question: 'Is laser hair removal safe for all skin types in Dubai?',
          answer: 'Yes, modern laser technology allows safe treatment across various skin types. Our DHA-licensed therapists customize settings based on your skin type and hair characteristics during the consultation at our Al Rigga clinic.',
        },
        {
          question: 'How many laser sessions are needed for permanent hair reduction?',
          answer: 'Most clients need 6-8 sessions for optimal results, scheduled 4-6 weeks apart. Hair grows in cycles, and each session targets actively growing hairs. Maintenance sessions may be needed annually.',
        },
        {
          question: 'What is the difference between laser hair removal and IPL?',
          answer: 'Laser uses a single concentrated wavelength of light for precise hair reduction, making it more effective and safer for darker skin tones. IPL uses broad-spectrum light and is less targeted. Our clinic uses medical-grade laser equipment for superior results.',
        },
        {
          question: 'How should I prepare for laser hair removal in Dubai?',
          answer: 'Avoid sun exposure, tanning, and waxing for 4 weeks before treatment. Shave the area 24 hours before your session. Avoid creams or lotions on the treatment day. Our therapist will provide complete pre-treatment instructions.',
        },
        {
          question: 'Where can I find the best laser hair removal clinic near Al Rigga, Union Dubai?',
          answer: 'Apollo Advanced Medical Center is conveniently located near the Fish Roundabout in Al Rigga, Union Dubai, just minutes from Union Metro Station. We are a DHA-licensed clinic offering professional laser hair removal with experienced therapists.',
        },
      ]}
      areaName="Al Rigga, Union Dubai"
      path="/services/laser-hair-removal"
    />
  )
}

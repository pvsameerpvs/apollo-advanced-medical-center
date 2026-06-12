import { ServicePageTemplate } from '@/components/sections/service-page'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Aesthetic & Beauty Services in Al Rigga, Union Dubai',
  description:
    'Laser, facial and beauty treatments at Apollo Advanced Medical Center in Al Rigga, Union Dubai. Book your consultation with DHA-licensed therapists.',
  path: '/services/aesthetic-beauty-services',
  image: '/images/aesthetic-beauty-treatments-al-rigga-dubai.webp',
})

export default function AestheticBeautyServicesPage() {
  return (
    <ServicePageTemplate
      title="Aesthetic & Beauty Services"
      intro="Our aesthetic and beauty services focus on safe, medical-grade protocols for smoother skin, a healthier glow, and confident results. Every plan is personalized after a consultation, with clear aftercare guidance to protect your skin."
      image="/images/aesthetic-beauty-treatments-al-rigga-dubai.webp"
      imageAlt="Aesthetic and beauty treatment services at Apollo Advanced Medical Center in Al Rigga, Union Dubai"
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
      faqs={[
        {
          question: 'What aesthetic treatments are available in Al Rigga, Dubai?',
          answer: 'Apollo Advanced Medical Center offers laser hair removal, Hydrafacial, BB Glow, lip blushing, micro shading, slimming treatments, and more — all performed by DHA-licensed therapists in our Al Rigga, Union Dubai clinic.',
        },
        {
          question: 'How much does Hydrafacial cost in Dubai?',
          answer: 'Hydrafacial costs depend on the add-ons and customized protocol. At our clinic near Union Dubai, we offer transparent pricing. Book a consultation to get a personalized quote.',
        },
        {
          question: 'Is BB Glow treatment safe for all skin types?',
          answer: 'Yes, BB Glow is safe for most skin types. It uses serums with brightening ingredients that are gently infused into the skin. Our therapist will assess your skin during consultation to ensure suitability.',
        },
        {
          question: 'What is lip blushing and how long does it last?',
          answer: 'Lip blushing is a semi-permanent cosmetic tattoo that enhances the natural color and shape of your lips. Results typically last 1-3 years depending on aftercare and lifestyle factors.',
        },
        {
          question: 'Where can I find the best aesthetic clinic near Union Dubai?',
          answer: 'Apollo Advanced Medical Center is located near the Fish Roundabout in Al Rigga, Union Dubai — easily accessible from Union Metro Station. We offer medical-grade aesthetic treatments with DHA-licensed professionals.',
        },
      ]}
      areaName="Al Rigga, Union Dubai"
      path="/services/aesthetic-beauty-services"
    />
  )
}

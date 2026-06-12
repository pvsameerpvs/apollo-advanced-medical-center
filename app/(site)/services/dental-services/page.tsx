import { ServicePageTemplate } from '@/components/sections/service-page'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Dental Services in Al Rigga, Union Dubai',
  description:
    'Teeth whitening, scaling & polishing, root canal, fillings, crowns, veneers, dentures and extractions at Apollo Advanced Medical Center in Al Rigga, Union Dubai. Book an appointment.',
  path: '/services/dental-services',
  image: '/images/dental-services-al-rigga-dubai.webp',
})

export default function DentalServicesPage() {
  return (
    <ServicePageTemplate
      title="Dental Services"
      intro="From routine cleaning to advanced restorative work, our dental team provides gentle, medical-grade care designed around comfort, hygiene, and long-term oral health. Every plan includes clear options and aftercare instructions."
      image="/images/dental-services-al-rigga-dubai.webp"
      imageAlt="Dental services and smile care at Apollo Advanced Medical Center in Al Rigga, Union Dubai"
      included={[
        'Teeth Whitening',
        'Scaling & Polishing',
        'Root Canal Treatment',
        'Dental Fillings',
        'Crowns & Veneers',
        'Dental Dentures',
        'Tooth Extraction',
        'Cosmetic Dentistry',
      ]}
      benefits={[
        'Improves oral health with preventive care and early detection.',
        'Enhances smile aesthetics with cosmetic options tailored to you.',
        'Comfort-focused approach with modern techniques and guidance.',
        'Clear treatment plans with realistic outcomes and pricing.',
      ]}
      process={[
        'Consultation and oral examination with recommendations.',
        'Diagnostic assessment (as needed) and treatment planning.',
        'Procedure performed with hygiene and comfort protocols.',
        'Aftercare instructions and follow-up if required.',
      ]}
      who={[
        'Anyone needing routine cleaning, checkups or dental advice.',
        'Patients looking to brighten their smile with whitening.',
        'Those with tooth pain requiring root canal or restorative work.',
        'Patients interested in cosmetic improvements like veneers.',
      ]}
      faqs={[
        {
          question: 'How much does teeth whitening cost in Al Rigga, Dubai?',
          answer: 'Teeth whitening costs at Apollo Advanced Medical Center are competitively priced. We offer in-clinic professional whitening and take-home options. Contact us for pricing during your free consultation at our Al Rigga, Union Dubai clinic.',
        },
        {
          question: 'How often should I get scaling and polishing in Dubai?',
          answer: 'Most dentists recommend professional scaling and polishing every 6 months. However, if you have gum disease, smoke, or are prone to staining, you may benefit from more frequent visits every 3-4 months.',
        },
        {
          question: 'What is the best dental clinic near Union Dubai?',
          answer: 'Apollo Advanced Medical Center in Al Rigga, near Union Metro and the Fish Roundabout, is a top-rated DHA-licensed dental clinic. Our experienced dentists offer comprehensive care from routine cleaning to cosmetic dentistry.',
        },
        {
          question: 'Are root canal treatments painful?',
          answer: 'Modern root canal treatments are performed under local anesthesia and are generally no more uncomfortable than getting a filling. Most patients report feeling relief from tooth pain after the procedure.',
        },
        {
          question: 'What is the difference between crowns and veneers?',
          answer: 'Veneers are thin shells bonded to the front of teeth for cosmetic improvements like shape and color. Crowns cover the entire tooth and are used for weakened, cracked, or heavily filled teeth. Our dentist will recommend the best option during your consultation.',
        },
        {
          question: 'How do I choose a dentist in Al Rigga, Dubai?',
          answer: 'Look for DHA-licensed dentists with experience in your required treatment. At Apollo Advanced Medical Center, our dental team includes general dentists, a dental surgeon, and a specialist orthodontist — all DHA-licensed and committed to patient comfort.',
        },
      ]}
      areaName="Al Rigga, Union Dubai"
      path="/services/dental-services"
    />
  )
}

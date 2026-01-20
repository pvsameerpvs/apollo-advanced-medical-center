import type { Metadata } from 'next'

import { ServicePageTemplate } from '@/components/sections/service-page'

export const metadata: Metadata = {
  title: 'Dental Services in Deira, Dubai',
  description:
    'Teeth whitening, scaling & polishing, root canal, fillings, crowns, veneers, dentures and extractions at Apollo Advanced Medical Center in Deira, Dubai. Book an appointment.',
  alternates: { canonical: '/services/dental-services' },
}

export default function DentalServicesPage() {
  return (
    <ServicePageTemplate
      title="Dental Services"
      intro="From routine cleaning to advanced restorative work, our dental team provides gentle, medical-grade care designed around comfort, hygiene, and long-term oral health. Every plan includes clear options and aftercare instructions."
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
    />
  )
}

import type { Metadata } from 'next'

import { ServicePageTemplate } from '@/components/sections/service-page'

export const metadata: Metadata = {
  title: 'Slimming & Body Contouring in Deira, Dubai',
  description: 'Non-invasive slimming and body contouring support in Deira, Dubai with professional guidance and safe protocols.',
  alternates: { canonical: '/services/slimming-body-contouring' },
}


export default function SlimmingBodyContouringPage() {
  return (
    <ServicePageTemplate
      title="Slimming & Body Contouring"
      intro="Non-invasive body treatments planned around your goals, comfort, and safety."
      included={["Slimming Treatment", "Body Contouring", "Targeted Areas"]}
      benefits={[
        'Non-invasive options supervised by professionals',
        'Targeted plans for specific body areas',
        'Comfort-focused sessions and aftercare',
        'Transparent expectations and package options',
      ]}
      process={[
        'Consultation to confirm goals and suitable areas',
        'Plan sessions and recommended schedule',
        'Treatment session with comfort checks',
        'Aftercare guidance and follow-up',
      ]}
      who={[
        'Clients looking for non-invasive body shaping support',
        'Those who want targeted sessions for specific areas',
        'Anyone seeking professional guidance and safe protocols',
      ]}
    />
  )
}

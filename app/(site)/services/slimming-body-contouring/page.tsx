import { ServicePageTemplate } from '@/components/sections/service-page'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Slimming & Body Contouring in Al Rigga, Union Dubai',
  description: 'Non-invasive slimming and body contouring support in Al Rigga, Union Dubai with professional guidance and safe protocols.',
  path: '/services/slimming-body-contouring',
  image: '/images/slimming-body-contouring-al-rigga-dubai.webp',
})


export default function SlimmingBodyContouringPage() {
  return (
    <ServicePageTemplate
      title="Slimming & Body Contouring"
      intro="Non-invasive body treatments planned around your goals, comfort, and safety."
      image="/images/slimming-body-contouring-al-rigga-dubai.webp"
      imageAlt="Slimming and body contouring service at Apollo Advanced Medical Center in Al Rigga, Union Dubai"
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
      faqs={[
        {
          question: 'How much does slimming treatment cost in Dubai?',
          answer: 'Slimming treatment costs vary based on the areas treated and session packages. At Apollo Advanced Medical Center in Al Rigga, we offer competitive rates with transparent pricing. Contact us for a personalized quote.',
        },
        {
          question: 'Is body contouring safe and non-invasive?',
          answer: 'Yes, our slimming and body contouring treatments are non-invasive and supervised by our DHA-licensed professionals. We prioritize safety and comfort in every session at our Al Rigga, Union Dubai clinic.',
        },
        {
          question: 'How many slimming sessions are needed to see results?',
          answer: 'Results vary by individual, but most clients see noticeable changes after 4-6 sessions. Your therapist will create a customized plan based on your goals and target areas during the initial consultation.',
        },
        {
          question: 'What body areas can be treated with body contouring?',
          answer: 'We offer targeted slimming treatments for abdomen, thighs, arms, waist, and other specific areas. During your consultation, we will assess your goals and recommend the best approach.',
        },
        {
          question: 'Where can I find the best slimming clinic near Al Rigga?',
          answer: 'Apollo Advanced Medical Center is located near the Fish Roundabout in Al Rigga, Union Dubai, close to Union Metro Station. We offer professional non-invasive slimming and body contouring treatments with DHA-licensed therapists.',
        },
      ]}
      areaName="Al Rigga, Union Dubai"
      path="/services/slimming-body-contouring"
    />
  )
}

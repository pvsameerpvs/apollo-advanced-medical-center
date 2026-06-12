'use client'

import Script from 'next/script'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is Apollo a medical centre or a clinic in Rigga, Deira, Dubai?',
    answer: 'Apollo Advanced Medical Center is a full-service medical centre in Rigga, Deira, Dubai — offering dental, aesthetic, laser, and skin care treatments. We are DHA-licensed and located near Fish Roundabout in Al Rigga, Union Dubai — just minutes from Deira.',
  },
  {
    question: 'Where is the best medical center near me in Rigga, Deira?',
    answer: 'Apollo Advanced Medical Center is located at BA1 Mezzanine floor, Bin Jarsh building, near Fish Roundabout, Al Rigga, Union Dubai. We are 2 minutes from Union Metro Station and easily accessible from all parts of Deira. Open Mon-Sat 9 AM to 11 PM.',
  },
  {
    question: 'What treatments are available at this medical centre in Deira?',
    answer: 'We offer dental services (whitening, scaling, root canal, crowns, veneers), laser hair removal, Hydrafacial, BB Glow, lip blushing, slimming & body contouring, and facial skin care — all by DHA-licensed professionals.',
  },
  {
    question: 'How do I book an appointment at Apollo in Rigga or Deira?',
    answer: 'You can book online at apolloadvancemedicalcenter.com/appointment, call us at 042864876, or message us on WhatsApp at +971 52 892 0301.',
  },
  {
    question: 'Is Apollo a DHA-licensed medical center in Dubai?',
    answer: 'Yes, Apollo Advanced Medical Center is fully DHA-licensed. All our doctors, dentists, and therapists hold valid DHA licenses. We follow strict international sterilization and clinical protocols.',
  },
]

export function HomeFaq() {
  return (
    <>
      <section className="border-t border-ui-border bg-ui-bg/30 py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-green md:text-4xl">Common Questions About Our Medical Centre in Rigga, Deira, Dubai</h2>
            <p className="mt-4 text-ui-text/70">Everything you need to know about Apollo Advanced Medical Center near Union, serving all of Deira and Rigga.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group rounded-2xl border border-ui-border bg-white p-6 shadow-soft transition-all open:border-brand-orange/30 open:shadow-lg">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                  <span className="text-base font-bold text-brand-green">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-orange transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 border-t border-ui-border pt-4">
                  <p className="text-sm leading-relaxed text-ui-text/80">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-ui-text/60">
              Still have questions? <Link href="/contact-us" className="font-bold text-brand-orange hover:underline">Contact us</Link> or <Link href="/appointment" className="font-bold text-brand-orange hover:underline">book an appointment</Link>.
            </p>
          </div>
        </div>
      </section>

      <Script
        id="schema-home-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}

import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import { BadgeCheck, CheckCircle2, Star, Calendar, ArrowLeft } from 'lucide-react'

import { getDoctorBySlug, doctors } from '@/lib/doctors'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getDoctorBySlug(slug)
  if (!d) return { title: 'Health Expert Profile' }
  return {
    title: `${d.name} | ${d.role} | Apollo AMC Dubai`,
    description: `${d.name} is a ${d.dha} in Deira, Dubai. Specialized in ${d.expertise.join(', ')}. Book your consultation today.`, 
  }
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getDoctorBySlug(slug)
  
  if (!d) {
    return (
      <section className="bg-white py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-brand-green">Profile Not Found</h1>
          <p className="mt-4 text-ui-text/70 text-lg">The specialist profile you are looking for might have been moved or removed.</p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/doctors">View All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: d.name,
    jobTitle: d.role,
    description: d.bio,
    medicalSpecialty: d.role,
    image: d.image,
  }

  return (
    <>
      <section className="relative bg-white pb-20 pt-10">
        <div className="container">
          {/* Back Button */}
          <Link href="/doctors" className="mb-8 inline-flex items-center text-sm font-medium text-ui-text/60 transition-colors hover:text-brand-green">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Doctors
          </Link>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Side: Info */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-brand-orangeSoft/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
                   {d.role}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-brand-green md:text-5xl lg:text-6xl">
                {d.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-ui-text/80">{d.qualifications}</p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 rounded-xl bg-ui-bg px-4 py-2 text-sm font-bold text-brand-green border border-brand-green/5">
                    <BadgeCheck className="h-5 w-5 text-brand-orange" />
                    {d.dha}
                 </div>
                 <div className="flex items-center gap-2 rounded-xl bg-ui-bg px-4 py-2 text-sm font-bold text-brand-green border border-brand-green/5">
                    <Star className="h-5 w-5 text-brand-orange" />
                    Specialist Care
                 </div>
              </div>

              <div className="mt-10">
                 <h2 className="text-2xl font-bold text-brand-green">Biography</h2>
                 <p className="mt-4 text-lg leading-relaxed text-ui-text/80">
                   {d.bio}
                 </p>
              </div>

              <div className="mt-12 grid gap-10 md:grid-cols-2">
                 <div>
                    <h3 className="text-xl font-bold text-brand-green">Core Expertise</h3>
                    <ul className="mt-4 space-y-3">
                       {d.expertise.map(e => (
                         <li key={e} className="flex items-start gap-3 text-sm text-ui-text/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                            <span>{e}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-brand-green">Treatments</h3>
                    <ul className="mt-4 space-y-3">
                       {d.services.map(s => (
                         <li key={s} className="flex items-start gap-3 text-sm text-ui-text/80">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                            <span>{s}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
            </div>

            {/* Right Side: Image and Sticky Card */}
            <div className="lg:col-span-5">
               <div className="sticky top-28 space-y-8">
                  {/* Doctor Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl ring-8 ring-ui-bg">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Booking Card */}
                  <div className="rounded-3xl bg-brand-green p-8 text-white shadow-xl shadow-brand-green/20">
                     <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-orange">
                           <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold leading-tight">Book an <br /> Appointment</h3>
                        </div>
                     </div>
                     <p className="mt-4 text-sm text-white/80 leading-relaxed">
                        Schedule a consultation with {d.name} today. We offer flexible timings to suit your busy schedule.
                     </p>
                     <div className="mt-8 grid gap-4">
                        <Button size="lg" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white border-none shadow-lg shadow-black/10" asChild>
                           <Link href="/appointment">Confirm Booking</Link>
                        </Button>
                        <a href={`tel:+971504953535`} className="flex items-center justify-center py-2 text-sm font-bold text-white/90 hover:text-white transition-colors">
                           Call for Instant Inquiry
                        </a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Script
        id={`schema-physician-${d.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
    </>
  )
}

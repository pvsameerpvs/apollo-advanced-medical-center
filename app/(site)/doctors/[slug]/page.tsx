import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

import { getDoctorBySlug, doctors } from '@/lib/doctors'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const d = getDoctorBySlug(slug)
  if (!d) return { title: 'Doctor Profile' }
  return {
    title: `${d.name} | ${d.role}`,
    description: `${d.name} - ${d.dha}. Book an appointment in Deira, Dubai.`, 
  }
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const d = getDoctorBySlug(slug)
  if (!d) {
    return (
      <section className="bg-white py-14">
        <div className="container">
          <h1 className="text-3xl font-semibold text-brand-green">Profile not found</h1>
          <p className="mt-3 text-ui-text/80">Please return to the doctors page.</p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/doctors">View Doctors</Link>
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
  }

  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold text-brand-orange">Doctors & Therapists</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">{d.name}</h1>
          <p className="mt-2 text-lg text-ui-text/80">{d.role}</p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft lg:col-span-2">
              <h2 className="text-2xl font-semibold text-brand-green">Profile</h2>
              <div className="mt-4 grid gap-3 text-sm text-ui-text/80">
                <div className="rounded-xl bg-white px-4 py-3">
                  <span className="font-semibold text-brand-green">Qualifications: </span>
                  {d.qualifications}
                </div>
                <div className="rounded-xl bg-white px-4 py-3">
                  <span className="font-semibold text-brand-green">License: </span>
                  {d.dha}
                </div>
                <div className="rounded-xl bg-white px-4 py-3">
                  <span className="font-semibold text-brand-green">About: </span>
                  {d.bio}
                </div>
              </div>

              <h3 className="mt-8 text-lg font-semibold text-brand-green">Expertise</h3>
              <ul className="mt-3 grid gap-2 text-sm text-ui-text/80 sm:grid-cols-2">
                {d.expertise.map((e) => (
                  <li key={e} className="rounded-xl bg-white px-4 py-3">
                    {e}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-brand-green">Services</h3>
              <ul className="mt-3 grid gap-2 text-sm text-ui-text/80 sm:grid-cols-2">
                {d.services.map((s) => (
                  <li key={s} className="rounded-xl bg-white px-4 py-3">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-ui-border bg-brand-orangeSoft p-8 shadow-soft">
              <h2 className="text-xl font-semibold text-brand-green">Book with {d.name}</h2>
              <p className="mt-2 text-sm text-ui-text/80">
                Select your preferred date & time and we will confirm quickly by phone or WhatsApp.
              </p>
              <div className="mt-6 grid gap-3">
                <Button asChild>
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/doctors">Back to Doctors</Link>
                </Button>
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

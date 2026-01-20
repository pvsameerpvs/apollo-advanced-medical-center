import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function ServicePageTemplate(props: {
  title: string
  intro: string
  benefits: string[]
  process: string[]
  who: string[]
  included?: string[]
}) {
  const { title, intro, benefits, process, who, included } = props

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <p className="text-sm font-semibold text-brand-orange">Services in Deira, Dubai</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ui-text/80 md:text-lg">{intro}</p>

        {included?.length ? (
          <div className="mt-10 rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-green">Includes</h2>
            <ul className="mt-4 grid gap-3 text-sm text-ui-text/80 sm:grid-cols-2">
              {included.map((i) => (
                <li key={i} className="rounded-xl bg-white px-4 py-3">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-green">Benefits</h2>
            <ul className="mt-4 grid gap-3 text-sm text-ui-text/80">
              {benefits.map((b) => (
                <li key={b} className="rounded-xl bg-white px-4 py-3">
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-green">Treatment process</h2>
            <ol className="mt-4 grid gap-3 text-sm text-ui-text/80">
              {process.map((p, idx) => (
                <li key={p} className="rounded-xl bg-white px-4 py-3">
                  <span className="mr-2 font-semibold text-brand-orange">{idx + 1}.</span>
                  {p}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-ui-border bg-ui-bg p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-brand-green">Who it’s for</h2>
            <ul className="mt-4 grid gap-3 text-sm text-ui-text/80">
              {who.map((w) => (
                <li key={w} className="rounded-xl bg-white px-4 py-3">
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-ui-border bg-brand-orangeSoft p-8 shadow-soft">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-semibold text-brand-green">Book a consultation</p>
              <p className="mt-1 text-sm text-ui-text/80">
                Get a personalized plan, expected outcomes, and aftercare guidance from our DHA-licensed team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Back to Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

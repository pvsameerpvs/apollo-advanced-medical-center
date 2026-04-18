import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="bg-ui-bg py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-ui-border bg-white px-8 py-14 text-center shadow-soft md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-orange">404</p>
          <h1 className="mt-4 text-4xl font-bold text-brand-green md:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ui-text/70">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/appointment/">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

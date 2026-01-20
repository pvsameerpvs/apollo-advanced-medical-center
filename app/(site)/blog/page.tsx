import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllPosts } from '@/lib/blog'
import { InstagramGrid } from '@/components/sections/instagram-grid'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Patient education articles for dental and aesthetic care in Deira, Dubai. Read practical guides from Apollo Advanced Medical Center.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <h1 className="text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">Blog</h1>
          <p className="mt-4 max-w-3xl text-base text-ui-text/80 md:text-lg">
            Practical health, dental, and aesthetic insights. Every article ends with a simple booking link when you&apos;re ready.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {posts.map((p, idx) => (
              <div key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block rounded-2xl border border-ui-border bg-ui-bg p-6 shadow-soft transition hover:-translate-y-0.5"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-ui-text">
                    <span className="text-brand-orange">{p.category}</span>
                    <span className="text-ui-text/50">•</span>
                    <span>{p.date}</span>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-brand-green">{p.title}</p>
                  <p className="mt-2 text-sm text-ui-text/80">{p.description}</p>
                  <div className="mt-4 text-sm font-medium text-brand-orange">Read More</div>
                </Link>

                {idx === 2 ? <InstagramGrid compact /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

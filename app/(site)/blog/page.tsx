import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

import { getAllPosts } from '@/lib/blog'
import { InstagramGrid } from '@/components/sections/instagram-grid'

export const metadata: Metadata = {
  title: 'Practical Health & Wellness Blog | Apollo AMC',
  description:
    'Expert guides on dental care, aesthetics, and skin health from our specialists in Deira, Dubai. Stay informed on the latest medical insights.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const allPosts = getAllPosts()
  const featuredPost = allPosts[0]
  const otherPosts = allPosts.slice(1)

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src="/images/blog-hero.jpg"
          alt="Medical Insights"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Wellness Insights
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Expert medical advice, dental care tips, and aesthetic guides curated by our specialists in Dubai.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative grid gap-8 overflow-hidden rounded-[2.5rem] bg-white shadow-soft transition-all hover:shadow-2xl lg:grid-cols-2 lg:items-center"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-12">
                   <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-orange">
                     <Tag className="h-4 w-4" />
                     {featuredPost.category}
                   </div>
                  <h2 className="mt-4 text-3xl font-bold text-brand-green md:text-4xl lg:text-5xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-ui-text/70">
                    {featuredPost.description}
                  </p>
                  <div className="mt-8 flex items-center gap-6 text-sm text-ui-text/50">
                    <div className="flex items-center gap-2">
                       <Calendar className="h-4 w-4" />
                       {featuredPost.date}
                    </div>
                  </div>
                  <div className="mt-10 inline-flex items-center font-bold text-brand-green">
                    Read Featured Article <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Grid of Other Posts */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((p, idx) => (
              <div key={p.slug} className="flex flex-col">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  
                  <div className="flex flex-1 flex-col p-8">
                     <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                       {p.category}
                     </div>
                    <h3 className="mt-4 text-xl font-bold leading-tight text-brand-green transition-colors group-hover:text-brand-orange">
                      {p.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ui-text/70 line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-ui-border pt-6">
                       <div className="flex items-center gap-2 text-xs text-ui-text/50">
                          <Calendar className="h-3.5 w-3.5" />
                          {p.date}
                       </div>
                       <div className="text-xs font-bold text-brand-green group-hover:translate-x-1 transition-transform">
                          Read More →
                       </div>
                    </div>
                  </div>
                </Link>
                
                {idx === 2 ? (
                  <div className="mt-10 block lg:hidden">
                    <InstagramGrid compact />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-20 hidden lg:block">
            <InstagramGrid compact />
          </div>
        </div>
      </section>
    </>
  )
}

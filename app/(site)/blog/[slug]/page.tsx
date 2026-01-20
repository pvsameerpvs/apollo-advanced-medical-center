import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag, Clock, Share2, User } from 'lucide-react'

import { getAllPosts, getPost } from '@/lib/blog'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Blog Post' }
  return {
    title: `${post.meta.title} | Apollo AMC Blog`,
    description: post.meta.description,
    alternates: { canonical: `/blog/${post.meta.slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2)

  if (!post) {
    return (
      <section className="bg-white py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-brand-green">Article Not Found</h1>
          <p className="mt-4 text-ui-text/70">The article you looking for may have been moved or deleted.</p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/blog">Back to Wellness Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const MDX = (await import(`@/content/blog/${slug}.mdx`)).default

  return (
    <>
      {/* Article Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-brand-green">
        <Image
          src={post.meta.image}
          alt={post.meta.title}
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/40 to-transparent" />
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Link href="/blog" className="mb-8 inline-flex items-center text-sm font-medium text-white/70 transition-colors hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-brand-orange">
               <Tag className="h-4 w-4" />
               {post.meta.category}
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {post.meta.title}
            </h1>
            <div className="mt-8 flex justify-center items-center gap-6 text-sm font-medium text-white/70">
               <div className="flex items-center gap-2">
                 <Calendar className="h-4 w-4" />
                 {post.meta.date}
               </div>
               <div className="flex items-center gap-2">
                 <Clock className="h-4 w-4" />
                 5 min read
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none prose-headings:text-brand-green prose-headings:font-bold prose-p:text-ui-text/80 prose-li:text-ui-text/80 prose-strong:text-brand-green prose-a:text-brand-orange hover:prose-a:text-brand-orange/80 prose-img:rounded-3xl prose-img:shadow-xl">
                <MDX />
              </article>

              <div className="mt-16 border-t border-ui-border pt-10">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                          <User className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-brand-green">Apollo Medical Team</p>
                          <p className="text-xs text-ui-text/50">DHA Licensed Specialists</p>
                       </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                       <Share2 className="h-4 w-4" /> Share
                    </Button>
                 </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
               <div className="sticky top-28 space-y-10">
                  {/* Booking Card */}
                  <div className="rounded-3xl bg-brand-green p-8 text-white shadow-xl shadow-brand-green/20">
                    <h3 className="text-xl font-bold">Book a Consultation</h3>
                    <p className="mt-4 text-sm text-white/80 leading-relaxed">
                      Speak with our DHA-licensed experts today about your health and aesthetic goals.
                    </p>
                    <Button className="mt-8 w-full bg-brand-orange hover:bg-brand-orange/90 text-white" asChild>
                       <Link href="/appointment">Schedule Appointment</Link>
                    </Button>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div>
                      <h4 className="mb-6 text-lg font-bold text-brand-green">Related Articles</h4>
                      <div className="space-y-6">
                        {relatedPosts.map(p => (
                          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                            <div className="relative mb-3 aspect-video overflow-hidden rounded-2xl">
                               <Image 
                                 src={p.image} 
                                 alt={p.title} 
                                 fill 
                                 className="object-cover transition-transform group-hover:scale-105" 
                               />
                            </div>
                            <h5 className="text-sm font-bold text-brand-green transition-colors group-hover:text-brand-orange leading-snug">
                               {p.title}
                            </h5>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trust Info */}
                  <div className="rounded-3xl border border-ui-border p-6 text-center">
                     <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Medical Standard</p>
                     <p className="mt-2 text-sm text-ui-text/70 italic">"All content reviewed by DHA licensed medical practitioners."</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}


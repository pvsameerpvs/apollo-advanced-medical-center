import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllPosts, getPost } from '@/lib/blog'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Blog' }
  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: { canonical: `/blog/${post.meta.slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) {
    return (
      <section className="bg-white py-14">
        <div className="container">
          <h1 className="text-3xl font-semibold text-brand-green">Post not found</h1>
          <div className="mt-6">
            <Button asChild>
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const MDX = (await import(`@/content/blog/${params.slug}.mdx`)).default

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-brand-orange">{post.meta.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-green md:text-5xl">
            {post.meta.title}
          </h1>
          <p className="mt-2 text-sm text-ui-text/70">{post.meta.date}</p>
          <div className="prose mt-8 max-w-none prose-headings:text-brand-green prose-strong:text-ui-text prose-p:text-ui-text/80">
            <MDX />
          </div>

          <div className="mt-10 rounded-3xl border border-ui-border bg-brand-orangeSoft p-8 shadow-soft">
            <p className="text-lg font-semibold text-brand-green">Book an Appointment</p>
            <p className="mt-2 text-sm text-ui-text/80">
              Get a personalized plan from our DHA-licensed team in Deira, Dubai.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

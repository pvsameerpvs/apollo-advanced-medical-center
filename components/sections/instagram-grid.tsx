import { Instagram } from 'lucide-react'

import { site } from '@/lib/site'
import { CommentAnimation } from '@/components/ui/comment-animation'

const COMMENTS_1 = [
  { user: 'Sarah M.', text: 'The hydrafacial results are amazing! 😍' },
  { user: 'Ahmed K.', text: 'Best dental clinic in Dubai. Very professional.' },
  { user: 'Fatima A.', text: 'Dr. Shazia is so gentle and kind. ❤️' },
]

const COMMENTS_2 = [
  { user: 'Jessica R.', text: 'Laser hair removal was painless. Highly recommend!' },
  { user: 'Mike D.', text: 'Finally confident in my smile again.' },
  { user: 'Layla H.', text: 'Love the new clinic vibes! ✨' },
]

export function InstagramGrid({ 
  compact = false,
  title = "Real Results, Real Stories",
  description = "Watch our latest treatments and patient transformations on Instagram."
}: { 
  compact?: boolean;
  title?: string;
  description?: string;
}) {
  const reelIds = ['DS2YBe1EbUy', 'DS2XMLGEU3v']

  return (
    <section className={compact ? 'py-10' : 'py-16 md:py-24 bg-white'}>
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand-green sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-ui-text/80">
              {description}
            </p>
          </div>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-6 py-3 text-sm font-semibold text-brand-green transition-all hover:bg-brand-orange hover:text-white"
          >
            <Instagram className="h-5 w-5" />
            Follow @apollo_medical_center
          </a>
        </div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {reelIds.map((id, index) => (
            <div
              key={id}
              className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.5rem] border border-ui-border bg-white shadow-2xl shadow-brand-green/5 ring-1 ring-black/5"
            >
              <iframe
                src={`https://www.instagram.com/reel/${id}/embed`}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
              <CommentAnimation comments={index === 0 ? COMMENTS_1 : COMMENTS_2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

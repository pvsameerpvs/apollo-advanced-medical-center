import { Hero } from '@/components/sections/hero'
import { ServiceCards } from '@/components/sections/service-cards'
import { DoctorCards } from '@/components/sections/doctor-cards'
import { InstagramGrid } from '@/components/sections/instagram-grid'
import { CtaBand } from '@/components/sections/cta-band'
import { HomeFaq } from '@/components/sections/home-faq'
import { createPageMetadata } from '@/lib/metadata'

const homeTitle = 'Apollo Advanced Medical Centre | Medical Center in Rigga, Deira, Dubai'
const homeDescription =
  'Apollo Advanced Medical Center in Rigga, Deira, Dubai — dental, aesthetic & laser clinic near Union. DHA medical centre. Book online or call 042864876.'

export const metadata = createPageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: '/',
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <DoctorCards />
      <HomeFaq />
      <InstagramGrid />
      <CtaBand />
    </>
  )
}

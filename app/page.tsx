import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { Approach } from '@/components/approach'
import { Pillars } from '@/components/pillars'
import { Team } from '@/components/team'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Investment } from '@/components/investment'
import { Testimonial } from '@/components/testimonial'
import { Faq } from '@/components/faq'
import { ApplyCta } from '@/components/apply-cta'
import { SiteFooter } from '@/components/site-footer'
import { RevealObserver } from '@/components/reveal-observer'

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TrustBar />
        <Approach />
        <Pillars />
        <Team />
        <Process />
        <About />
        <Investment />
        <Testimonial />
        <Faq />
        <ApplyCta />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  )
}

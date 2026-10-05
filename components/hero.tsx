import Image from 'next/image'
import { Button, Container, Eyebrow, Lead } from './ui'

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-svh items-center pb-20 pt-36"
      style={{ background: 'radial-gradient(ellipse at 75% 30%, var(--surface-raised) 0%, var(--background) 60%)' }}
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Eyebrow>{'Private Health & Performance Coaching · London'}</Eyebrow>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.1] md:text-6xl lg:text-7xl">
            Your career is at the top.
            <br />
            Your health should be <em className="italic text-gold">too.</em>
          </h1>
          <Lead className="mb-10 mt-7">
            A fully personalised, done-with-you programme for high-achieving women who lead businesses, teams and
            families — and refuse to compromise on energy, appearance or longevity. No diets. No fads. Just a precise
            plan, a world-class team, and results you can feel in the boardroom and at home.
          </Lead>
          <div className="flex flex-wrap gap-4">
            <Button href="#apply">Request a Private Consultation</Button>
            <Button href="#approach" variant="ghost">
              Discover the Approach
            </Button>
          </div>
          <p className="mt-9 text-sm tracking-wide text-muted-foreground">
            <strong className="font-medium text-gold">By application only</strong> · Limited client places each quarter
          </p>
        </div>

        <div className="relative isolate mx-auto w-full max-w-xs sm:max-w-sm">
          <div
            aria-hidden
            className="absolute -left-4 -top-4 bottom-4 right-4 -z-10 hidden border border-gold/50 md:block"
          />
          <div className="relative aspect-square w-full overflow-hidden">
            {/* Scaled crop keeps the frame to head and shoulders of the full-length source photo */}
            <Image
              src="/images/liz-portrait.jpg"
              alt="Liz Marsland, private health and performance coach for women in London"
              fill
              priority
              sizes="(min-width: 640px) 384px, 320px"
              className="origin-[52%_36%] scale-[1.8] object-cover object-top contrast-105 grayscale-[15%]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

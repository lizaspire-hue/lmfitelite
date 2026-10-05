import { Button, Container, Eyebrow, Lead } from './ui'

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-svh items-center pb-20 pt-36"
      style={{ background: 'radial-gradient(ellipse at 75% 30%, var(--surface-raised) 0%, var(--background) 60%)' }}
    >
      <Container>
        <div className="max-w-3xl">
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
      </Container>
    </section>
  )
}

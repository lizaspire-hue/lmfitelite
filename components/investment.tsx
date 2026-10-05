import { Check } from 'lucide-react'
import { Button, Container, Eyebrow, Lead, SectionHeading } from './ui'

const tiers = [
  {
    tag: 'Foundation',
    name: 'The 12-Week Reset',
    featured: false,
    features: [
      'Hormone & biomarker testing',
      'Bespoke 12-week training & nutrition plan',
      'Weekly 1-to-1 coaching sessions',
      'Direct messaging support with Liz',
      'Re-test and review at week 12',
    ],
  },
  {
    tag: 'Signature',
    name: 'The Private Client Programme',
    featured: true,
    features: [
      'Everything in Foundation',
      'Your coordinated specialist team',
      'Physio, massage & spa recovery integrated',
      'Up to 3 sessions per week, anywhere in London',
      'Travel & schedule-proof programming',
      'Priority, concierge-level access',
    ],
  },
]

export function Investment() {
  return (
    <section
      className="border-t border-line py-20 text-center md:py-28"
      style={{ background: 'radial-gradient(ellipse at center, #0f1f45 0%, var(--background) 70%)' }}
    >
      <Container>
        <div className="reveal flex flex-col items-center">
          <Eyebrow>The investment</Eyebrow>
          <SectionHeading>An investment in the asset that funds everything else.</SectionHeading>
          <Lead className="mb-12">
            Every programme is tailored, so pricing is confirmed after your consultation. Places are deliberately
            limited to guarantee a fully personalised experience.
          </Lead>
        </div>

        <div className="reveal mx-auto mb-12 grid max-w-4xl gap-8 text-left md:grid-cols-2">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`border bg-background/60 px-9 py-11 ${t.featured ? 'border-gold' : 'border-line'}`}
            >
              <span className="text-xs font-medium uppercase tracking-[0.24em] text-gold">{t.tag}</span>
              <h3 className="mb-1.5 mt-3 font-serif text-2xl font-medium leading-tight">{t.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">Investment on application</p>
              <ul className="flex flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.92rem] text-muted-foreground">
                    <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Button href="#apply">Apply for a Place</Button>
      </Container>
    </section>
  )
}

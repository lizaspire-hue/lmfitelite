import { Container, Eyebrow, SectionHeading } from './ui'

const steps = [
  {
    label: 'Step one',
    title: 'Private Consultation',
    body: 'A confidential conversation about your goals, lifestyle, history and what success looks like for you.',
  },
  {
    label: 'Step two',
    title: 'Deep Assessment',
    body: 'Hormone and biomarker testing, movement and posture analysis, and a full picture of sleep, stress and nutrition.',
  },
  {
    label: 'Step three',
    title: 'Your Blueprint',
    body: 'A bespoke 12-week plan and your hand-picked specialist team — built around your diary, not the other way round.',
  },
  {
    label: 'Step four',
    title: 'Measure & Refine',
    body: 'Ongoing coaching, regular re-testing and reviews, so progress is visible, measurable and lasting.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="reveal">
          <Eyebrow>The process</Eyebrow>
          <SectionHeading>Precise. Personal. Proven.</SectionHeading>
        </div>
        <ol className="reveal mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.title} className="border-t border-gold pt-6">
              <small className="text-xs font-medium uppercase tracking-[0.2em] text-accent">{s.label}</small>
              <h3 className="mb-2.5 mt-2.5 font-serif text-2xl font-medium leading-tight">{s.title}</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

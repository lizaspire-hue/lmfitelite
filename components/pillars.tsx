import { Container, Eyebrow, Lead, SectionHeading } from './ui'

const pillars = [
  {
    title: 'Hormone & Biomarker Testing',
    body: "Comprehensive blood work and hormone profiling at the outset and throughout, so every decision is based on your physiology — not someone else's template.",
  },
  {
    title: '1-to-1 Strength Coaching',
    body: 'Expert, private training with Liz — in a discreet studio, your home or your office — designed for strength, posture, longevity and a confident, capable body.',
  },
  {
    title: 'Nutrition Without Dieting',
    body: 'A realistic way of eating that fits business lunches, travel and family dinners. Energy-led, sustainable, and never restrictive.',
  },
  {
    title: 'Recovery & Restoration',
    body: 'Curated access to physiotherapy, sports massage, spa therapies, sound healing and breathwork — because performance depends on recovery.',
  },
  {
    title: 'Energy, Sleep & Stress',
    body: 'Practical strategies to manage cortisol, sleep deeply and sustain focus through long days and demanding seasons of life.',
  },
  {
    title: 'Concierge-Level Support',
    body: 'Direct access to Liz, regular reviews, and a plan that adapts the moment your schedule, travel or circumstances change.',
  },
]

export function Pillars() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="reveal">
          <Eyebrow>{"What's included"}</Eyebrow>
          <SectionHeading>Every base covered. Nothing left to chance.</SectionHeading>
          <Lead>
            One programme, built entirely around you — your body, your diary, your goals — and managed end to end so
            you never have to coordinate a thing.
          </Lead>
        </div>

        <ul className="reveal mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <li key={p.title} className="bg-background px-9 py-11 transition-colors duration-300 hover:bg-surface">
              <h3 className="mb-3 font-serif text-2xl font-medium leading-tight">{p.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

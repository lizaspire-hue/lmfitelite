import { Container, Eyebrow, Lead, SectionHeading } from './ui'

const specialists = [
  'Physiotherapists',
  "Hormone & Women's Health Specialists",
  'Nutrition Experts',
  'Massage Therapists',
  'Spa & Recovery Partners',
  'Therapists & Wellbeing Practitioners',
  'Breathwork & Sound Healing',
  'Yoga & Mobility',
  'Image & Style Partners',
]

export function Team() {
  return (
    <section id="team" className="border-t border-line bg-surface py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <Eyebrow>Your specialist team</Eyebrow>
          <SectionHeading>A cohort of elite professionals — assembled around you.</SectionHeading>
          <Lead>
            {"You won't be handed off or left to search for the right people. Liz coordinates a trusted network of practitioners, matched to your needs and brought in exactly when they add value."}
          </Lead>
        </div>
        <ul className="reveal flex flex-wrap gap-3">
          {specialists.map((s) => (
            <li key={s} className="border border-line px-5 py-2.5 text-sm tracking-wide">
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

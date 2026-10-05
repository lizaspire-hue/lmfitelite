import { Container, Eyebrow, Lead, SectionHeading } from './ui'

const points = [
  "You don't have time for trial and error, diets or the latest trend",
  'You want to look and feel sharp — and be taken seriously in every room',
  'You want data, not guesswork: hormones, biomarkers, real numbers',
  'You expect the same standard of service you deliver to your own clients',
]

export function Approach() {
  return (
    <section id="approach" className="border-t border-line py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal">
          <Eyebrow>Who this is for</Eyebrow>
          <SectionHeading>You carry more than most people ever will.</SectionHeading>
          <Lead>
            You run at a level few understand — leading, deciding, parenting, showing up. But energy dips, sleep
            suffers, hormones shift, and the body that used to keep up starts asking questions.
          </Lead>
          <ul className="mt-7">
            {points.map((p) => (
              <li key={p} className="flex gap-4 border-b border-line py-4 text-muted-foreground">
                <span aria-hidden className="text-gold">
                  —
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <figure className="reveal">
          <blockquote className="border-l-2 border-gold pl-8 font-serif text-3xl leading-snug md:text-4xl">
            {
              '"Health isn\u2019t a project you squeeze in. It\u2019s the asset that funds everything else. Invest in it the way you\u2019d invest in anything that matters."'
            }
          </blockquote>
          <figcaption className="mt-5 pl-8 text-sm uppercase tracking-[0.12em] text-muted-foreground">
            — Liz Marsland, Founder
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}

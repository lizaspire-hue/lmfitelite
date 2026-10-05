import Image from 'next/image'
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
          <figcaption className="mt-3 flex items-center justify-between gap-6 pl-8 text-sm uppercase tracking-[0.12em] text-muted-foreground">
            <span>— Liz Marsland, Founder</span>
            <Image
              src="/images/liz-headshot.jpg"
              alt=""
              width={550}
              height={550}
              sizes="96px"
              className="size-20 shrink-0 rounded-full border border-gold/60 object-cover md:size-24"
            />
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}

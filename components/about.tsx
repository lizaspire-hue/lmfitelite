import Image from 'next/image'
import { Container, Eyebrow, Lead, SectionHeading } from './ui'

const credentials = [
  { value: '20+', label: 'Years coaching' },
  { value: 'BSc', label: 'Sports Science' },
  { value: '500+', label: 'Clients trained' },
]

export function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal mx-auto w-full max-w-md">
          <Image
            src="/images/liz-coaching-crop.jpg"
            alt="Liz Marsland coaching a client through a barbell exercise"
            width={1100}
            height={850}
            sizes="448px"
            className="w-full object-cover"
          />
        </div>
        <div className="reveal">
          <Eyebrow>About Liz</Eyebrow>
          <SectionHeading>Two decades of expertise. One focus: you.</SectionHeading>
          <Lead>
            Liz Marsland is a BSc Sports Science graduate with over 20 years of coaching experience, having worked
            alongside physiotherapists and with athletes, executives and women at every life stage. She brings together
            strength training, rehabilitation, yoga, breathwork, sound healing and massage into one integrated,
            evidence-based approach.
          </Lead>
          <Lead className="mt-4">
            Her corporate wellbeing work is trusted by organisations including Clifford Chance and The New York Times —
            and her private clients come to her for the same reason: she delivers, discreetly and without compromise.
          </Lead>
          <dl className="mt-9 grid grid-cols-3 gap-5">
            {credentials.map((c) => (
              <div key={c.label} className="flex flex-col-reverse border-t border-line pt-3.5">
                <dt className="text-xs tracking-wide text-muted-foreground">{c.label}</dt>
                <dd className="font-serif text-4xl font-medium text-gold">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

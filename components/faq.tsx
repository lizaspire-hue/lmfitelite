import { Container, Eyebrow, SectionHeading } from './ui'

const faqs = [
  {
    q: 'I have very little time. Will this work for me?',
    a: "It's designed for exactly that. Sessions fit your diary — early mornings, lunchtimes, at home or at your office — and everything else is coordinated for you. Efficiency is built in.",
  },
  {
    q: 'What does hormone and biomarker testing involve?',
    a: 'A simple blood test arranged through a trusted partner, reviewed alongside your symptoms, energy and goals. It gives us a clear baseline and lets us track real change over time.',
  },
  {
    q: 'Is this a diet?',
    a: "No. There's no restriction, no fads and no counting your life away. You'll get a practical, sustainable approach to eating that supports energy, body composition and long-term health.",
  },
  {
    q: 'Where do sessions take place?',
    a: 'At a private London studio, your home, your workplace or outdoors — whichever suits you best. Remote coaching is available when you travel.',
  },
  {
    q: 'Is everything confidential?',
    a: 'Completely. Discretion is fundamental to how Liz works with every client and every member of the specialist team.',
  },
  {
    q: 'How do I start?',
    a: "Apply below for a private consultation. If we're the right fit, you'll receive a tailored proposal and investment within 48 hours.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="reveal text-center">
          <Eyebrow>Questions</Eyebrow>
          <SectionHeading>Before we begin</SectionHeading>
        </div>
        <div className="reveal mx-auto mt-12 max-w-3xl">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-2xl leading-snug [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="font-sans font-light text-gold">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="mt-3.5 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

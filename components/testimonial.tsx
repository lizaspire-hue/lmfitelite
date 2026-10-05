import { Container, Eyebrow } from './ui'

export function Testimonial() {
  return (
    <section className="border-t border-line py-20 text-center md:py-28">
      <Container className="reveal">
        <Eyebrow>Client words</Eyebrow>
        <figure>
          <blockquote className="mx-auto mb-6 max-w-4xl text-balance font-serif text-3xl leading-snug md:text-4xl">
            {
              '"Within 8 weeks I was pain-free and stronger than I\u2019d been in my 30s. She doesn\u2019t just train you — she educates you about your own body."'
            }
          </blockquote>
          <figcaption className="text-sm uppercase tracking-[0.12em] text-muted-foreground">
            Sarah M. · Marketing Director
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}

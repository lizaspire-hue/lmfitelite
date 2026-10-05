import { BOOKING_URL, Button, Container, Eyebrow, Lead, SectionHeading, WHATSAPP_URL } from './ui'

export function ApplyCta() {
  return (
    <section id="apply" className="border-t border-line bg-surface py-20 text-center md:py-28">
      <Container className="reveal flex flex-col items-center">
        <Eyebrow>Limited places</Eyebrow>
        <SectionHeading>
          Take your health as seriously as <em className="italic text-gold">everything else.</em>
        </SectionHeading>
        <Lead className="mb-10">
          Request a private, no-obligation consultation with Liz. Places are limited each quarter to guarantee every
          client receives an exceptional, fully personalised experience.
        </Lead>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={BOOKING_URL} external>
            Request a Private Consultation
          </Button>
          <Button href={WHATSAPP_URL} variant="ghost" external>
            Message on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}

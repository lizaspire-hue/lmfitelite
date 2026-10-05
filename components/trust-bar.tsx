import { Container } from './ui'

const clients = ['Clifford Chance', 'The New York Times', 'Logicalis', 'Rand Merchant Bank', 'Workspace Group']

export function TrustBar() {
  return (
    <section aria-label="Trusted by" className="bg-surface py-12">
      <Container>
        <p className="mb-5 text-center text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Trusted by leading organisations
        </p>
        <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-serif text-xl text-foreground/80">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

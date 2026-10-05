import { Container, Logo, WHATSAPP_URL } from './ui'

const contact = [
  { href: 'mailto:lmfit100@gmail.com', label: 'lmfit100@gmail.com' },
  { href: WHATSAPP_URL, label: '07457 405030' },
  { href: 'https://instagram.com/lmfit_trainer', label: 'Instagram' },
  { href: 'https://www.lmfit.uk', label: 'lmfit.uk' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line pb-10 pt-16 text-sm text-muted-foreground">
      <Container className="flex flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-2.5">
          <span className="text-foreground">
            <Logo />
          </span>
          <p>{'Private health & performance coaching for women · London'}</p>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {contact.map((c) => (
            <li key={c.label}>
              <a href={c.href} className="transition-colors hover:text-gold">
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="mt-8 text-xs">
        {`© ${new Date().getFullYear()} LMFIT · London · All rights reserved`}
      </Container>
    </footer>
  )
}

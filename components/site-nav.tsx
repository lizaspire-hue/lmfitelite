'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button, Container, Logo } from './ui'

const links = [
  { href: '#approach', label: 'Approach' },
  { href: '#team', label: 'Your Team' },
  { href: '#process', label: 'The Process' },
  { href: '#about', label: 'About Liz' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" aria-label="LMFIT Private home" onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 text-sm tracking-wider md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
          <Button href="#apply" className="px-5 py-3">
            Apply
          </Button>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="flex flex-col gap-6 border-b border-line bg-background px-6 py-8 text-sm tracking-wider md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="hover:text-gold">
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={close}
            className="self-start border border-gold bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-background"
          >
            Apply
          </a>
        </nav>
      )}
    </header>
  )
}

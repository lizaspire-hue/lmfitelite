import type { ReactNode } from 'react'

export const BOOKING_URL = 'https://lmfit.as.me/?appointmentType=category:PT%20%2F%20LMFIT'
export const WHATSAPP_URL = 'https://wa.me/447457405030'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 block text-xs font-medium uppercase tracking-[0.28em] text-accent">
      {children}
    </span>
  )
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className}`}>{children}</div>
}

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mb-5 text-balance font-serif text-4xl font-medium leading-tight md:text-5xl ${className}`}>
      {children}
    </h2>
  )
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground ${className}`}>{children}</p>
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'gold' | 'ghost'
  external?: boolean
  className?: string
}

export function Button({ href, children, variant = 'gold', external, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center border px-8 py-4 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold'
  const styles =
    variant === 'gold'
      ? 'border-gold bg-gold text-background hover:bg-transparent hover:text-gold'
      : 'border-line text-foreground hover:border-gold hover:text-gold'
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function Logo() {
  return (
    <span className="font-sans text-base font-semibold tracking-[0.18em]">
      LMFIT
      <span className="ml-1.5 text-xs font-light tracking-[0.3em] text-gold">PRIVATE</span>
    </span>
  )
}

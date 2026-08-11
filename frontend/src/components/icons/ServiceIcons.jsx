export function EmailIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="5" y="13" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M7 15.5 20 25.5 33 15.5" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="35" cy="16" r="8" fill="var(--color-paper)" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M35 12.4c-1.8 0-3 1.1-3 2.7 0 1.1.7 1.9 1.8 2.3l.9.3c.5.2.7.4.7.8 0 .5-.5.9-1.3.9-1 0-1.6-.5-1.8-1.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M35 20.8v1.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

export function ComputerIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="7" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 40h12M16 31h16M24 31v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17.5 22.5 22 18l2.2 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 15.2 32.6 24M30.8 16.4 25.2 23" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <circle cx="29.9" cy="19.6" r="2.1" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function WebIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M6 16h36" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="11.5" cy="12" r="1.15" fill="currentColor" />
      <circle cx="15.5" cy="12" r="1.15" fill="currentColor" />
      <circle cx="19.5" cy="12" r="1.15" fill="currentColor" />
      <path d="M18 26.5 13.5 31 18 35.5M30 26.5 34.5 31 30 35.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 24.5 22 37" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  )
}

const ICONS = {
  email: EmailIcon,
  computer: ComputerIcon,
  web: WebIcon,
}

export default function ServiceIcon({ name }) {
  const Icon = ICONS[name]
  if (!Icon) return null
  return <Icon />
}

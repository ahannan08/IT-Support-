import { NavLink } from 'react-router-dom'
import site from '../content/site.json'

export default function Navbar() {
  const brand = site.brand.logoText || site.brand.name
  const hasNav = site.nav.length > 0

  if (!brand && !hasNav) return null

  return (
    <header>
      {brand ? (
        <NavLink to="/" end>
          {brand}
        </NavLink>
      ) : null}
      {hasNav ? (
        <nav aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  )
}

import { Link, NavLink } from 'react-router-dom'
import site from '../content/site.json'
import { resolveImage } from '../content/images'

export default function Navbar() {
  const brand = site.brand.logoText || site.brand.name
  const logo = resolveImage(site.brand.logo)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        {logo || brand ? (
          <NavLink to="/" end className="site-brand">
            {logo ? <img src={logo} alt={brand || 'Imperium Technologies'} /> : brand}
          </NavLink>
        ) : (
          <span />
        )}
        <nav className="site-nav" aria-label="Primary">
          {site.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'site-nav-link is-active' : 'site-nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {site.cta ? (
          <Link className="site-header-cta" to={site.cta.path}>
            {site.cta.label}
          </Link>
        ) : (
          <span />
        )}
      </div>
    </header>
  )
}

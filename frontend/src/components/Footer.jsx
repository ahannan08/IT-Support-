import { Link } from 'react-router-dom'
import site from '../content/site.json'

export default function Footer() {
  const addresses = site.footer.addresses || []
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          {site.brand.name ? <p className="site-footer-name">{site.brand.name}</p> : null}
          <nav className="site-footer-nav" aria-label="Footer">
            {site.nav.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer-addresses">
          {addresses.map((address) => (
            <address key={address.label}>
              <p>{address.label}</p>
              {address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          ))}
        </div>
      </div>
      <p className="site-footer-copy">
        © {year} {site.brand.name}
      </p>
    </footer>
  )
}

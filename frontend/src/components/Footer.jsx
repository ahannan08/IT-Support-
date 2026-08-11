import { Link } from 'react-router-dom'
import site from '../content/site.json'

export default function Footer() {
  const hasContent =
    site.brand.name || site.footer.blurb || site.footer.columns.length || site.footer.copyright

  if (!hasContent) return null

  return (
    <footer>
      {site.brand.name ? <p>{site.brand.name}</p> : null}
      {site.footer.blurb ? <p>{site.footer.blurb}</p> : null}
      {site.footer.columns.map((column) => (
        <div key={column.title}>
          {column.title ? <p>{column.title}</p> : null}
          <ul>
            {column.links.map((link) => (
              <li key={link.path}>
                {link.path.startsWith('/') ? (
                  <Link to={link.path}>{link.label}</Link>
                ) : (
                  <a href={link.path}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {site.footer.copyright ? <p>{site.footer.copyright}</p> : null}
    </footer>
  )
}

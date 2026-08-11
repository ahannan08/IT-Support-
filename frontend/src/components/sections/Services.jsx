import { Link } from 'react-router-dom'
import ServiceIcon from '../icons/ServiceIcons'

export default function Services({ section }) {
  return (
    <section className="services">
      <div className="services-inner">
        <header className="services-header">
          {section.eyebrow ? <p className="services-eyebrow">{section.eyebrow}</p> : null}
          {section.headline ? <h2 className="services-headline">{section.headline}</h2> : null}
          {section.cta ? (
            <Link className="services-cta" to={section.cta.path}>
              {section.cta.label}
            </Link>
          ) : null}
        </header>

        <div className="services-grid">
          {(section.items || []).map((item, index) => (
            <article key={item.title} className="service-card">
              <div className="service-icon">
                <ServiceIcon name={item.icon} />
              </div>
              <div className="service-copy">
                <h3>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.title}
                </h3>
                {item.body ? <p>{item.body}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function WhoWeAre({ section }) {
  return (
    <section className="who">
      <div className="who-inner">
        <div className="who-intro">
          {section.eyebrow ? <p className="who-eyebrow">{section.eyebrow}</p> : null}
          {section.headline ? <h2 className="who-headline">{section.headline}</h2> : null}
          {section.intro ? <p className="who-lead">{section.intro}</p> : null}
          {section.footer ? <p className="who-footer">{section.footer}</p> : null}
          {section.cta ? (
            <Link className="who-cta" to={section.cta.path}>
              {section.cta.label}
            </Link>
          ) : null}
        </div>

        <div className="who-grid">
          {(section.items || []).map((item) => (
            <article key={item.title} className="who-card">
              <h3>{item.title}</h3>
              {item.body ? <p>{item.body}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'

export default function Banner({ section }) {
  return (
    <section className="banner">
      <div className="banner-copy">
        {section.eyebrow ? <p className="banner-eyebrow">{section.eyebrow}</p> : null}
        {section.headline ? <h1 className="banner-headline">{section.headline}</h1> : null}
        {section.cta ? (
          <Link className="banner-cta" to={section.cta.path}>
            {section.cta.label}
          </Link>
        ) : null}
        {section.items?.length ? (
          <ol className="banner-items">
            {section.items.map((item, index) => (
              <li key={item.title}>
                <span className="banner-item-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  {item.title ? <h2>{item.title}</h2> : null}
                  {item.body ? <p>{item.body}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      {section.image?.src ? (
        <div className="banner-media">
          <img src={section.image.src} alt={section.image.alt || ''} />
        </div>
      ) : null}
    </section>
  )
}

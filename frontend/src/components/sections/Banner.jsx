import { Link } from 'react-router-dom'
import { resolveImage } from '../../content/images'

export default function Banner({ section }) {
  const imageSrc = resolveImage(section.image?.src)

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
      {imageSrc ? (
        <div className="banner-media">
          <img src={imageSrc} alt={section.image?.alt || ''} />
        </div>
      ) : null}
    </section>
  )
}

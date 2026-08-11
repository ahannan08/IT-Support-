import { Link } from 'react-router-dom'

export default function GetStarted({ section }) {
  const image = section.image?.src

  return (
    <section
      className="get-started"
      style={image ? { '--get-started-image': `url(${image})` } : undefined}
    >
      <div className="get-started-inner">
        {section.eyebrow ? <p className="get-started-eyebrow">{section.eyebrow}</p> : null}
        {section.headline ? <h2 className="get-started-headline">{section.headline}</h2> : null}
        {section.body ? <p className="get-started-body">{section.body}</p> : null}
        {section.cta ? (
          <Link className="get-started-cta" to={section.cta.path}>
            {section.cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  )
}

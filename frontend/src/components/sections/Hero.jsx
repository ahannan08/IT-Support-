import { Link } from 'react-router-dom'

export default function Hero({ section }) {
  return (
    <section>
      {section.eyebrow ? <p>{section.eyebrow}</p> : null}
      {section.headline ? <h1>{section.headline}</h1> : null}
      {section.subheadline ? <p>{section.subheadline}</p> : null}
      {section.primaryCta ? <Link to={section.primaryCta.path}>{section.primaryCta.label}</Link> : null}
      {section.secondaryCta ? <Link to={section.secondaryCta.path}>{section.secondaryCta.label}</Link> : null}
    </section>
  )
}

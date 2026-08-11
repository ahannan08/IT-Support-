import { Link } from 'react-router-dom'

export default function Cta({ section }) {
  return (
    <section>
      {section.headline ? <h2>{section.headline}</h2> : null}
      {section.body ? <p>{section.body}</p> : null}
      {section.cta ? <Link to={section.cta.path}>{section.cta.label}</Link> : null}
    </section>
  )
}

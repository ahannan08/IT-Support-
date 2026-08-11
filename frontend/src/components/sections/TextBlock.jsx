export default function TextBlock({ section }) {
  return (
    <section>
      {section.headline ? <h1>{section.headline}</h1> : null}
      {section.body ? <p>{section.body}</p> : null}
    </section>
  )
}

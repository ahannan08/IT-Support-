export default function FeatureGrid({ section }) {
  return (
    <section>
      {section.headline ? <h2>{section.headline}</h2> : null}
      {(section.items || []).map((item) => (
        <article key={item.title}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.body ? <p>{item.body}</p> : null}
        </article>
      ))}
    </section>
  )
}

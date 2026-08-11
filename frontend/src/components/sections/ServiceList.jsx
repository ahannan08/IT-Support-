export default function ServiceList({ section }) {
  return (
    <section>
      {(section.items || []).map((item) => (
        <article key={item.title}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.body ? <p>{item.body}</p> : null}
        </article>
      ))}
    </section>
  )
}

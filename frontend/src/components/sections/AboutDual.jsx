export default function AboutDual({ section }) {
  return (
    <section className="about-dual">
      <div className="about-dual-panel">
        {(section.items || []).map((item) => (
          <article key={item.eyebrow || item.headline} className="about-dual-item">
            {item.eyebrow ? <p className="about-eyebrow">{item.eyebrow}</p> : null}
            {item.headline ? <h2 className="about-headline">{item.headline}</h2> : null}
            {item.body ? <p className="about-body">{item.body}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

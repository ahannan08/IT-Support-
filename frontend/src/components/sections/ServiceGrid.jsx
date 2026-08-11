export default function ServiceGrid({ section }) {
  return (
    <section className="service-grid-section">
      <div className="service-grid">
        {(section.items || []).map((item) => (
          <article key={item.title} className="service-grid-card">
            <div className="service-grid-media">
              {item.image?.src ? (
                <img src={item.image.src} alt={item.image.alt || item.title} />
              ) : null}
            </div>
            <div className="service-grid-copy">
              {item.title ? <h2>{item.title}</h2> : null}
              {item.body ? <p>{item.body}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

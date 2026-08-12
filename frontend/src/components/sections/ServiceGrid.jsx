import { resolveImage } from '../../content/images'

export default function ServiceGrid({ section }) {
  return (
    <section className="service-grid-section">
      <div className="service-grid">
        {(section.items || []).map((item) => {
          const imageSrc = resolveImage(item.image?.src)

          return (
            <article key={item.title} className="service-grid-card">
              <div className="service-grid-media">
                {imageSrc ? <img src={imageSrc} alt={item.image?.alt || item.title} /> : null}
              </div>
              <div className="service-grid-copy">
                {item.title ? <h2>{item.title}</h2> : null}
                {item.body ? <p>{item.body}</p> : null}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

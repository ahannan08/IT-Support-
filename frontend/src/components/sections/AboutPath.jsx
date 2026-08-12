import { resolveImage } from '../../content/images'

export default function AboutPath({ section }) {
  const imageSrc = resolveImage(section.image?.src)

  return (
    <section className="about-path">
      <div className="about-path-inner">
        <div className="about-path-copy">
          {section.eyebrow ? <p className="about-eyebrow">{section.eyebrow}</p> : null}
          {section.headline ? <h2 className="about-headline">{section.headline}</h2> : null}
          {section.body ? <p className="about-body">{section.body}</p> : null}
        </div>
        <div className="about-path-media">
          {imageSrc ? <img src={imageSrc} alt={section.image?.alt || ''} /> : null}
        </div>
      </div>
    </section>
  )
}

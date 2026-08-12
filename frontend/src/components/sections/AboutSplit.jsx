import { resolveImage } from '../../content/images'

export default function AboutSplit({ section }) {
  const imageOnLeft = section.imagePosition !== 'right'
  const paragraphs = Array.isArray(section.body) ? section.body : section.body ? [section.body] : []
  const imageSrc = resolveImage(section.image?.src)

  return (
    <section className={`about-split ${imageOnLeft ? 'is-image-left' : 'is-image-right'}`}>
      <div className="about-split-inner">
        <div className="about-media">
          {imageSrc ? <img src={imageSrc} alt={section.image?.alt || ''} /> : null}
        </div>
        <div className="about-copy">
          {section.eyebrow ? <p className="about-eyebrow">{section.eyebrow}</p> : null}
          {section.headline ? <h2 className="about-headline">{section.headline}</h2> : null}
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="about-body">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

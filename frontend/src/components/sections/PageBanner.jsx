export default function PageBanner({ section }) {
  return (
    <section className="page-banner">
      <div className="page-banner-inner">
        {section.eyebrow ? <p className="page-banner-eyebrow">{section.eyebrow}</p> : null}
        {section.headline ? <h1 className="page-banner-headline">{section.headline}</h1> : null}
        {section.body ? <p className="page-banner-body">{section.body}</p> : null}
      </div>
    </section>
  )
}

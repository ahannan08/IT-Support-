import Banner from './sections/Banner'
import Services from './sections/Services'
import Hero from './sections/Hero'
import FeatureGrid from './sections/FeatureGrid'
import ServiceList from './sections/ServiceList'
import TextBlock from './sections/TextBlock'
import Cta from './sections/Cta'
import ContactForm from './sections/ContactForm'

const SECTION_MAP = {
  banner: Banner,
  services: Services,
  hero: Hero,
  'feature-grid': FeatureGrid,
  'service-list': ServiceList,
  'text-block': TextBlock,
  cta: Cta,
  'contact-form': ContactForm,
}

export default function SectionRenderer({ sections = [] }) {
  return (
    <>
      {sections.map((section) => {
        const Component = SECTION_MAP[section.type]
        if (!Component) return null
        return <Component key={section.id} section={section} />
      })}
    </>
  )
}

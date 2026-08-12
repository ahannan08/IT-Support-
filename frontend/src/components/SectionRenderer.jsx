import Banner from './sections/Banner'
import Services from './sections/Services'
import WhoWeAre from './sections/WhoWeAre'
import GetStarted from './sections/GetStarted'
import Hero from './sections/Hero'
import FeatureGrid from './sections/FeatureGrid'
import ServiceList from './sections/ServiceList'
import TextBlock from './sections/TextBlock'
import Cta from './sections/Cta'
import ContactForm from './sections/ContactForm'
import PageBanner from './sections/PageBanner'
import ServiceGrid from './sections/ServiceGrid'
import AboutSplit from './sections/AboutSplit'
import AboutDual from './sections/AboutDual'
import AboutPath from './sections/AboutPath'

const SECTION_MAP = {
  banner: Banner,
  'page-banner': PageBanner,
  'service-grid': ServiceGrid,
  'about-split': AboutSplit,
  'about-dual': AboutDual,
  'about-path': AboutPath,
  services: Services,
  'who-we-are': WhoWeAre,
  'get-started': GetStarted,
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

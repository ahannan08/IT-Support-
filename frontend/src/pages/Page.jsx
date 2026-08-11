import { useEffect } from 'react'
import site from '../content/site.json'
import SectionRenderer from '../components/SectionRenderer'

export default function Page({ content }) {
  useEffect(() => {
    const brand = site.brand.name
    const title = content.meta?.title
    document.title = [title, brand].filter(Boolean).join(' · ') || 'IT Support'

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.meta?.description || '')
    }
  }, [content])

  return <SectionRenderer sections={content.sections} />
}

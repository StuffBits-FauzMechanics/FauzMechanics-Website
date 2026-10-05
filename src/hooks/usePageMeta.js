import { useEffect } from 'react'

const SITE = 'Fauz Mechanics'

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Digital Differential Pressure Instruments, Mumbai`
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}

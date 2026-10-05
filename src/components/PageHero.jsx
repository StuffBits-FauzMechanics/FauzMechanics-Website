import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Breadcrumbs({ items, tone = 'dark' }) {
  const light = tone === 'light'
  return (
    <nav aria-label="Breadcrumb">
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${light ? 'text-ink-400' : 'text-ink-500'}`}>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            {item.to ? (
              <Link to={item.to} className={`transition ${light ? 'hover:text-white' : 'hover:text-ink-900'}`}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? 'text-white' : 'text-ink-900'} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default function PageHero({ eyebrow, title, description, breadcrumbs, children }) {
  return (
    <section className="border-b border-ink-200 bg-white pb-14 pt-28 sm:pb-16 sm:pt-32">
      <div className="container">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl"
        >
          {eyebrow && (
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-500" />
              {eyebrow}
            </p>
          )}
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">{title}</h1>
          {description && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}

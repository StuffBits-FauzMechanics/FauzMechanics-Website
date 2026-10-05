import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { products, displayName } from '../data/products.js'

const ROTATE_MS = 6000

export default function HeroStage() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = products[index]

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % products.length), ROTATE_MS)
    return () => clearTimeout(id)
  }, [index, paused])

  return (
    <div className="w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[5/4] overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.slug}
            src={active.images[0].src}
            alt={active.images[0].alt}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-[8%] h-[84%] w-[84%] object-contain"
            fetchpriority="high"
          />
        </AnimatePresence>
      </div>

      <Link
        to={`/products/${active.slug}`}
        className="group mt-4 flex items-center justify-between gap-4 border-b border-ink-200 pb-4"
      >
        <span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">{active.series}</span>
          <span className="mt-1 block font-display text-lg font-bold text-ink-900">{displayName(active)}</span>
        </span>
        <span className="flex h-9 w-9 items-center justify-center border border-ink-900 text-ink-950 transition group-hover:border-brand-500 group-hover:bg-brand-500">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>

      <div className="mt-4 grid grid-cols-3 gap-4" role="tablist" aria-label="Featured products">
        {products.map((p, i) => (
          <button key={p.slug} type="button" role="tab" aria-selected={i === index} onClick={() => setIndex(i)} className="group text-left">
            <span className="block h-0.5 w-full overflow-hidden bg-ink-200">
              {i === index && (
                <motion.span
                  key={`${p.slug}-${paused}`}
                  className="block h-full bg-brand-500"
                  initial={{ width: paused ? '100%' : '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
                />
              )}
            </span>
            <span
              className={`mt-3 block text-sm font-semibold transition ${
                i === index ? 'text-ink-900' : 'text-ink-400 group-hover:text-ink-700'
              }`}
            >
              {displayName(p)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

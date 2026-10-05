import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProductGallery({ images }) {
  const [index, setIndex] = useState(0)
  const go = (dir) => setIndex((i) => (i + dir + images.length) % images.length)

  return (
    <div>
      <div
        className="group relative aspect-square overflow-hidden bg-white"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') go(-1)
          if (e.key === 'ArrowRight') go(1)
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 h-full w-full object-contain p-8"
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink-200 bg-white text-ink-700 opacity-0 transition hover:text-ink-900 focus:opacity-100 group-hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-ink-200 bg-white text-ink-700 opacity-0 transition hover:text-ink-900 focus:opacity-100 group-hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute bottom-4 right-4 bg-brand-500 px-2.5 py-1 text-xs font-semibold text-ink-950">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-6 gap-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`aspect-square overflow-hidden border bg-white transition ${
                i === index ? 'border-brand-500' : 'border-ink-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt="" className="h-full w-full object-contain p-1" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

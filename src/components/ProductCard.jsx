import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { displayName } from '../data/products.js'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex h-full flex-col border-x border-b border-t-2 border-ink-200 border-t-brand-500 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          loading="lazy"
          className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-ink-200 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-950">
          {product.series} · {product.category}
        </p>
        <h3 className="mt-2 text-xl font-bold">{displayName(product)}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{product.summary}</p>
        <dl className="mt-5 grid grid-cols-2 gap-px border border-ink-200 bg-ink-200">
          {product.highlights.slice(0, 2).map((h) => (
            <div key={h.label} className="bg-white px-3 py-2.5">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-ink-400">{h.label}</dt>
              <dd className="mt-0.5 text-sm font-semibold text-ink-900">{h.value}</dd>
            </div>
          ))}
        </dl>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 group-hover:text-brand-700">
          Know More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

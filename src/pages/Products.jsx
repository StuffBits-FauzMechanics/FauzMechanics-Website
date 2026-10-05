import { Link } from 'react-router-dom'
import { ArrowRight, FileDown, FileText } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { products, comparisonRows, displayName } from '../data/products.js'

function ProductRow({ product, index }) {
  const reversed = index % 2 === 1
  return (
    <Reveal className="grid items-center gap-10 border-b border-ink-200 py-14 first:pt-0 last:border-0 lg:grid-cols-2 lg:gap-16">
      <Link
        to={`/products/${product.slug}`}
        className={`group relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white ${
          reversed ? 'lg:order-2' : ''
        }`}
      >
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          loading="lazy"
          className="relative h-[80%] w-[80%] object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-800">{product.series}</span>
          <span className="text-sm font-medium text-ink-500">{product.category}</span>
        </div>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{displayName(product)}</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-500">{product.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-3">
          {product.highlights.map((h) => (
            <div key={h.label} className="border border-ink-200 px-4 py-3">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-ink-400">{h.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-ink-900">{h.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={`/products/${product.slug}`} className="btn-dark">
            View details <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={product.downloads[0].file} download className="btn-outline">
            <FileDown className="h-4 w-4" /> Brochure
          </a>
        </div>
      </div>
    </Reveal>
  )
}

function Comparison() {
  return (
    <section id="compare" className="section border-y border-ink-200 bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Compare"
          title="Find the right instrument"
          description="A side-by-side summary of key specifications. See each product page for the complete datasheet."
        />
        <Reveal className="mt-12 overflow-x-auto border border-ink-200 bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100">
                <th scope="col" className="w-48 p-5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                  Specification
                </th>
                {products.map((p) => (
                  <th key={p.slug} scope="col" className="p-5 align-bottom">
                    <img src={p.images[0].src} alt="" className="mb-3 h-16 w-16 object-contain" loading="lazy" />
                    <Link
                      to={`/products/${p.slug}`}
                      className="font-display text-base font-bold text-ink-900 hover:text-brand-700"
                    >
                      {displayName(p)}
                    </Link>
                    <span className="block text-xs font-medium text-ink-400">{p.series}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-ink-100 bg-white last:border-0">
                  <th scope="row" className="p-5 font-medium text-ink-500">
                    {row.label}
                  </th>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-5 font-medium text-ink-900">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}

function Downloads() {
  return (
    <section id="downloads" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Resources"
          title="Brochures & user manuals"
          description="Download product literature for specifications, wiring, dimensions and set-up instructions."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className="card flex flex-col p-6">
              <div className="flex items-center gap-4">
                <img src={p.images[0].src} alt="" className="h-14 w-14 border border-ink-200 bg-white object-contain" loading="lazy" />
                <div>
                  <h3 className="font-display text-lg font-bold">{displayName(p)}</h3>
                  <p className="text-xs text-ink-400">{p.series}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2">
                {p.downloads.map((d) => (
                  <li key={d.file}>
                    <a
                      href={d.file}
                      download
                      className="group flex items-center gap-3 border border-ink-200 px-4 py-3 transition hover:border-brand-500"
                    >
                      <FileText className="h-5 w-5 text-brand-700" />
                      <span className="flex-1 text-sm font-medium text-ink-800">{d.label}</span>
                      <span className="text-xs text-ink-400">PDF · {d.size}</span>
                      <FileDown className="h-4 w-4 text-ink-300 transition group-hover:text-brand-700" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Products() {
  usePageMeta({
    title: 'Products',
    description:
      'Digimacks® digital differential pressure gauge and transmitter, Digisense™ gauge / switch and Digitrans DPT-411 differential pressure transmitter.',
  })

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Digital differential pressure instruments"
        description="Gauges, switches and transmitters for clean rooms, HVAC and pharmaceutical equipment, with ranges from 0–10 mm Wc to 0–1000 mm Wc."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
      />
      <section className="section">
        <div className="container">
          {products.map((p, i) => (
            <ProductRow key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>
      <Comparison />
      <Downloads />
      <CtaBand />
    </>
  )
}

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileDown, FileText, PlayCircle } from 'lucide-react'
import { Breadcrumbs } from '../components/PageHero.jsx'
import ProductGallery from '../components/ProductGallery.jsx'
import OrderCodeBuilder from '../components/OrderCodeBuilder.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { getProduct, products, displayName } from '../data/products.js'
import NotFound from './NotFound.jsx'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'order-code', label: 'Order code' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'enquire', label: 'Enquire' },
]

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <p className="eyebrow">
        <span className="h-px w-6 bg-brand-500" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  )
}

function ProductPage({ product }) {
  const name = displayName(product)
  const [enquiry, setEnquiry] = useState({ key: 0, message: '' })

  usePageMeta({ title: `${name} ${product.category}`, description: product.summary })

  function requestQuote({ code, outputs, range }) {
    setEnquiry((e) => ({
      key: e.key + 1,
      message: `I would like a quotation for ${name}, order code ${code} (output: ${outputs.join(', ')}; range: ${range}).\nQuantity: `,
    }))
    document.getElementById('enquire')?.scrollIntoView({ behavior: 'smooth' })
  }

  const related = products.filter((p) => p.slug !== product.slug)

  return (
    <>
      <section className="border-b border-ink-200 bg-white pb-14 pt-28 sm:pt-32 lg:pb-16">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: name }]} />
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <ProductGallery images={product.images} />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-800">{product.series}</span>
                <span className="text-sm font-medium text-ink-500">{product.category}</span>
              </div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">{product.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-px border border-ink-200 bg-ink-200">
                {product.highlights.map((h) => (
                  <div key={h.label} className="bg-white px-4 py-4">
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-ink-400">{h.label}</dt>
                    <dd className="mt-1 font-display text-base font-bold text-ink-900">{h.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#enquire" className="btn-dark px-6 py-3.5">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={product.downloads[0].file}
                  download
                  className="btn px-4 py-3.5 text-ink-700 hover:text-ink-900"
                >
                  <FileDown className="h-4 w-4" /> Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav
        aria-label="Product sections"
        className="sticky top-16 z-30 border-b border-ink-200 bg-white"
      >
        <div className="container flex gap-6 overflow-x-auto [scrollbar-width:none]">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 border-b-2 border-transparent py-4 text-sm font-medium text-ink-500 transition hover:border-brand-500 hover:text-ink-950"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="section scroll-mt-32">
        <div className="container grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <SectionTitle eyebrow="Overview" title={`About ${name}`} />
            <div className="grid gap-5 text-base leading-relaxed text-ink-600">
              {product.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h3 className="mt-12 text-lg font-bold">Key features</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="grid content-start gap-6">
            <div className="border border-ink-200 border-l-4 border-l-brand-500 bg-white p-7">
              <h3 className="text-lg font-bold">Applications</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <li
                    key={a}
                    className="border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-700"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            {product.video && (
              <div className="overflow-hidden border border-ink-200 bg-white">
                <div className="aspect-video">
                  <VideoEmbed id={product.video} title={`${name} product video`} />
                </div>
                <p className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-ink-700">
                  <PlayCircle className="h-4 w-4 text-brand-700" /> Watch {name} in action
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      <section id="specifications" className="section scroll-mt-32 border-y border-ink-200 bg-white">
        <div className="container">
          <SectionTitle eyebrow="Datasheet" title="Technical specifications" />
          <Reveal className="overflow-hidden border border-ink-200 bg-white">
            <dl className="divide-y divide-ink-100">
              {product.specs.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[260px_1fr] sm:gap-6 sm:px-8">
                  <dt className="text-sm font-medium text-ink-500">{k}</dt>
                  <dd className="text-sm font-semibold text-ink-900">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <p className="mt-4 text-xs text-ink-400">Specifications are subject to change without notice.</p>
        </div>
      </section>

      <section id="order-code" className="section scroll-mt-32">
        <div className="container">
          <SectionTitle eyebrow="Model selection" title="Build your order code" />
          <OrderCodeBuilder ordering={product.ordering} onRequest={requestQuote} />
        </div>
      </section>

      <section id="downloads" className="section scroll-mt-32 pt-0">
        <div className="container">
          <SectionTitle eyebrow="Resources" title="Downloads" />
          <div className="grid gap-4 sm:grid-cols-2">
            {product.downloads.map((d) => (
              <a
                key={d.file}
                href={d.file}
                download
                className="group flex items-center gap-5 border border-ink-200 bg-white p-6 transition hover:border-brand-500"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-brand-500 text-ink-950">
                  <FileText className="h-6 w-6" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold text-ink-900">
                    {name} {d.label.toLowerCase()}
                  </span>
                  <span className="text-sm text-ink-400">PDF · {d.size}</span>
                </span>
                <FileDown className="h-5 w-5 text-ink-300 transition group-hover:text-brand-700" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="section scroll-mt-32 border-y border-ink-200 bg-white">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow="Enquire" title={`Get a quote for ${name}`} />
            <p className="text-base leading-relaxed text-ink-600">
              Share your range, output and quantity. If you're unsure which configuration you need, describe your
              application and our engineers will recommend one.
            </p>
          </div>
          <div className="card p-6 sm:p-10">
            <QuoteForm key={enquiry.key} defaultProduct={name} defaultMessage={enquiry.message} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Other instruments</h2>
            <Link to="/products" className="link-arrow">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product) return <NotFound />
  return <ProductPage key={product.slug} product={product} />
}

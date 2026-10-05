import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { industries, moreApplications } from '../data/industries.js'
import { getProduct, displayName } from '../data/products.js'

function IndustryBlock({ industry, index }) {
  const Icon = industry.icon
  const reversed = index % 2 === 1
  return (
    <section id={industry.id} className="scroll-mt-28 py-14 sm:py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reversed ? 'lg:order-2' : ''}>
          <div className="relative overflow-hidden border border-ink-200">
            <img src={industry.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center bg-brand-500 text-ink-950">
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand-500" />
            0{index + 1}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{industry.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">{industry.summary}</p>
          <ul className="mt-8 grid gap-3">
            {industry.points.map((p) => (
              <li key={p} className="flex gap-3 text-ink-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Recommended instruments</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {industry.products.map((slug) => {
                const p = getProduct(slug)
                return (
                  <Link
                    key={slug}
                    to={`/products/${slug}`}
                    className="group flex items-center gap-3 border border-ink-200 bg-white py-2 pl-2 pr-4 transition hover:border-ink-900"
                  >
                    <img src={p.images[0].src} alt="" className="h-11 w-11 bg-white object-contain" loading="lazy" />
                    <span className="text-sm font-semibold text-ink-900">{displayName(p)}</span>
                    <ArrowRight className="h-4 w-4 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-brand-700" />
                  </Link>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Industries() {
  usePageMeta({
    title: 'Industries',
    description:
      'Differential pressure monitoring for pharmaceutical clean rooms, HVAC and AHUs, laminar flow and biosafety cabinets, and pharmaceutical process equipment.',
  })

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Pressure monitoring where it matters most"
        description="Our instruments help keep clean rooms compliant, filters efficient and containment equipment safe across pharmaceutical, healthcare and building services applications."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      >
        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="flex items-center gap-2 border border-ink-300 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-ink-900 hover:text-ink-900"
            >
              <ind.icon className="h-4 w-4 text-ink-900" /> {ind.title}
            </a>
          ))}
        </div>
      </PageHero>

      <div className="divide-y divide-ink-100">
        {industries.map((ind, i) => (
          <IndustryBlock key={ind.id} industry={ind} index={i} />
        ))}
      </div>

      <section className="section border-t border-ink-200 bg-white">
        <div className="container">
          <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Also used in</h2>
              <p className="mt-3 text-ink-500">
                Our gauges and transmitters suit most low differential pressure applications with air and
                non-corrosive gases.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {moreApplications.map((a) => (
                <li
                  key={a.title}
                  className="flex items-center gap-3 border border-ink-200 bg-white px-5 py-4 font-semibold text-ink-800"
                >
                  <a.icon className="h-5 w-5 text-brand-700" /> {a.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Not sure which instrument fits your application?" />
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BellRing,
  Cable,
  Check,
  Cpu,
  Gauge,
  LockKeyhole,
  MessagesSquare,
  PackageCheck,
  PanelTop,
  SlidersHorizontal,
  Wrench,
} from 'lucide-react'
import HeroStage from '../components/HeroStage.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { products } from '../data/products.js'
import { industries } from '../data/industries.js'
import { company, yearsInBusiness } from '../data/company.js'

const stats = [
  { value: `${yearsInBusiness()}+`, label: 'Years in instrumentation', note: `Established ${company.founded}` },
  { value: '±0.5%', label: 'Full-scale accuracy', note: 'MEMS sensing' },
  { value: '1000', unit: 'mm Wc', label: 'Maximum standard range', note: 'Bi-directional' },
  { value: '4', label: 'Output options', note: '4–20 mA · 0–10 V · Relay · RS485' },
]

const features = [
  {
    icon: Cpu,
    title: 'Stable MEMS sensing',
    text: 'Micro electro-mechanical sensors and microcontroller processing for repeatable, drift-resistant readings.',
  },
  {
    icon: BellRing,
    title: 'Programmable alarms',
    text: 'Low and high audio-visual alarms with delay time, plus green, yellow and red status LEDs.',
  },
  {
    icon: Cable,
    title: 'Flexible outputs',
    text: '4–20 mA, 0–10 V, SPDT relay or RS485 for BMS, EMS and PLC integration.',
  },
  {
    icon: PanelTop,
    title: 'Panel & wall mounting',
    text: 'Compact flush panel-mount gauges and IP65 wall or cabinet-mount transmitters.',
  },
  {
    icon: LockKeyhole,
    title: 'Password protection',
    text: 'Optional keypad lock keeps set points and calibration safe from unauthorised changes.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom ranges',
    text: 'Standard ranges from 0–10 to 0–1000 mm Wc, with customised ranges for OEM equipment.',
  },
]

const steps = [
  {
    icon: MessagesSquare,
    title: 'Share your application',
    text: 'Tell us the pressure range, units, output signal and where the instrument will be installed.',
  },
  {
    icon: Gauge,
    title: 'Get the right configuration',
    text: 'We recommend the right model and build your order code, including custom ranges if needed.',
  },
  {
    icon: Wrench,
    title: 'Manufactured to order',
    text: 'Your instrument is manufactured and configured to the selected range and outputs at our Mumbai facility.',
  },
  {
    icon: PackageCheck,
    title: 'Delivered & supported',
    text: 'Brochures, user manuals and direct access to our engineers for installation and set-up.',
  },
]

function Hero() {
  return (
    <section className="border-b border-ink-200 bg-white pt-16">
      <div className="container grid items-center gap-12 pb-14 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-16 lg:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-500" />
            Since {company.founded} · Mumbai, India
          </p>
          <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Precision pressure monitoring for critical environments
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            Digital differential pressure gauges, switches and transmitters for pharmaceutical clean rooms, HVAC
            systems and laboratory equipment, engineered to be simple to install and easy to read.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="btn-dark px-6 py-3.5">
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact#quote" className="btn-outline px-6 py-3.5">
              Request a quote
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
            {['±0.5% FS accuracy', 'Customised ranges', 'Brochures & manuals online'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-600" strokeWidth={2.5} />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroStage />
        </motion.div>
      </div>

      <div className="border-t border-ink-200">
        <dl className="container grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 lg:py-10 ${i % 2 === 1 ? 'border-l border-ink-200 pl-6 sm:pl-8' : ''} ${
                i >= 2 ? 'border-t border-ink-200 lg:border-t-0' : ''
              } ${i > 0 ? 'lg:border-l lg:border-ink-200 lg:pl-8' : ''}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
                  {s.value}
                  {s.unit && <span className="ml-1.5 text-sm font-semibold text-ink-500">{s.unit}</span>}
                </span>
                <span className="mt-2 block text-sm font-medium text-ink-800">{s.label}</span>
                <span className="mt-0.5 block text-xs text-ink-500">{s.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Our instruments"
          title="Engineered for low differential pressure"
          description="Three product lines covering gauges, switches and transmitters, each built for a clear reading that operators can trust."
          action={
            <Link to="/products" className="btn-outline">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="section border-y border-ink-200 bg-ink-50">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="border border-ink-200 bg-white">
            <img
              src="/images/scenes/gauge-in-cleanroom.webp"
              alt="Digimacks differential pressure gauge mounted on a clean room wall"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-200 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-950">Status at a glance</p>
              <div className="flex items-center gap-4">
                {[
                  ['bg-emerald-500', 'Normal'],
                  ['bg-amber-400', 'Delay'],
                  ['bg-red-500', 'Fault'],
                ].map(([c, l]) => (
                  <span key={l} className="flex items-center gap-1.5 text-sm font-medium text-ink-700">
                    <span className={`h-2.5 w-2.5 rounded-full ${c}`} /> {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Why Fauz Mechanics"
            title="Built for the people who rely on every reading"
            description="From QA managers in pharma plants to OEM equipment builders, our instruments are designed to be installed quickly, read instantly and trusted for years."
          />
          <div className="mt-8 grid border border-ink-200 bg-white sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 0.05}
                className={`flex gap-4 border-ink-200 p-5 ${i % 2 === 1 ? 'sm:border-l' : ''} ${i >= 2 ? 'border-t' : ''} ${
                  i === 1 ? 'max-sm:border-t' : ''
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-500 text-ink-950">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  const [first, ...rest] = industries
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Where our instruments work"
          description="Wherever clean air, containment or filter performance matters, accurate differential pressure is the first line of defence."
          action={
            <Link to="/industries" className="btn-outline">
              All industries <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <IndustryTile industry={first} className="md:col-span-2 lg:col-span-1 lg:row-span-2" tall />
          {rest.map((ind, i) => (
            <IndustryTile key={ind.id} industry={ind} delay={(i + 1) * 0.08} className={i === 2 ? 'md:col-span-2' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustryTile({ industry, className = '', tall = false, delay = 0 }) {
  const Icon = industry.icon
  return (
    <Reveal delay={delay} className={className}>
      <Link
        to={`/industries#${industry.id}`}
        className={`group relative flex h-full overflow-hidden bg-ink-900 ${tall ? 'min-h-[420px] lg:min-h-full' : 'min-h-[260px]'}`}
      >
        <img
          src={industry.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/50 to-ink-950/5" />
        <div className="relative mt-auto p-6 sm:p-7">
          <span className="flex h-10 w-10 items-center justify-center bg-brand-500 text-ink-950">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-xl font-bold !text-white sm:text-2xl">{industry.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed text-ink-300 ${tall ? '' : 'line-clamp-2'}`}>{industry.summary}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:gap-2.5">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

function ProcessSection() {
  return (
    <section className="section bg-ink-950 text-white">
      <div className="container">
        <SectionHeading
          align="center"
          tone="light"
          eyebrow="How we work"
          title="From requirement to installed instrument"
          description="A straightforward process, whether you need a single gauge for a clean room or a batch for OEM equipment."
        />
        <ol className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="bg-ink-950 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center bg-brand-500 text-ink-950">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-semibold tracking-[0.16em] text-brand-400">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold !text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section">
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="About us"
            title="Innovation first, since 2006"
            description="We started by supplying conventional pressure measuring instruments to well-established clients in the pharmaceutical industry. Today, our team of engineers and technicians designs and manufactures electronic monitoring and control instruments of the highest quality and accuracy."
          />
          <Reveal className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-950">
                <span className="mb-2 block h-0.5 w-8 bg-brand-500" />
                Vision
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Meet challenges with smart engineering and technology, and give customers instruments that are simple to
                install and easy to use.
              </p>
            </div>
            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-950">
                <span className="mb-2 block h-0.5 w-8 bg-brand-500" />
                Mission
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Be the most dependable manufacturer of monitoring and controlling instruments for the instrumentation
                sector.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <Link to="/about" className="link-arrow">
              More about Fauz Mechanics <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="relative order-1 lg:order-2">
          <div className="overflow-hidden border border-ink-200">
            <img
              src="/images/scenes/calibration-bench.webp"
              alt="Engineer calibrating a pressure sensor circuit board"
              loading="lazy"
              className="aspect-[4/3.4] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-5 left-5 bg-ink-950 px-5 py-4 text-white">
            <p className="font-display text-3xl font-bold text-brand-500">{yearsInBusiness()}+</p>
            <p className="text-sm font-medium text-white/70">years of engineering</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta({
    title: '',
    description:
      'Fauz Mechanics designs and manufactures digital differential pressure gauges, switches and transmitters for pharmaceutical clean rooms, HVAC and process control. Made in Mumbai since 2006.',
  })

  return (
    <>
      <Hero />
      <ProductsSection />
      <FeaturesSection />
      <IndustriesSection />
      <ProcessSection />
      <AboutSection />
      <CtaBand />
    </>
  )
}

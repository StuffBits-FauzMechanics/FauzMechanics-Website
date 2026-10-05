import { Eye, Lightbulb, Phone, Rocket, ShieldCheck, Target, Users } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import CtaBand from '../components/CtaBand.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { company, yearsInBusiness } from '../data/company.js'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation first',
    text: 'We meet instrumentation challenges with smart engineering and modern electronics.',
  },
  {
    icon: Target,
    title: 'Accuracy you can trust',
    text: 'Stable MEMS sensing and careful calibration for readings that stay reliable.',
  },
  {
    icon: Users,
    title: 'Simple to use',
    text: 'Clear displays, intuitive keypads and straightforward installation for every operator.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to last',
    text: 'Quality materials, from SS 304 front covers to IP65 enclosures, for demanding environments.',
  },
]

const milestones = [
  {
    year: String(company.founded),
    title: 'Founded in Mumbai',
    text: 'Started delivering conventional pressure measuring instruments to well-established pharmaceutical clients.',
  },
  {
    year: 'Growth',
    title: 'Moving to electronic instruments',
    text: 'Expanded into microcontroller-based electronic instruments of the highest quality and accuracy.',
  },
  {
    year: 'Today',
    title: 'Three product lines',
    text: 'Digimacks®, Digisense™ and Digitrans serve clean rooms, HVAC systems and pharmaceutical equipment.',
  },
]

export default function About() {
  usePageMeta({
    title: 'About us',
    description: `Established in ${company.founded}, Fauz Mechanics is a Mumbai-based manufacturer of digital differential pressure monitoring and control instruments.`,
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Precision instruments, engineered in Mumbai"
        description={`For more than ${yearsInBusiness()} years, Fauz Mechanics has helped the pharmaceutical and HVAC industries monitor pressure with instruments that are accurate, robust and easy to use.`}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <section className="section">
        <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="grid grid-cols-5 gap-3">
              <img
                src="/images/scenes/calibration-bench.webp"
                alt="Engineer working on a pressure sensor circuit board"
                loading="lazy"
                className="col-span-3 aspect-[3/4] w-full border border-ink-200 object-cover"
              />
              <div className="col-span-2 grid gap-4">
                <img
                  src="/images/scenes/gauge-in-cleanroom.webp"
                  alt="Digimacks gauge installed on a clean room wall"
                  loading="lazy"
                  className="aspect-square w-full border border-ink-200 object-cover"
                />
                <div className="flex flex-col justify-center bg-brand-500 p-5 text-ink-950">
                  <p className="font-display text-4xl font-bold">{company.founded}</p>
                  <p className="mt-1 text-sm font-medium">Year established</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Our story" title="From mechanical gauges to smart instruments" />
            <Reveal className="mt-6 grid gap-5 text-base leading-relaxed text-ink-600">
              <p>
                Established in {company.founded}, Fauz Mechanics began by delivering conventional pressure measuring
                instruments to well-established clients in the pharmaceutical industry.
              </p>
              <p>
                Since then we have moved on to electronic instruments of the highest quality and accuracy. With a
                professional team of engineers and technicians, we take on the challenges faced in the instrumentation
                sector and have time and again proved ourselves in manufacturing monitoring and controlling
                instruments.
              </p>
              <p>
                Every product is designed to be easy to install, easy to read and dependable for years.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-y border-ink-200 bg-white">
        <div className="container grid gap-6 md:grid-cols-2">
          <Reveal className="card relative overflow-hidden p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center bg-brand-500 text-ink-950">
              <Eye className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">Our vision</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{company.vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="card relative overflow-hidden p-8 sm:p-10">
            <span className="flex h-11 w-11 items-center justify-center bg-brand-500 text-ink-950">
              <Rocket className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-bold tracking-tight">Our mission</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{company.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading align="center" eyebrow="What drives us" title="Our values" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="border-x border-b border-t-2 border-ink-200 border-t-brand-500 bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center bg-brand-500 text-ink-950">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-ink-200 bg-white">
        <div className="container grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="Journey" title="Steady growth through engineering" />
          <ol className="relative border-l border-ink-300 pl-8">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 0.08} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 border-2 border-ink-950 bg-brand-500" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">{m.year}</p>
                <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="team" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading eyebrow="Team" title="Our Director" />
          <Reveal className="mt-10 flex max-w-xl flex-col gap-6 border border-ink-200 p-8 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-brand-500 font-display text-xl font-bold text-ink-950">
              {company.director.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
            <div>
              <h3 className="text-xl font-bold">{company.director.name}</h3>
              <p className="text-sm font-medium text-ink-600">{company.director.role}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink-600">
                <Phone className="h-4 w-4" /> {company.director.phone.display}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

import { Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { WhatsAppIcon } from '../components/icons.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { company } from '../data/company.js'

const channels = [
  {
    icon: Phone,
    title: 'Call us',
    lines: [company.phone.display],
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    lines: [company.whatsapp.display],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [company.email],
  },
  {
    icon: MapPin,
    title: 'Visit us',
    lines: company.address.lines,
  },
]

export default function Contact() {
  usePageMeta({
    title: 'Contact us',
    description: `Contact Fauz Mechanics in Malad (West), Mumbai. Call ${company.phone.display}, WhatsApp or email ${company.email} for quotes and technical support.`,
  })

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your application"
        description="Request a quote, ask about a custom range or get help choosing the right instrument. Our engineers are happy to help."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="pt-12 sm:pt-16">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="flex h-full flex-col border border-ink-200 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center bg-brand-500 text-ink-950">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-bold">{c.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {c.lines.map((l) => (
                    <span key={l} className="block break-words">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="quote" className="section scroll-mt-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-brand-500" />
              Request a quote
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tell us what you need</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              The more detail you share, such as pressure range, output signal, quantity and application, the faster
              we can prepare an accurate quotation.
            </p>
            <div className="mt-10 border border-ink-200 border-l-4 border-l-brand-500 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">Director</p>
              <p className="mt-2 font-display text-lg font-bold text-ink-900">{company.director.name}</p>
              <p className="text-sm text-ink-500">{company.director.role}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink-950">
                <Phone className="h-4 w-4" /> {company.director.phone.display}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="card p-6 sm:p-10">
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 lg:pb-28">
        <div className="container">
          <Reveal className="relative overflow-hidden border-2 border-brand-500 bg-white">
            <iframe
              src={company.address.embedUrl}
              title="Fauz Mechanics location on Google Maps"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin"
            />
            <div className="absolute bottom-5 left-5 right-5 max-w-sm border border-ink-200 border-l-4 border-l-brand-500 bg-white p-5 sm:right-auto">
              <p className="font-display font-bold text-ink-900">Fauz Mechanics</p>
              <p className="mt-1 text-sm text-ink-500">
                {company.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

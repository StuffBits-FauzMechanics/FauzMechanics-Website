import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBand({
  title = 'Need a specific range, output or enclosure?',
  description = 'Tell us about your application. Our engineers will recommend the right instrument and configuration, including customised ranges for OEM equipment.',
}) {
  return (
    <section className="bg-brand-500 text-ink-950">
      <div className="container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold !text-ink-950 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-800">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link to="/contact#quote" className="btn bg-ink-950 px-6 py-3.5 text-white hover:bg-ink-800">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark', action }) {
  const centered = align === 'center'
  const light = tone === 'light'
  return (
    <Reveal
      className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className={light ? 'eyebrow-light' : 'eyebrow'}>
            <span className="h-px w-6 bg-brand-500" />
            {eyebrow}
          </p>
        )}
        <h2 className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12] ${light ? '!text-white' : ''}`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-ink-300' : 'text-ink-500'}`}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}

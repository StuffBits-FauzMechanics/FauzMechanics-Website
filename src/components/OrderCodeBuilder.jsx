import { useMemo, useState } from 'react'
import { Check, Copy, Info, Send } from 'lucide-react'

function Chip({ selected, onClick, children, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={`border px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-40 ${
        selected
          ? 'border-brand-500 bg-brand-500 text-ink-950'
          : 'border-ink-200 bg-white text-ink-700 hover:border-ink-400'
      }`}
    >
      {children}
    </button>
  )
}

export default function OrderCodeBuilder({ ordering, onRequest }) {
  const multi = ordering.outputSlots > 1
  const selectable = ordering.outputs
  const [outputs, setOutputs] = useState(() => [selectable[multi || selectable.length === 1 ? 0 : 1].code])
  const [range, setRange] = useState(ordering.ranges[1]?.code ?? ordering.ranges[0].code)
  const [copied, setCopied] = useState(false)

  const code = useMemo(() => {
    if (!multi) return `${ordering.prefix}-${outputs[0]}-${range}`
    const slots = [...outputs].sort()
    while (slots.length < ordering.outputSlots) slots.push('00')
    return [ordering.prefix, ...slots, range].join('-')
  }, [multi, outputs, range, ordering])

  const outputLabels = ordering.outputs.filter((o) => outputs.includes(o.code)).map((o) => o.label)
  const rangeLabel = ordering.ranges.find((r) => r.code === range)?.label

  function toggleOutput(codeValue) {
    if (!multi) return setOutputs([codeValue])
    setOutputs((current) => {
      if (current.includes(codeValue)) return current.length > 1 ? current.filter((c) => c !== codeValue) : current
      return current.length < ordering.outputSlots ? [...current, codeValue] : current
    })
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="grid gap-8">
        <fieldset>
          <legend className="text-sm font-semibold text-ink-900">
            Output signal{multi ? `s (select up to ${ordering.outputSlots})` : ''}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {selectable.map((o) => (
              <Chip
                key={o.code}
                selected={outputs.includes(o.code)}
                onClick={() => toggleOutput(o.code)}
                disabled={multi && !outputs.includes(o.code) && outputs.length >= ordering.outputSlots}
              >
                <span className="mr-1.5 font-mono text-xs opacity-60">{o.code}</span>
                {o.label}
              </Chip>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold text-ink-900">Pressure range</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {ordering.ranges.map((r) => (
              <Chip key={r.code} selected={range === r.code} onClick={() => setRange(r.code)}>
                <span className="mr-1.5 font-mono text-xs opacity-60">{r.code}</span>
                {r.label}
              </Chip>
            ))}
          </div>
        </fieldset>
        {ordering.notes.length > 0 && (
          <ul className="grid gap-1.5 text-sm text-ink-500">
            {ordering.notes.map((n) => (
              <li key={n} className="flex items-center gap-2">
                <Info className="h-4 w-4 shrink-0 text-brand-700" /> {n}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="relative self-start border border-ink-200 bg-ink-900 p-7 text-white lg:sticky lg:top-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">Your order code</p>
        <div className="mt-3 flex items-center justify-between gap-3 border border-white/15 bg-white/5 px-4 py-4">
          <code
            className={`whitespace-nowrap font-mono font-semibold text-brand-500 ${
              code.length > 12 ? 'text-base sm:text-lg' : 'text-xl tracking-wide sm:text-2xl'
            }`}
            aria-live="polite"
          >
            {code}
          </code>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy order code"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-ink-200 transition hover:bg-white hover:text-ink-900"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <dl className="mt-5 grid gap-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-400">Output</dt>
            <dd className="text-right font-medium">{outputLabels.join(', ')}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-ink-400">Range</dt>
            <dd className="text-right font-medium">{rangeLabel}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => onRequest?.({ code, outputs: outputLabels, range: rangeLabel })}
          className="btn-light mt-6 w-full"
        >
          Request quote for this code <Send className="h-4 w-4" />
        </button>
        <p className="mt-4 text-xs leading-relaxed text-ink-400">
          Example from datasheet: <span className="font-mono text-ink-300">{ordering.example}</span>. Our team will
          confirm the final configuration with you.
        </p>
      </div>
    </div>
  )
}

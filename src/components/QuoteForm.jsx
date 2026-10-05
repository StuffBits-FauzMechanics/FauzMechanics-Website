import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { company } from '../data/company.js'
import { products, displayName } from '../data/products.js'

export default function QuoteForm({ defaultProduct = '', defaultMessage = '', compact = false }) {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('submitting')
    try {
      const res = await fetch(company.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center border border-ink-200 bg-white px-6 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-brand-500 text-ink-950">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 text-xl font-bold">Thank you, your enquiry has been sent.</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-600">
          Our team will get back to you shortly. For urgent requirements, call us on{' '}
          <span className="font-semibold text-ink-900">{company.phone.display}</span>
          .
        </p>
        <button type="button" className="btn-outline mt-6" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input type="hidden" name="_subject" value="New enquiry from fauzmechanics.com" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div>
          <label htmlFor="qf-name" className="label">
            Full name <span className="text-brand-700">*</span>
          </label>
          <input id="qf-name" name="name" required autoComplete="name" className="input" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="qf-company" className="label">
            Company
          </label>
          <input id="qf-company" name="company" autoComplete="organization" className="input" placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="qf-email" className="label">
            Email <span className="text-brand-700">*</span>
          </label>
          <input
            id="qf-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="input"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="label">
            Phone
          </label>
          <input id="qf-phone" type="tel" name="phone" autoComplete="tel" className="input" placeholder="+91" />
        </div>
      </div>

      <div>
        <label htmlFor="qf-product" className="label">
          Product of interest
        </label>
        <select id="qf-product" name="product" defaultValue={defaultProduct} className="input appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23635F64' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
          <option value="">Not sure yet / general enquiry</option>
          {products.map((p) => (
            <option key={p.slug} value={displayName(p)}>
              {displayName(p)} ({p.category})
            </option>
          ))}
          <option value="Custom requirement">Custom range or OEM requirement</option>
        </select>
      </div>

      <div>
        <label htmlFor="qf-message" className="label">
          Requirement details <span className="text-brand-700">*</span>
        </label>
        <textarea
          id="qf-message"
          name="message"
          required
          rows={compact ? 4 : 5}
          defaultValue={defaultMessage}
          className="input resize-y"
          placeholder="Pressure range, output signal, quantity, application..."
        />
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Sorry, your message could not be sent. Please try again or email us at{' '}
          <span className="font-semibold">{company.email}</span>
          .
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-400">Your details are only used to respond to your enquiry.</p>
        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send enquiry <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

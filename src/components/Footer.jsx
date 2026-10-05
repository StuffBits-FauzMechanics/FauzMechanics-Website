import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { company } from '../data/company.js'
import { products, displayName } from '../data/products.js'

const companyLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="container">
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Designing and manufacturing digital differential pressure instruments for clean rooms, HVAC and
              pharmaceutical equipment since {company.founded}.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">Products</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="transition hover:text-white">
                    {displayName(p)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/products#compare" className="transition hover:text-white">
                  Compare products
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <a
                  href={company.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-3 transition hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>
                    {company.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                <span>
                  <a href={company.phone.href} className="block transition hover:text-white">
                    {company.phone.display}
                  </a>
                  <a href={company.director.phone.href} className="block transition hover:text-white">
                    {company.director.phone.display}
                  </a>
                </span>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex gap-3 transition hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span>{company.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fauz Mechanics. All rights reserved.</p>
          <p>Digimacks® is a registered trademark and Digisense™ is a trademark of Fauz Mechanics.</p>
        </div>
      </div>
    </footer>
  )
}

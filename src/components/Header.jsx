import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, FileDown, LayoutGrid, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { products, displayName } from '../data/products.js'
import { company } from '../data/company.js'

const links = [
  { to: '/industries', label: 'Industries' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function isLinkActive(to, pathname, hash) {
  const [path, anchor] = to.split('#')
  if (pathname !== path) return false
  if (anchor) return hash === `#${anchor}`
  return !hash || !links.some((l) => l.to === `${path}${hash}`)
}

function ProductsMenu() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef()
  const { pathname } = useLocation()
  const active = pathname.startsWith('/products')

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const show = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={`flex h-16 items-center gap-1 px-3 font-display text-[16px] font-bold tracking-[-0.01em] text-white transition xl:px-4 ${
          active || open ? 'shadow-[inset_0_-3px_0_#00CFFF]' : 'hover:shadow-[inset_0_-3px_0_rgb(255_255_255/0.35)]'
        }`}
      >
        Products
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16 }}
            className="pointer-events-none absolute inset-x-0 top-full z-50 px-5 sm:px-6 lg:px-8"
          >
            <div className="pointer-events-auto w-full max-w-[760px] pt-3">
              <div className="grid grid-cols-[minmax(0,1fr)_14.5rem] overflow-hidden rounded-sm border border-ink-200 bg-white shadow-soft">
                <ul className="grid gap-0.5 p-2">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/products/${p.slug}`}
                        className="group flex items-center gap-4 px-3 py-3 transition hover:bg-brand-50"
                      >
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-white">
                          <img src={p.images[0].src} alt="" className="h-12 w-12 object-contain" loading="lazy" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-[15px] font-bold text-ink-900">{displayName(p)}</span>
                          <span className="mt-0.5 block truncate text-sm text-ink-500">
                            {p.series} · {p.category}
                          </span>
                        </span>
                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-ink-900" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-1 border-l-4 border-l-brand-500 bg-white p-4">
                  <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">Explore</p>
                <Link
                  to="/products"
                  className="mt-1 flex items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
                >
                  <LayoutGrid className="h-4 w-4 shrink-0" /> All products
                </Link>
                <Link
                  to="/products#compare"
                  className="flex items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
                >
                  <ArrowRight className="h-4 w-4 shrink-0" /> Compare specs
                </Link>
                <Link
                  to="/products#downloads"
                  className="flex items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-medium text-ink-700 hover:text-ink-900"
                >
                  <FileDown className="h-4 w-4 shrink-0" /> Brochures & manuals
                </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  const navLinkClass = (isActive) =>
    `flex h-16 items-center whitespace-nowrap px-3 font-display text-[16px] font-bold tracking-[-0.01em] text-white transition xl:px-4 ${
      isActive ? 'shadow-[inset_0_-3px_0_#00CFFF]' : 'hover:shadow-[inset_0_-3px_0_rgb(255_255_255/0.35)]'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950 transition-shadow duration-300 ${
        scrolled || mobileOpen ? 'shadow-[0_8px_24px_rgb(0_0_0/0.35)]' : ''
      }`}
    >
      <div className="container relative flex h-16 items-center justify-between gap-3 xl:gap-6">
        <Logo tone="light" compact />

        <nav className="hidden items-center lg:flex" aria-label="Main">
          <ProductsMenu />
          {links.map((l) => {
            const active = isLinkActive(l.to, pathname, hash)
            return (
              <Link
                key={l.to}
                to={l.to}
                aria-current={active ? 'page' : undefined}
                className={navLinkClass(active)}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <Link to="/contact#quote" className="btn-primary whitespace-nowrap py-2.5 font-bold">
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 64px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-6">
              <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">Products</p>
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/5"
                >
                  <img src={p.images[0].src} alt="" className="h-11 w-11 bg-white object-contain" />
                  <span>
                    <span className="block font-display font-bold text-white">{displayName(p)}</span>
                    <span className="block text-xs text-white/50">{p.category}</span>
                  </span>
                </Link>
              ))}
              <Link to="/products" className="px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/5">
                View all products
              </Link>
              <div className="my-3 h-px bg-white/10" />
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="px-3 py-3 font-display text-lg font-semibold text-white hover:bg-white/5"
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-6 grid gap-3">
                <Link to="/contact#quote" className="btn-dark">
                  Request a quote
                </Link>
                <p className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-white/80">
                  <Phone className="h-4 w-4" /> {company.phone.display}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Link } from 'react-router-dom'

export function LogoMark({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="22 22 456 456" className={className} aria-hidden="true">
      <rect x="22" y="22" width="456" height="456" rx="72" fill="#231D1E" />
      <g strokeLinejoin="round" strokeWidth="8">
        <path d="M163 148 L355 70 L355 133 L163 211 Z" fill="#fff" stroke="#fff" />
        <path d="M163 252 L355 174 L355 237 L240 284 L240 305 L163 336 Z" fill="#fff" stroke="#fff" />
        <path d="M163 336 L240 305 L240 408 Q240 420 228 420 L163 420 Z" fill="#00CFFF" stroke="#00CFFF" />
      </g>
    </svg>
  )
}

export default function Logo({ tone = 'dark', className = '', compact = false }) {
  const text = tone === 'light' ? 'text-white' : 'text-ink-950'
  const wordmark = compact
    ? 'text-[13px] tracking-[0.08em] xl:text-[15px] xl:tracking-[0.12em]'
    : 'text-[15px] tracking-[0.12em]'
  return (
    <Link
      to="/"
      className={`group flex items-center ${compact ? 'shrink-0 gap-2.5 xl:gap-3' : 'gap-3'} ${className}`}
      aria-label="Fauz Mechanics home"
    >
      <LogoMark
        className={`h-9 w-9 shrink-0 rounded-[9px] ring-1 transition group-hover:scale-105 ${
          tone === 'light' ? 'ring-white/15' : 'ring-black/10'
        }`}
      />
      <span className={`font-wordmark leading-none transition-colors ${wordmark} ${text}`}>FAUZ MECHANICS</span>
    </Link>
  )
}

import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta({ title: 'Page not found' })

  return (
    <section className="flex min-h-[70vh] items-center bg-white pb-20 pt-32">
      <div className="container text-center">
        <p className="font-display text-6xl font-bold tracking-tight text-ink-900 sm:text-7xl">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">This reading is out of range</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-600">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-dark">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <Link to="/products" className="btn-outline">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  )
}

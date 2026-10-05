import { useState } from 'react'
import { Play } from 'lucide-react'

export default function VideoEmbed({ id, title }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative h-full w-full overflow-hidden bg-ink-900"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-ink-900 transition group-hover:bg-ink-900 group-hover:text-white">
        <Play className="ml-1 h-7 w-7" fill="currentColor" />
      </span>
    </button>
  )
}

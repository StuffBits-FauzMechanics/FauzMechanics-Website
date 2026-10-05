import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const MAX_CLIP_SECONDS = 8

const clips = [
  { src: '/videos/hero-gauge.mp4', poster: '/images/scenes/gauge-in-cleanroom.webp' },
  { src: '/videos/hero-circuit-board.mp4', poster: '/images/scenes/calibration-bench.webp' },
  { src: '/videos/hero-laboratory.mp4', poster: '/images/scenes/biosafety-lab.webp' },
  { src: '/videos/hero-ventilation.mp4', poster: '/images/scenes/hvac-ahu.webp' },
]

export default function HeroVideo({ children }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const videos = useRef([])

  useEffect(() => {
    if (reduceMotion) setPlaying(false)
  }, [reduceMotion])

  useEffect(() => {
    videos.current.forEach((v, i) => {
      if (!v) return
      if (i === index && playing) v.play().catch(() => setPlaying(false))
      else v.pause()
    })
  }, [index, playing])

  const advance = () => {
    const next = (index + 1) % clips.length
    const v = videos.current[next]
    if (v) v.currentTime = 0
    setIndex(next)
  }

  const onTimeUpdate = (e, i) => {
    const v = e.currentTarget
    if (i === index && v.currentTime >= Math.min(v.duration || MAX_CLIP_SECONDS, MAX_CLIP_SECONDS)) advance()
  }

  return (
    <div className="relative isolate flex min-h-[440px] flex-1 flex-col overflow-hidden bg-ink-950 lg:min-h-[480px]">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {clips.map((c, i) => (
          <video
            key={c.src}
            ref={(el) => (videos.current[i] = el)}
            src={c.src}
            poster={c.poster}
            muted
            playsInline
            preload={i === index || i === (index + 1) % clips.length ? 'auto' : 'none'}
            onTimeUpdate={(e) => onTimeUpdate(e, i)}
            onEnded={() => i === index && advance()}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950/80 to-transparent" />
      </div>

      <div className="container flex flex-1 flex-col justify-center py-14">{children}</div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { CohortCountdown } from '@/components/cohort-countdown'

const TITLE_WORDS = [
  "You don't",
  'have an',
  'effort problem.',
  'You have a',
  'seeing problem.',
]

export function HeroVisual() {
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < TITLE_WORDS.length) {
      const t = setTimeout(() => setVisibleWords((n) => n + 1), 280)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setSubtitleVisible(true), 400)
    return () => clearTimeout(t)
  }, [visibleWords])

  return (
    <section className="relative min-h-svh w-full bg-transparent">
      {/* Video background — pinned to the viewport so copy scrolls over it */}
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/educated-eye-poster.png"
        aria-hidden="true"
      >
        <source src="/videos/educated-eye-bg.mp4" type="video/mp4" />
      </video>

      {/* Burgundy brand overlay */}
      <div className="fixed inset-0 z-0 bg-[#6D001A] mix-blend-color" />
      <div className="fixed inset-0 z-0 bg-[#6D001A]/35" />

      {/* Gradient overlays for legibility (also pinned with the video) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      <div className="fixed inset-0 z-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

      {/* Content */}
      <div className="relative z-20 flex min-h-svh flex-col items-center justify-center px-6 pb-20 pt-36 text-center md:pt-32">
        <p
          className={`mb-7 font-display text-sm uppercase tracking-[0.35em] accent-label md:mb-9 ${
            visibleWords >= TITLE_WORDS.length ? 'hero-fade-up' : 'opacity-0'
          }`}
        >
          The Educated Eye
        </p>

        <h1 className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-1 py-2 font-display text-[2.5rem] font-light leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {TITLE_WORDS.map((word, i) => (
            <span
              key={word}
              className={i < visibleWords ? 'hero-word-in' : 'opacity-0'}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p
          className={`mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/85 md:mt-10 md:text-lg ${
            subtitleVisible ? 'hero-fade-up' : 'opacity-0'
          }`}
        >
          The information you need to change your life is already in your
          environment. You just haven&apos;t been taught to read it. The Educated
          Eye is an 8-week cohort for retraining what you&apos;re able to perceive,
          so the world reorganizes around you instead of the other way around.
        </p>

        <div
          className={`mt-9 flex flex-col items-center gap-4 ${
            subtitleVisible ? 'hero-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          <a
            href="#method"
            className="cta-arrow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
          >
            See How It Works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div
          className={`mt-10 ${subtitleVisible ? 'hero-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <CohortCountdown targetDate="2026-07-06T00:00:00" />
        </div>
      </div>
    </section>
  )
}

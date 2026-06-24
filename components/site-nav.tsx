'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-5">
        {/* Centered logomark, like flowcreators.org */}
        <a
          href="/"
          aria-label="Sam Elsner — home"
          className="flex flex-col items-center"
        >
          <Image
            src="/images/educated-eye-icon.svg"
            alt="The Educated Eye"
            width={44}
            height={44}
            priority
            className="eye-blink h-11 w-11"
          />
        </a>

        {/* Centered, wide-tracked uppercase nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#method" className="transition-colors hover:text-foreground">
            Method
          </a>
          <a href="#proof" className="transition-colors hover:text-foreground">
            Proof
          </a>
          <a href="#whatsinside" className="transition-colors hover:text-foreground">
            Inside
          </a>
          <a href="#offer" className="transition-colors hover:text-foreground">
            Enroll
          </a>
        </nav>
      </div>
    </header>
  )
}

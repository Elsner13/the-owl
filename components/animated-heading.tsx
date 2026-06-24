'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type AnimatedHeadingProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Splits a heading into words and reveals them in a staggered, cinematic
 * cascade (rise + unblur) the first time the heading scrolls into view.
 * Preserves nested markup (e.g. <span className="accent-text">) by walking
 * the React children and wrapping plain-text words in animated spans.
 * Honors prefers-reduced-motion by rendering the heading statically.
 */
export function AnimatedHeading({
  children,
  className = '',
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  // Render plain children on the server and first client paint so the markup
  // matches exactly (no hydration mismatch). After mount we swap in the
  // word-wrapped version and let GSAP animate it.
  const [split, setSplit] = useState(false)

  useGSAP(() => {
    setSplit(true)

    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const words = el.querySelectorAll<HTMLElement>('[data-word]')
    if (!words.length) return

    gsap.set(words, { yPercent: 110, opacity: 0, filter: 'blur(8px)' })
    gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.06,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true,
      },
    })
  }, [])

  return (
    <h2 ref={ref} className={className}>
      {split ? wrapWords(children) : children}
    </h2>
  )
}

/** Recursively wrap plain-text words in masked, animatable spans. */
function wrapWords(node: React.ReactNode, path = '0'): React.ReactNode {
  if (typeof node === 'string') {
    return node.split(/(\s+)/).map((chunk, i) => {
      if (chunk.trim() === '') return chunk
      return (
        <span
          key={`${path}-w-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <span data-word className="inline-block will-change-transform">
            {chunk}
          </span>
        </span>
      )
    })
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => {
      // Render plain-string children inline (no wrapper) so whitespace between
      // segments — e.g. the {' '} before an accent span — isn't collapsed by a
      // display:contents wrapper sitting between two inline-block units.
      if (typeof child === 'string') {
        return (
          <span key={`${path}-s-${i}`}>{wrapWords(child, `${path}-${i}`)}</span>
        )
      }
      return (
        <span key={`${path}-g-${i}`} className="contents">
          {wrapWords(child, `${path}-${i}`)}
        </span>
      )
    })
  }

  if (
    node &&
    typeof node === 'object' &&
    'props' in (node as Record<string, unknown>)
  ) {
    // Animate nested elements (e.g. <span className="accent-text">) as a
    // single masked unit. We intentionally do NOT recurse into their text,
    // because effects like `background-clip: text` only clip the gradient to
    // an element's own direct text runs — relocating that text into nested
    // wrapper spans would make it render transparent (invisible).
    return (
      <span
        key={`${path}-e`}
        className="inline-block overflow-hidden align-bottom"
      >
        <span data-word className="inline-block will-change-transform">
          {node}
        </span>
      </span>
    )
  }

  return node
}

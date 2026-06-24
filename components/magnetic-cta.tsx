'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'

type MagneticCTAProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  external?: boolean
}

/**
 * A magnetic call-to-action button. On pointer devices the button and its
 * label subtly track the cursor, then spring back on leave — a tactile,
 * high-end microinteraction. Falls back to a plain button when the user
 * prefers reduced motion or is on a touch device.
 */
export function MagneticCTA({
  href,
  children,
  variant = 'primary',
  external = false,
}: MagneticCTAProps) {
  const wrapRef = useRef<HTMLAnchorElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const wrap = wrapRef.current
    const label = labelRef.current
    if (!wrap || !label) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce || !fine) return

    const xTo = gsap.quickTo(wrap, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(wrap, 'y', { duration: 0.5, ease: 'power3.out' })
    const lxTo = gsap.quickTo(label, 'x', { duration: 0.6, ease: 'power3.out' })
    const lyTo = gsap.quickTo(label, 'y', { duration: 0.6, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      const relX = e.clientX - rect.left - rect.width / 2
      const relY = e.clientY - rect.top - rect.height / 2
      xTo(relX * 0.35)
      yTo(relY * 0.45)
      lxTo(relX * 0.15)
      lyTo(relY * 0.2)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
      lxTo(0)
      lyTo(0)
    }

    wrap.addEventListener('pointermove', onMove)
    wrap.addEventListener('pointerleave', onLeave)
    return () => {
      wrap.removeEventListener('pointermove', onMove)
      wrap.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const base =
    'group relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 will-change-transform'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'border border-foreground/25 text-foreground hover:bg-foreground/5'

  return (
    <a
      ref={wrapRef}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles}`}
    >
      <span ref={labelRef} className="inline-flex items-center gap-2">
        {children}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}

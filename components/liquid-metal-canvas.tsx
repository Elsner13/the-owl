'use client'

import { useEffect, useRef, useState } from 'react'
import { LiquidMetal } from '@paper-design/shaders-react'

type LiquidMetalCanvasProps = {
  image: string
  colorTint: string
  shiftRed?: number
  shiftBlue?: number
}

/**
 * WebGL liquid-metal shader. Fades in once mounted so the swap from the
 * static colored fallback to the animated effect is smooth (no white flash).
 * Honors prefers-reduced-motion by freezing the animation (speed 0).
 */
export default function LiquidMetalCanvas({
  image,
  colorTint,
  shiftRed = 0.2,
  shiftBlue = 0.2,
}: LiquidMetalCanvasProps) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [ready, setReady] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)

    // Reveal on the next frame, once the canvas has had a chance to paint.
    rafRef.current = requestAnimationFrame(() =>
      requestAnimationFrame(() => setReady(true)),
    )

    return () => {
      mq.removeEventListener('change', onChange)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        opacity: ready ? 1 : 0,
        transition: 'opacity 350ms ease-out',
      }}
    >
      <LiquidMetal
        style={{ width: '100%', height: '100%', position: 'relative' }}
        image={image}
        colorBack="#00000000"
        colorTint={colorTint}
        scale={1}
        speed={reducedMotion ? 0 : 0.7}
        distortion={0.16}
        repetition={3}
        shiftRed={shiftRed}
        shiftBlue={shiftBlue}
        contour={0.45}
        softness={0.2}
        angle={70}
      />
    </div>
  )
}

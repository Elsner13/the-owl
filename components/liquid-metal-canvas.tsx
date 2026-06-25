'use client'

import { useEffect, useState } from 'react'
import { LiquidMetal } from '@paper-design/shaders-react'

type LiquidMetalCanvasProps = {
  image: string
  colorTint: string
  shiftRed?: number
  shiftBlue?: number
}

/**
 * WebGL liquid-metal shader. Renders immediately at full opacity — no reveal
 * gate, no fade-in — so the effect appears the instant the GPU paints it. The
 * static colored fallback beneath (see animated-background.tsx) covers the few
 * frames before first paint, so there is never a white flash. Honors
 * prefers-reduced-motion by freezing the animation (speed 0).
 */
export default function LiquidMetalCanvas({
  image,
  colorTint,
  shiftRed = 0.2,
  shiftBlue = 0.2,
}: LiquidMetalCanvasProps) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0 }}>
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

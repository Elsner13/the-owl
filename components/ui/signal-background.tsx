'use client'

import { useEffect, useRef } from 'react'

type SignalBackgroundProps = {
  className?: string
}

type Pulse = {
  /** Center position along the line, 0..1 */
  center: number
  /** Peak displacement in pixels */
  amplitude: number
  /** Gaussian half-width, in normalized x */
  width: number
  /** Oscillation frequency (0 = a clean spike) */
  freq: number
  phase: number
  /** Horizontal drift per frame (lets a pulse travel) */
  drift: number
  /** 1 = rising/holding, decays toward 0 over time */
  life: number
  decay: number
  attack: number
  level: number
}

/**
 * "Signal" background. A near-black charcoal field with subtle film grain and a
 * single deep British racing green line across the lower third. The line is
 * mostly calm but randomly fires spikes, oscillation bursts, and traveling
 * pulses, so it feels alive — like a transmission with a mind of its own.
 */
export function SignalBackground({ className }: SignalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1

    // --- Offscreen grain tile (regenerated occasionally for film flicker) ---
    const grain = document.createElement('canvas')
    const grainSize = 160
    grain.width = grainSize
    grain.height = grainSize
    const grainCtx = grain.getContext('2d')

    const renderGrain = () => {
      if (!grainCtx) return
      const img = grainCtx.createImageData(grainSize, grainSize)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        // Charcoal grain: low-luma monochrome speckle
        const v = 18 + Math.random() * 46
        d[i] = v
        d[i + 1] = v
        d[i + 2] = v
        d[i + 3] = Math.random() * 38
      }
      grainCtx.putImageData(img, 0, 0)
    }
    renderGrain()

    const resize = () => {
      const parent = canvas.parentElement
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent ? parent.clientWidth : window.innerWidth
      height = parent ? parent.clientHeight : window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const pulses: Pulse[] = []
    let frame = 0
    let nextEvent = 30

    const spawnPulse = () => {
      const roll = Math.random()
      if (roll < 0.4) {
        // Sharp EKG-like spike
        pulses.push({
          center: Math.random(),
          amplitude: (18 + Math.random() * 46) * (Math.random() < 0.5 ? 1 : -1),
          width: 0.012 + Math.random() * 0.025,
          freq: 0,
          phase: 0,
          drift: 0,
          life: 1,
          decay: 0.04 + Math.random() * 0.05,
          attack: 0.35,
          level: 0,
        })
      } else if (roll < 0.75) {
        // High-frequency oscillation burst (a "transmission")
        pulses.push({
          center: 0.2 + Math.random() * 0.6,
          amplitude: 10 + Math.random() * 26,
          width: 0.05 + Math.random() * 0.09,
          freq: 40 + Math.random() * 90,
          phase: Math.random() * Math.PI * 2,
          drift: 0,
          life: 1,
          decay: 0.012 + Math.random() * 0.02,
          attack: 0.12,
          level: 0,
        })
      } else {
        // Traveling pulse that drifts across the line
        const dir = Math.random() < 0.5 ? 1 : -1
        pulses.push({
          center: dir === 1 ? -0.05 : 1.05,
          amplitude: (14 + Math.random() * 30) * (Math.random() < 0.5 ? 1 : -1),
          width: 0.03 + Math.random() * 0.05,
          freq: Math.random() < 0.5 ? 0 : 24 + Math.random() * 40,
          phase: Math.random() * Math.PI * 2,
          drift: dir * (0.004 + Math.random() * 0.006),
          life: 1,
          decay: 0.004 + Math.random() * 0.006,
          attack: 0.1,
          level: 0,
        })
      }
    }

    const sampleDisplacement = (nx: number, t: number) => {
      let y = 0
      for (const p of pulses) {
        const dx = nx - p.center
        const env = Math.exp(-(dx * dx) / (2 * p.width * p.width))
        if (env < 0.001) continue
        const wave =
          p.freq === 0 ? 1 : Math.sin(p.freq * dx * Math.PI + p.phase + t)
        y += p.amplitude * env * wave * p.level
      }
      // Faint idle restlessness so the line is never perfectly dead
      y += Math.sin(nx * 22 + t * 0.6) * 0.7
      return y
    }

    const draw = () => {
      frame += 1
      const t = frame * 0.05

      // 1. Pure black base
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      // 2. Film grain, drawn with a jittered offset for subtle movement
      if (frame % 3 === 0) renderGrain()
      ctx.globalAlpha = 0.5
      const ox = -Math.random() * grainSize
      const oy = -Math.random() * grainSize
      for (let gx = ox; gx < width; gx += grainSize) {
        for (let gy = oy; gy < height; gy += grainSize) {
          ctx.drawImage(grain, gx, gy)
        }
      }
      ctx.globalAlpha = 1

      // 3. The signal line across the lower third
      const baseY = height * 0.72
      const step = 3
      let peak = 0

      // Soft burgundy wash beneath the line for depth
      const glowGrad = ctx.createLinearGradient(0, baseY - 60, 0, baseY + 60)
      glowGrad.addColorStop(0, 'rgba(109, 0, 26, 0)')
      glowGrad.addColorStop(0.5, 'rgba(109, 0, 26, 0.18)')
      glowGrad.addColorStop(1, 'rgba(109, 0, 26, 0)')
      ctx.fillStyle = glowGrad
      ctx.fillRect(0, baseY - 60, width, 120)

      ctx.beginPath()
      for (let x = 0; x <= width; x += step) {
        const nx = x / width
        const disp = sampleDisplacement(nx, t)
        peak = Math.max(peak, Math.abs(disp))
        const y = baseY - disp
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }

      // Brighter + more glow when the signal is active
      const activity = Math.min(1, peak / 40)
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.lineWidth = 1.6
      ctx.shadowColor = 'rgba(109, 0, 26, 0.9)'
      ctx.shadowBlur = 6 + activity * 22
      ctx.strokeStyle = `rgb(${Math.round(90 + activity * 60)}, ${Math.round(
        0 + activity * 6,
      )}, ${Math.round(20 + activity * 16)})`
      ctx.stroke()
      ctx.shadowBlur = 0

      // 4. Vignette for quiet authority
      const vig = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.2,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75,
      )
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(0,0,0,0.6)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, width, height)

      // 5. Advance pulse lifecycles
      for (let i = pulses.length - 1; i >= 0; i -= 1) {
        const p = pulses[i]
        // Attack toward full level, then decay
        if (p.level < 1 && p.life > 0.6) {
          p.level = Math.min(1, p.level + p.attack)
        }
        p.life -= p.decay
        p.level *= 0.985 + 0.014 * Math.max(0, p.life)
        p.center += p.drift
        p.phase += 0.25
        if (p.life <= 0 || p.center < -0.15 || p.center > 1.15) {
          pulses.splice(i, 1)
        }
      }

      // 6. Randomly fire new signals — erratic, with a mind of its own
      if (frame >= nextEvent) {
        const burst = Math.random() < 0.3 ? 2 + Math.floor(Math.random() * 2) : 1
        for (let b = 0; b < burst; b += 1) spawnPulse()
        // Next event: sometimes quick chatter, sometimes long silence
        nextEvent =
          frame +
          (Math.random() < 0.25
            ? 8 + Math.random() * 20
            : 60 + Math.random() * 200)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    if (prefersReduced) {
      // Static: charcoal + grain + a calm line, no animation loop
      frame = 0
      const t = 0
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = 0.5
      for (let gx = 0; gx < width; gx += grainSize) {
        for (let gy = 0; gy < height; gy += grainSize) {
          ctx.drawImage(grain, gx, gy)
        }
      }
      ctx.globalAlpha = 1
      const baseY = height * 0.72
      ctx.beginPath()
      for (let x = 0; x <= width; x += 3) {
        const y = baseY - Math.sin((x / width) * 22 + t) * 0.7
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.lineWidth = 1.6
      ctx.strokeStyle = 'rgb(109, 0, 26)'
      ctx.shadowColor = 'rgba(109, 0, 26, 0.7)'
      ctx.shadowBlur = 8
      ctx.stroke()
    } else {
      draw()
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}

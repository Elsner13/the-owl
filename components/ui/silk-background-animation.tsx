'use client'

import { useEffect, useRef } from 'react'

type SilkBackgroundProps = {
  className?: string
}

/**
 * Animated silk/flow canvas background, adapted from the silk-background-animation
 * component and re-tuned to the brand's near-black + Neon Crimson palette.
 * Renders as an absolutely-positioned layer filling its parent.
 */
export function SilkBackground({ className }: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    const speed = 0.02
    const scale = 2
    const noiseIntensity = 0.8

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      canvas.width = parent ? parent.clientWidth : window.innerWidth
      canvas.height = parent ? parent.clientHeight : window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const noise = (x: number, y: number) => {
      const G = 2.71828
      const rx = G * Math.sin(G * x)
      const ry = G * Math.sin(G * y)
      return (rx * ry * (1 + x)) % 1
    }

    const animate = () => {
      const { width, height } = canvas

      // Near-black base gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#050505')
      gradient.addColorStop(0.5, '#121011')
      gradient.addColorStop(1, '#050505')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale
          const v = (y / height) * scale

          const tOffset = speed * time
          const tex_x = u
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset)

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset)),
              )

          const rnd = noise(x, y)
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity)

          // British racing green silk threads fading into near-black
          const r = Math.floor(28 * intensity)
          const g = Math.floor(94 * intensity)
          const b = Math.floor(68 * intensity)

          const index = (y * width + x) * 4
          if (index < data.length) {
            data[index] = r
            data[index + 1] = g
            data[index + 2] = b
            data[index + 3] = 255
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Radial depth overlay
      const overlay = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2,
      )
      overlay.addColorStop(0, 'rgba(0, 0, 0, 0.15)')
      overlay.addColorStop(1, 'rgba(0, 0, 0, 0.55)')
      ctx.fillStyle = overlay
      ctx.fillRect(0, 0, width, height)

      time += 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}

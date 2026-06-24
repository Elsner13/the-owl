'use client'

import LiquidMetalCanvas from './liquid-metal-canvas'

/** Thin white rim: the icon silhouette scaled up slightly behind everything. */
function Outline({ image }: { image: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        transform: 'scale(1.015)',
      }}
    />
  )
}

/**
 * Solid colored fill in the exact icon shape. Sits under the shader as an
 * instant, on-brand fallback so the icon never flashes pure white before the
 * WebGL effect paints.
 */
function FillFallback({ image, color }: { image: string; color: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        WebkitMaskImage: `url(${image})`,
        maskImage: `url(${image})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        backgroundColor: color,
      }}
    />
  )
}

export function AnimatedLogo({ className = '' }: { className?: string }) {
  const image = '/images/bg-mark-solid.svg'
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Thin white outline rim */}
      <Outline image={image} />
      {/* Colored fallback so there is no white flash before the shader paints */}
      <FillFallback image={image} color="#9A1030" />
      <LiquidMetalCanvas
        image={image}
        colorTint="#E0285A"
        shiftRed={0.3}
        shiftBlue={0.3}
      />
    </div>
  )
}

export function LiquidMetalIcon({
  image,
  className = '',
}: {
  image: string
  className?: string
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Thin white outline rim */}
      <Outline image={image} />
      {/* Colored fallback so there is no white flash before the shader paints */}
      <FillFallback image={image} color="#6B7074" />
      <LiquidMetalCanvas image={image} colorTint="#8C9094" />
    </div>
  )
}

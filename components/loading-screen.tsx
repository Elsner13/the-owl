'use client'

import { useEffect, useState } from 'react'

/**
 * Clean loading overlay: the Sam Elsner mark + tagline on a pure-black field
 * (same color as the page, so the fade-out never flashes a color seam). It holds
 * until the page is genuinely ready — `window` load plus `document.fonts.ready`,
 * then two animation frames so the WebGL liquid-metal canvases have mounted —
 * before fading out, so nothing "pops" into view. Pure opacity/transform, no
 * WebGL, no jank. Reduced motion is handled in CSS.
 */
export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const MIN_MS = 1200 // floor so it never flash-and-vanishes on fast loads
    const HARD_MS = 3500 // safety cap so it can never trap the user
    const start = performance.now()
    let done = false
    let hideTimer: number | undefined
    let goneTimer: number | undefined

    const finish = () => {
      if (done) return
      done = true
      const wait = Math.max(0, MIN_MS - (performance.now() - start))
      hideTimer = window.setTimeout(() => {
        setHidden(true) // begin fade-out (700ms in CSS)
        goneTimer = window.setTimeout(() => setGone(true), 760) // unmount after fade
      }, wait)
    }

    const whenReady = () => {
      const fonts = (
        document as Document & { fonts?: { ready?: Promise<unknown> } }
      ).fonts
      Promise.resolve(fonts?.ready)
        .catch(() => {})
        .finally(() =>
          requestAnimationFrame(() => requestAnimationFrame(finish)),
        )
    }

    if (document.readyState === 'complete') whenReady()
    else window.addEventListener('load', whenReady, { once: true })

    const hard = window.setTimeout(finish, HARD_MS)

    return () => {
      window.removeEventListener('load', whenReady)
      if (hideTimer) window.clearTimeout(hideTimer)
      if (goneTimer) window.clearTimeout(goneTimer)
      window.clearTimeout(hard)
    }
  }, [])

  if (gone) return null

  return (
    <div className="loader-screen" data-hidden={hidden} aria-hidden="true">
      <div className="loader-content">
        <svg
          className="loader-logo"
          viewBox="0 0 64 64"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M55.71,37.72c0,0,2.7-7.69-14.97-15.08C23.06,15.26,22.33,7.77,22.33,7.77s5.41,6.86,18.82,9.46c13.41,2.6,16.43,4.16,20.8,12.58c0,0,0.1-13.31-12.89-21.32c0,0,3.95,4.99,2.6,9.25l-3.67-1.26c-3.24-1.11-6.5-2.15-9.79-3.06C34.48,12.4,27.29,9.74,20.67,3.4c0,0-4.16,10.29,4.99,16.53c0,0-13.21,9.67-17.89,24.64c0,0,5.41-2.39,7.59-1.14c0,0-13.62,6.14-13.31,17.16c0,0,14.56-13.31,46.69-11.65c0,0-23.81-8.84-16.01-25.37c0,0,4.13,0.93,9.09,3.19c-0.54,0.7-0.97,1.5-1.21,2.38c-0.57,1.96-0.2,4.19,0.94,5.84c1.12,1.67,2.85,2.79,4.66,3.23c1.82,0.43,3.72,0.27,5.28-0.52c-1.73,0.01-3.35-0.35-4.72-1.04c-1.37-0.69-2.48-1.74-3.14-2.95c-0.67-1.21-0.85-2.61-0.55-3.92c0.16-0.7,0.46-1.37,0.87-2c0.93,0.48,1.87,1.01,2.8,1.58c-0.42,0.54-0.67,1.21-0.67,1.94c0,1.75,1.43,3.17,3.2,3.17c1.06,0,1.99-0.51,2.58-1.29C53.31,34.54,54.63,36.04,55.71,37.72z" />
          <path d="M53.11,46.56c5.51,1.56,5.2,7.8,5.2,7.8c5.62-7.69,1.25-14.25,1.25-14.25C58.21,45.21,53.11,46.56,53.11,46.56z" />
        </svg>
        <p className="loader-tagline">See what&apos;s already there</p>
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}

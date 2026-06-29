'use client'

import { useEffect, useState } from 'react'

/**
 * Full-screen loading overlay shown on the homepage. Displays the owl logo with
 * a pure-CSS metallic shimmer (animates reliably on mobile, no WebGL needed)
 * while the page mounts. This buys the WebGL liquid-metal canvases time to
 * initialize behind it, so the animated effect is already running when the
 * overlay fades out.
 */
export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const MIN_MS = 1400
    const start = performance.now()

    let timeoutId: number

    const dismiss = () => {
      const elapsed = performance.now() - start
      const remaining = Math.max(0, MIN_MS - elapsed)
      timeoutId = window.setTimeout(() => setHidden(true), remaining)
    }

    if (document.readyState === 'complete') {
      dismiss()
    } else {
      window.addEventListener('load', dismiss, { once: true })
    }

    // Safety net: never trap the user behind the loader.
    const hardStop = window.setTimeout(() => setHidden(true), 4000)

    return () => {
      window.removeEventListener('load', dismiss)
      window.clearTimeout(timeoutId)
      window.clearTimeout(hardStop)
    }
  }, [])

  return (
    <div className="loader-screen" data-hidden={hidden} aria-hidden="true">
      <div className="loader-owl">
        <div className="loader-owl-base" />
        <div className="loader-owl-shimmer" />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}

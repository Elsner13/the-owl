'use client'

import { useEffect } from 'react'

export function SenjaMarquee() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="343bf9ae-db9c-492a-accd-7c714c8c2476"]',
    )
    if (existing) return

    const script = document.createElement('script')
    script.src =
      'https://widget.senja.io/widget/343bf9ae-db9c-492a-accd-7c714c8c2476/platform.js'
    script.type = 'text/javascript'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="senja-embed"
      data-id="343bf9ae-db9c-492a-accd-7c714c8c2476"
      data-mode="shadow"
      data-lazyload="false"
      style={{ display: 'block', width: '100%' }}
    />
  )
}

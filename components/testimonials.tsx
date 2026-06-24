'use client'

import { useEffect, useRef } from 'react'

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = 'senja-platform-script'
    if (!document.getElementById(id)) {
      const script = document.createElement('script')
      script.id = id
      script.src =
        'https://widget.senja.io/widget/3381fc51-9314-4ffc-95d2-942f0649224a/platform.js'
      script.type = 'text/javascript'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="senja-embed"
      data-id="3381fc51-9314-4ffc-95d2-942f0649224a"
      data-mode="shadow"
      data-lazyload="false"
      style={{ display: 'block', width: '100%' }}
    />
  )
}

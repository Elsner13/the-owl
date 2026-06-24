type LogoProps = {
  className?: string
  title?: string
}

/**
 * The Educated Eye logomark.
 * Uses `currentColor` so it inherits the surrounding text color
 * (off-white on the dark theme, or crimson where set via text-primary).
 */
export function Logo({ className, title = 'The Educated Eye' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
    >
      <path d="M20.98,1L1.1,31h9.92L30.9,1H20.98z M9.63,28.42H5.9L22.37,3.58h3.73L9.63,28.42z" />
      <path d="M17.89,1L6.04,18.87c-2.95-1.61-4.95-4.75-4.95-8.35c0-2.63,1.07-5.01,2.79-6.74C5.61,2.07,7.99,1,10.62,1H17.89z" />
      <path d="M14.11,31l11.85-17.87c2.95,1.61,4.95,4.75,4.95,8.35c0,2.63-1.07,5.01-2.79,6.74C26.39,29.93,24.01,31,21.38,31H14.11z" />
    </svg>
  )
}

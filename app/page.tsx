import Image from 'next/image'
import Link from 'next/link'
import { AnimatedLogo, LiquidMetalIcon } from '@/components/animated-background'
import { LoadingScreen } from '@/components/loading-screen'
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
  SubstackIcon,
} from '@/components/social-icons'

const tiles = [
  {
    label: 'The Educated Eye',
    href: '/the-educated-eye',
    external: false,
    icon: (
      <LiquidMetalIcon
        image="/images/educated-eye-icon.svg"
        className="h-full w-full"
      />
    ),
  },
  {
    label: 'Resonance Newsletter',
    href: 'https://thesamelsner.kit.com/profile',
    external: true,
    icon: (
      <LiquidMetalIcon
        image="/images/resonance-mark.svg"
        className="h-full w-full"
      />
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/samelsner',
    external: true,
    icon: (
      <LiquidMetalIcon
        image="/images/telegram-mark.svg"
        className="h-full w-full"
      />
    ),
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samelsner',
    icon: <LinkedInIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: 'X',
    href: 'https://x.com/samelsner',
    icon: <XIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@samelsner',
    icon: <YouTubeIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/samelsner',
    icon: <InstagramIcon className="h-[18px] w-[18px]" />,
  },
  {
    label: 'Substack',
    href: 'https://samelsner.substack.com',
    icon: <SubstackIcon className="h-[18px] w-[18px]" />,
  },
]

export default function HomePage() {
  return (
    <main className="relative flex min-h-svh flex-col bg-background text-foreground">
      <LoadingScreen />

      {/* Centered profile + options */}
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-6 text-center">
        {/* Animated liquid-metal logo icon */}
        <AnimatedLogo className="mb-3 h-16 w-16 md:h-20 md:w-20" />

        {/* Headshot */}
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border/60 md:h-28 md:w-28">
          <Image
            src="/images/sam-portrait.jpg"
            alt="Portrait of Sam Elsner"
            fill
            sizes="176px"
            priority
            className="object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="mt-5 font-[family-name:var(--font-jost)] text-2xl font-light uppercase tracking-[0.35em] text-foreground md:text-3xl">
          Sam Elsner
        </h1>

        {/* Slogan */}
        <p className="mt-2 font-serif text-base italic text-muted-foreground md:text-lg">
          See what&apos;s already there
        </p>

        {/* Clickable options */}
        <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-6">
          {tiles.map((t) => {
            const sharedClass =
              'tile-link group flex flex-col items-center gap-2 py-2'
            const content = (
              <>
                <span className="tile-icon flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.025] p-2.5 text-foreground">
                  {t.icon}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                  {t.label}
                </span>
              </>
            )
            return t.external ? (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={sharedClass}
              >
                {content}
              </a>
            ) : (
              <Link key={t.label} href={t.href} className={sharedClass}>
                {content}
              </Link>
            )
          })}
        </div>

        {/* Social icons */}
        <nav
          aria-label="Social media"
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors duration-200 hover:border-primary/60 hover:text-foreground"
            >
              {s.icon}
            </a>
          ))}
        </nav>
      </div>
    </main>
  )
}

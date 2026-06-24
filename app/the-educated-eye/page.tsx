import { SiteNav } from '@/components/site-nav'
import { HeroVisual } from '@/components/hero-visual'
import { Testimonials } from '@/components/testimonials'
import { Reveal } from '@/components/reveal'
import { ScrollProgress } from '@/components/scroll-progress'
import { MagneticCTA } from '@/components/magnetic-cta'
import { AnimatedHeading } from '@/components/animated-heading'
import {
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  SubstackIcon,
} from '@/components/social-icons'

// TODO: replace with the live Kit checkout / enrollment URL when provided.
const ENROLL_URL = '#enroll-placeholder'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-display text-sm uppercase tracking-[0.3em] accent-label">
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <main id="top" className="relative z-10 bg-transparent text-foreground">
      <ScrollProgress />
      <SiteNav />

      {/* 1. Hero */}
      <HeroVisual />

      {/* 2. Social proof */}
      <section id="proof" className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="mb-10 text-center font-display text-sm uppercase tracking-[0.3em] accent-label">
              From people who learned to see
            </p>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* 3. The Quiet Frustration */}
      <section className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>The Quiet Frustration</SectionLabel>
            <p className="text-balance font-display text-2xl font-light leading-snug text-foreground md:text-3xl">
              You&apos;re skilled. Accomplished. And you still feel like the real
              game is happening just outside your field of view.
            </p>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                You do the work. You&apos;ve read the books, hired the coaches,
                optimized the routines. Yet there&apos;s a nagging sense that
                you&apos;re reacting to your life rather than seeing it clearly.
                Opportunities reveal themselves only in hindsight. The right move
                feels obvious (but only after the moment has passed).
              </p>
              <p>
                So you push harder. Because that&apos;s what you&apos;ve been
                taught to do. More effort. More discipline. More fixing of
                yourself.
              </p>
              <p className="text-foreground">The problem was never your effort.</p>
              <p className="font-serif text-xl italic text-foreground">
                It&apos;s what you&apos;re able to perceive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. The Reframe */}
      <section className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>The Reframe</SectionLabel>
            <AnimatedHeading className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              You are already capable. You simply cannot act on what you cannot{' '}
              <span className="accent-text">perceive.</span>
            </AnimatedHeading>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Most personal growth is built on a quiet, unspoken premise: you
                are broken and need fixing.
              </p>
              <p>
                Read the right book. Hire the right coach. Adopt the right
                protocol. Close the gap between the person you are and the person
                you&apos;re supposed to become. The entire industry runs on this
                assumption.
              </p>
              <p>
                And it has produced an interesting result: millions of people who
                know exactly what&apos;s wrong with them and still can&apos;t seem
                to move.
              </p>
              <p className="text-foreground">
                The Educated Eye begins somewhere else entirely.
              </p>
              <p>
                Perception is not passive. It is a trainable faculty. The
                difference between those who consistently spot opportunity and
                those who miss it is not intelligence or hustle. It is perceptual
                control: the ability to direct your attention deliberately and see
                what is actually there.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                When you train the eye, the grinding stops. Not because you do
                less. Because you finally see where your effort belongs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. The Transformation (Before / After) */}
      <section className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>
              <span className="block text-center">The Transformation</span>
            </SectionLabel>
            <AnimatedHeading className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              From reacting in the dark to{' '}
              <span className="accent-text">seeing in full color.</span>
            </AnimatedHeading>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="card-pop rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Before
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Opportunities only become clear in hindsight. You work harder to
                compensate for a vague unease. Decisions are driven by noise,
                urgency, and other people&apos;s priorities. You sense something
                is off but you can&apos;t name it.
              </p>
            </Reveal>
            <Reveal className="card-pop card-pop-accent rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] accent-label">
                After
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                You recognize the right move while it still matters. Clarity
                replaces grinding as your default state. Your attention is
                deliberate, not hijacked. The world reorganizes around you (not
                because anything out there changed, but because you finally see
                what was already arrayed in front of you).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. What This Is */}
      <section id="method" className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>What This Is</SectionLabel>
            <AnimatedHeading className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              A training protocol for{' '}
              <span className="accent-text">seeing better.</span>
            </AnimatedHeading>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Educated Eye is not a course about thinking better. It&apos;s
                a training protocol for seeing better.
              </p>
              <p>
                8 weeks. Live. Weekly sessions grounded in the ecological
                psychology tradition of James J. Gibson and Eleanor J. Gibson. We
                work on affordance detection, filter identification, calibration
                exercises, and the deliberate restructuring of what you allow
                yourself to notice.
              </p>
              <p className="text-foreground">
                This is mechanistic, not motivational. It operates whether you
                believe in it or not.
              </p>
              <p>
                The radiologist sees the mass on the film while everyone else sees
                only grey. The information was always there. The calibration was
                the missing piece.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                Same world. Same data. Different attunement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Who this is for / not for */}
      <section id="whatsinside" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="card-pop rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] accent-label">
                Who This Is For
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                People who sense there&apos;s more available to them than
                they&apos;re currently accessing. People who are tired of
                grinding. People who have done the books and the coaches and the
                protocols and still feel like the real game is happening just
                outside their field of view.
              </p>
            </Reveal>
            <Reveal className="card-pop rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Who This Is Not For
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                People looking for a motivational surge that fades by Wednesday.
                People who want someone to tell them they&apos;re perfect the way
                they are and the universe just needs to cooperate. People who
                aren&apos;t ready to take their own perception seriously as
                something that can be deliberately retrained.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. The Cost of Not Doing This */}
      <section className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>The Cost of Not Doing This</SectionLabel>
            <AnimatedHeading className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              The filter was installed by people who never asked your{' '}
              <span className="accent-text">permission.</span>
            </AnimatedHeading>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                You walk past invitations to act every day that your perceptual
                system was trained to filter out.
              </p>
              <p>
                Not because they&apos;re hidden. Because you&apos;ve been
                calibrated (systematically, since childhood) to see problems
                instead of affordances. Threat over opportunity. Familiar over
                novel. What everyone else sees over what&apos;s actually there.
              </p>
              <p>
                The cost is not just the individual moments you miss. The cost is
                cumulative. Every time you dismiss a signal your body sent you,
                you teach yourself that your own perception cannot be trusted.
              </p>
              <p>
                Parents calibrating toward safety. Schools calibrating toward
                compliance. Algorithms calibrating toward whatever keeps you
                scrolling.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                It can be removed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. The Cohort — closing CTA */}
      <section id="offer" className="relative z-10">
        <div className="mx-auto max-w-3xl px-6 pb-28 pt-10 md:pb-36">
          <Reveal className="card-pop card-pop-accent rounded-3xl px-6 py-16 text-center md:px-12">
            <SectionLabel>
              <span className="block text-center">The Cohort</span>
            </SectionLabel>
            <AnimatedHeading className="text-balance font-display text-4xl font-light leading-tight text-foreground md:text-5xl">
              The answer isn&apos;t more. The answer is{' '}
              <span className="accent-text">different eyes.</span>
            </AnimatedHeading>
            <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-foreground">
              8 weeks. Live. Weekly sessions.
            </p>
            <p className="mx-auto mt-2 max-w-md text-lg leading-relaxed text-muted-foreground">
              Starts July 6. 20 spots. When they&apos;re gone, enrollment closes
              until the next cycle.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticCTA href={ENROLL_URL}>Enroll Now</MagneticCTA>
            </div>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 border-t border-border/60 pt-8 text-left text-base leading-relaxed text-muted-foreground">
              <p>
                You have been operating under a bad assumption. The assumption is
                that if something isn&apos;t working, the answer is more. More
                discipline. More hours. More books. More frameworks.
              </p>
              <p>It hasn&apos;t worked. You know it hasn&apos;t worked.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-card/70">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="font-display text-lg uppercase tracking-[0.15em] text-foreground">
              The Educated Eye
            </span>
            <nav
              aria-label="Social media"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/sam-elsner/',
                  icon: <LinkedInIcon className="h-5 w-5" />,
                },
                {
                  label: 'X',
                  href: 'https://x.com/samelsner0',
                  icon: <XIcon className="h-[18px] w-[18px]" />,
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/sam.elsner/',
                  icon: <InstagramIcon className="h-5 w-5" />,
                },
                {
                  label: 'Substack',
                  href: 'https://samelsner.substack.com',
                  icon: <SubstackIcon className="h-[18px] w-[18px]" />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                >
                  {s.icon}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a
                href="https://thesamelsner.kit.com/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-label transition-opacity hover:opacity-80"
              >
                © 2026 Sam Elsner
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

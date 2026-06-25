import Image from 'next/image'
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

// Live Kit/Stripe checkout for the cohort.
const ENROLL_URL = 'https://buy.stripe.com/8x2fZidredVQaS6fHR4gg00'

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
              You read the book. You underlined the right lines. You can explain
              the move to a friend over dinner.
            </p>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>And on Monday you did the same thing you did last Monday.</p>
              <p>
                You have started calling that discipline. It is not discipline.
                You see the problem fine. You cannot see the opening.
              </p>
              <p>
                You hired the coach. You fixed the morning routine. You cleaned up
                the inputs. And still: the best decision of your week was obvious
                by Friday, and invisible on Tuesday, when it would have mattered.
              </p>
              <p className="text-foreground">
                You are not behind on effort. You have poured in more than the
                people who keep passing you.
              </p>
              <p>The thing you are missing does not answer to effort.</p>
              <p className="font-serif text-xl italic text-foreground">
                It answers to perception.
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
              You are already capable. You cannot act on what you cannot{' '}
              <span className="accent-text">perceive.</span>
            </AnimatedHeading>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Almost everything sold to you starts from one quiet insult: that
                you are broken and need fixing.
              </p>
              <p>
                Read the right book. Hire the right coach. Run the right protocol.
                Close the gap between who you are and who you are supposed to be.
                The whole industry runs on that one assumption.
              </p>
              <p>
                It has produced a strange result: millions of people who can name
                exactly what is wrong with them, and still cannot move.
              </p>
              <p className="text-foreground">
                The Educated Eye starts somewhere else.
              </p>
              <p>
                Perception is not a fixed setting you were issued at birth. It is
                a skill. The gap between people who keep spotting the opening and
                people who keep missing it is not IQ, and it is not hustle. It is
                calibration: the trained ability to aim your attention and see
                what is actually there.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                Train the eye, and the grinding stops. Not because you do less.
                Because you finally see where your effort belongs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. From Sam — founder letter */}
      <section id="from-sam" className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>From Sam</SectionLabel>
            <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-12">
              <div className="mx-auto w-40 md:mx-0 md:w-full">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/images/sam-portrait.jpg"
                    alt="Sam Elsner"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
                <p className="text-foreground">
                  I should tell you how I learned this, because it did not come
                  from a book.
                </p>
                <p>
                  I spent over a decade as a thrower. Shot put, discus, hammer,
                  weight. In 2018 I won two NCAA Division III national titles, in
                  the shot put and the discus. From the outside that looks like
                  talent. It was not. It was learning to see one inch nobody around
                  me could see: the exact moment in a throw where the whole thing is
                  won or lost.
                </p>
                <p>
                  The last practice before that national meet, my coach gave me one
                  cue. Be long and fluid. Think of a bow. You draw it back slow,
                  under one smooth line of tension, and when it is full, you do not
                  throw the arrow. You let go.
                </p>
                <p>
                  So I stopped trying to throw the discus. I let it load like that
                  bow and release itself. And something left my hand I had never
                  seen from myself. The discus came off so fast it startled me.
                  Flat. Clean. And it just kept going. It landed near 60 meters.
                </p>
                <p>
                  I took that one feeling to nationals. First throw of the meet.
                  Thousands of people, cameras, a venue I knew by heart. I won the
                  title on that throw, by more than four meters. Not because I
                  wanted it more than anyone else in that ring. Because I had
                  finally learned to see the throw that was already in me.
                </p>
                <p>
                  Then I spent years coaching. Close to 5,000 athletes. I watched
                  the same pattern in every one of them. The ones who broke through
                  were almost never the ones who wanted it most or trained the
                  longest. They were the ones who learned to see what the moment
                  was actually offering.
                </p>
                <p>
                  Here is what took me years to admit: this is not a sport thing.
                  It is a human thing. The athlete who reads the opening, the
                  founder who reads the room, the writer who reads the culture
                  before it speaks. Same skill. Different field.
                </p>
                <p className="text-foreground">
                  I built The Educated Eye to teach that skill on purpose, in 8
                  weeks. The thing my coaches could only point at, I can now train.
                </p>
                <p className="font-serif text-xl italic text-foreground">
                  — Sam
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Proof — this is not woo */}
      <section className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>This Is Not Woo. It Is Mechanism.</SectionLabel>
            <AnimatedHeading className="text-balance font-display text-3xl font-light leading-tight text-foreground md:text-4xl">
              Trained perception is measurable. And it changes the{' '}
              <span className="accent-text">outcome.</span>
            </AnimatedHeading>
            <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                In 2013, researchers handed expert radiologists a lung scan with a
                gorilla printed on it, 48 times larger than the nodules they were
                hunting. 83% never saw it. Eye-tracking showed most of them looked
                directly at it. Trained experts, looking right at the thing, not
                seeing it.
              </p>
              <p>
                That is perception filtering reality before your conscious mind
                gets a vote. It happens to all of us, all day.
              </p>
              <p>
                Now the other direction. A group of college basketball players
                were trained on one variable: where their eyes settle in the
                second before a free throw. Two seasons later their accuracy had
                climbed about 22%, while untrained teams went nowhere. One
                perceptual change. A 22% swing in the result.
              </p>
              <p className="text-foreground">
                The radiologists show you the cost of an untrained eye. The
                free-throw study shows you the upside of a trained one. Same
                mechanism. The only question is whose field it gets pointed at:
                theirs, or yours.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                Same world. Same data. Different attunement.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Drew, V&otilde; &amp; Wolfe (2013), Psychological Science. Harle
                &amp; Vickers (2001), The Sport Psychologist.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. What This Is — feeling first, then method */}
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
                Picture the version of your week where the right move is obvious
                while it still matters. Where you stop bracing against a low,
                nameless unease and just see clearly. Where your attention is yours
                again, instead of rented out to whoever shouts loudest.
              </p>
              <p className="text-foreground">
                That is the outcome. Here is the machine that produces it.
              </p>
              <p>
                8 weeks. Live. One session a week, plus the work between them. The
                method is built on the ecological-psychology tradition of James and
                Eleanor Gibson: the same science behind the studies above. We train
                four things. Detecting affordances, which is what your environment
                is actually offering you. Finding your filters, which is what you
                were trained to screen out. Calibration drills, which tune the eye
                to your real terrain. And the deliberate rebuilding of what you let
                yourself notice.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                This is mechanism, not motivation. It works whether you believe in
                it or not.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. The Transformation (Before / After) */}
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
                Opportunities only make sense in hindsight. You work harder to
                cover a vague unease. Your decisions get set by noise, urgency, and
                other people&apos;s priorities. Something is off and you cannot name
                it.
              </p>
            </Reveal>
            <Reveal className="card-pop card-pop-accent rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] accent-label">
                After
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                You catch the right move while it still matters. Clarity becomes
                your default, not grinding. Your attention is deliberate, not
                hijacked. The world reorganizes around you. Nothing out there
                changed. You finally see what was already in front of you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. The Cost of Not Doing This */}
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
                system was trained to screen out.
              </p>
              <p>
                Not because they are hidden. Because you were calibrated, since
                childhood, to see problems instead of openings. Threat over
                opportunity. Familiar over new. What everyone else sees over what
                is actually there.
              </p>
              <p>
                And the cost compounds. Every time you dismiss a signal your own
                body sent you, you teach yourself that your perception cannot be
                trusted. So you outsource it. To the loud, the urgent, the average.
              </p>
              <p className="font-serif text-xl italic text-foreground">
                It can be removed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. Who this is for / not for */}
      <section id="whatsinside" className="relative z-10">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="card-pop rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] accent-label">
                Who This Is For
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                People who sense there is more available to them than they are
                reaching. People tired of grinding. People who have done the books,
                the coaches, the protocols, and still feel the real game is
                happening just outside their field of view.
              </p>
            </Reveal>
            <Reveal className="card-pop rounded-3xl p-8 md:p-10">
              <p className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Who This Is Not For
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                People who want a motivational hit that fades by Wednesday. People
                who want to be told they are perfect and the universe just needs to
                cooperate. People not ready to treat their own perception as
                something they can deliberately retrain.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. FAQ — objections */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28">
          <Reveal>
            <SectionLabel>Before You Decide</SectionLabel>
            <div className="mt-4 flex flex-col gap-10">
              {[
                {
                  q: 'I’m already busy. I don’t have time for more.',
                  a: 'Good. This is not more. The Educated Eye does not add hours to your week. It changes what you see in the hours you already have. Most people leave doing less, because they stop pouring effort into the wrong places.',
                },
                {
                  q: 'Is this just mindset stuff dressed up in science?',
                  a: 'No. It is mechanism, with a 70-year research base behind it (see the studies above). If mindset is a pep talk, this is the opposite: drills, calibration, and feedback. It operates whether you believe in it or not.',
                },
                {
                  q: 'Who are you to teach this?',
                  a: 'Two-time NCAA Division III national champion in one of the most technical skills in sport, and a coach to close to 5,000 athletes. I did not read about trained perception. I lived inside it, then taught it for a decade.',
                },
                {
                  q: 'What if it doesn’t work for me?',
                  a: 'Come to the first two weeks. If you do not feel the shift, email me and I refund you in full. No form, no friction. Past that, this is a trained skill with measurable results behind it, and the cohort is capped at 20 so I work with you directly. If you do the drills, the shift is mechanical, not magical.',
                },
                {
                  q: 'What exactly do I get?',
                  a: 'Eight live weekly sessions over eight weeks. The calibration drills and field work between them. A room capped at 20 people, so it stays small enough to actually train you.',
                },
              ].map((item) => (
                <div key={item.q}>
                  <p className="font-display text-lg font-light text-foreground">
                    {item.q}
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. The Cohort — closing CTA */}
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

            <div className="mx-auto mt-9 flex max-w-md flex-col gap-2 text-lg leading-relaxed text-foreground">
              <p>8 weeks. Live. One session a week.</p>
              <p className="text-muted-foreground">
                Eight live weekly sessions, the drills and field work between them,
                and a room capped at 20.
              </p>
            </div>

            <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-1">
              <p className="font-display text-5xl font-light text-foreground">
                $497
              </p>
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                per seat
              </p>
            </div>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Starts July 6. 20 seats. When they are gone, enrollment closes until
              the next cycle.
            </p>

            <div className="mt-9 flex justify-center">
              <MagneticCTA href={ENROLL_URL}>Claim Your Seat</MagneticCTA>
            </div>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              You go to checkout, and within minutes you get an email with your
              start details for July 6. That is it.
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-foreground/90">
              <span className="accent-text">Two-week guarantee.</span> Come to the
              first two weeks. If you do not feel the shift, email me for a full
              refund. No form, no friction.
            </p>

            <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 border-t border-border/60 pt-8 text-left text-base leading-relaxed text-muted-foreground">
              <p>
                You have been operating on a bad assumption: that when something is
                not working, the answer is more. More discipline. More hours. More
                frameworks. It has not worked. You already know it has not worked.
              </p>
              <p className="text-foreground">
                The answer was never more. It was different eyes.
              </p>
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

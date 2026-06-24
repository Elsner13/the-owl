'use client'

import React, { useEffect, useState } from 'react'
import NumberFlow from '@number-flow/react'
import { motion } from 'framer-motion'

const MotionNumberFlow = motion.create(NumberFlow)

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function CohortCountdown({
  targetDate = '2026-07-06T00:00:00',
  label = 'First cohort begins July 6. 20 spots.',
  className = '',
}: {
  targetDate?: string
  label?: string
  className?: string
}) {
  const target = new Date(targetDate).getTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft(target))
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: timeLeft?.days ?? 0 },
    { label: 'Hours', value: timeLeft?.hours ?? 0 },
    { label: 'Minutes', value: timeLeft?.minutes ?? 0 },
    { label: 'Seconds', value: timeLeft?.seconds ?? 0 },
  ]

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-foreground/70">
        {label}
      </p>
      <div
        className="mt-3 flex items-end justify-center gap-3 sm:gap-5"
        role="timer"
        aria-label="Countdown to the first cohort"
      >
        {units.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <MotionNumberFlow
              value={unit.value}
              format={{ minimumIntegerDigits: 2 }}
              className="font-display text-4xl font-light leading-none text-foreground tabular-nums sm:text-5xl"
            />
            <span className="mt-2 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-foreground/60 sm:text-xs">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

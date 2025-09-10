"use client"

import * as React from "react"

import { AnimatePresence, motion, useInView } from "framer-motion"

interface GradualSpacingProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  initialDelay?: number
}

export function GradualSpacing({
  text,
  className = "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
  delay = 0.1,
  duration = 0.5,
  once = true,
  initialDelay = 0,
}: GradualSpacingProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <div ref={ref} className="flex flex-wrap">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: duration,
              delay: initialDelay + i * delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

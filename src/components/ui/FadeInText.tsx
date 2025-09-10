"use client"

import * as React from "react"

import { motion, useInView } from "framer-motion"

interface FadeInTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeInText({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  once = true,
}: FadeInTextProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  return (
    <motion.p
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={
        isInView
          ? { filter: "blur(0px)", opacity: 1 }
          : { filter: "blur(20px)", opacity: 0 }
      }
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.p>
  )
}

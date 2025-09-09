"use client"

import { motion } from "framer-motion"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Philosophy() {
  const { ref, controls } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Philosophy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            私たちの哲学
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">
              デザインは生活を豊かにする
            </h3>
            <p className="mb-4 leading-relaxed text-gray-600">
              私たちは、優れたデザインが人々の日常生活に潤いと喜びをもたらすと信じています。
              機能性と美しさを兼ね備えた製品を通じて、使う人の心に響く体験を創造します。
            </p>
            <p className="leading-relaxed text-gray-600">
              素材の選定から製造工程、そして最終的な仕上げまで、
              すべてのプロセスにおいて妥協を許さない姿勢で、
              長く愛される製品づくりに取り組んでいます。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-96 overflow-hidden rounded-lg bg-gray-200"
          >
            <img
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&h=600&fit=crop"
              alt="Philosophy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

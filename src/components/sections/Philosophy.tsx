"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { colors } from "@/lib/colors"

export default function Philosophy() {
  const { ref, controls } = useScrollAnimation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2
            className={`mb-4 text-2xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
          >
            私たちについて
            <span className="mt-1 block text-sm font-normal text-gray-500">
              About
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div variants={itemVariants}>
            <h3
              className={`mb-6 text-2xl font-bold md:text-3xl ${colors.textDark}`}
            >
              一人ひとりに寄り添う支援
            </h3>
            <p className={`mb-4 leading-relaxed ${colors.textDark}`}>
              私たちは、利用者様一人ひとりの個性と尊厳を大切にし、
              その方らしい生活を送っていただけるよう、心を込めて支援いたします。
            </p>
            <p className={`leading-relaxed ${colors.textDark}`}>
              経験豊富なスタッフが24時間体制でサポートし、
              安心・安全な環境の中で、利用者様が笑顔で過ごせる
              第二の我が家を提供してまいります。
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-96 overflow-hidden rounded-lg bg-gray-200"
          >
            <Image
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&h=600&fit=crop"
              alt="Philosophy"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

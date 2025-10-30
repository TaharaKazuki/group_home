"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

import { FadeInText } from "@/components/ui/FadeInText"
import { GradualSpacing } from "@/components/ui/GradualSpacing"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { colors } from "@/lib/colors"

export default function AboutUs() {
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
          <GradualSpacing
            text="私たちについて"
            className={`text-2xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
            delay={0.12}
            initialDelay={0}
          />
          <GradualSpacing
            text="About"
            className="mt-2 text-sm font-normal text-gray-500"
            delay={0.08}
            duration={0.4}
            initialDelay={0.9}
          />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <GradualSpacing
              text="一人ひとりに寄り添う支援"
              className={`text-2xl font-bold md:text-3xl ${colors.textDark} mb-6`}
              delay={0.08}
              initialDelay={1.5}
            />
            <FadeInText
              delay={3.0}
              className={`mb-4 leading-relaxed ${colors.textDark}`}
            >
              私たちは、利用者様一人ひとりの個性と尊厳を大切にし、
              その方らしい生活を送っていただけるよう、心を込めて支援いたします。
            </FadeInText>
            <FadeInText
              delay={3.8}
              className={`mb-4 leading-relaxed ${colors.textDark}`}
            >
              経験豊富なスタッフが親身にサポートし、
              安心・安全な環境の中で、利用者様が笑顔で過ごせる
              第二の我が家を提供してまいります。
            </FadeInText>
            <FadeInText
              delay={4.6}
              className={`leading-relaxed ${colors.textDark}`}
            >
              また、スタッフの中には看護職員がおり、医療的ケアが必要な方にも対応しております。
            </FadeInText>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-96 overflow-hidden rounded-xl bg-gray-200"
          >
            <Image
              src="/assets/about_us.png"
              alt="私たちについて"
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

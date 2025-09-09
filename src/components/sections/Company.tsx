"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const companyInfo = [
  { label: "会社名", value: "株式会社NUTRAD" },
  { label: "設立", value: "2010年4月" },
  { label: "所在地", value: "東京都渋谷区神宮前1-1-1" },
  { label: "代表取締役", value: "山田 太郎" },
  { label: "事業内容", value: "家具・インテリア製品の企画・製造・販売" },
]

export default function Company() {
  const { ref, controls } = useScrollAnimation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="company" className="py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Company
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">会社概要</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-6">
              {companyInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  className="border-b border-gray-200 pb-4"
                >
                  <dt className="mb-1 text-sm font-medium text-gray-500">
                    {info.label}
                  </dt>
                  <dd className="text-lg">{info.value}</dd>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 overflow-hidden rounded-lg bg-gray-200 md:h-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Company"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

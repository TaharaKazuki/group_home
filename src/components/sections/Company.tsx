"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { colors } from "@/lib/colors"

const companyInfo = [
  { label: "運営法人", value: "S&Tタカノ合同会社" },
  { label: "代表取締役", value: "高野 重美" },
  { label: "事業内容", value: "グループホームの運営事業" },
  { label: "運営施設", value: "グループホーム4施設（川口市内）" },
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
    <section id="company" className="bg-white py-24 lg:py-32">
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
            会社概要
            <span className="mt-1 block text-sm font-normal text-gray-500">
              Company
            </span>
          </h2>
        </motion.div>

        <div className="mx-auto">
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
                  <dd className={`text-lg ${colors.textDark}`}>{info.value}</dd>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="relative h-96 overflow-hidden bg-gray-200 md:h-auto"
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

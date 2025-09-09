"use client"

import { motion, Variants } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const topics = [
  {
    id: 1,
    date: "2024.01.15",
    category: "News",
    title: "新製品「HORIZON」シリーズを発表",
    description:
      "革新的なデザインと機能性を兼ね備えた新しい家具シリーズを発表しました。",
  },
  {
    id: 2,
    date: "2024.01.10",
    category: "Exhibition",
    title: "ミラノデザインウィーク2024に出展",
    description: "世界最大級のデザインイベントに参加し、最新作品を展示します。",
  },
  {
    id: 3,
    date: "2023.12.20",
    category: "Award",
    title: "グッドデザイン賞を受賞",
    description: "「FLOW」シリーズが2023年度グッドデザイン賞を受賞しました。",
  },
  {
    id: 4,
    date: "2023.12.01",
    category: "Shop",
    title: "表参道に新店舗をオープン",
    description:
      "フラッグシップストアとして、体験型の新しい店舗をオープンしました。",
  },
]

export default function Topics() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="topics" className="bg-gray-50 py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Topics
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">最新情報</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mx-auto max-w-4xl space-y-4"
        >
          {topics.map((topic) => (
            <motion.article
              key={topic.id}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <time>{topic.date}</time>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
                      {topic.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-white transition-transform hover:scale-105">
            View All Topics
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}

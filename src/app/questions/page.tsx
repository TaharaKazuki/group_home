"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AccordionItem from "@/components/ui/AccordionItem"
import { FAQ_LIST } from "@/data/faq"

export default function QuestionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-6 py-12 lg:px-12">
          {/* Back to top link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                よくあるご質問
                <span className="mt-2 block text-base font-normal text-gray-500">
                  Frequently Asked Questions
                </span>
              </h1>
              <p className="mt-4 text-gray-700">
                IXIA Group
                Homeについて、よくお寄せいただくご質問と回答をまとめました。
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
            </motion.div>

            {/* FAQ Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg bg-white p-6 shadow-lg md:p-8"
            >
              {FAQ_LIST.map((item, index) => (
                <AccordionItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  questionId={index + 1}
                />
              ))}
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

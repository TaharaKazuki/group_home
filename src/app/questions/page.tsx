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

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold">
                その他のご質問はお気軽にお問い合わせください
              </h2>
              <p className="mb-6 text-gray-600">
                こちらに掲載されていないご質問や、より詳しい情報をお求めの方は、
                お電話またはフォームからお問い合わせください。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="tel:090-0000-0000"
                  className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  電話で問い合わせ
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
                >
                  フォームで問い合わせ
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

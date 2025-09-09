"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Contact() {
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
    <section id="contact" className="py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Contact
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            お問い合わせ
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Get in Touch</h3>
                <p className="text-gray-600">
                  ご質問、ご相談がございましたら、お気軽にお問い合わせください。
                  専門スタッフが丁寧にご対応いたします。
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">住所</p>
                    <p className="text-gray-600">
                      〒150-0001
                      <br />
                      東京都渋谷区神宮前1-1-1
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">電話番号</p>
                    <p className="text-gray-600">03-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">メールアドレス</p>
                    <p className="text-gray-600">info@nutrad.co.jp</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:outline-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-black py-3 text-white transition-colors hover:bg-gray-800"
              >
                送信する
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

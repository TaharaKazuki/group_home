"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { motion, Variants } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact"

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // ここで実際のフォーム送信処理を行う
      console.log("Form submitted:", data)

      // 送信成功の処理
      alert("お問い合わせを送信しました。ありがとうございました。")
      reset()
    } catch (error) {
      console.error("Form submission error:", error)
      alert("送信中にエラーが発生しました。もう一度お試しください。")
    }
  }

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
    hidden: { opacity: 0, y: 20 },
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
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-700 md:text-5xl">
                Contact
              </h1>
              <p className="text-lg text-gray-600">お問い合わせ</p>
            </motion.div>

            <div className="grid gap-12">
              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white p-8"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none",
                        errors.name
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:border-gray-500 focus:ring-gray-200"
                      )}
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none",
                        errors.email
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:border-gray-500 focus:ring-gray-200"
                      )}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      {...register("category")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none",
                        errors.category
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:border-gray-500 focus:ring-gray-200"
                      )}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        種別を選択してください
                      </option>
                      <option value="admission">入居について</option>
                      <option value="employment">雇用について</option>
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.category.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      className={cn(
                        "w-full resize-y rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none",
                        errors.message
                          ? "border-red-300 focus:ring-red-200"
                          : "border-gray-300 focus:border-gray-500 focus:ring-gray-200"
                      )}
                      placeholder="お問い合わせ内容をご記入ください（2000文字以内）"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant={isSubmitting ? "secondary" : "primary"}
                      className="w-full rounded-full"
                    >
                      {isSubmitting ? "送信中..." : "送信する"}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

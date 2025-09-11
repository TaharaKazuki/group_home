"use client"

import { useEffect } from "react"
import { useState } from "react"

import emailjs from "@emailjs/browser"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, Variants } from "framer-motion"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/Button"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact"

export default function ContactPage() {
  const [privacyChecked, setPrivacyChecked] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const watchedFields = watch()

  // localStorageからデータを復元
  useEffect(() => {
    const savedData = localStorage.getItem("contactFormData")
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof ContactFormData, parsedData[key])
      })
    }

    const savedPrivacy = localStorage.getItem("contactPrivacyChecked")
    if (savedPrivacy === "true") {
      setPrivacyChecked(true)
    }
  }, [setValue])

  // フォームの変更をlocalStorageに保存
  useEffect(() => {
    if (
      watchedFields.name ||
      watchedFields.email ||
      watchedFields.category ||
      watchedFields.message
    ) {
      localStorage.setItem("contactFormData", JSON.stringify(watchedFields))
    }
  }, [watchedFields])

  useEffect(() => {
    localStorage.setItem("contactPrivacyChecked", String(privacyChecked))
  }, [privacyChecked])

  useEffect(() => {
    // EmailJSの初期化
    if (process.env.NEXT_PUBLIC_EMAILJS_USER_ID) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
    }
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    try {
      // EmailJSのテンプレートパラメータ
      const templateParams = {
        name: data.name,
        email: data.email,
        category:
          data.category === "admission"
            ? "入居について"
            : data.category === "employment"
              ? "雇用について"
              : "見学希望について",
        message: data.message,
      }

      // EmailJS経由でメール送信
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        templateParams
      )

      if (response.status === 200) {
        // 送信成功
        toast.success("お問い合わせを送信しました", {
          description: "ありがとうございました。",
          duration: 5000,
        })
        reset()
        setPrivacyChecked(false)
        // 送信成功後はlocalStorageをクリア
        localStorage.removeItem("contactFormData")
        localStorage.removeItem("contactPrivacyChecked")
      } else {
        throw new Error("送信に失敗しました")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("送信中にエラーが発生しました", {
        description: "もう一度お試しください。",
        duration: 5000,
      })
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
      <Toaster />
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
                お問い合わせ
              </h1>
              <p className="text-lg text-gray-600">Contact</p>
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
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      お名前
                      <span className="rounded border border-red-300 px-2 py-0.5 text-xs font-bold text-red-300">
                        必須
                      </span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-gray-700 focus:ring-2 focus:outline-none",
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
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      メールアドレス
                      <span className="rounded border border-red-300 px-2 py-0.5 text-xs font-bold text-red-300">
                        必須
                      </span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-gray-700 focus:ring-2 focus:outline-none",
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
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      お問い合わせ種別
                      <span className="rounded border border-red-300 px-2 py-0.5 text-xs font-bold text-red-300">
                        必須
                      </span>
                    </label>
                    <select
                      id="category"
                      {...register("category")}
                      className={cn(
                        "w-full rounded-lg border px-4 py-3 text-gray-700 focus:ring-2 focus:outline-none",
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
                      <option value="visit">見学希望について</option>
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
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      メッセージ
                      <span className="rounded border border-red-300 px-2 py-0.5 text-xs font-bold text-red-300">
                        必須
                      </span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message")}
                      className={cn(
                        "w-full resize-y rounded-lg border px-4 py-3 text-gray-700 focus:ring-2 focus:outline-none",
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

                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      type="checkbox"
                      checked={privacyChecked}
                      onChange={(e) => setPrivacyChecked(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-2 focus:ring-gray-200"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        プライバシーポリシー
                      </Link>
                      に同意します
                      <span className="ml-1 rounded border border-red-300 px-2 py-0.5 text-xs font-bold text-red-300">
                        必須
                      </span>
                    </label>
                  </div>

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting || !privacyChecked}
                      variant={isSubmitting ? "secondary" : "primary"}
                      className="flex w-full items-center justify-center gap-2 rounded-full"
                    >
                      {isSubmitting && (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      )}
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

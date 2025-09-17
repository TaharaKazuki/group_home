"use client"

import { motion, Variants } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function PrivacyPolicyPage() {
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

  const sectionData = [
    {
      title: "1. 個人情報の収集について",
      content: [
        "当法人では、以下の場合に個人情報を収集することがあります：",
        "• お問い合わせフォームからの情報提供時",
        "• サービスのご利用時",
        "• 施設見学のお申し込み時",
        "収集する個人情報は、お名前、ご連絡先、メールアドレス等です。",
      ],
    },
    {
      title: "2. 個人情報の利用目的",
      content: [
        "収集した個人情報は以下の目的で利用します：",
        "• お問い合わせへの回答",
        "• サービスの提供・改善",
        "• 重要なお知らせの連絡",
        "• 統計データの作成（個人を特定できない形式）",
      ],
    },
    {
      title: "3. 個人情報の第三者提供",
      content: [
        "当法人は、以下の場合を除き、個人情報を第三者に提供することはありません：",
        "• ご本人の同意がある場合",
        "• 法令に基づく場合",
        "• 人の生命、身体または財産の保護のために必要がある場合",
      ],
    },
    {
      title: "4. 個人情報の管理",
      content: [
        "当法人は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。",
        "また、個人情報を取り扱う職員に対して、適切な監督を行います。",
      ],
    },
    {
      title: "5. 個人情報の開示・訂正・削除",
      content: [
        "ご本人から個人情報の開示、訂正、削除等のご請求があった場合、",
        "適切な本人確認を行った上で、合理的な期間内に対応いたします。",
      ],
    },
    {
      title: "6. お問い合わせ",
      content: [
        "個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：",
        "",
        "株式会社IXIA",
        "Tel: 090-0000-0000",
        "Email: info@ixia-grouphome.jp",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20 lg:ml-64">
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
                プライバシーポリシー
              </h1>
              <p className="text-lg text-gray-600">Privacy Policy</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-8 rounded-lg bg-white p-8 shadow-lg"
            >
              <p className="mb-6 text-gray-700">
                株式会社IXIA（以下「当法人」）は、個人情報保護の重要性を認識し、
                個人情報の保護に関する法律及び関連法令等を遵守し、
                お客様の個人情報を適切に取り扱います。
              </p>
              <p className="text-sm text-gray-500">最終更新日: 2024年9月9日</p>
            </motion.div>

            <div className="space-y-8">
              {sectionData.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-lg bg-white p-6 shadow-lg"
                >
                  <h2 className="mb-4 text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <div className="space-y-2">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className={`text-gray-700 ${
                          paragraph === "" ? "mb-2" : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 rounded-lg bg-red-50 p-6"
            >
              <p className="text-center text-sm text-gray-600">
                本プライバシーポリシーの内容は予告なく変更することがあります。
                変更があった場合は、当ウェブサイトに掲載いたします。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

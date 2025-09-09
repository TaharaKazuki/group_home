"use client"

import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check, DollarSign } from "lucide-react"
import Image from "next/image"

import { colors } from "@/lib/colors"

interface PricingModalProps {
  service: {
    id: string
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    image: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function PricingModal({
  service,
  isOpen,
  onClose,
}: PricingModalProps) {
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }

      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"

      return () => {
        document.removeEventListener("keydown", handleEscape)
        document.body.style.overflow = "unset"
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!service) return null

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Close Button within modal */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-red-300 shadow-md transition-all hover:bg-red-400 hover:shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="relative max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <DollarSign className="mx-auto mb-4 h-16 w-16" />
                    <h1 className="text-3xl font-bold md:text-4xl">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <p className={`text-lg leading-relaxed ${colors.textDark}`}>
                    {service.description}
                  </p>
                </div>

                {/* Pricing Tables */}
                <div className="mb-8">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    基本料金
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                            項目
                          </th>
                          <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                            料金（月額）
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-gray-700">家賃</td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            50,000円
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-700">食費</td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            45,000円
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-700">管理費</td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            20,000円
                          </td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="px-6 py-4 font-bold text-gray-900">
                            合計
                          </td>
                          <td className="px-6 py-4 text-right text-lg font-bold text-red-600">
                            115,000円
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="mb-8">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    その他サービス（オプション）
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-gray-200 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        通院介助
                      </h4>
                      <p className="mb-2 text-sm text-gray-600">
                        病院への送迎・付き添い
                      </p>
                      <p className="text-lg font-bold text-red-500">
                        3,000円/回
                      </p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        訪問理美容
                      </h4>
                      <p className="mb-2 text-sm text-gray-600">
                        カット・カラー対応
                      </p>
                      <p className="text-lg font-bold text-red-500">実費</p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        レクリエーション
                      </h4>
                      <p className="mb-2 text-sm text-gray-600">
                        外出イベント等
                      </p>
                      <p className="text-lg font-bold text-red-500">実費</p>
                    </div>
                    <div className="rounded-lg border border-gray-200 p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        介護用品レンタル
                      </h4>
                      <p className="mb-2 text-sm text-gray-600">
                        車椅子・歩行器等
                      </p>
                      <p className="text-lg font-bold text-red-500">
                        1,000円〜/月
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support Info */}
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-4 text-xl font-bold text-blue-900">
                    公的支援制度について
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-gray-700">
                        障害者総合支援法に基づく支援により、利用料の一部が助成される場合があります
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-gray-700">
                        所得に応じて自己負担額の上限が設定されています
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                      <p className="text-gray-700">
                        詳しくは市区町村の福祉窓口にお問い合わせください
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

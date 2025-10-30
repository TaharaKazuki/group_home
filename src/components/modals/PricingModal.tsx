"use client"

import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"

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
              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h1 className="flex items-center text-2xl font-bold text-gray-700 md:text-4xl">
                    {service.title}
                  </h1>
                  <p
                    className={`mt-4 text-lg leading-relaxed ${colors.textDark}`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Pricing Tables */}
                <div className="mb-8">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    基本料金（月額）
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
                          <td className="px-6 py-4 text-gray-700">
                            家賃{" "}
                            <p className="text-xs text-gray-500">
                              ※各棟により違いあり
                            </p>
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            37,000円〜43,000円
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">
                            <div className="text-gray-700">食費</div>
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            30,000円
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4">
                            <div className="text-gray-700">水道光熱費</div>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="font-semibold text-gray-900">
                              17,000円
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-700">日用品費</td>
                          <td className="px-6 py-4 text-right font-semibold text-gray-900">
                            5,000円
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 font-bold text-gray-900">
                            合計
                          </td>
                          <td className="px-6 py-4 text-right font-bold">
                            <div className="text-lg text-gray-900">
                              89,000円〜95,000円
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Support System */}
                  <div className="mt-6 rounded-lg bg-red-50 p-6">
                    <h4 className="mb-4 text-lg font-bold text-red-300">
                      家賃補助制度の適用例
                    </h4>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-white p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-semibold text-gray-700">
                            特定障がい者特別給付費支援
                          </span>
                          <span className="text-sm font-bold text-red-300">
                            -10,000円
                          </span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              補助適用後の負担額
                            </span>
                            <span className="font-bold text-gray-600">
                              79,000円〜85,000円
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        ※補助制度の適用については個別にご相談ください
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support Info */}
                <div className="rounded-lg border-2 border-dashed border-red-300 p-6">
                  <h3 className="mb-4 text-xl font-bold text-red-300">
                    公的支援制度について
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-red-300" />
                      <p className="text-gray-700">
                        障害者総合支援法に基づく支援により、利用料の一部が助成される場合があります
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-red-300" />
                      <p className="text-gray-700">
                        所得に応じて自己負担額の上限が設定されています
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-red-300" />
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

"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import LifeModal from "@/components/modals/LifeModal"
import PricingModal from "@/components/modals/PricingModal"
import { GradualSpacing } from "@/components/ui/GradualSpacing"
import { servicesData } from "@/data/services"
import { colors } from "@/lib/colors"

export default function Services() {
  const [selectedService, setSelectedService] = useState<
    (typeof servicesData)[0] | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: (typeof servicesData)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  return (
    <section id="service" className="relative overflow-hidden py-24 lg:py-32">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-pink-50" />

      {/* 装飾的な背景要素 */}
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-48 -translate-y-48 rounded-full bg-gradient-to-br from-red-100/30 to-transparent blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-gradient-to-tl from-pink-100/30 to-transparent blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* ヘッダーセクション */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-red-300/20 to-pink-300/20 blur-xl" />
            <GradualSpacing
              text="サービス"
              className={`relative text-3xl font-bold tracking-tight md:text-4xl ${colors.textDark}`}
              delay={0.15}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <span className="text-sm font-medium tracking-wider text-red-300 uppercase">
              Services
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className={`mx-auto mt-6 max-w-2xl text-lg ${colors.textDark}`}
          >
            私たちが提供するサービス
          </motion.p>
        </motion.div>

        {/* サービスカードグリッド */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                onClick={() => openModal(service)}
                className="group relative cursor-pointer"
              >
                {/* メインカード */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  {/* スワイプ背景アニメーション */}
                  <div className="absolute top-0 bottom-0 left-0 z-0 h-full w-0 bg-gradient-to-br from-red-50 to-pink-50 transition-all duration-500 ease-out group-hover:w-full" />

                  <div className="relative z-10 p-8 lg:p-10">
                    {/* アイコン */}
                    <div className="mb-6">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-300 transition-all duration-300 group-hover:bg-red-300 group-hover:text-white">
                        <IconComponent className="h-7 w-7" />
                      </div>
                    </div>

                    {/* タイトル */}
                    <h3
                      className={`mb-4 text-2xl font-bold ${colors.textDark}`}
                    >
                      {service.title}
                    </h3>

                    {/* 説明文 */}
                    <p className="mb-8 text-base leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    {/* CTAボタン */}
                    <div className="flex items-center gap-2 font-medium text-red-300 transition-all duration-300 group-hover:gap-3">
                      <span>詳しく見る</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* モーダル */}
      {selectedService?.id === "pricing" && (
        <PricingModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      {selectedService?.id === "life" && (
        <LifeModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  )
}

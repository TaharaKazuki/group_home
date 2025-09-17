"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
            <Sparkles className="h-4 w-4 text-red-300" />
            <span className="text-sm font-medium tracking-wider text-red-300 uppercase">
              Services
            </span>
            <Sparkles className="h-4 w-4 text-red-300" />
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
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openModal(service)}
                className="group relative cursor-pointer"
              >
                {/* メインカード */}
                <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* グラデーション背景 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/30 to-pink-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* 動的グロー効果 */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-2xl bg-red-300 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30"
                    animate={
                      hoveredCard === index ? { scale: [1, 1.02, 1] } : {}
                    }
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative z-10 p-8 lg:p-10">
                    {/* アイコンとタイトル */}
                    <div className="mb-6 flex items-center gap-4">
                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-300 text-white shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <IconComponent className="h-8 w-8" />
                      </motion.div>

                      <div>
                        <h3
                          className={`text-2xl font-bold ${colors.textDark} transition-colors duration-300 group-hover:text-red-300`}
                        >
                          {service.title}
                        </h3>
                        <div className="mt-2 h-0.5 w-12 scale-x-0 transform bg-gradient-to-r from-red-300 to-pink-300 transition-transform duration-500 group-hover:scale-x-100" />
                      </div>
                    </div>

                    {/* 説明文 */}
                    <p
                      className={`text-base leading-relaxed ${colors.textDark} mb-8`}
                    >
                      {service.description}
                    </p>

                    {/* CTAボタン */}
                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="inline-flex items-center gap-3 rounded-full bg-red-300 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
                        詳しく見る
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </motion.div>
                  </div>

                  {/* 浮遊パーティクル */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-red-300/30"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 15}%`,
                      }}
                      animate={
                        hoveredCard === index
                          ? {
                              y: [0, -10, 0],
                              opacity: [0.3, 0.7, 0.3],
                              scale: [0.8, 1.2, 0.8],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
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

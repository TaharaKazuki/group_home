"use client"

import { useState } from "react"

import { motion } from "framer-motion"

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
    <section id="service" className="bg-red-50 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <GradualSpacing
            text="サービス"
            className={`text-2xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
            delay={0.15}
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-2 block text-sm font-normal text-gray-500"
          >
            Services
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className={`mt-4 text-base ${colors.textDark}`}
          >
            私たちが提供するサービス
          </motion.p>
        </div>

        <div className="grid gap-0 md:grid-cols-2">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              onClick={() => openModal(service)}
              className="group relative flex cursor-pointer flex-col overflow-hidden border-r border-b border-gray-100 bg-white transition-colors duration-300 hover:bg-red-50"
            >
              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <div className="mb-4 flex items-start justify-between">
                  <h3
                    className={`text-2xl font-bold ${colors.textDark} transition-colors duration-300 group-hover:text-red-300`}
                  >
                    {service.title}
                  </h3>
                </div>
                <p
                  className={`flex-1 text-base leading-relaxed ${colors.textDark} mb-6`}
                >
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center border-2 border-red-300 bg-transparent px-8 py-3 text-red-300 transition-all duration-300 group-hover:bg-red-300 group-hover:text-white">
                    詳しく見る
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Render appropriate modal based on service type */}
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

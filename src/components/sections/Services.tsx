"use client"

import { useState } from "react"

import LifeModal from "@/components/modals/LifeModal"
import PricingModal from "@/components/modals/PricingModal"
import { Button } from "@/components/ui/Button"
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
    <section id="service" className="bg-gray-50 py-10 lg:py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <h2
            className={`mb-4 text-2xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
          >
            サービス
            <span className="mt-1 block text-sm font-normal text-gray-500">
              Services
            </span>
          </h2>
          <p className={`max-w-2xl text-base ${colors.textDark}`}>
            私たちが提供するサービス
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:gap-1">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="flex flex-col overflow-hidden rounded-sm bg-white"
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className={`mb-3 text-xl font-bold ${colors.textDark}`}>
                  {service.title}
                </h3>
                <p className={`flex-1 ${colors.textDark}`}>
                  {service.description}
                </p>
                <Button
                  onClick={() => openModal(service)}
                  variant="primary"
                  className="mt-4 w-full cursor-pointer rounded-full"
                >
                  詳しく見る
                </Button>
              </div>
            </div>
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

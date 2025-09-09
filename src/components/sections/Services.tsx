"use client"

import { useState } from "react"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

import ServiceModal from "@/components/modals/ServiceModal"
import { servicesData } from "@/data/services"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Services() {
  const { ref, controls } = useScrollAnimation()
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="service" className="bg-gray-50 py-24 lg:py-32">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6 lg:px-12"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            私たちが提供するサービス
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => openModal(service)}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

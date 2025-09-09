"use client"

import { motion } from "framer-motion"
import { Palette, Package, Home } from "lucide-react"

import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const services = [
  {
    icon: Palette,
    title: "Design",
    description:
      "革新的なデザインソリューションを提供し、ブランド価値を最大化します。",
    image:
      "https://images.unsplash.com/photo-1509087859087-a384654eca4d?w=600&h=400&fit=crop",
  },
  {
    icon: Package,
    title: "Production",
    description: "最高品質の素材と熟練の技術で、理想を形にします。",
    image:
      "https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=600&h=400&fit=crop",
  },
  {
    icon: Home,
    title: "Interior",
    description:
      "空間全体をコーディネートし、統一感のある美しい環境を創造します。",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
]

export default function Services() {
  const { ref, controls } = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
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
    </section>
  )
}

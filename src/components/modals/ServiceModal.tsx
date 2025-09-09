"use client"

import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ServiceModalProps {
  service: {
    id: string
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    image: string
    detailedDescription: string
    features: string[]
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: ServiceModalProps) {
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

  const IconComponent = service.icon

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
            className="relative z-10 mx-4 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white hover:shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative">
              {/* Header Image */}
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <IconComponent className="mx-auto mb-4 h-16 w-16" />
                    <h1 className="text-3xl font-bold md:text-4xl">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <p className="mb-4 text-lg text-gray-600">
                    {service.description}
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    {service.detailedDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold">
                    主なサービス内容
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                          <Check className="h-4 w-4 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-lg bg-gray-50 p-6 text-center">
                  <h4 className="mb-2 text-lg font-semibold">お問い合わせ</h4>
                  <p className="mb-4 text-gray-600">
                    {service.title}
                    サービスについて詳しく知りたい方は、お気軽にお問い合わせください。
                  </p>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-block rounded-lg bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
                  >
                    お問い合わせする
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

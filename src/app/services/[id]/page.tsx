"use client"

import { motion, Variants } from "framer-motion"
import { Check, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getServiceById } from "@/data/services"

interface ServicePageProps {
  params: {
    id: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

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

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-6 py-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#service"
              className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              サービス一覧に戻る
            </Link>
          </motion.div>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center text-white">
              <IconComponent className="mx-auto mb-4 h-20 w-20" />
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 text-lg opacity-90">{service.description}</p>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-16 lg:px-12"
        >
          <div className="mx-auto max-w-4xl">
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">サービス概要</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {service.detailedDescription}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold">主なサービス内容</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center"
            >
              <h4 className="mb-4 text-2xl font-bold">お問い合わせ</h4>
              <p className="mb-6 text-gray-600">
                {service.title}
                サービスについて詳しく知りたい方は、お気軽にお問い合わせください。
                専門スタッフが丁寧にご相談に応じます。
              </p>
              <Link
                href="/#service"
                className="inline-block rounded-lg bg-black px-8 py-4 text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                サービス一覧に戻る
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}

"use client"

import { useEffect, useState } from "react"

import { motion, Variants } from "framer-motion"
import { ArrowLeft, MapPin, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { facilitiesData } from "@/data/facilities"
import { colors } from "@/lib/colors"

export default function FacilitiesPage() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
    console.info("isMounted")
  }, [])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const MotionDiv = isMounted ? motion.div : "div"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20 lg:ml-64">
        <div className="container mx-auto px-6 py-12 lg:px-12">
          {/* Back to top link */}
          <MotionDiv
            initial={isMounted ? { opacity: 0, x: -20 } : undefined}
            animate={isMounted ? { opacity: 1, x: 0 } : undefined}
            transition={isMounted ? { duration: 0.6 } : undefined}
            className="mb-8"
          >
            <Link
              href="/"
              className={`inline-flex items-center gap-2 ${colors.textDark} transition-colors hover:text-red-300`}
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </MotionDiv>

          <MotionDiv
            variants={isMounted ? containerVariants : undefined}
            initial={isMounted ? "hidden" : undefined}
            animate={isMounted ? "visible" : undefined}
            className="mx-auto max-w-6xl"
          >
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h1
                className={`mb-4 text-2xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
              >
                施設一覧
                <span className="mt-1 block text-sm font-normal text-gray-500">
                  Facilities
                </span>
              </h1>
              <p
                className={`max-w-3xl text-lg leading-relaxed ${colors.textDark}`}
              >
                埼玉県川口市に4つの施設を展開。
                それぞれの個性を活かした環境で、利用者様をお迎えします。
              </p>
            </MotionDiv>

            <div className="grid gap-0 lg:gap-0">
              {facilitiesData.map((facility) => (
                <MotionDiv
                  key={facility.id}
                  variants={isMounted ? itemVariants : undefined}
                  className="group border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex flex-col py-12 lg:flex-row lg:py-16">
                    {/* Image Section */}
                    <div className="relative h-80 overflow-hidden bg-red-200 lg:h-96 lg:w-1/2">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-lg font-semibold text-white">
                          画像準備中
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 py-8 lg:py-0 lg:pl-16">
                      <div className="flex h-full flex-col justify-center">
                        <h3
                          className={`mb-2 text-3xl font-bold lg:text-4xl ${colors.textDark}`}
                        >
                          {facility.name}
                        </h3>
                        <p
                          className={`mb-8 text-lg leading-relaxed ${colors.textDark} opacity-80`}
                        >
                          {facility.description}
                        </p>

                        {/* Info List - Simplified */}
                        <div className="mb-8 space-y-4">
                          <div className="flex items-start gap-4">
                            <MapPin className="mt-0.5 h-5 w-5 text-red-300" />
                            <div className="flex-1">
                              <p className={`text-base ${colors.textDark}`}>
                                {facility.address}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <Phone className="mt-0.5 h-5 w-5 text-red-300" />
                            <div className="flex-1">
                              <p className={`text-base ${colors.textDark}`}>
                                {facility.phone}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* CTA - Simplified */}
                        <Link
                          href={`/facilities/${facility.id}`}
                          className="group/link inline-flex items-center gap-2 text-red-300 transition-colors hover:text-red-400"
                        >
                          <span className="text-lg font-medium">
                            詳細を見る
                          </span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </main>
      <div className="lg:ml-64">
        <Footer />
      </div>
    </>
  )
}

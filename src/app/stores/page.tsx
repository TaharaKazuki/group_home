"use client"

import { useEffect, useState } from "react"

import { motion, Variants } from "framer-motion"
import { ArrowLeft, MapPin, Phone, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { Button } from "@/components/ui/Button"
import { storesData } from "@/data/stores"
import { colors } from "@/lib/colors"

export default function StoresPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  const MotionDiv = isMounted ? motion.div : "div"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
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
              className={`inline-flex items-center gap-2 ${colors.textDark} transition-colors hover:text-gray-500`}
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
              className="mb-12"
            >
              <h1
                className={`mb-4 text-4xl font-bold tracking-tight md:text-3xl ${colors.textDark}`}
              >
                店舗一覧
              </h1>
              <p className={`text-sm ${colors.textDark}`}>Stores</p>
              <p className={`mt-4 max-w-3xl ${colors.textDark}`}>
                IXIA Group Homeでは、東京都内に3つの店舗を展開しています。
                <br />
                各店舗それぞれに特色があり、
                利用者様のニーズに合わせた環境を提供しています。
              </p>
            </MotionDiv>

            <div className="space-y-8">
              {storesData.map((store) => (
                <MotionDiv
                  key={store.id}
                  variants={isMounted ? itemVariants : undefined}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden md:h-auto md:w-1/3">
                      <Image
                        src={store.image}
                        alt={store.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                      <div className="absolute top-6 left-6 text-white">
                        <h3 className="mb-1 text-2xl font-bold">
                          {store.shortName}
                        </h3>
                        <div className="h-1 w-12 rounded-full bg-red-300" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-8 md:p-10">
                      <div className="flex h-full flex-col">
                        <div className="flex-1">
                          <h3
                            className={`mb-3 text-2xl font-bold ${colors.textDark}`}
                          >
                            {store.name}
                          </h3>
                          <p
                            className={`mb-6 text-base leading-relaxed ${colors.textDark} opacity-90`}
                          >
                            {store.description}
                          </p>

                          {/* Info Grid */}
                          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                <MapPin className="h-4 w-4 text-red-400" />
                              </div>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-500">
                                  住所
                                </p>
                                <p className={`text-sm ${colors.textDark}`}>
                                  {store.address}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                <Phone className="h-4 w-4 text-red-400" />
                              </div>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-500">
                                  電話番号
                                </p>
                                <p className={`text-sm ${colors.textDark}`}>
                                  {store.phone}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                <Clock className="h-4 w-4 text-red-400" />
                              </div>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-500">
                                  営業時間
                                </p>
                                <p className={`text-sm ${colors.textDark}`}>
                                  {store.openingHours}（{store.closedDays}定休）
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                                <Users className="h-4 w-4 text-red-400" />
                              </div>
                              <div>
                                <p className="mb-1 text-xs font-medium text-gray-500">
                                  定員
                                </p>
                                <p className={`text-sm ${colors.textDark}`}>
                                  定員{store.capacity}名
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center lg:justify-end">
                          <Button
                            asChild
                            variant="primary"
                            className="rounded-full px-8 py-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                          >
                            <Link href={`/stores/${store.id}`}>詳細を見る</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </>
  )
}

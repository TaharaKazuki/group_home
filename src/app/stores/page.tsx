"use client"

import { useEffect, useState } from "react"

import { motion, Variants } from "framer-motion"
import { ArrowLeft, MapPin, Phone, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { storesData } from "@/data/stores"

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
              className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
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
              className="mb-12 text-center"
            >
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Stores
              </h1>
              <p className="text-lg text-gray-600">店舗一覧</p>
              <p className="mx-auto mt-4 max-w-2xl text-gray-700">
                IXIA Group Homeでは、東京都内に3つの店舗を展開しています。
                各店舗それぞれに特色があり、利用者様のニーズに合わせた環境を提供しています。
              </p>
            </MotionDiv>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {storesData.map((store) => (
                <MotionDiv
                  key={store.id}
                  variants={isMounted ? itemVariants : undefined}
                  className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={store.image}
                      alt={store.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{store.shortName}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {store.name}
                    </h3>
                    <p className="mb-4 text-gray-600">{store.description}</p>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{store.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>{store.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>
                          {store.openingHours}（{store.closedDays}定休）
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>定員{store.capacity}名</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/stores/${store.id}`}
                        className="inline-block w-full rounded-lg bg-black py-3 text-center text-white transition-colors hover:bg-gray-800"
                      >
                        詳細を見る
                      </Link>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>

            {/* Contact CTA */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mt-16 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold">店舗見学のお申し込み</h2>
              <p className="mb-6 text-gray-600">
                各店舗の見学をご希望の方は、事前にお申し込みください。
                スタッフが丁寧にご案内いたします。
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-black px-8 py-4 text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                見学のお申し込み
              </Link>
            </MotionDiv>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </>
  )
}

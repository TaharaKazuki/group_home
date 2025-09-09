"use client"

import { useEffect, useState, use } from "react"

import { motion, Variants } from "framer-motion"
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Users,
  Mail,
  Check,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getStoreById } from "@/data/stores"

interface StorePageProps {
  params: Promise<{
    id: string
  }>
}

export default function StorePage({ params }: StorePageProps) {
  const [isMounted, setIsMounted] = useState(false)
  const resolvedParams = use(params)
  const store = getStoreById(resolvedParams.id)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!store) {
    notFound()
  }

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
      <main className="min-h-screen bg-white pt-20">
        {/* Back Navigation */}
        <div className="container mx-auto px-6 py-6 lg:px-12">
          <MotionDiv
            initial={isMounted ? { opacity: 0, x: -20 } : undefined}
            animate={isMounted ? { opacity: 1, x: 0 } : undefined}
            transition={isMounted ? { duration: 0.6 } : undefined}
          >
            <Link
              href="/stores"
              className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              店舗一覧に戻る
            </Link>
          </MotionDiv>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          {store.image && (
            <Image
              src={store.image}
              alt={store.name}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <MotionDiv
            initial={isMounted ? { opacity: 0, y: 30 } : undefined}
            animate={isMounted ? { opacity: 1, y: 0 } : undefined}
            transition={isMounted ? { duration: 0.8 } : undefined}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {store.name}
              </h1>
              <p className="mt-4 text-lg opacity-90">{store.description}</p>
            </div>
          </MotionDiv>
        </div>

        {/* Content Section */}
        <MotionDiv
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : undefined}
          animate={isMounted ? "visible" : undefined}
          className="container mx-auto px-6 py-16 lg:px-12"
        >
          <div className="mx-auto max-w-6xl">
            {/* Store Info */}
            <div className="mb-16 grid gap-12 lg:grid-cols-2">
              <MotionDiv variants={isMounted ? itemVariants : undefined}>
                <h2 className="mb-6 text-3xl font-bold">施設概要</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  {store.detailedDescription}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">住所</p>
                      <p className="text-gray-600">{store.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <Phone className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">電話番号</p>
                      <p className="text-gray-600">{store.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <Mail className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">メールアドレス</p>
                      <p className="text-gray-600">{store.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">営業時間</p>
                      <p className="text-gray-600">
                        {store.openingHours}（{store.closedDays}定休）
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <Users className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium">定員</p>
                      <p className="text-gray-600">{store.capacity}名</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv variants={isMounted ? itemVariants : undefined}>
                <h2 className="mb-6 text-3xl font-bold">特徴・サービス</h2>
                <div className="grid gap-4">
                  {store.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionDiv>
            </div>

            {/* Facilities */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2 className="mb-6 text-3xl font-bold">施設・設備</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {store.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800">
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Staff */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2 className="mb-6 text-3xl font-bold">スタッフ紹介</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {store.staff.map((member, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white p-6 shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-600">{member.position}</p>
                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                      <p>経験年数: {member.experience}</p>
                      <p>専門分野: {member.speciality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* CTA Section */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center"
            >
              <h2 className="mb-4 text-2xl font-bold">見学・お問い合わせ</h2>
              <p className="mb-6 text-gray-600">
                {store.name}
                の見学や詳しい情報をご希望の方は、お気軽にお問い合わせください。
                専門スタッフが丁寧にご説明いたします。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href={`tel:${store.phone}`}
                  className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                >
                  電話で問い合わせ
                </Link>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-red-300 px-6 py-3 text-white transition-colors hover:bg-red-400"
                >
                  フォームで問い合わせ
                </Link>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </main>
      <Footer />
    </>
  )
}

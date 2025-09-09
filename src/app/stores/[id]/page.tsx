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
import { colors } from "@/lib/colors"

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
              className={`inline-flex items-center gap-2 ${colors.textDark} transition-colors hover:text-gray-500`}
            >
              <ArrowLeft className="h-4 w-4" />
              店舗一覧に戻る
            </Link>
          </MotionDiv>
        </div>

        {/* Hero Section with Square Image */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center gap-8 pt-12 lg:flex-row lg:items-start lg:gap-12">
            {/* Square Image */}
            <MotionDiv
              initial={isMounted ? { opacity: 0, scale: 0.95 } : undefined}
              animate={isMounted ? { opacity: 1, scale: 1 } : undefined}
              transition={isMounted ? { duration: 0.8 } : undefined}
              className="relative h-80 w-80 flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl lg:h-96 lg:w-96"
            >
              {store.image && (
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </MotionDiv>

            {/* Store Info */}
            <MotionDiv
              initial={isMounted ? { opacity: 0, x: 30 } : undefined}
              animate={isMounted ? { opacity: 1, x: 0 } : undefined}
              transition={isMounted ? { duration: 0.8, delay: 0.2 } : undefined}
              className="flex-1 text-center lg:pt-8 lg:text-left"
            >
              <h1
                className={`mb-4 text-4xl font-bold md:text-5xl ${colors.textDark}`}
              >
                {store.name}
              </h1>
              <p
                className={`mb-6 text-lg leading-relaxed ${colors.textDark} opacity-90`}
              >
                {store.description}
              </p>

              {/* Quick Info */}
              <div className="inline-flex flex-wrap gap-4 rounded-xl bg-red-50 p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span className={`text-sm font-medium ${colors.textDark}`}>
                    {store.address.split("　")[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-400" />
                  <span className={`text-sm font-medium ${colors.textDark}`}>
                    定員{store.capacity}名
                  </span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Content Section */}
        <MotionDiv
          variants={isMounted ? containerVariants : undefined}
          initial={isMounted ? "hidden" : undefined}
          animate={isMounted ? "visible" : undefined}
          className="container mx-auto px-6 py-6 lg:px-12 lg:py-16"
        >
          <div className="mx-auto max-w-6xl">
            {/* Store Overview */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <div className="rounded-2xl bg-gradient-to-r from-red-50 to-red-100/50 p-8 lg:p-12">
                <h2 className={`mb-6 text-3xl font-bold ${colors.textDark}`}>
                  施設概要
                </h2>
                <p
                  className={`mb-8 text-lg leading-relaxed ${colors.textDark}`}
                >
                  {store.detailedDescription}
                </p>

                {/* Contact Info Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${colors.textDark} opacity-80`}
                      >
                        住所
                      </p>
                      <p className={`text-sm ${colors.textDark}`}>
                        {store.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${colors.textDark} opacity-80`}
                      >
                        電話番号
                      </p>
                      <p className={`text-sm ${colors.textDark}`}>
                        {store.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${colors.textDark} opacity-80`}
                      >
                        営業時間
                      </p>
                      <p className={`text-sm ${colors.textDark}`}>
                        {store.openingHours}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${colors.textDark} opacity-80`}
                      >
                        定員
                      </p>
                      <p className={`text-sm ${colors.textDark}`}>
                        {store.capacity}名
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-white/80 p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${colors.textDark} opacity-80`}
                      >
                        メール
                      </p>
                      <p className={`text-sm ${colors.textDark}`}>
                        {store.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Features Section */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2
                className={`mb-8 text-center text-3xl font-bold ${colors.textDark}`}
              >
                特徴・サービス
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {store.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-300 transition-colors group-hover:bg-red-400">
                        <feature.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`mb-2 text-lg font-semibold ${colors.textDark}`}
                        >
                          {feature.name}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${colors.textDark} opacity-80`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Facilities */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2
                className={`mb-8 text-center text-3xl font-bold ${colors.textDark}`}
              >
                施設・設備
              </h2>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {store.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-red-50"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-300">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span
                        className={`text-sm font-medium ${colors.textDark}`}
                      >
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>

            {/* Staff */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2
                className={`mb-8 text-center text-3xl font-bold ${colors.textDark}`}
              >
                スタッフ紹介
              </h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {store.staff.map((member, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-300 text-2xl font-bold text-white">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className={`mb-1 text-lg font-bold ${colors.textDark}`}>
                      {member.name}
                    </h3>
                    <p className="mb-3 font-medium text-red-400">
                      {member.position}
                    </p>
                    <div
                      className={`space-y-1 text-sm ${colors.textDark} opacity-80`}
                    >
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
              className="rounded-2xl bg-gradient-to-r from-red-50 via-red-100/80 to-red-50 p-10 text-center"
            >
              <h2 className={`mb-4 text-3xl font-bold ${colors.textDark}`}>
                見学・お問い合わせ
              </h2>
              <p className={`mb-8 text-lg ${colors.textDark} opacity-90`}>
                {store.name}
                の見学や詳しい情報をご希望の方は、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-red-300 bg-white px-8 py-4 font-semibold text-red-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-300 hover:text-white hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
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

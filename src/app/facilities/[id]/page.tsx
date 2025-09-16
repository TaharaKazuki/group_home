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
  Home,
  Heart,
  Shield,
  Wifi,
  Car,
  Utensils,
  Bath,
  Tv,
  Bed,
  Coffee,
  Building,
  Star,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { getFacilityById } from "@/data/facilities"
import { colors } from "@/lib/colors"

interface FacilityPageProps {
  params: Promise<{
    id: string
  }>
}

export default function FacilityPage({ params }: FacilityPageProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const resolvedParams = use(params)
  const facility = getFacilityById(resolvedParams.id)

  useEffect(() => {
    setIsMounted(true)

    // Preload image
    if (facility?.image) {
      const img = new window.Image()
      img.src = facility.image
      img.onload = () => setImageLoaded(true)
    }
  }, [facility])

  if (!facility) {
    notFound()
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        ease: [0.25, 0.46, 0.45, 0.94],
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
              href="/facilities"
              className={`inline-flex items-center gap-2 ${colors.textDark} transition-colors hover:text-red-300`}
            >
              <ArrowLeft className="h-4 w-4" />
              施設一覧に戻る
            </Link>
          </MotionDiv>
        </div>

        {/* Hero Section - Comprehensive Layout */}
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <div className="flex flex-col gap-12">
            {/* Title Section */}
            <MotionDiv
              initial={isMounted ? { opacity: 0, y: 30 } : undefined}
              animate={isMounted ? { opacity: 1, y: 0 } : undefined}
              transition={isMounted ? { duration: 0.8 } : undefined}
              className="text-center"
            >
              <h1
                className={`mb-3 text-4xl font-bold lg:text-5xl ${colors.textDark}`}
              >
                {facility.name}
              </h1>
              <p className="mb-6 text-xl text-red-300">{facility.shortName}</p>
              <p
                className={`mx-auto max-w-3xl text-lg leading-relaxed ${colors.textDark} opacity-80`}
              >
                {facility.description}
              </p>
            </MotionDiv>

            {/* Main Content Layout */}
            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Square Image */}
              <MotionDiv
                initial={isMounted ? { opacity: 0, scale: 0.95 } : undefined}
                animate={isMounted ? { opacity: 1, scale: 1 } : undefined}
                transition={
                  isMounted ? { duration: 0.8, delay: 0.2 } : undefined
                }
                className="flex w-full justify-center lg:w-1/2"
              >
                <div className="relative aspect-square w-full max-w-lg overflow-hidden bg-gray-100">
                  <motion.div
                    initial={false}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                  >
                    {facility.image && (
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                  </motion.div>
                </div>
              </MotionDiv>

              {/* Store Information */}
              <MotionDiv
                initial={isMounted ? { opacity: 0, y: 30 } : undefined}
                animate={isMounted ? { opacity: 1, y: 0 } : undefined}
                transition={
                  isMounted ? { duration: 0.8, delay: 0.4 } : undefined
                }
                className="flex w-full flex-col justify-center lg:w-1/2"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4 border-l-4 border-red-300 bg-gray-50 p-6">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-red-300" />
                    <div>
                      <p className="mb-2 text-sm text-gray-600">住所</p>
                      <p className={`text-base ${colors.textDark}`}>
                        {facility.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-4 border-red-300 bg-gray-50 p-6">
                    <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-red-300" />
                    <div>
                      <p className="mb-2 text-sm text-gray-600">電話番号</p>
                      <p className={`text-base ${colors.textDark}`}>
                        {facility.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-4 border-red-300 bg-gray-50 p-6">
                    <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-red-300" />
                    <div>
                      <p className="mb-2 text-sm text-gray-600">対応時間</p>
                      <p className={`text-base ${colors.textDark}`}>
                        {facility.openingHours}
                        <span className="mt-1 block text-sm text-gray-600">
                          {facility.closedDays}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-4 border-red-300 bg-gray-50 p-6">
                    <Users className="mt-1 h-6 w-6 flex-shrink-0 text-red-300" />
                    <div>
                      <p className="mb-2 text-sm text-gray-600">定員</p>
                      <p className={`text-base ${colors.textDark}`}>
                        定員{facility.capacity}名
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-l-4 border-red-300 bg-gray-50 p-6">
                    <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-red-300" />
                    <div>
                      <p className="mb-2 text-sm text-gray-600">メール</p>
                      <p className={`text-base ${colors.textDark}`}>
                        {facility.email}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16 lg:px-12">
          <MotionDiv
            variants={isMounted ? containerVariants : undefined}
            initial={isMounted ? "hidden" : undefined}
            animate={isMounted ? "visible" : undefined}
            className="mx-auto max-w-6xl"
          >
            {/* Features Section */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2 className={`mb-8 text-3xl font-bold ${colors.textDark}`}>
                特徴・サービス
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="group h-full cursor-pointer">
                  <div className="flex h-full flex-col border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-red-300">
                    <Home className="mb-4 h-12 w-12 text-red-300" />
                    <h3 className={`mb-2 text-xl font-bold ${colors.textDark}`}>
                      快適な居住空間
                    </h3>
                    <p className="flex-1 text-gray-600">
                      プライバシーに配慮した個室と、交流を楽しめる共有スペース
                    </p>
                  </div>
                </div>

                <div className="group h-full cursor-pointer">
                  <div className="flex h-full flex-col border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-red-300">
                    <Heart className="mb-4 h-12 w-12 text-red-300" />
                    <h3 className={`mb-2 text-xl font-bold ${colors.textDark}`}>
                      24時間サポート
                    </h3>
                    <p className="flex-1 text-gray-600">
                      経験豊富なスタッフが24時間体制で利用者様をサポート
                    </p>
                  </div>
                </div>

                <div className="group h-full cursor-pointer">
                  <div className="flex h-full flex-col border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-red-300">
                    <Shield className="mb-4 h-12 w-12 text-red-300" />
                    <h3 className={`mb-2 text-xl font-bold ${colors.textDark}`}>
                      安心・安全
                    </h3>
                    <p className="flex-1 text-gray-600">
                      バリアフリー設計と最新の安全設備で安心な生活環境
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Amenities Section */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="mb-16"
            >
              <h2 className={`mb-8 text-3xl font-bold ${colors.textDark}`}>
                充実の設備・アメニティ
              </h2>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                {[
                  { icon: Wifi, name: "Wi-Fi完備", desc: "高速インターネット" },
                  { icon: Car, name: "駐車場", desc: "来客用完備" },
                  { icon: Utensils, name: "食堂", desc: "栄養バランス考慮" },
                  { icon: Bath, name: "浴室", desc: "24時間利用可能" },
                  { icon: Tv, name: "共有TV", desc: "リビングスペース" },
                  { icon: Bed, name: "個室", desc: "プライベート空間" },
                  { icon: Coffee, name: "カフェコーナー", desc: "憩いの場" },
                  {
                    icon: Building,
                    name: "エレベーター",
                    desc: "バリアフリー",
                  },
                  {
                    icon: Star,
                    name: "レクリエーション",
                    desc: "充実のプログラム",
                  },
                  {
                    icon: CheckCircle,
                    name: "医療連携",
                    desc: "安心のサポート",
                  },
                ].map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={isMounted ? { opacity: 0, y: 20 } : undefined}
                    animate={isMounted ? { opacity: 1, y: 0 } : undefined}
                    transition={
                      isMounted
                        ? { duration: 0.6, delay: index * 0.1 }
                        : undefined
                    }
                    className="group border border-gray-100 bg-white p-4 text-center transition-all duration-300 hover:border-red-300"
                  >
                    <amenity.icon className="mx-auto mb-3 h-8 w-8 text-red-300 transition-transform group-hover:scale-110" />
                    <h4 className={`mb-1 font-semibold ${colors.textDark}`}>
                      {amenity.name}
                    </h4>
                    <p className="text-xs text-gray-600">{amenity.desc}</p>
                  </motion.div>
                ))}
              </div>
            </MotionDiv>

            {/* CTA Section */}
            <MotionDiv
              variants={isMounted ? itemVariants : undefined}
              className="bg-red-50 p-12 text-center"
            >
              <h2 className={`mb-4 text-3xl font-bold ${colors.textDark}`}>
                お問い合わせ・見学予約
              </h2>
              <p className={`mb-8 text-lg ${colors.textDark} opacity-80`}>
                施設見学は随時受け付けております。お気軽にお問い合わせください。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-red-300 px-8 py-3 text-white transition-colors hover:bg-red-400"
              >
                お問い合わせはこちら
              </Link>
            </MotionDiv>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </>
  )
}

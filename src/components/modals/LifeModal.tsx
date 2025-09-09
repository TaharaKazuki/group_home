"use client"

import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, Home, Clock, Sun, Moon, Coffee, Heart } from "lucide-react"
import Image from "next/image"

import { colors } from "@/lib/colors"

interface LifeModalProps {
  service: {
    id: string
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    image: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function LifeModal({
  service,
  isOpen,
  onClose,
}: LifeModalProps) {
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

  const dailySchedule = [
    {
      time: "6:00",
      icon: Sun,
      activity: "起床・洗面",
      description: "起床のお手伝い、洗面、着替えなど",
    },
    {
      time: "7:00",
      icon: Coffee,
      activity: "朝食",
      description: "栄養バランスの取れた朝食を提供",
    },
    {
      time: "10:00",
      icon: Heart,
      activity: "レクリエーション",
      description: "体操、ゲーム、創作活動など",
    },
    {
      time: "12:00",
      icon: Coffee,
      activity: "昼食",
      description: "季節の食材を使った手作りの昼食",
    },
    {
      time: "15:00",
      icon: Coffee,
      activity: "おやつタイム",
      description: "手作りおやつと団らんの時間",
    },
    {
      time: "18:00",
      icon: Coffee,
      activity: "夕食",
      description: "家庭的な雰囲気での夕食",
    },
    {
      time: "20:00",
      icon: Moon,
      activity: "就寝準備",
      description: "入浴、着替え、就寝の準備",
    },
  ]

  const events = [
    {
      month: "春",
      event: "お花見",
      image:
        "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400&h=300&fit=crop",
    },
    {
      month: "夏",
      event: "夏祭り",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
    },
    {
      month: "秋",
      event: "紅葉狩り",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    },
    {
      month: "冬",
      event: "クリスマス会",
      image:
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=300&fit=crop",
    },
  ]

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
            className="relative z-10 mx-4 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fixed Close Button within modal */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-red-300 shadow-md transition-all hover:bg-red-400 hover:shadow-lg"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[90vh] overflow-y-auto relative">
              {/* Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Home className="mx-auto mb-4 h-16 w-16" />
                    <h1 className="text-3xl font-bold md:text-4xl">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <p className={`text-lg leading-relaxed ${colors.textDark}`}>
                    {service.description}
                  </p>
                </div>

                {/* Daily Schedule */}
                <div className="mb-10">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    一日の流れ
                  </h3>
                  <div className="relative">
                    {dailySchedule.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="flex gap-4 pb-8 last:pb-0">
                          <div className="relative flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                              <IconComponent className="h-6 w-6 text-red-500" />
                            </div>
                            {index < dailySchedule.length - 1 && (
                              <div className="absolute top-12 h-full w-0.5 bg-red-200" />
                            )}
                          </div>
                          <div className="flex-1 pb-2">
                            <div className="mb-1 flex items-center gap-3">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-semibold text-gray-600">
                                {item.time}
                              </span>
                            </div>
                            <h4 className="mb-1 text-lg font-bold text-gray-800">
                              {item.activity}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Seasonal Events */}
                <div className="mb-10">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    季節のイベント
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg bg-white shadow-lg"
                      >
                        <div className="relative h-32">
                          <Image
                            src={event.image}
                            alt={event.event}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-2 left-2 text-white">
                            <p className="text-xs font-semibold">
                              {event.month}
                            </p>
                            <p className="text-lg font-bold">{event.event}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Living Environment */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className={`mb-4 text-xl font-bold ${colors.textDark}`}>
                    生活環境
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">居室</h4>
                      <p className="text-sm text-gray-600">
                        プライバシーに配慮した個室をご用意。お気に入りの家具や思い出の品をお持ち込みいただけます。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">
                        共有スペース
                      </h4>
                      <p className="text-sm text-gray-600">
                        明るく開放的なリビング・ダイニング。皆様との交流を楽しむ憩いの場です。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">浴室</h4>
                      <p className="text-sm text-gray-600">
                        安全に配慮したバリアフリー設計。介助が必要な方も安心してご入浴いただけます。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 font-semibold text-gray-800">庭園</h4>
                      <p className="text-sm text-gray-600">
                        四季折々の花や野菜を育てる庭園スペース。園芸療法としても活用しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

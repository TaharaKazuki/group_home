"use client"

import { useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Clock,
  Sun,
  Moon,
  Coffee,
  Footprints,
  DollarSign,
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Car,
} from "lucide-react"

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
      time: "6:30",
      icon: Sun,
      activity: "起床",
      description: "起床・洗面・着替え",
    },
    {
      time: "8:30",
      icon: Car,
      activity: "出勤",
      description: "仕事や日中活動へ",
    },
    {
      time: "17:00",
      icon: Home,
      activity: "帰宅",
      description: "お家に帰ってきました",
    },
    {
      time: "18:00",
      icon: Footprints,
      activity: "散歩",
      description: "リフレッシュのためのお散歩",
    },
    {
      time: "19:00",
      icon: Coffee,
      activity: "夕食",
      description: "家庭的な雰囲気での夕食",
    },
    {
      time: "20:00",
      icon: Users,
      activity: "入浴",
      description: "リラックスタイム",
    },
    {
      time: "22:00",
      icon: Moon,
      activity: "消灯",
      description: "おやすみなさい",
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
            <div className="relative max-h-[90vh] overflow-y-auto">
              {/* Content */}
              <div className="p-4">
                <h1 className="flex items-center text-2xl font-bold text-gray-700 md:text-4xl">
                  {service.title}
                </h1>
                <div className="mt-4 mb-8">
                  <p className={`text-lg leading-relaxed ${colors.textDark}`}>
                    {service.description}
                  </p>
                </div>

                {/* Daily Schedule */}
                <div className="mb-10">
                  <h3 className={`mb-6 text-2xl font-bold ${colors.textDark}`}>
                    一日の流れ（一例）
                  </h3>
                  <div className="relative">
                    {dailySchedule.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="flex gap-4 pb-8 last:pb-0">
                          <div className="relative flex flex-col items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-300">
                              <IconComponent className="h-6 w-6 text-white" />
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

                {/* Living Environment */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className={`mb-4 text-xl font-bold ${colors.textDark}`}>
                    生活環境
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Footprints className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">散歩</h4>
                          <span className="text-xs text-gray-400">WALK</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        外出のきっかけとして動物といっしょにお散歩。イキシアならではのひとときです。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">
                            おこづかい帳の作成
                          </h4>
                          <span className="text-xs text-gray-400">MONEY</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        おこづかい帳作成を通じて金銭管理のお手伝いもおこなっております。（希望者のみ）※金銭を直接お預かりする事はありませんので、ご安心ください。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Home className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">生活</h4>
                          <span className="text-xs text-gray-400">LIFE</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        市役所・病院などへ一人で行くのが不安な方は、スタッフが同行いたしますのでご安心ください。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">
                            就労について
                          </h4>
                          <span className="text-xs text-gray-400">WORK</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        働く場所を一緒に探します。就職先が決まった後も安心して働いていただけるようにフォローをおこなっていきます。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">
                            コミュニティ
                          </h4>
                          <span className="text-xs text-gray-400">
                            COMMUNITY
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        入居者様同士で仲良くなり、遊園地などに遊びに行くことも！イキシアでの暮らしを通じて新しい出会いを充実したものにして頂けます。
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-red-300" />
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-gray-800">
                            入居者会議
                          </h4>
                          <span className="text-xs text-gray-400">MEETING</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        月に一度、「入居者会議」を実施しております。皆様が気持ちよく共同生活を送れるように話し合いをおこないます。
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

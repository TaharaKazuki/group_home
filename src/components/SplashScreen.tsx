"use client"

import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // プログレスバーのアニメーション（3秒で100%になるように調整）
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 3.4
      })
    }, 100)

    // 3秒後にスプラッシュスクリーンを非表示
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-pink-50"
        >
          <div className="relative flex flex-col items-center">
            {/* ロゴアニメーション */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* グロー効果 */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 bg-gradient-to-r from-red-300/30 to-pink-300/30 blur-3xl"
              />

              <Image
                src="/assets/logo.svg"
                alt="IXIA Group Home"
                width={300}
                height={120}
                className="relative h-auto w-[250px] md:w-[300px]"
                priority
              />
            </motion.div>

            {/* タイトルテキスト */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <h1 className="text-2xl font-light tracking-wider text-gray-700 md:text-3xl">
                心に寄り添う暮らしの場
              </h1>
            </motion.div>

            {/* ローディングインジケーター */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-64"
            >
              {/* プログレスバー背景 */}
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-300 to-pink-300"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* ローディングテキスト */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 text-center text-sm text-gray-500"
              >
                読み込み中...
              </motion.p>
            </motion.div>

            {/* 装飾的な要素 */}
            <div className="absolute -top-20 -left-20">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-3 w-3 rounded-full bg-red-300/30"
              />
            </div>
            <div className="absolute -right-20 -bottom-20">
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="h-4 w-4 rounded-full bg-pink-300/30"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

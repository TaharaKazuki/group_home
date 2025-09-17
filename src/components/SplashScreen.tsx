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
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          {/* 優しいグラデーション背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-white to-pink-50/80" />

          {/* 大きな装飾的な背景要素 */}
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-red-100/20 to-pink-100/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-tr from-pink-100/20 to-red-100/30 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-bl from-red-50/40 to-pink-50/40 blur-2xl" />

          {/* 浮遊する装飾要素 */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-red-300/20"
              style={{
                left: `${10 + ((i * 8) % 80)}%`,
                top: `${15 + ((i * 7) % 70)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* メインコンテンツ */}
          <div className="relative z-10 flex min-h-screen flex-col">
            {/* 上部の装飾的な要素 */}
            <div className="flex flex-1 items-end justify-center pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-center"
              ></motion.div>
            </div>

            {/* 中央のロゴセクション */}
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-center"
              >
                {/* ロゴ */}
                <div className="relative mb-8">
                  <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-red-300/10 to-pink-300/10 blur-2xl" />
                  <Image
                    src="/assets/logo.svg"
                    alt="IXIA Group Home"
                    width={320}
                    height={128}
                    className="relative h-auto w-[280px] md:w-[320px]"
                    priority
                  />
                </div>

                {/* タイトルテキスト */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-2"
                >
                  <h1 className="text-2xl font-light tracking-wider text-gray-700 md:text-3xl">
                    心に寄り添う暮らしの場
                  </h1>
                  <p className="text-sm tracking-wide text-gray-500">
                    一人ひとりの個性を大切に
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* 下部のローディングセクション */}
            <div className="flex flex-1 items-start justify-center pt-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-80 text-center"
              >
                {/* エレガントなプログレスバー */}
                <div className="relative mb-4">
                  <div className="h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-red-300 to-pink-300"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                  <motion.div
                    className="absolute -top-1 h-2 w-2 rounded-full bg-gradient-to-r from-red-300 to-pink-300"
                    style={{ left: `${progress}%` }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>

                {/* ローディングテキスト */}
                <motion.p
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs tracking-wider text-gray-400 uppercase"
                >
                  Loading...
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* 四隅の装飾要素 */}
          <motion.div
            className="absolute top-8 left-8 h-1 w-12 bg-gradient-to-r from-red-300/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1, delay: 1 }}
          />
          <motion.div
            className="absolute top-8 right-8 h-1 w-12 bg-gradient-to-l from-pink-300/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 h-1 w-12 bg-gradient-to-r from-red-300/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1, delay: 1.4 }}
          />
          <motion.div
            className="absolute right-8 bottom-8 h-1 w-12 bg-gradient-to-l from-pink-300/40 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 1, delay: 1.6 }}
          />

          {/* 縦のライン */}
          <motion.div
            className="absolute top-8 left-8 h-12 w-0.5 bg-gradient-to-b from-red-300/40 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 1, delay: 1.8 }}
          />
          <motion.div
            className="absolute top-8 right-8 h-12 w-0.5 bg-gradient-to-b from-pink-300/40 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 1, delay: 2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

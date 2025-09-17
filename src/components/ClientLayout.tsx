"use client"

import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import SplashScreen from "@/components/SplashScreen"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // 3秒後にスプラッシュスクリーンを非表示
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>
      
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
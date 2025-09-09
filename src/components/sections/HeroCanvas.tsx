"use client"

import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1920&h=1080&fit=crop",
]

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority={currentImageIndex === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center text-white"
        >
          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We design
          </motion.h1>
          <motion.p
            className="text-xl font-light tracking-wide md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Furniture & Life design products
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="h-12 w-[1px] bg-white/50" />
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute right-8 bottom-8 flex gap-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

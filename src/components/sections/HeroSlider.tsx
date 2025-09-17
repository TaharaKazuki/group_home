"use client"

import { useEffect, useState } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import Image from "next/image"

const images = [
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=1080&fit=crop", // Pink flower field
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop", // Nature landscape with pink tones
]

export default function HeroSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [_loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))

  useEffect(() => {
    // Preload all images
    images.forEach((src, index) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(index))
      }
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
        {/* Background images with enhanced effects */}
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05, rotate: 0.5 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
              rotate: index === currentImageIndex ? 0 : 0.5,
            }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 10, ease: "easeOut" },
              rotate: { duration: 10, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />

            {/* Multiple overlay layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-red-900/10 via-transparent to-pink-900/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/60" />

            {/* Animated floating elements */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white/20"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 8}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Soft light rays */}
              <div className="bg-gradient-radial absolute top-10 right-20 h-40 w-40 rounded-full from-white/5 to-transparent blur-3xl" />
              <div className="bg-gradient-radial absolute bottom-20 left-10 h-60 w-60 rounded-full from-red-300/10 to-transparent blur-3xl" />
            </motion.div>
          </motion.div>
        ))}

        {/* Modern hero content - Asymmetric layout */}
        <div className="absolute inset-0 flex items-center px-6 lg:px-12">
          {/* Left side content */}
          <div className="relative z-10 max-w-4xl">
            {/* Floating logo */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-300/10 to-pink-300/10 blur-2xl" />
                <Image
                  src="/assets/logo.svg"
                  alt="IXIA Group Home"
                  width={400}
                  height={200}
                  className="relative h-auto w-[280px] opacity-90 md:w-[350px] lg:w-[400px] xl:w-[450px]"
                  priority
                />
              </div>
            </motion.div>

            {/* Hero text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl leading-tight font-light tracking-wider text-white md:text-4xl lg:text-5xl xl:text-6xl">
                心に寄り添う
                <br />
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  暮らしの場
                </span>
              </h1>

              <div className="max-w-xl space-y-4">
                <p className="text-lg leading-relaxed text-white/90 md:text-xl">
                  一人ひとりの個性を大切に、
                </p>
                <p className="text-base leading-relaxed text-white/70 md:text-lg">
                  安心できる生活をサポートします
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modern scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
              <motion.div
                animate={{ y: [2, 8, 2] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="mt-2 h-3 w-1 rounded-full bg-white/80"
              />
            </div>
            <span className="text-xs font-light tracking-[0.2em] text-white/60">
              SCROLL
            </span>
          </motion.div>
        </motion.div>

        {/* Modern slide indicators */}
        <div className="absolute right-8 bottom-8 flex gap-3">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-0.5 transition-all duration-500 ${
                  index === currentImageIndex
                    ? "w-12 bg-white"
                    : "w-6 bg-white/30 group-hover:bg-white/50"
                }`}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modern scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed right-8 bottom-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-red-300 bg-red-300 text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-red-300"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6 transition-colors duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

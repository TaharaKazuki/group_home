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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]))

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
      <div className="relative h-screen w-full overflow-hidden">
        {/* Render all images but only show current one */}
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
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
          </motion.div>
        ))}

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div
              className="w-full bg-white/60"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex justify-center">
                <Image
                  src="/assets/logo.svg"
                  alt="IXIA Group Home Logo"
                  width={300}
                  height={300}
                  className="h-[200px] w-auto md:h-[250px] lg:h-[250px]"
                  priority
                />
              </div>
            </motion.div>
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

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-red-300 text-white shadow-lg transition-colors hover:bg-red-400"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

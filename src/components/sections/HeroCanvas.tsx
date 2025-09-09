"use client"

import { useRef, useEffect, useState } from "react"

import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1920&h=1080&fit=crop",
]

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
  const animationRef = useRef<number>()
  const transitionProgress = useRef(0)
  const isTransitioning = useRef(false)

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image()
          img.onload = () => resolve(img)
          img.src = src
        })
      })
      const loaded = await Promise.all(imagePromises)
      setLoadedImages(loaded)
    }
    loadImages()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || loadedImages.length === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    const drawImage = (image: HTMLImageElement, alpha: number) => {
      ctx.globalAlpha = alpha

      const scale = Math.max(
        canvas.width / image.width,
        canvas.height / image.height
      )
      const x = (canvas.width - image.width * scale) / 2
      const y = (canvas.height - image.height * scale) / 2

      ctx.drawImage(image, x, y, image.width * scale, image.height * scale)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const currentImage = loadedImages[currentImageIndex]
      const nextIndex = (currentImageIndex + 1) % loadedImages.length
      const nextImage = loadedImages[nextIndex]

      if (isTransitioning.current) {
        transitionProgress.current += 0.02

        if (transitionProgress.current >= 1) {
          transitionProgress.current = 0
          isTransitioning.current = false
          setCurrentImageIndex(nextIndex)
        } else {
          // Dissolve effect
          drawImage(currentImage, 1 - transitionProgress.current)
          drawImage(nextImage, transitionProgress.current)
        }
      } else {
        drawImage(currentImage, 1)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const interval = setInterval(() => {
      isTransitioning.current = true
    }, 4000)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [loadedImages, currentImageIndex])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

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
    </div>
  )
}

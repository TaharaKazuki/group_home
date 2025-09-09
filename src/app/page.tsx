"use client"

import { useEffect } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Company from "@/components/sections/Company"
import Contact from "@/components/sections/Contact"
import HeroCanvas from "@/components/sections/HeroCanvas"
import Philosophy from "@/components/sections/Philosophy"
import Services from "@/components/sections/Services"
import Topics from "@/components/sections/Topics"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute("href")
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroCanvas />
        <Philosophy />
        <Services />
        <Company />
        <Topics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

"use client"

import { useEffect } from "react"

import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AboutUs from "@/components/sections/AboutUs"
import Company from "@/components/sections/Company"
import HeroSlider from "@/components/sections/HeroSlider"
import Services from "@/components/sections/Services"

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
      <main className="lg:ml-64">
        <HeroSlider />
        <AboutUs />
        <Services />
        <Company />
        {/* <Topics /> */}
      </main>
      <div className="lg:ml-64">
        <Footer />
      </div>
    </>
  )
}

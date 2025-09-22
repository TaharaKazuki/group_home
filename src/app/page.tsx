"use client"

import { useEffect } from "react"

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
    // <>
    //   <Header />
    //   <main className="lg:ml-64">
    //     <HeroSlider />
    //     <Philosophy />
    //     <Services />
    //     <Company />
    //     {/* <Topics /> */}
    //   </main>
    //   <div className="lg:ml-64">
    //     <Footer />
    //   </div>
    // </>
    <div>
      <h1>準備中</h1>
    </div>
  )
}

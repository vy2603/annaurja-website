import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import WhyNow from './sections/WhyNow'
import Solution from './sections/Solution'
import Technology from './sections/Technology'
import Benefits from './sections/Benefits'
import Market from './sections/Market'
import Roadmap from './sections/Roadmap'
import Team from './sections/Team'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const tickerCb = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    // Trigger ScrollTrigger refresh once DOM stabilizes
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickerCb)
    }
  }, [])

  return (
    <div className="bg-cream min-h-screen text-green selection:bg-gold selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyNow />
        <Solution />
        <Technology />
        <Benefits />
        <Market />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

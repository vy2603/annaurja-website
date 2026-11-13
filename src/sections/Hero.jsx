import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FarmScene from '../components/FarmScene'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const wrapperRef = useRef(null)
  const initialPromptRef = useRef(null)
  const contentRef = useRef(null)
  const hindiRef = useRef(null)
  const taglineRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const overlayRef = useRef(null)

  // Refs for the SVG scene elements (passed to FarmScene)
  const sceneRefs = useRef({
    sun: null,
    sunGlow: null,
    skyGradient: null,
    panelGroups: [],
    panelShadows: [],
    cropRows: [],
    ground: null,
    cameraGroup: null,
    underPanelOverlay: null,
    lightRays: [],
  })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Respect user accessibility preference: display full final state statically
      if (initialPromptRef.current) gsap.set(initialPromptRef.current, { opacity: 0 })
      if (overlayRef.current) gsap.set(overlayRef.current, { opacity: 0.55 })
      gsap.set(
        [hindiRef.current, taglineRef.current, subtitleRef.current, ctaRef.current],
        { opacity: 1, y: 0 }
      )
      const refs = sceneRefs.current
      if (refs.panelGroups) refs.panelGroups.forEach((p) => p && gsap.set(p, { opacity: 1, y: 0 }))
      if (refs.panelShadows) refs.panelShadows.forEach((s) => s && gsap.set(s, { opacity: 0.35 }))
      if (refs.underPanelOverlay) gsap.set(refs.underPanelOverlay, { opacity: 0.6 })
      if (refs.lightRays) refs.lightRays.forEach((r) => r && gsap.set(r, { opacity: 0.45 }))
      return
    }

    const ctx = gsap.context(() => {
      const refs = sceneRefs.current
      const isMobile = window.innerWidth < 768

      // Pinned master scroll timeline (snappy 2x on mobile, 3.5x on desktop)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: isMobile ? '+=200%' : '+=350%',
          scrub: isMobile ? 0.8 : 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })

      // ==========================================
      // PHASE 1: Initial wide farmland (0.00 -> 0.30)
      // ==========================================
      tl.to(
        initialPromptRef.current,
        { opacity: 0, y: -15, duration: 0.12, ease: 'power1.out' },
        0
      )

      // Sun travels across the morning sky
      tl.fromTo(
        refs.sun,
        { cx: 320, cy: 300, scale: 0.95 },
        { cx: 480, cy: 190, scale: 1.15, duration: 0.4, ease: 'power1.inOut' },
        0
      )
      tl.fromTo(
        refs.sunGlow,
        { cx: 320, cy: 300, opacity: 0.4 },
        { cx: 480, cy: 190, opacity: 0.9, duration: 0.4, ease: 'power1.inOut' },
        0
      )

      // Crops sway naturally with the morning breeze
      if (refs.cropRows && refs.cropRows.length > 0) {
        refs.cropRows.forEach((row, i) => {
          if (row) {
            tl.fromTo(
              row,
              { rotation: -2, transformOrigin: 'bottom center' },
              { rotation: 2, duration: 0.25, yoyo: true, repeat: 1, ease: 'sine.inOut' },
              i * 0.015
            )
          }
        })
      }

      // ==========================================
      // PHASE 2: Elevated solar panels rise into place (0.22 -> 0.55)
      // ==========================================
      if (refs.panelGroups && refs.panelGroups.length > 0) {
        refs.panelGroups.forEach((panel, i) => {
          if (panel) {
            tl.fromTo(
              panel,
              { y: 260, opacity: 0, scale: 0.95 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.25,
                ease: 'power2.out',
              },
              0.22 + i * 0.05
            )
          }
        })
      }

      // Shadows deepen on the ground beneath the rising panels
      if (refs.panelShadows && refs.panelShadows.length > 0) {
        refs.panelShadows.forEach((shadow, i) => {
          if (shadow) {
            tl.fromTo(
              shadow,
              { opacity: 0, scaleX: 0.3 },
              { opacity: 0.35, scaleX: 1, transformOrigin: 'center center', duration: 0.2 },
              0.32 + i * 0.04
            )
          }
        })
      }

      // ==========================================
      // PHASE 3: Camera moves UNDER the panels to show crops in shade (0.50 -> 0.75)
      // ==========================================
      if (refs.cameraGroup) {
        tl.to(
          refs.cameraGroup,
          {
            scale: isMobile ? 1.3 : 1.45,
            x: isMobile ? -80 : -160,
            y: isMobile ? -140 : -190,
            transformOrigin: '50% 65%',
            duration: 0.3,
            ease: 'power2.inOut',
          },
          0.5
        )
      }

      // Volumetric sunlight shafts appear between the panel canopies
      if (refs.lightRays && refs.lightRays.length > 0) {
        refs.lightRays.forEach((ray, i) => {
          if (ray) {
            tl.fromTo(
              ray,
              { opacity: 0, scaleY: 0 },
              {
                opacity: 0.45,
                scaleY: 1,
                transformOrigin: 'top center',
                duration: 0.22,
                ease: 'power1.out',
              },
              0.55 + i * 0.03
            )
          }
        })
      }

      // Protective shade microclimate aura activates
      if (refs.underPanelOverlay) {
        tl.fromTo(
          refs.underPanelOverlay,
          { opacity: 0 },
          { opacity: 0.65, duration: 0.25, ease: 'power1.inOut' },
          0.54
        )
      }

      // Crops under panels flourish
      if (refs.cropRows && refs.cropRows.length > 0) {
        refs.cropRows.forEach((row, i) => {
          if (row) {
            tl.to(
              row,
              { scaleY: 1.15, duration: 0.18, ease: 'power1.out' },
              0.6 + i * 0.01
            )
          }
        })
      }

      // ==========================================
      // PHASE 4: Headline, Hindi tagline and CTA reveal (0.72 -> 1.00)
      // ==========================================
      tl.to(
        overlayRef.current,
        { opacity: 0.58, duration: 0.2 },
        0.7
      )

      tl.fromTo(
        hindiRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' },
        0.75
      )

      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.14, ease: 'power2.out' },
        0.78
      )

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' },
        0.84
      )

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: 'back.out(1.4)' },
        0.89
      )

    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={wrapperRef}
      className="relative w-full h-[100dvh] min-h-[580px] overflow-hidden bg-cream"
      id="hero"
    >
      {/* Layered SVG Farm & Solar Scene */}
      <div className="absolute inset-0 z-0">
        <FarmScene sceneRefs={sceneRefs} />
      </div>

      {/* Fallback image slots */}
      <noscript>
        <img
          src="/images/hero-farm.jpg"
          alt="AnnaUrja Agrivoltaic farm"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </noscript>

      {/* Atmospheric scrim overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#14261B] pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0.15 }}
      />

      {/* INITIAL SCROLL PROMPT */}
      <div
        ref={initialPromptRef}
        className="absolute inset-x-0 bottom-6 sm:bottom-10 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <div className="backdrop-blur-md bg-black/30 border border-white/20 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium text-white/90">
            Scroll to elevate panels &amp; explore
          </span>
          <svg
            className="w-3.5 h-3.5 text-gold animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* MAIN HEADLINE CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 max-w-4xl mx-auto pt-12 sm:pt-0"
      >
        <p
          ref={hindiRef}
          className="text-gold text-base sm:text-lg md:text-xl font-medium tracking-[0.2em] mb-3 sm:mb-4 opacity-0 drop-shadow"
        >
          अन्न भी, ऊर्जा भी
        </p>

        <h1
          ref={taglineRef}
          className="font-display text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.15] tracking-tight mb-4 sm:mb-6 opacity-0 drop-shadow-md"
        >
          Grow food and power<br /> on the same land.
        </h1>

        <p
          ref={subtitleRef}
          className="text-white/90 font-body text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-10 max-w-2xl opacity-0 drop-shadow"
        >
          AnnaUrja is an AI agrivoltaics planner for India.
          <br className="hidden sm:inline" />
          {' '}Site to report — in minutes, not months.
        </p>

        <div ref={ctaRef} className="opacity-0">
          <a
            href="#solution"
            className="inline-flex items-center gap-2.5 sm:gap-3 bg-gold hover:bg-[#a67926] text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-body text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
          >
            <span>See how it works</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

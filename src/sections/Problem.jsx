import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Problem() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const cardsRef = useRef([])
  const [activeQuestion, setActiveQuestion] = useState(0)

  const questions = [
    {
      id: 1,
      tag: 'Crop Feasibility',
      question: 'Which crops still grow under the panels?',
      detail: 'Wrong crop or layout cuts yields and income.',
      impact: 'Up to 40% yield drop if shade tolerance is miscalculated.',
      hotspot: { top: '65%', left: '42%' },
      howAnnaUrjaHelps: 'DeepMind AMED crop history + shade simulation ranks top viable crops with projected yields.',
    },
    {
      id: 2,
      tag: 'Income Transparency',
      question: 'What will I earn vs farming alone?',
      detail: 'Power and crop income are never shown together.',
      impact: 'Developers model solar tariffs; agronomists model crops. No combined financial model exists.',
      hotspot: { top: '38%', left: '50%' },
      howAnnaUrjaHelps: 'Fixed models compute dual-revenue cashflows: lease income (or power sales) + crop revenue.',
    },
    {
      id: 3,
      tag: 'Contract Fairness',
      question: 'Is the contract fair to me?',
      detail: 'Payment, repair and removal terms are unclear.',
      impact: '25-year developer leases often lack clear decommissioning escrow and soil repair clauses.',
      hotspot: { top: '52%', left: '58%' },
      howAnnaUrjaHelps: 'Gemini API contract analyzer flags one-sided indemnity, delayed lease payouts, and soil remediation terms.',
    },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Pin or scrub the problem section
      gsap.fromTo(
        imageRef.current,
        { scale: 1.06, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: true,
          },
        }
      )

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: window.innerWidth < 768 ? 0 : 30, y: 20 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              delay: index * 0.12,
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="py-16 sm:py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            The Problem
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-4 sm:mb-6">
            A farmer offered solar on his land cannot tell if it will pay
          </h2>
          <p className="text-grey font-body text-sm sm:text-base md:text-lg leading-relaxed">
            A developer offers to lease his farm for solar panels under PM-KUSUM.
            Nobody can answer his three questions for his own field.
          </p>
        </div>

        {/* Interactive Layout: Portrait with Interactive Hotspots & Question Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Visual with Hotspots */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
              <img
                ref={imageRef}
                src="/images/farmer-portrait.jpg"
                alt="Farmer standing in field under PM-KUSUM evaluation"
                className="w-full h-[340px] sm:h-[440px] lg:h-[520px] object-cover object-top transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold text-white text-[10px] font-bold tracking-wide uppercase mb-2">
                  PM-KUSUM Dilemma
                </span>
                <p className="font-display text-base sm:text-lg font-medium leading-snug">
                  "Which crops will survive? What will I actually earn? Is this lease safe?"
                </p>
                <p className="text-[11px] text-white/70 mt-1 font-body">
                  Rajasthan / Maharashtra farmland under lease inquiry
                </p>
              </div>

              {/* Pulsing Hotspots on image */}
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setActiveQuestion(idx)}
                  style={{ top: q.hotspot.top, left: q.hotspot.left }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 z-10 touch-manipulation ${
                    activeQuestion === idx
                      ? 'scale-110 bg-gold text-white ring-4 ring-gold/40'
                      : 'bg-white/95 text-green hover:scale-105 shadow-lg'
                  }`}
                  aria-label={`Inspect question ${q.id}: ${q.tag}`}
                >
                  <span className="font-display font-bold text-xs">{q.id}</span>
                </button>
              ))}
            </div>

            {/* Hint below image */}
            <p className="text-[11px] sm:text-xs text-grey text-center mt-3 font-body flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block animate-pulse" />
              Tap the numbers above or cards below to inspect each question
            </p>
          </div>

          {/* Right Column: Three Step-by-Step Question Reveal Tabs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {questions.map((q, idx) => {
              const isActive = activeQuestion === idx
              return (
                <div
                  key={q.id}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  onClick={() => setActiveQuestion(idx)}
                  className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer touch-manipulation ${
                    isActive
                      ? 'bg-white border-gold shadow-lg ring-1 ring-gold/30 -translate-y-0.5'
                      : 'bg-white/70 hover:bg-white border-border/80 hover:border-gold/50'
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center font-display font-semibold text-xs sm:text-sm transition-colors ${
                        isActive
                          ? 'bg-gold text-white'
                          : 'bg-green/10 text-green'
                      }`}
                    >
                      0{q.id}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-gold">
                          {q.tag}
                        </span>
                        <span className="text-[10px] sm:text-xs text-grey">Question {q.id} of 3</span>
                      </div>

                      <h3 className="font-display text-base sm:text-xl font-medium text-green mb-1 leading-snug">
                        {q.question}
                      </h3>

                      <p className="text-xs sm:text-sm font-body text-grey leading-relaxed">
                        {q.detail}
                      </p>

                      {/* Expanded Pop-up detail drawer */}
                      {isActive && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/60 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="flex items-start gap-2 bg-cream/80 p-2.5 sm:p-3 rounded-lg border border-border/50 text-[11px] sm:text-xs text-grey">
                            <span className="font-semibold text-green shrink-0">The Risk:</span>
                            <span>{q.impact}</span>
                          </div>
                          <div className="flex items-start gap-2 bg-green/5 p-2.5 sm:p-3 rounded-lg border border-green/15 text-[11px] sm:text-xs text-green">
                            <span className="font-semibold text-gold shrink-0">How AnnaUrja Solves It:</span>
                            <span>{q.howAnnaUrjaHelps}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Bottom Kicker & Citation */}
            <div className="pt-5 border-t border-border mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-display font-semibold shrink-0 text-sm">
                  3
                </div>
                <p className="text-xs sm:text-sm text-green font-medium font-body leading-snug">
                  Today this needs an agronomist, a solar engineer, and a financial analyst for every site.
                </p>
              </div>

              <div className="text-[10px] sm:text-[11px] text-grey font-body shrink-0 sm:text-right">
                Sources: Drishti IAS (Mar 2026);<br />
                Anantam IAS (Oct 2026)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

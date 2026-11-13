import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Technology() {
  const sectionRef = useRef(null)
  const columnsRef = useRef([])

  const stages = [
    {
      num: '01',
      title: 'Land & Climate Data',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      ),
      items: [
        'Google DeepMind ALU (field boundary segmentation)',
        'Google DeepMind AMED (historical crop rotation)',
        'Google Earth Engine (soil type, rainfall, sun, slope)',
        'Google Maps Platform (satellite & routing APIs)',
        'India state agricultural tariffs & crop database',
      ],
      role: 'Input Foundation',
    },
    {
      num: '02',
      title: 'Fixed Models',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
          <path strokeWidth="1.5" d="M8 8h8M8 12h8M8 16h4" />
        </svg>
      ),
      items: [
        'Astronomical sun path, ray-tracing & shade layout',
        'Crop yield response under Photosynthetically Active Radiation',
        'PVWatts power generation & DC/AC degradation',
        'Substation grid connection cost & tariff cashflow',
      ],
      role: 'Deterministic Physics & Math',
      highlight: 'Every single number is computed here.',
    },
    {
      num: '03',
      title: 'Google AI Models',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M12 3v18m-9-9h18M6.3 6.3l11.4 11.4M6.3 17.7L17.7 6.3" />
        </svg>
      ),
      items: [
        'Gemini API (crop advisor, contract checker, report writer)',
        'Gemini Live (real-time conversational Hindi voice for farmers)',
        'Nano Banana (visual simulation picture of the planned farm)',
        'Gemma (on-site edge AI for camera monitoring in Phase 2)',
      ],
      role: 'Advising, Reasoning & Voice',
      highlight: 'Explains and verifies — never hallucinates numbers.',
    },
    {
      num: '04',
      title: 'Actionable Outputs',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        'Interactive site dashboard for solar developers',
        '3 comparative layout scenarios (Fixed, Tracker, Canopy)',
        'Bank-ready PDF for PM-KUSUM Component A lending',
        'Farmer voice summary in colloquial Hindi',
      ],
      role: 'Decision Ready',
    },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      columnsRef.current.forEach((col, idx) => {
        if (col) {
          gsap.fromTo(
            col,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: idx * 0.12,
              scrollTrigger: {
                trigger: col,
                start: 'top 85%',
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
      id="technology"
      className="py-16 sm:py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Technology Architecture
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-4 sm:mb-6">
            Built on Google AI and India's own farm data
          </h2>
          <p className="text-grey font-body text-sm sm:text-base md:text-lg leading-relaxed">
            A hybrid deterministic-AI architecture designed so financial decisions
            rest on mathematically proven physics while Google AI bridges the human and agronomic divide.
          </p>
        </div>

        {/* 4-Stage Flow Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stages.map((stage, idx) => (
            <div
              key={stage.num}
              ref={(el) => (columnsRef.current[idx] = el)}
              className="bg-white rounded-2xl border border-border p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-gold/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    {stage.icon}
                  </div>
                  <span className="font-display text-xs font-bold text-grey">
                    Stage {stage.num}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider font-semibold text-gold block mb-1">
                  {stage.role}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-green mb-3 sm:mb-4">
                  {stage.title}
                </h3>

                <ul className="space-y-2.5 font-body text-xs text-grey">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {stage.highlight && (
                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-border/60">
                  <span className="text-[11px] font-semibold text-gold italic block">
                    {stage.highlight}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Google Cloud India Infrastructure Banner */}
        <div className="rounded-2xl bg-[#1F3D2B] text-white p-6 sm:p-8 md:p-10 shadow-xl border border-gold/30">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-white/10">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                Cloud Backbone
              </span>
              <p className="font-display text-lg sm:text-2xl font-medium text-white">
                Google Cloud, India region
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-body">
              {[
                'Cloud Run',
                'BigQuery',
                'Firestore',
                'Cloud Storage',
                'Vertex AI',
                'Google AI Studio',
                'Google Antigravity',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* The Golden AI Principle Statement */}
          <div className="pt-5 sm:pt-6 text-center">
            <p className="font-display text-base sm:text-xl md:text-2xl text-gold font-medium italic leading-relaxed">
              "Fixed models compute every figure; Gemini advises and explains, so AI never invents a number."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Roadmap() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Planner',
      badge: 'Current Stage (MVP)',
      status: 'active',
      desc: 'AI-driven agrivoltaic feasibility planner for India. Site and grid scan, crop ranking, 3D shade layout, dual revenue model, bank-ready dossier, and Gemini Live Hindi voice.',
      milestones: [
        'Google DeepMind ALU & AMED automated boundary extraction',
        'Deterministic crop-under-shade yield & energy engine',
        'Bank-ready PDF for PM-KUSUM priority-sector loans',
        'Conversational Hindi guidance for farmers',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Farm Monitoring',
      badge: 'Edge AI & IoT',
      status: 'upcoming',
      desc: 'Transforms installed solar plants into smart farm microclimates. Leverages plant sensors, on-farm cameras, and Gemma edge AI to advise farmers and continuously prove agriculture continues.',
      milestones: [
        'Gemma edge AI deployment on local solar plant hardware',
        'Real-time soil moisture and microclimate weather tracking',
        'Continuous automated proof-of-farming audit for DISCOMs',
        'Per-site recurring monthly monitoring subscription',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'India-Wide Scaling',
      badge: 'Multi-State Expansion',
      status: 'upcoming',
      desc: 'State-specific regulatory rule packs for all major agricultural power states, state nodal agency dashboards, and local regional languages (Marathi, Gujarati, Telugu, Kannada, Tamil).',
      milestones: [
        'Custom tariff & grid rules for RRECL, MEDA, GEDA, HAREDA',
        'State agency automated portal for batch project screening',
        'Multi-dialect voice expansion across non-Hindi agricultural belts',
        'FPO cluster pooling tools for village-scale microgrids',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Global Platform',
      badge: 'Ecosystem & APIs',
      status: 'upcoming',
      desc: 'Open API platform providing the crop-under-shade intelligence layer to global solar design suites, automated lender risk scoring for NBFCs, and expansion into Sunbelt nations.',
      milestones: [
        'Crop-under-shade API integration with global CAD/EPC software',
        'Institutional debt risk scoring & portfolio health monitoring',
        'Adaptation to sunny tropical & arid regions (MENA, SEA, Africa)',
        'Carbon credit & soil biodiversity verification credits',
      ],
    },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: idx * 0.12,
              scrollTrigger: {
                trigger: card,
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
      id="roadmap"
      className="py-16 sm:py-24 md:py-32 bg-[#1A3324] text-cream relative overflow-hidden border-b border-border/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Strategic Roadmap
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white mb-4 sm:mb-6">
            From planner to farm monitoring to platform
          </h2>
          <p className="text-white/70 font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Starting with high-precision pre-construction planning, evolving into 25-year
            on-farm edge intelligence that protects food and power simultaneously.
          </p>
        </div>

        {/* 4 Phases Sliding / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {phases.map((p, idx) => {
            const isActive = p.status === 'active'
            return (
              <div
                key={p.phase}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`rounded-2xl p-5 sm:p-7 border flex flex-col justify-between transition-all duration-300 ${
                  isActive
                    ? 'bg-white/15 border-gold shadow-2xl ring-1 ring-gold/40'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-gold/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-display text-xs font-bold text-gold tracking-widest uppercase">
                      {p.phase}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-gold text-white'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
                    {p.title}
                  </h3>

                  <p className="text-xs font-body text-white/70 leading-relaxed mb-4 sm:mb-6">
                    {p.desc}
                  </p>

                  <div className="space-y-2 pt-3 sm:pt-4 border-t border-white/10">
                    {p.milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/80 font-body">
                        <span className="text-gold font-bold mt-0.5">›</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                  <span>Horizon 0{idx + 1}</span>
                  <span className={isActive ? 'text-gold font-semibold' : ''}>
                    {isActive ? '● In Execution' : 'Planned'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Market() {
  const sectionRef = useRef(null)
  const mw10kRef = useRef(null)

  const whyWeWin = [
    {
      title: 'First to Model Both Crop & Power',
      desc: 'In a 2026 comparison of ten solar design tools, none modelled crop yield or farmer income.',
    },
    {
      title: 'Hardware Agnostic',
      desc: 'Works with any panel, tracker or mounting hardware — unlike European single-vendor systems.',
    },
    {
      title: 'Free Farmer View in Hindi',
      desc: 'Removes the linguistic and digital literacy barrier with conversational Gemini Live voice.',
    },
    {
      title: 'Built on Google DeepMind India Data',
      desc: 'Leverages ALU & AMED farm parcel boundaries tailored specifically for Indian agricultural plots.',
    },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    if (mw10kRef.current) {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: 10000,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mw10kRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (mw10kRef.current) {
            mw10kRef.current.innerText = Math.floor(obj.val).toLocaleString('en-IN')
          }
        },
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="market"
      className="py-16 sm:py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Market Scale &amp; Positioning
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-4 sm:mb-6">
            Energy tools ignore the crop; AnnaUrja designs both, for India
          </h2>
          <p className="text-grey font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Existing global tools treat farmland as empty industrial space.
            AnnaUrja is built from the soil up for India's 10,000 MW PM-KUSUM mandate.
          </p>
        </div>

        {/* 10,000 MW Scale Comparison Box */}
        <div className="bg-[#1F3D2B] text-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-xl border border-gold/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-semibold block mb-1 sm:mb-2">
                PM-KUSUM Component A Target
              </span>
              <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                <span ref={mw10kRef} className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-gold">
                  10,000
                </span>
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  MW
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-body leading-relaxed">
                National mandate for decentralized solar plants (up to 2 MW each) erected on agricultural land.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-white/10 border border-white/15">
              <span className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider block mb-1">
                The Scale Gap
              </span>
              <p className="font-display text-base sm:text-xl text-white font-medium mb-2 sm:mb-3">
                37.5 MW operating today vs 10,000 MW authorized
              </p>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gold rounded-full" style={{ width: '0.375%' }} />
              </div>
              <p className="text-[11px] sm:text-xs text-white/70 font-body">
                9,962.5 MW of agricultural solar installations still require site design, crop selection, and bank financing.
              </p>
            </div>
          </div>
        </div>

        {/* 2x2 Positioning Matrix & Why We Win */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* 2x2 Competitive Grid (Responsive 1-col on mobile, 2-col on tablet/desktop) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-wider font-semibold text-gold block mb-3">
              Competitive Landscape Matrix
            </span>

            <div className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Quadrant 1: India, Policy Level */}
                <div className="p-4 sm:p-5 rounded-xl border border-border bg-cream/40">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-grey block mb-1">
                    India · Policy Level
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-semibold text-green mb-1">
                    TERI AgriPV &amp; IAA Tools
                  </h4>
                  <p className="text-xs text-grey font-body leading-relaxed">
                    Macro policy-level simulation; cannot evaluate a single farmer's plot boundary or specific crop yields.
                  </p>
                </div>

                {/* Quadrant 2: India, Farm-Specific (ANNAURJA HIGHLIGHTED) */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-gold bg-gold/10 shadow-md relative">
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gold text-white text-[9px] font-bold tracking-wider uppercase">
                    Our Position
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold block mb-1">
                    India · Farm-Specific
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-green mb-1">
                    AnnaUrja
                  </h4>
                  <p className="text-xs text-green/90 font-body font-medium leading-relaxed">
                    Site-specific crop ranking, 3D panel shade maps, grid tariff verification &amp; bilingual farmer voice.
                  </p>
                </div>

                {/* Quadrant 3: Global, Energy Only */}
                <div className="p-4 sm:p-5 rounded-xl border border-border bg-cream/40">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-grey block mb-1">
                    Global · Energy Only
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-semibold text-green mb-1">
                    PVsyst, RatedPower, HelioScope
                  </h4>
                  <p className="text-xs text-grey font-body leading-relaxed">
                    Industrial solar design only. Zero agronomy, zero crop yield modelling, no farmer income calculations.
                  </p>
                </div>

                {/* Quadrant 4: Europe, Proprietary Hardware */}
                <div className="p-4 sm:p-5 rounded-xl border border-border bg-cream/40">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-grey block mb-1">
                    Europe · Proprietary
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-semibold text-green mb-1">
                    Sun'Agri, Ombrea
                  </h4>
                  <p className="text-xs text-grey font-body leading-relaxed">
                    High capital expenditure; tied to custom European proprietary tracker hardware. Not viable for Indian tariff economics.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 text-[10px] sm:text-[11px] text-grey font-body text-center">
                Sources: SurgePV software comparison; TERI; The Policy Edge
              </div>
            </div>
          </div>

          {/* Right Column: Why We Win */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-gold block mb-1 sm:mb-3">
              Why AnnaUrja Wins
            </span>

            {whyWeWin.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-white border border-border hover:border-gold/50 shadow-sm transition-all"
              >
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-semibold text-green mb-0.5 sm:mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-grey font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

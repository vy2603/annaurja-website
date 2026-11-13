import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhyNow() {
  const sectionRef = useRef(null)
  const counterRef = useRef(null)
  const [activeMilestone, setActiveMilestone] = useState(2) // Oct 2026 highlighted

  const milestones = [
    {
      num: '01',
      date: 'Aug 2025',
      title: 'Operating Pilot Reality',
      text: '36 agrivoltaics projects operating, 37.54 MW in total across India.',
      badge: 'Baseline',
    },
    {
      num: '02',
      date: 'Budget 2026–27',
      title: 'Doubled Public Funding',
      text: 'PM-KUSUM allocation nearly doubled to ₹5,000 crore by the Ministry of Finance.',
      badge: 'Funding',
    },
    {
      num: '03',
      date: 'Oct 2026',
      title: 'National AgriPV Handbook',
      text: 'MNRE releases the AgriPV Policy Handbook at the AgriVoltaics World Conference, New Delhi.',
      badge: 'Policy Milestone',
    },
    {
      num: '04',
      date: 'Next Phase',
      title: 'Agrivoltaics Mandate',
      text: 'Next PM-KUSUM phase: agrivoltaics programme announced; state rules currently being notified.',
      badge: 'Immediate Opportunity',
    },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (counterRef.current) {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: 37.5,
        duration: prefersReducedMotion ? 0.01 : 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = obj.val.toFixed(1)
          }
        },
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-now"
      className="py-16 sm:py-24 md:py-32 bg-[#1A3324] text-cream relative overflow-hidden border-b border-border/20"
    >
      {/* Background radial ambient lights */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-green-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Why Now
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] text-white mb-4 sm:mb-6">
            India is putting solar on farmland now, with no farm-level planning tool
          </h2>
          <p className="text-white/70 font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Policy momentum and public capital are peaking, but developers and farmers lack
            the site-specific data needed to prevent crop devastation and contract disputes.
          </p>
        </div>

        {/* 4-Step Animated Milestone Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
          {milestones.map((m, idx) => {
            const isSelected = activeMilestone === idx
            return (
              <div
                key={m.num}
                onClick={() => setActiveMilestone(idx)}
                className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between touch-manipulation ${
                  isSelected
                    ? 'bg-white/15 border-gold shadow-xl scale-[1.01] sm:scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-gold/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-display text-xs text-gold/80 tracking-widest">
                      {m.num}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-gold text-white'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-medium text-white mb-1">
                    {m.date}
                  </h3>
                  <h4 className="text-[11px] sm:text-xs font-semibold text-gold uppercase tracking-wider mb-2 sm:mb-3">
                    {m.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-body text-white/70 leading-relaxed">
                    {m.text}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                  <span>Milestone {m.num}</span>
                  <span className="text-gold font-medium">● Verified</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Giant Counter & Market Scale Comparison Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Big Counter Column */}
            <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-white/15 pb-6 lg:pb-0 lg:pr-10">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-gold mb-1 sm:mb-2">
                Agrivoltaics Installed Today
              </span>
              <div className="flex items-baseline gap-2">
                <span
                  ref={counterRef}
                  className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight"
                >
                  37.5
                </span>
                <span className="font-display text-3xl sm:text-5xl font-semibold text-gold">
                  MW
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-body mt-2">
                Across only 36 operating agrivoltaics projects in India (Aug 2025).
              </p>
            </div>

            {/* Scale Comparison & Urgency Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/80 gap-1 mb-2">
                  <span>Current AgriPV: 37.5 MW</span>
                  <span className="text-gold">2030 National Solar Target: 300 GW (300,000 MW)</span>
                </div>
                {/* Visual Ratio Scale Bar */}
                <div className="h-2.5 sm:h-3 w-full bg-white/20 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gold rounded-full transition-all duration-1000"
                    style={{ width: '4%' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] sm:text-[11px] text-white/50 mt-1 font-body">
                  <span>0.01% penetrated</span>
                  <span>8,000× national headroom</span>
                </div>
              </div>

              <blockquote className="font-display text-base sm:text-lg lg:text-xl text-white font-normal leading-relaxed border-l-2 border-gold pl-3 sm:pl-4 italic">
                "Operating today against a 300 GW national solar target for 2030.
                Every new project needs a site-specific plan that keeps farming going."
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 text-[10px] sm:text-xs text-white/50 font-body">
                <span>Budget 2026–27 PM-KUSUM allocation: ₹5,000 crore</span>
                <span>Sources: The Policy Edge; Drishti IAS; Anantam IAS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

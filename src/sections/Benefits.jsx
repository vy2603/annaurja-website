import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Benefits() {
  const sectionRef = useRef(null)
  const num25Ref = useRef(null)
  const num65Ref = useRef(null)
  const [selectedStakeholder, setSelectedStakeholder] = useState(0)

  const stakeholders = [
    {
      role: 'Farmers',
      tagline: 'Always 100% Free in Hindi & Regional Dialects',
      badge: 'Free Forever',
      icon: '🌾',
      offer: 'Up to ₹25,000/acre/year leasing to a developer, or up to ₹65,000/acre/year owning the plant with a priority-sector bank loan (PIB factsheet), plus uninterrupted crop harvest income.',
      benefits: [
        'Voice explanations in Hindi via Gemini Live — zero English reading barrier',
        'Transparent contract checks flagging risky lease liabilities',
        'Crop selection guaranteed to thrive under panel shade',
      ],
    },
    {
      role: 'Developers & Installers',
      tagline: 'First Paying Customer — Developer Pro Subscription',
      badge: 'B2B SaaS Core',
      icon: '⚡',
      offer: 'Full agrivoltaic site design, shade ray-tracing, and grid interconnection scan in minutes instead of 6 weeks. Dramatically lowers customer acquisition cost and disputes.',
      benefits: [
        'Developer Pro monthly subscription (₹25,000/month)',
        'Fewer rejected farmer proposals and faster DISCOM approvals',
        'Standardized CAD/GIS layout exports ready for EPC execution',
      ],
    },
    {
      role: 'Banks & NBFCs',
      tagline: 'Priority Sector Lending Risk Underwriting',
      badge: 'Per-Report Fee',
      icon: '🏦',
      offer: 'PM-KUSUM Component A is classified as priority-sector lending. AnnaUrja gives credit officers a comprehensive DPR assessing crop, solar output, and grid risk in one audited PDF.',
      benefits: [
        'Instant risk rating for loan sanctioning (₹10,000 per DPR report)',
        'Cashflow predictability combining PPA tariff + harvest yield',
        'De-risked collateral monitoring throughout the 25-year plant life',
      ],
    },
    {
      role: 'FPOs',
      tagline: 'Collective Bargaining Power for Village Clusters',
      badge: 'Low-Cost Plan',
      icon: '👥',
      offer: 'Enables FPOs to batch-analyze hundreds of contiguous member plots simultaneously, comparing multiple developer PPA offers to secure the highest royalty rates.',
      benefits: [
        'Cluster site evaluation across multiple survey numbers',
        'Aggregated power pooling for 0.5 MW to 2 MW community feeder plants',
        'Empowers farmers with collective contract terms',
      ],
    },
    {
      role: 'State Agencies',
      tagline: 'Objective Screening & Agricultural Compliance',
      badge: 'Annual License',
      icon: '🏛️',
      offer: 'Provides state renewable energy agencies (RRECL, MEDA, HAREDA) and DISCOMs with an automated portal to verify that agricultural land is genuinely being farmed.',
      benefits: [
        'Audit trail verifying farming continues under panels (anti-land-grab)',
        'Substation line congestion and reverse power flow checks',
        'Standardized green energy compliance metrics',
      ],
    },
  ]

  const revenueScenarios = [
    { tier: 'Conservative', amount: '₹35 lakh', desc: 'Pilot deployment with 10 developers & 100 paid reports' },
    { tier: 'Expected', amount: '₹1.14 crore', desc: 'Regional expansion across Rajasthan, Maharashtra & Gujarat' },
    { tier: 'Optimistic', amount: '₹3.1 crore', desc: 'Pan-India Developer Pro adoption + Phase 2 monitoring' },
  ]

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animateVal = (ref, target) => {
      if (!ref.current) return
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: prefersReducedMotion ? 0.01 : 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.innerText = '₹' + Math.floor(obj.val).toLocaleString('en-IN')
          }
        },
      })
    }

    animateVal(num25Ref, 25000)
    animateVal(num65Ref, 65000)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-16 sm:py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Value Proposition &amp; Business Model
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-4 sm:mb-6">
            Every party gains, and AnnaUrja earns recurring revenue
          </h2>
          <p className="text-grey font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Free for every Indian farmer. Monetized through B2B SaaS for developers,
            transactional DPR risk reports for banks, and compliance licenses for state agencies.
          </p>
        </div>

        {/* Farmer Dual Income Callout Banner */}
        <div className="bg-[#1F3D2B] text-white rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-xl border border-gold/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold font-semibold block mb-1 sm:mb-2">
                Farmer Income Potential (PIB Factsheet)
              </span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2">
                Guaranteed Cashflow on Every Acre
              </h3>
              <p className="text-xs text-white/70 font-body leading-relaxed">
                Solar land revenue transforms smallholder economics while keeping
                agricultural harvest intact.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
              {/* Option A: Leasing */}
              <div className="bg-white/10 rounded-xl p-5 sm:p-6 border border-white/15 flex flex-col justify-between min-h-[175px]">
                <div>
                  <span className="text-[11px] sm:text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                    Option A · Developer Lease
                  </span>
                  <div ref={num25Ref} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1.5">
                    ₹25,000
                  </div>
                  <p className="text-xs text-white/80 font-body">
                    per acre per year paid by the solar developer
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <span className="text-[10px] sm:text-[11px] text-gold font-medium block">
                    + 100% of the crop harvest income
                  </span>
                </div>
              </div>

              {/* Option B: Bank Loan Plant Ownership */}
              <div className="bg-white/10 rounded-xl p-5 sm:p-6 border border-white/15 flex flex-col justify-between min-h-[175px]">
                <div>
                  <span className="text-[11px] sm:text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                    Option B · Farmer Plant Ownership
                  </span>
                  <div ref={num65Ref} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1.5">
                    ₹65,000
                  </div>
                  <p className="text-xs text-white/80 font-body">
                    per acre per year owning the plant with a bank loan
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/10">
                  <span className="text-[10px] sm:text-[11px] text-gold font-medium block">
                    + 100% of the crop harvest income
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Stakeholder Tabs with Horizontal Touch Scroll */}
        <div className="mb-12 sm:mb-16">
          <div className="flex overflow-x-auto no-scrollbar gap-2 mb-6 sm:mb-8 border-b border-border pb-3 sm:pb-4 snap-x touch-pan-x">
            {stakeholders.map((s, idx) => (
              <button
                key={s.role}
                onClick={() => setSelectedStakeholder(idx)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all shrink-0 snap-start touch-manipulation ${
                  selectedStakeholder === idx
                    ? 'bg-gold text-white shadow-md'
                    : 'bg-white text-grey border border-border hover:border-gold/50'
                }`}
              >
                <span className="mr-1.5 sm:mr-2">{s.icon}</span>
                {s.role}
              </button>
            ))}
          </div>

          {/* Active Stakeholder Card */}
          <div className="bg-white rounded-2xl border border-border p-5 sm:p-8 md:p-10 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border/70">
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gold block mb-1">
                  {stakeholders[selectedStakeholder].role}
                </span>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-green leading-snug">
                  {stakeholders[selectedStakeholder].tagline}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto">
                {stakeholders[selectedStakeholder].badge}
              </span>
            </div>

            <p className="text-xs sm:text-sm md:text-base font-body text-grey leading-relaxed mb-6">
              {stakeholders[selectedStakeholder].offer}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pt-1 mb-6">
              {stakeholders[selectedStakeholder].benefits.map((benefit, i) => (
                <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-cream border border-border/60 text-xs text-grey font-body leading-relaxed flex items-start gap-2 sm:gap-2.5">
                  <span className="text-gold font-bold">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border/60">
              <span className="text-xs text-grey font-body">
                Model: <strong>Developer Pro SaaS + Per-DPR bank fees</strong>
              </span>
              <a
                href="#solution"
                className="btn-gold px-5 py-2.5 text-xs tracking-wider"
              >
                <span>Test Interactive Planner</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* B2B SaaS Annual Revenue Scenarios */}
        <div className="bg-white rounded-2xl border border-border p-5 sm:p-8 md:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
              Commercial Viability
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-green">
              Annual Revenue Scenarios (Illustrative)
            </h3>
            <p className="text-xs text-grey font-body mt-1">
              Based on Developer Pro ₹25,000/month, bank report ₹10,000, and Phase 2 monitoring ₹10,000/site/month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {revenueScenarios.map((scen, idx) => (
              <div
                key={scen.tier}
                className={`p-5 sm:p-6 rounded-xl border flex flex-col justify-between min-h-[190px] ${
                  idx === 1
                    ? 'bg-cream border-gold ring-1 ring-gold/40 shadow-md'
                    : 'bg-white border-border'
                }`}
              >
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-grey block mb-1.5 sm:mb-2">
                    {scen.tier}
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-green mb-1.5 sm:mb-2">
                    {scen.amount}
                  </div>
                  <p className="text-xs font-body text-grey leading-relaxed">
                    {scen.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[10px] sm:text-[11px] text-gold font-medium">
                  {idx === 1 ? '★ Base Target Model' : 'Scenario Projection'}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] sm:text-[11px] text-grey/70 italic mt-6 text-center font-body">
            Source: PIB factsheet on PM-KUSUM. Revenue scenarios are illustrative models, not financial forecasts.
          </p>
        </div>
      </div>
    </section>
  )
}

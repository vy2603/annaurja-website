import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Solution() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  // Interactive parameter state to prove the brief's dynamic calculation
  const [selectedCrop, setSelectedCrop] = useState('Wheat')
  const [panelHeight, setPanelHeight] = useState(3.2) // in meters

  const steps = [
    {
      num: '01',
      title: 'Drop a pin',
      subtitle: 'Google DeepMind ALU Boundary',
      desc: 'Farm boundary is automatically delineated from Google DeepMind Agricultural Landscape Understanding (ALU). No manual GPS walking required.',
      details: [
        'Automatic parcel boundary segmentation via DeepMind ALU',
        'Historical crop rotation pattern via DeepMind AMED',
        'Instant acreage and tilt geometry calculations',
      ],
      hotspot: { top: '35%', left: '30%', label: 'Parcel Boundary Delineated' },
      advantage: 'Saves 2 weeks of physical land surveys and surveyor fees.',
    },
    {
      num: '02',
      title: 'Site and grid scan',
      subtitle: 'Earth Engine & DISCOM Distance',
      desc: 'Retrieves multi-year solar irradiance, rainfall patterns, soil composition, elevation slope, and measures distance to the nearest 33/11 kV substation.',
      details: [
        'Google Earth Engine soil moisture & historical precipitation',
        'Direct Normal Irradiance (DNI) & Global Horizontal Irradiance (GHI)',
        'Interconnection feeder capacity & estimated evacuation line cost',
      ],
      hotspot: { top: '22%', left: '75%', label: 'Substation Feeder & DNI Scan' },
      advantage: 'Prevents leasing land that would be rejected by DISCOM for grid congestion.',
    },
    {
      num: '03',
      title: 'Crops and layout',
      subtitle: 'Ranked Agronomy & Shade Maps',
      desc: 'Simulates 3 elevated panel layouts (Fixed Tilt, Single Axis Tracker, East-West Canopy) with hourly ray-traced shade heatmaps matched with shade-tolerant crops.',
      details: [
        '3D sun path ray-tracing across summer/winter solstices',
        'Crops ranked by Photosynthetically Active Radiation (PAR) demand',
        'Calculates tractor clearance height (2.8m – 3.8m)',
      ],
      hotspot: { top: '55%', left: '50%', label: 'Ray-Traced Shade Canopy' },
      advantage: 'Protects food security: crops keep growing with 0% land sterilization.',
    },
    {
      num: '04',
      title: 'Yield, power, income',
      subtitle: 'Deterministic Dual Revenue Engine',
      desc: 'Fixed mathematical models compute conservative, expected, and optimistic ranges for both crop harvest value and electricity revenue.',
      details: [
        'Dual cashflow model: Crop Yield (Q/acre) + Energy (kWh/kWp)',
        'Calculates lease vs. bank-financed ownership returns',
        'Models reduced irrigation evaporation under canopy shade',
      ],
      hotspot: { top: '75%', left: '65%', label: 'Dual Revenue Projections' },
      advantage: 'Guarantees the farmer earns more than farming alone or leasing blindly.',
    },
    {
      num: '05',
      title: 'Report and Hindi voice',
      subtitle: 'Bank-Ready Dossier & Gemini Live',
      desc: 'Generates a bank-ready DPR (Detailed Project Report) for priority-sector lending under PM-KUSUM, and reads the full breakdown to the farmer in Hindi via Gemini Live.',
      details: [
        'Priority-sector compliant PDF for SBI / NABARD / PNB branch managers',
        'Contract clause risk audit for the farmer',
        'Interactive Gemini Live voice conversation in pure Hindi / regional dialect',
      ],
      hotspot: { top: '20%', left: '20%', label: 'Gemini Live Hindi Voice & DPR' },
      advantage: 'No English literacy barrier; the farmer hears his exact numbers in his mother tongue.',
    },
  ]

  // Dynamic calculations based on user toggle
  const powerOutput = (0.95 * (panelHeight / 3.0)).toFixed(2)
  const cropYieldFactor = selectedCrop === 'Wheat' ? 92 : selectedCrop === 'Soybean' ? 88 : 96
  const farmerEarningEst = (25000 + (panelHeight > 3.0 ? 3000 : 0)).toLocaleString('en-IN')

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Animate vertical progress line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-3">
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-6">
            AnnaUrja plans a solar-plus-crop farm in five steps, in minutes
          </h2>
          <p className="text-grey font-body text-base md:text-lg leading-relaxed">
            From dropping a pin on a satellite boundary to a bank-ready bilingual dossier,
            AnnaUrja unifies agronomy, solar physics, and banking underwriting.
          </p>
        </div>

        {/* 5-Step Progress Indicators Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                  isActive
                    ? 'bg-white border-gold shadow-md ring-2 ring-gold/20 -translate-y-1'
                    : 'bg-white/50 border-border hover:bg-white hover:border-gold/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-display text-xs font-bold ${
                      isActive ? 'text-gold' : 'text-grey'
                    }`}
                  >
                    {s.num}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  )}
                </div>
                <h4 className="font-display text-sm font-semibold text-green mb-1 line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-grey line-clamp-1 font-body">
                  {s.subtitle}
                </p>
              </button>
            )
          })}
        </div>

        {/* Interactive Workspace: Real Dashboard Mockup with Pointing Hotspots & Pop-Up Info Tab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: AnnaUrja Laptop UI Screen Mockup with Callout Hotspot */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/80 bg-white">
              {/* Window Header */}
              <div className="bg-[#1F3D2B] text-white px-5 py-3 flex items-center justify-between border-b border-border/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E57373]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFD54F]" />
                  <span className="w-3 h-3 rounded-full bg-[#81C784]" />
                  <span className="ml-2 text-xs font-body font-medium text-white/90">
                    AnnaUrja Planner — Plot 7A (Kisan Suresh Kumar, Rajasthan)
                  </span>
                </div>
                <span className="text-[11px] font-body bg-gold/90 text-white px-2.5 py-0.5 rounded-full font-medium">
                  {steps[activeStep].title} Active
                </span>
              </div>

              {/* The Real Dashboard Screenshot from Slide 4 */}
              <div className="relative">
                <img
                  src="/images/annaurja-laptop-mockup.jpg"
                  alt="AnnaUrja AI Agrivoltaics Dashboard Interface"
                  className="w-full h-auto object-cover"
                />

                {/* Dynamic Pointing Callout Hotspot */}
                <div
                  style={{
                    top: steps[activeStep].hotspot.top,
                    left: steps[activeStep].hotspot.left,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 flex flex-col items-center"
                >
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-gold text-white text-[11px] font-bold items-center justify-center shadow-lg">
                      {steps[activeStep].num}
                    </span>
                  </span>

                  {/* Tooltip pointing banner */}
                  <div className="mt-2 bg-[#1F3D2B]/95 text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-xl border border-gold/40 whitespace-nowrap backdrop-blur-sm">
                    {steps[activeStep].hotspot.label}
                  </div>
                </div>
              </div>

              {/* Live Parameter Tweaker to test dynamic updates */}
              <div className="p-5 bg-cream/60 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-body">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-green">Simulate Crop:</span>
                  {['Wheat', 'Mustard', 'Soybean'].map((crop) => (
                    <button
                      key={crop}
                      onClick={() => setSelectedCrop(crop)}
                      className={`px-3 py-1 rounded-md border font-medium transition-all ${
                        selectedCrop === crop
                          ? 'bg-gold text-white border-gold shadow-sm'
                          : 'bg-white text-grey border-border hover:border-gold/50'
                      }`}
                    >
                      {crop}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-green">
                    Panel Clearance: <strong className="text-gold">{panelHeight}m</strong>
                  </span>
                  <input
                    type="range"
                    min="2.5"
                    max="4.2"
                    step="0.1"
                    value={panelHeight}
                    onChange={(e) => setPanelHeight(parseFloat(e.target.value))}
                    className="accent-gold cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Step Pop-Up Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-border p-8 shadow-xl relative">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider">
                  Step {steps[activeStep].num} Breakdown
                </span>
                <span className="text-xs text-grey">Execution Workflow</span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-green mb-1">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-4">
                {steps[activeStep].subtitle}
              </p>

              <p className="text-sm font-body text-grey leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              {/* Key execution checkpoints */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-semibold text-green uppercase tracking-wider block">
                  Technical Execution:
                </span>
                {steps[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-grey font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Benefit & Advantage Callout */}
              <div className="p-4 rounded-xl bg-cream border border-border/70 mb-6">
                <span className="text-[11px] font-bold text-green uppercase tracking-wider block mb-1">
                  Key Advantage for India:
                </span>
                <p className="text-xs text-grey font-body leading-relaxed">
                  {steps[activeStep].advantage}
                </p>
              </div>

              {/* Dynamic Live Calculations Display */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-green text-white text-center">
                <div>
                  <span className="text-[10px] text-white/60 block">Solar Power</span>
                  <strong className="text-sm font-display text-gold">{powerOutput} MWp</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 block">Crop Yield</span>
                  <strong className="text-sm font-display text-white">{cropYieldFactor}%</strong>
                </div>
                <div>
                  <span className="text-[10px] text-white/60 block">Lease Value</span>
                  <strong className="text-sm font-display text-gold">₹{farmerEarningEst}/yr</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Principle Note Box from Slide 4 */}
        <div className="bg-white rounded-xl border border-border p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold text-lg shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-green">
                Change a crop or panel height and every number updates in seconds.
              </h4>
              <p className="text-xs text-grey font-body mt-0.5">
                If the plan does not pay, re-run with alternative orientation or inter-row spacing.
              </p>
            </div>
          </div>

          <span className="text-xs font-semibold px-4 py-2 rounded-full bg-cream border border-border text-grey shrink-0">
            Stage: ideation. Prototype built on public data.
          </span>
        </div>
      </div>
    </section>
  )
}

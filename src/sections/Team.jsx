import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const team = [
    {
      name: 'Vanshika Sharma',
      role: 'Chief Executive Officer',
      focus: 'Sales, Marketing, Execution',
      photo: '/team/vanshika.jpg',
      bio: 'Has sold industrial power equipment and Samsung commercial displays to businesses. Founder of 8V Digital, an AI, software and digital marketing studio in Gurugram. Takes AnnaUrja to solar developers, banks and farmer groups.',
      superpower: 'Enterprise B2B execution & GTM',
    },
    {
      name: 'Yash Saini',
      role: 'Chief Technology Officer',
      focus: 'Software and AI Engineering',
      photo: '/team/yash.jpg',
      bio: 'Director at 8V Digital and head of its software team. Builds the AnnaUrja platform on Google Cloud, Gemini API and Google Earth Engine.',
      superpower: 'Full-stack AI systems & geospatial engineering',
    },
    {
      name: 'Sithiraiselvan P M',
      role: 'Head of Research and Hardware',
      focus: 'Crop Science and Field Sensing',
      photo: '/team/sithirai.jpg',
      bio: 'Nanotechnology researcher with United Fins, whose sectors include agrivoltaics. Owns the crop-under-panel science, accuracy testing and Phase 2 on-farm monitoring.',
      superpower: 'Photovoltaic materials & agronomic physics',
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
      id="team"
      className="py-16 sm:py-24 md:py-32 bg-cream text-green relative overflow-hidden border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-2 sm:mb-3">
            Leadership &amp; Execution
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.2] mb-4 sm:mb-6">
            A founding team that can research, build and sell
          </h2>
          <p className="text-grey font-body text-sm sm:text-base md:text-lg leading-relaxed">
            United in Gurugram and Tamil Nadu, bringing deep experience across B2B industrial
            sales, advanced software engineering, and nanotechnology agrivoltaic research.
          </p>
        </div>

        {/* 3 Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16 items-stretch">
          {team.map((m, idx) => (
            <div
              key={m.name}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-gold/50 transition-all flex flex-col justify-between min-h-[440px] sm:min-h-[480px] group"
            >
              <div>
                {/* Photo with frame */}
                <div className="relative mb-5 sm:mb-6 mx-auto w-28 h-28 sm:w-36 sm:h-36">
                  <div className="absolute inset-0 rounded-full bg-gold/20 scale-105 group-hover:scale-110 transition-transform duration-300" />
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="relative w-full h-full object-cover rounded-full border-2 border-gold shadow-md"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green text-white text-[10px] flex items-center justify-center border-2 border-white">
                    ✓
                  </span>
                </div>

                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-green mb-0.5 sm:mb-1">
                    {m.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gold block mb-1">
                    {m.role}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-grey uppercase tracking-wider font-body block italic">
                    {m.focus}
                  </span>
                </div>

                <p className="text-xs font-body text-grey leading-relaxed text-center">
                  {m.bio}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-border/60 text-center">
                <span className="text-[10px] sm:text-[11px] font-semibold text-green bg-cream px-3 py-1 rounded-full border border-border inline-block">
                  {m.superpower}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Founding Advantage Callout */}
        <div className="rounded-xl bg-white border border-border p-4 sm:p-6 shadow-sm text-center max-w-4xl mx-auto">
          <p className="font-display text-sm sm:text-base md:text-lg text-green font-medium italic leading-relaxed">
            "Research keeps the science honest, software ships the product, and B2B sales with an in-house marketing studio reaches developers and farmers at low cost."
          </p>
        </div>

        {/* Bottom Action CTA */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#solution"
            className="btn-gold px-8 py-3.5 text-xs sm:text-sm tracking-wider"
          >
            <span>Launch AnnaUrja Planner</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

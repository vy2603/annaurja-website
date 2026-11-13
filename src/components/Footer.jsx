import Logo from './Logo'

export default function Footer() {
  const sources = [
    'PIB factsheet on PM-KUSUM (farmer income & targets)',
    'The Policy Edge (Oct 2026) — AgriPV World Conference coverage',
    'Drishti IAS, Agri-Photovoltaics Analysis (Mar 2026)',
    'Anantam IAS (Oct 2026) — PM-KUSUM Component A state progress',
    'SurgePV Software Comparison (2026) — 10 solar tools benchmark',
    'TERI — The Energy and Resources Institute (Mar 2026)',
  ]

  return (
    <footer className="bg-[#122217] text-cream pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Executive Summary Pitch Recap Box from Slide 10 */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 md:p-12 mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
              Executive Summary
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-white">
              AnnaUrja at a Glance
            </h3>
            <p className="text-xs text-white/70 font-body mt-1">
              AI Agrivoltaics Planner for India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-body text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                The Problem
              </span>
              <p className="text-white/80 leading-relaxed">
                No tool tells a farmer, developer or bank, farm by farm, which crops and panel layout make solar on farmland pay.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                The Solution
              </span>
              <p className="text-white/80 leading-relaxed">
                AI agrivoltaics planner with site-specific shade maps, dual yield/power cashflow, and a free Hindi farmer voice.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                Primary Customer
              </span>
              <p className="text-white/80 leading-relaxed">
                Solar developers pay (Developer Pro subscription); FPOs, priority-sector banks, and state DISCOMs follow.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                Google AI Stack
              </span>
              <p className="text-white/80 leading-relaxed">
                Gemini API, Gemini Live, Gemma, Nano Banana, Google Earth Engine, Google DeepMind ALU/AMED, Google Cloud.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                Founding Team
              </span>
              <p className="text-white/80 leading-relaxed">
                Vanshika Sharma (CEO), Yash Saini (CTO), Sithiraiselvan P M (Head of Research and Hardware).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-gold font-semibold uppercase tracking-wider block mb-1">
                Mission Tagline
              </span>
              <p className="text-white/80 leading-relaxed font-display text-sm italic">
                "Anna bhi, Urja bhi. Grow food and power on the same land."
              </p>
            </div>
          </div>
        </div>

        {/* Sources & Citations List */}
        <div className="mb-16 pb-12 border-b border-white/10">
          <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block mb-4">
            Official Research Citations &amp; Data Sources:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-white/50 font-body">
            {sources.map((src, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-gold font-bold">›</span>
                <span>{src}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#hero" className="inline-block group mb-2">
              <Logo light={true} showTagline={true} />
            </a>
            <p className="text-xs text-white/60 font-body mt-2">
              annaurja.com · Stage: ideation. The prototype is built on public data.
            </p>
            <p className="text-[11px] text-white/40 font-body mt-0.5">
              No customers, testimonials or partnerships yet — strictly compliant with public facts.
            </p>
          </div>

          <div className="text-center md:text-right text-xs text-white/50 font-body">
            <p className="text-white/80 font-medium">AnnaUrja — Anna bhi, Urja bhi.</p>
            <p className="mt-1 text-[11px] text-white/40">
              &copy; {new Date().getFullYear()} AnnaUrja. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'The Problem', href: '#problem', tag: '01', sub: 'PM-KUSUM Dilemma' },
    { name: 'Why Now', href: '#why-now', tag: '02', sub: '37.5 MW to 300 GW' },
    { name: '5-Step Solution', href: '#solution', tag: '03', sub: 'Boundary to Voice' },
    { name: 'Technology', href: '#technology', tag: '04', sub: 'Google AI Stack' },
    { name: 'Who Benefits', href: '#benefits', tag: '05', sub: 'Dual-Income Math' },
    { name: 'Market & Matrix', href: '#market', tag: '06', sub: '10,000 MW Target' },
    { name: 'Roadmap', href: '#roadmap', tag: '07', sub: 'Planner to Platform' },
    { name: 'Team', href: '#team', tag: '08', sub: 'Research, Build & Sell' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#101E14]/95 backdrop-blur-md border-b border-gold/40 shadow-xl py-2.5 sm:py-3.5'
            : 'bg-[#122217]/90 backdrop-blur-sm border-b border-white/15 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with high contrast */}
          <a
            href="#hero"
            className="group focus:outline-none flex items-center"
            onClick={handleLinkClick}
            aria-label="AnnaUrja Homepage"
          >
            <Logo light={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-xs uppercase tracking-[0.14em] font-medium text-white/85 hover:text-gold transition-colors duration-200 py-1.5 focus:outline-none focus:text-gold"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#solution"
              className="btn-gold text-[11px] xl:text-xs px-5 py-2.5"
            >
              <span>Explore Plan</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </nav>

          {/* Mobile Right Action Area: Prominent Always-Visible Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#solution"
              className="btn-gold text-[10px] sm:text-xs uppercase tracking-wider font-bold px-3 py-1.5 shadow-sm"
              onClick={handleLinkClick}
            >
              <span>Plan</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[40px] px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 border border-gold/70 text-white flex items-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-gold shadow-md touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-gold">
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </span>
              <div className="w-4 h-3.5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gold rounded transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gold rounded transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-gold rounded transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-[#0E1A12]/98 backdrop-blur-xl flex flex-col justify-between animate-in fade-in duration-200"
          style={{ top: 0 }}
        >
          {/* Drawer Header */}
          <div className="px-4 py-3.5 border-b border-gold/30 flex items-center justify-between bg-[#101E14]">
            <a href="#hero" onClick={handleLinkClick} aria-label="AnnaUrja Homepage">
              <Logo light={true} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 border border-gold/60 text-gold flex items-center justify-center font-bold text-lg active:scale-95"
              aria-label="Close Navigation"
            >
              ✕
            </button>
          </div>

          {/* Drawer Links List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="text-[11px] uppercase tracking-widest text-gold font-bold">
                Navigation Index
              </span>
              <span className="text-[10px] text-white/50 font-body">
                AnnaUrja · AI Agrivoltaics
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-gold/15 active:bg-gold/25 border border-white/10 hover:border-gold/50 transition-all text-white group min-h-[48px] touch-manipulation"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-gold/20 text-gold text-xs font-display font-bold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-colors">
                    {link.tag}
                  </span>
                  <div>
                    <span className="text-sm font-semibold tracking-wide block leading-snug">
                      {link.name}
                    </span>
                    <span className="text-[10px] text-white/50 block font-body">
                      {link.sub}
                    </span>
                  </div>
                </div>

                <span className="text-gold text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 border-t border-gold/30 bg-[#101E14] space-y-2.5">
            <a
              href="#solution"
              onClick={handleLinkClick}
              className="btn-gold w-full py-3 text-xs tracking-wider"
            >
              <span>Explore 5-Step Solution</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <div className="text-center">
              <span className="text-gold text-xs font-medium block">
                अन्न भी, ऊर्जा भी
              </span>
              <span className="text-[10px] text-white/60 font-body block mt-0.5">
                Grow food and power on the same land · PM-KUSUM
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

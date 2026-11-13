import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
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
    { name: 'Problem', href: '#problem' },
    { name: 'Why Now', href: '#why-now' },
    { name: 'Solution', href: '#solution' },
    { name: 'Technology', href: '#technology' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Market', href: '#market' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Team', href: '#team' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border py-3'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="group" onClick={() => setMobileMenuOpen(false)}>
          <Logo light={!scrolled && !mobileMenuOpen} />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-gold ${
                scrolled ? 'text-grey' : 'text-white/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#solution"
            className="text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-gold text-white hover:bg-[#a67926] transition-all shadow-sm hover:shadow"
          >
            Explore Plan
          </a>
        </div>

        {/* Mobile Toggle Button with 44px touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileMenuOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 rounded transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-cream/98 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200 z-50">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-3 px-3">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-green hover:text-gold tracking-wide py-3 px-3 rounded-xl hover:bg-green/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-border mt-4">
            <a
              href="#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs uppercase tracking-wider font-semibold py-3.5 px-6 rounded-full bg-gold text-white shadow-md"
            >
              Explore Plan in 5 Steps
            </a>
            <p className="text-[11px] text-grey text-center mt-3 font-body">
              AnnaUrja — Anna bhi, Urja bhi.
            </p>
          </div>
        </div>
      )}
    </nav>
  )
}

import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-border py-3.5'
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="group">
          <Logo light={!scrolled} />
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

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle navigation"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 rounded transition-all ${
                scrolled ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all ${
                scrolled ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 rounded transition-all ${
                scrolled ? 'bg-green' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream border-b border-border px-6 py-6 space-y-4 shadow-xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-green hover:text-gold tracking-wide py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full bg-gold text-white"
            >
              Explore Plan
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function Logo({ className = '', light = false, showTagline = false }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 shrink-0 select-none ${className}`}>
      {/* Bespoke Emblem Mark (Wheat Stalk + Solar Array) */}
      <svg
        className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="navLogoGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#966C1E" />
            <stop offset="50%" stopColor="#B8892E" />
            <stop offset="100%" stopColor="#E2B755" />
          </linearGradient>

          <linearGradient id="navLogoGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A5A3D" />
            <stop offset="70%" stopColor="#1F3D2B" />
            <stop offset="100%" stopColor="#13271B" />
          </linearGradient>
        </defs>

        {/* Outer subtle halo ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#navLogoGold)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2" />

        {/* Sun corona */}
        <circle cx="50" cy="22" r="6" fill="url(#navLogoGold)" />
        <line x1="50" y1="10" x2="50" y2="6" stroke="url(#navLogoGold)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="60" y1="14" x2="63" y2="12" stroke="url(#navLogoGold)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="40" y1="14" x2="37" y2="12" stroke="url(#navLogoGold)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Wheat Stalk (Anna / Food) */}
        <path d="M50 82 Q42 60 48 34" stroke="url(#navLogoGold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M47 72 C36 68 32 58 44 60 C46 65 47 70 47 72 Z" fill="url(#navLogoGold)" />
        <path d="M46 58 C32 54 30 42 43 45 C45 50 46 55 46 58 Z" fill="url(#navLogoGold)" />
        <path d="M47 44 C36 38 36 28 47 32 C48 37 47 41 47 44 Z" fill="url(#navLogoGold)" />
        <path d="M34 56 Q24 48 20 40" stroke="url(#navLogoGold)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85" />
        <path d="M36 42 Q28 32 24 22" stroke="url(#navLogoGold)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.85" />

        {/* Solar Canopy Array (Urja / Energy) */}
        <polygon points="53,30 78,24 81,38 56,44" fill="url(#navLogoGreen)" stroke="url(#navLogoGold)" strokeWidth="1.2" strokeLinejoin="round" />
        <polygon points="55,47 80,42 82,56 57,61" fill="url(#navLogoGreen)" stroke="url(#navLogoGold)" strokeWidth="1.2" strokeLinejoin="round" />
        <polygon points="56,64 78,60 80,72 58,76" fill="url(#navLogoGreen)" stroke="url(#navLogoGold)" strokeWidth="1.2" strokeLinejoin="round" />

        {/* Raised Mounting Leg & Ground */}
        <line x1="70" y1="74" x2="70" y2="84" stroke="url(#navLogoGold)" strokeWidth="2" strokeLinecap="round" />
        <line x1="56" y1="76" x2="56" y2="84" stroke="url(#navLogoGold)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M38 84 L76 84" stroke="url(#navLogoGold)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col shrink-0">
        <span
          className={`font-display text-xl sm:text-2xl font-bold tracking-tight leading-none whitespace-nowrap ${
            light ? 'text-white' : 'text-green'
          }`}
        >
          Anna<span className="text-gold">Urja</span>
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-widest uppercase font-medium text-gold mt-0.5 whitespace-nowrap">
            अन्न भी, ऊर्जा भी
          </span>
        )}
      </div>
    </div>
  )
}

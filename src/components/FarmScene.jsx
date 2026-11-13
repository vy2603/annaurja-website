import { useCallback } from 'react'

/**
 * FarmScene — A layered SVG illustration of an agrivoltaic farm in rural India.
 * Built with modular SVG primitives for buttery-smooth 60fps GSAP scrubbing.
 */
export default function FarmScene({ sceneRefs }) {
  const setRef = useCallback(
    (key, index) => (el) => {
      if (index !== undefined) {
        if (!sceneRefs.current[key]) sceneRefs.current[key] = []
        sceneRefs.current[key][index] = el
      } else {
        sceneRefs.current[key] = el
      }
    },
    [sceneRefs]
  )

  // Raised solar panel structures across the farm field
  const panels = [
    { x: 90, y: 320, width: 230, height: 16, tilt: -8, poleHeight: 180 },
    { x: 380, y: 310, width: 250, height: 16, tilt: -7, poleHeight: 190 },
    { x: 690, y: 305, width: 260, height: 16, tilt: -7, poleHeight: 195 },
    { x: 1010, y: 315, width: 250, height: 16, tilt: -6, poleHeight: 185 },
    { x: 1310, y: 325, width: 240, height: 16, tilt: -6, poleHeight: 175 },
  ]

  // Crop row clusters placed under and between the elevated panels
  const cropRows = [
    { x: 70, y: 560, scale: 0.95 },
    { x: 170, y: 575, scale: 1.0 },
    { x: 280, y: 565, scale: 0.98 },
    { x: 390, y: 580, scale: 1.05 },
    { x: 500, y: 570, scale: 1.0 },
    { x: 610, y: 585, scale: 1.1 },
    { x: 720, y: 575, scale: 1.08 },
    { x: 830, y: 585, scale: 1.05 },
    { x: 940, y: 570, scale: 1.0 },
    { x: 1050, y: 580, scale: 1.05 },
    { x: 1160, y: 570, scale: 0.98 },
    { x: 1270, y: 580, scale: 1.02 },
    { x: 1380, y: 565, scale: 0.95 },
    { x: 1480, y: 575, scale: 0.92 },
  ]

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full select-none"
      aria-label="Interactive agrivoltaic landscape with crops and raised solar panels"
    >
      <defs>
        {/* Morning Indian farm sky gradient */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A4B" />
          <stop offset="25%" stopColor="#3E6B7A" />
          <stop offset="55%" stopColor="#E29547" />
          <stop offset="78%" stopColor="#F7C873" />
          <stop offset="100%" stopColor="#FAF0D8" />
        </linearGradient>

        {/* Shifting sky for afternoon/under-canopy perspective */}
        <linearGradient id="underCanopySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E2319" />
          <stop offset="40%" stopColor="#1F3D2B" />
          <stop offset="80%" stopColor="#4A6E53" />
          <stop offset="100%" stopColor="#8DA88C" />
        </linearGradient>

        {/* Sun golden aura */}
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#FDBF5E" stopOpacity="0.5" />
          <stop offset="70%" stopColor="#E29547" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#E29547" stopOpacity="0" />
        </radialGradient>

        {/* Ground fertile soil gradient */}
        <linearGradient id="fertileSoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#416938" />
          <stop offset="35%" stopColor="#305429" />
          <stop offset="70%" stopColor="#233E1E" />
          <stop offset="100%" stopColor="#162714" />
        </linearGradient>

        {/* Solar module anti-reflective cell gradient */}
        <linearGradient id="solarCellGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E2A3A" />
          <stop offset="40%" stopColor="#111B27" />
          <stop offset="85%" stopColor="#1B2B3E" />
          <stop offset="100%" stopColor="#253A52" />
        </linearGradient>

        {/* Solar panel frame metallic gradient */}
        <linearGradient id="metalFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9E2E8" />
          <stop offset="50%" stopColor="#95A5A6" />
          <stop offset="100%" stopColor="#6C7A89" />
        </linearGradient>

        {/* Leaf lush green gradient */}
        <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78C850" />
          <stop offset="60%" stopColor="#489620" />
          <stop offset="100%" stopColor="#275611" />
        </linearGradient>

        {/* Filtered golden sunlight rays */}
        <linearGradient id="sunBeamGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.45" />
          <stop offset="70%" stopColor="#FDBF5E" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FDBF5E" stopOpacity="0" />
        </linearGradient>

        {/* Shade microclimate under elevated panels */}
        <linearGradient id="shadeAura" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162B1D" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#1A3B25" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1F3D2B" stopOpacity="0.65" />
        </linearGradient>
      </defs>

      {/* 1. SKY BACKGROUND */}
      <rect
        ref={setRef('skyGradient')}
        width="1600"
        height="900"
        fill="url(#skyGrad)"
      />

      {/* 2. SUN AND GLOW */}
      <circle
        ref={setRef('sunGlow')}
        cx="320"
        cy="280"
        r="240"
        fill="url(#sunGlow)"
        className="pointer-events-none"
      />
      <circle
        ref={setRef('sun')}
        cx="320"
        cy="280"
        r="54"
        fill="#FFF2B2"
        className="drop-shadow-lg pointer-events-none"
      />

      {/* 3. DISTANT HORIZON AND RURAL BACKGROUND */}
      <g opacity="0.75">
        {/* Distant Aravalli/Indian hills */}
        <path
          d="M0 450 Q220 380 440 420 T880 400 T1320 430 Q1480 390 1600 420 L1600 550 L0 550 Z"
          fill="#31563E"
          opacity="0.5"
        />
        <path
          d="M0 470 Q280 410 560 450 T1120 430 Q1400 440 1600 460 L1600 550 L0 550 Z"
          fill="#2C4F37"
          opacity="0.8"
        />

        {/* Distant farm boundary trees */}
        {[80, 200, 340, 520, 780, 930, 1150, 1380, 1520].map((tx, idx) => (
          <ellipse
            key={`tree-${idx}`}
            cx={tx}
            cy={470 + (idx % 3) * 5}
            rx={20 + (idx % 2) * 8}
            ry={14 + (idx % 3) * 4}
            fill="#1E3827"
            opacity="0.6"
          />
        ))}

        {/* Transmission substation pylon hint (grid connection context) */}
        <g transform="translate(1480, 310)" opacity="0.35">
          <line x1="0" y1="160" x2="30" y2="0" stroke="#7A8D80" strokeWidth="2" />
          <line x1="60" y1="160" x2="30" y2="0" stroke="#7A8D80" strokeWidth="2" />
          <line x1="10" y1="110" x2="50" y2="110" stroke="#7A8D80" strokeWidth="2" />
          <line x1="18" y1="65" x2="42" y2="65" stroke="#7A8D80" strokeWidth="2" />
          <line x1="-15" y1="40" x2="75" y2="40" stroke="#7A8D80" strokeWidth="2" />
          <line x1="-10" y1="75" x2="70" y2="75" stroke="#7A8D80" strokeWidth="2" />
          <path d="M-15 40 Q-80 50 -160 40" stroke="#607466" strokeWidth="1" fill="none" />
          <path d="M75 40 Q140 50 200 40" stroke="#607466" strokeWidth="1" fill="none" />
        </g>
      </g>

      {/* 4. CAMERA GROUP — Zooms and tracks smoothly under the panels */}
      <g ref={setRef('cameraGroup')}>
        {/* Fertile soil field base */}
        <rect
          ref={setRef('ground')}
          x="0"
          y="490"
          width="1600"
          height="410"
          fill="url(#fertileSoil)"
        />

        {/* Agricultural furrow depth lines */}
        {[515, 545, 580, 625, 680, 745, 820, 900].map((fy, idx) => (
          <path
            key={`furrow-${idx}`}
            d={`M0 ${fy} Q400 ${fy - 6} 800 ${fy + 4} T1600 ${fy - 2}`}
            stroke="#193016"
            strokeWidth={1.5 + idx * 0.4}
            fill="none"
            opacity="0.45"
          />
        ))}

        {/* Ground shade projected directly beneath the solar canopy */}
        {panels.map((p, i) => (
          <ellipse
            key={`shadow-${i}`}
            ref={setRef('panelShadows', i)}
            cx={p.x + p.width / 2}
            cy={530 + p.poleHeight * 0.3}
            rx={p.width * 0.65}
            ry={45}
            fill="#0F1C12"
            opacity="0"
            className="filter blur-sm"
          />
        ))}

        {/* Light rays filtering between panel gaps onto the crops */}
        {panels.slice(0, -1).map((p, i) => {
          const nextP = panels[i + 1]
          const gapX = p.x + p.width + (nextP.x - (p.x + p.width)) / 2
          return (
            <polygon
              key={`ray-${i}`}
              ref={setRef('lightRays', i)}
              points={`${gapX - 25},290 ${gapX + 25},290 ${gapX + 90},780 ${gapX - 90},780`}
              fill="url(#sunBeamGrad)"
              opacity="0"
            />
          )
        })}

        {/* ELEVATED SOLAR CANOPY STRUCTURES (Agrivoltaics: panels raised 2.5m - 4m for tractors and farming) */}
        {panels.map((p, i) => {
          const groundY = 520
          const canopyY = groundY - p.poleHeight
          return (
            <g
              key={`panel-group-${i}`}
              ref={setRef('panelGroups', i)}
              opacity="0"
              transform={`translate(0, 0)`}
            >
              {/* Heavy-duty galvanized mounting pillars */}
              <line
                x1={p.x + 45}
                y1={groundY + 10}
                x2={p.x + 45}
                y2={canopyY + 12}
                stroke="url(#metalFrame)"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <line
                x1={p.x + p.width - 45}
                y1={groundY + 10}
                x2={p.x + p.width - 45}
                y2={canopyY + 12}
                stroke="url(#metalFrame)"
                strokeWidth="7"
                strokeLinecap="round"
              />

              {/* Diagonal bracing (agrivoltaic wind load stabilization) */}
              <line
                x1={p.x + 45}
                y1={canopyY + 40}
                x2={p.x + 110}
                y2={groundY}
                stroke="#6C7A89"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <line
                x1={p.x + p.width - 45}
                y1={canopyY + 40}
                x2={p.x + p.width - 110}
                y2={groundY}
                stroke="#6C7A89"
                strokeWidth="2.5"
                opacity="0.8"
              />

              {/* Elevated Torque Tube & Racking Crossbeam */}
              <rect
                x={p.x - 10}
                y={canopyY + 8}
                width={p.width + 20}
                height="6"
                rx="2"
                fill="#556270"
              />

              {/* Tilted Solar PV Table */}
              <g transform={`rotate(${p.tilt}, ${p.x + p.width / 2}, ${canopyY})`}>
                {/* Solar panel aluminium frame */}
                <rect
                  x={p.x - 12}
                  y={canopyY - 14}
                  width={p.width + 24}
                  height="26"
                  rx="3"
                  fill="url(#metalFrame)"
                  stroke="#47535E"
                  strokeWidth="1.5"
                />

                {/* Photovoltaic glass cells surface */}
                <rect
                  x={p.x - 8}
                  y={canopyY - 10}
                  width={p.width + 16}
                  height="18"
                  rx="1"
                  fill="url(#solarCellGrad)"
                />

                {/* Monocrystalline wafer grid lines & busbars */}
                {Array.from({ length: 8 }, (_, idx) => {
                  const cellX = p.x - 8 + (idx + 1) * ((p.width + 16) / 9)
                  return (
                    <line
                      key={`busbar-${idx}`}
                      x1={cellX}
                      y1={canopyY - 10}
                      x2={cellX}
                      y2={canopyY + 8}
                      stroke="#48627D"
                      strokeWidth="0.8"
                      strokeDasharray="2,1"
                    />
                  )
                })}

                {/* Anti-reflective specular reflection highlight */}
                <polygon
                  points={`${p.x + 10},${canopyY - 9} ${p.x + 70},${canopyY - 9} ${p.x + 35},${canopyY + 7} ${p.x - 5},${canopyY + 7}`}
                  fill="#FFFFFF"
                  opacity="0.22"
                />
              </g>
            </g>
          )
        })}

        {/* LUSH CROPS THRIVING BENEATH AND BETWEEN THE CANOPY */}
        {cropRows.map((c, i) => (
          <g
            key={`crop-cluster-${i}`}
            ref={setRef('cropRows', i)}
            transform={`translate(${c.x}, ${c.y}) scale(${c.scale})`}
            className="cursor-default"
          >
            {/* Plant stems */}
            <path d="M30 40 Q32 10 30 -15" stroke="#254D12" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M30 15 Q48 5 62 -8" stroke="#254D12" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M30 22 Q12 10 -4 -2" stroke="#254D12" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Base foliage */}
            <ellipse cx="30" cy="10" rx="36" ry="24" fill="#2E6317" opacity="0.9" />
            <ellipse cx="48" cy="2" rx="26" ry="18" fill="url(#leafGrad)" />
            <ellipse cx="12" cy="5" rx="24" ry="16" fill="url(#leafGrad)" />

            {/* Upper healthy leaves growing toward sunlight */}
            <path
              d="M30 -15 Q45 -45 60 -35 Q45 -18 30 -15"
              fill="url(#leafGrad)"
              stroke="#58A834"
              strokeWidth="0.8"
            />
            <path
              d="M30 -15 Q15 -42 0 -32 Q15 -16 30 -15"
              fill="url(#leafGrad)"
              stroke="#58A834"
              strokeWidth="0.8"
            />
            <path
              d="M30 -15 Q30 -55 35 -60 Q38 -45 30 -15"
              fill="#82DB55"
              stroke="#58A834"
              strokeWidth="0.8"
            />
            <path
              d="M48 2 Q75 -8 82 -2 Q65 15 48 2"
              fill="url(#leafGrad)"
              stroke="#58A834"
              strokeWidth="0.8"
            />
            <path
              d="M12 5 Q-15 -5 -22 2 Q-5 18 12 5"
              fill="url(#leafGrad)"
              stroke="#58A834"
              strokeWidth="0.8"
            />

            {/* Morning dew moisture droplets */}
            <circle cx="36" cy="-28" r="2.2" fill="#FFFFFF" opacity="0.8" />
            <circle cx="58" cy="-5" r="1.8" fill="#FFFFFF" opacity="0.7" />
            <circle cx="6" cy="-12" r="1.6" fill="#FFFFFF" opacity="0.7" />
          </g>
        ))}

        {/* Farmer silhouette on the field inspecting the crops */}
        <g transform="translate(1080, 520)" opacity="0.75" className="pointer-events-none">
          {/* Shadow */}
          <ellipse cx="0" cy="98" rx="28" ry="8" fill="#0C1A10" opacity="0.6" />
          {/* Boots */}
          <path d="M-9 88 L-6 97 L2 97 L0 88 Z" fill="#142617" />
          <path d="M4 88 L7 97 L15 97 L13 88 Z" fill="#142617" />
          {/* Trousers */}
          <path d="M-12 45 L-9 88 L-2 88 L-1 54 L6 88 L13 88 L11 45 Z" fill="#25432B" />
          {/* Kurta / Shirt */}
          <path d="M-15 15 L-14 52 L14 52 L15 15 Z" fill="#B8892E" opacity="0.9" />
          {/* Head & Pagri / Turban */}
          <circle cx="0" cy="-2" r="9" fill="#7D4E19" />
          <path d="M-12 -6 Q0 -18 12 -6 Q14 2 8 4 Q0 6 -8 4 Z" fill="#FAF8F3" />
          {/* Arm holding tablet/mobile for AnnaUrja plan */}
          <path d="M12 20 L22 32 L16 38" stroke="#7D4E19" strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="20" y="24" width="10" height="15" rx="1.5" fill="#3D82E2" />
        </g>

        {/* Protective microclimate canopy shade overlay */}
        <rect
          ref={setRef('underPanelOverlay')}
          x="0"
          y="280"
          width="1600"
          height="620"
          fill="url(#shadeAura)"
          opacity="0"
          className="pointer-events-none"
        />
      </g>
    </svg>
  )
}

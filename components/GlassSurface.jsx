'use client';

import { useEffect, useState } from 'react';

export default function GlassSurface({
  children,
  className = '',
  displace = 15,
  distortionScale = 100,
  brightness = 1.05,
  opacity = 0.7,
  rOffset = 2,
  gOffset = 0,
  bOffset = -2,
}) {
  const [isSafari, setIsSafari] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect Safari
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);

    // Detect dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeQuery.matches);

    const handleDarkModeChange = (e) => setIsDark(e.matches);
    darkModeQuery.addEventListener('change', handleDarkModeChange);

    return () => darkModeQuery.removeEventListener('change', handleDarkModeChange);
  }, []);

  const filterId = `glass-filter-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`relative ${className}`}>
      {/* SVG Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            {/* Chromatic Aberration Effect */}
            <feOffset in="SourceGraphic" dx={rOffset} dy={rOffset} result="r" />
            <feOffset in="SourceGraphic" dx={gOffset} dy={gOffset} result="g" />
            <feOffset in="SourceGraphic" dx={bOffset} dy={bOffset} result="b" />

            <feColorMatrix
              in="r"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="rChannel"
            />
            <feColorMatrix
              in="g"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="gChannel"
            />
            <feColorMatrix
              in="b"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="bChannel"
            />

            {/* Combine RGB channels */}
            <feBlend in="rChannel" in2="gChannel" mode="screen" result="rg" />
            <feBlend in="rg" in2="bChannel" mode="screen" result="rgb" />

            {/* Turbulence for glass distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="2"
              result="turbulence"
              seed="1"
            />

            <feDisplacementMap
              in="rgb"
              in2="turbulence"
              scale={displace}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />

            {/* Brightness adjustment */}
            <feComponentTransfer in="displaced" result="brightened">
              <feFuncR type="linear" slope={brightness} />
              <feFuncG type="linear" slope={brightness} />
              <feFuncB type="linear" slope={brightness} />
            </feComponentTransfer>

            {/* Final composite */}
            <feComposite
              in="brightened"
              in2="SourceAlpha"
              operator="in"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      {/* Glass container */}
      <div
        className={`
          relative overflow-hidden
          ${isSafari ? 'bg-white/80' : 'bg-white/60'}
          ${isDark ? 'dark:bg-gray-900/60' : ''}
          backdrop-blur-xl backdrop-saturate-150
          border border-white/20
          ${isDark ? 'dark:border-gray-700/30' : ''}
          shadow-xl
        `}
        style={{
          filter: isSafari ? 'none' : `url(#${filterId})`,
        }}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Gradient overlay for extra depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
      </div>
    </div>
  );
}

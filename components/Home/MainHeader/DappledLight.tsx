"use client"

import "./dappled-light.css"

export function DappledLight() {
  return (
    <div id="dappled-light">
      <div id="glow"></div>
      <div id="glow-bounce"></div>
      <div className="perspective">
        <div id="leaves">
          <svg style={{ width: 0, height: 0, position: "absolute" }}>
            <defs>
              {/* Main wind filter - slow traveling wave effect */}
              <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
                {/* Primary slow-moving turbulence - creates the main wind wave */}
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.006 0.009"
                  numOctaves="4"
                  result="noise1"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="90s"
                    values="0.006 0.009;0.008 0.007;0.006 0.009"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                
                {/* Secondary medium turbulence - adds branch/leaf movement */}
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.012 0.016"
                  numOctaves="3"
                  result="noise2"
                >
                  <animate
                    attributeName="seed"
                    dur="75s"
                    values="0;75;0"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                
                {/* Fine detail turbulence - simulates petal/leaf edge flutter */}
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.025 0.035"
                  numOctaves="2"
                  result="noise3"
                >
                  <animate
                    attributeName="seed"
                    dur="60s"
                    values="0;120;0"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                
                {/* Blend all three noise patterns with different strengths */}
                <feBlend in="noise1" in2="noise2" mode="screen" result="blend1" />
                <feBlend in="blend1" in2="noise3" mode="overlay" result="blendedNoise" />
                
                {/* Apply displacement with more natural wind strength */}
                <feDisplacementMap in="SourceGraphic" in2="blendedNoise" scale="12">
                  <animate
                    attributeName="scale"
                    dur="60s"
                    values="8;16;8"
                    repeatCount="indefinite"
                  />
                </feDisplacementMap>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
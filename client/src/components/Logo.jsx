import React from 'react'
import { theme } from '../styles/theme'

const Logo = ({ className = '', iconClassName = '', textClassName = '' }) => (
    <div className={`flex items-center gap-2.5 ${className}`}>
        <svg
            viewBox="0 0 120 120"
            className={`h-9 w-9 sm:h-10 sm:w-10 shrink-0 ${iconClassName}`}
            aria-hidden="true"
        >
            <rect width="120" height="120" rx="27" fill="#1A1633" />
            <g transform="translate(60 60) scale(0.84) translate(-60 -60)">
                <g transform="rotate(-8 60 36)">
                    <rect x="38" y="16" width="44" height="38" rx="7" fill="#1A1633" stroke="#F4EFE3" strokeWidth="7" />
                    <path d="M45 49 L56 35 L63 43 L68 38 L76 49 Z" fill="#F4EFE3" />
                    <circle cx="71" cy="27" r="5" fill="#F2B33D" />
                </g>
                <rect x="20" y="56" width="80" height="10" rx="5" fill="#F4EFE3" />
                <path d="M32 64 H88 L84 100 A4 4 0 0 1 80 104 H40 A4 4 0 0 1 36 100 Z" fill="#F4EFE3" />
                <rect x="34.5" y="73" width="51" height="8" fill="#F2B33D" />
            </g>
        </svg>
        <span className={`text-xl sm:text-2xl font-bold tracking-tight leading-none ${theme.text.heading} ${textClassName}`}>
            Sorcer
        </span>
    </div>
)

export default Logo

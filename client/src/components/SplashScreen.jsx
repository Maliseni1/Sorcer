import React from 'react'
import { motion } from 'motion/react'
import { theme } from '../styles/theme'

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-cream dark:bg-night"
        >
            <div className="absolute w-[560px] h-[560px] rounded-full bg-gold/10 dark:bg-gold/15 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col items-center gap-5">
                <svg width="80" height="80" viewBox="0 0 120 120">
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

                <span className={`text-2xl font-bold tracking-tight ${theme.text.heading}`}>Sorcer</span>

                <div className="w-44 h-1 rounded-full bg-night/10 dark:bg-cream/10 overflow-hidden mt-1">
                    <motion.div
                        className="h-full bg-gold rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                    />
                </div>

                <span className="text-xs text-night/40 dark:text-cream/40 tracking-wide">Conjuring your magic…</span>
            </div>
        </motion.div>
    )
}

export default SplashScreen

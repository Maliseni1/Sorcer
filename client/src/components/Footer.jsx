import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/Mariseny.moves/",
            label: "Facebook",
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: "hover:bg-[#1877F2] hover:text-white"
        },
        {
            href: "https://x.com/MAlisenichavula/",
            label: "Twitter / X",
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            color: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black"
        },
        {
            href: "https://www.instagram.com/malisenichavula/",
            label: "Instagram",
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            ),
            color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 hover:text-white hover:border-transparent"
        },
        {
            href: "https://www.linkedin.com/in/maliseni-chavula-7100b323b",
            label: "LinkedIn",
            svg: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: "hover:bg-[#0A66C2] hover:text-white"
        },
    ]

    return (
        <div className="mt-20">
            {/* Main Footer */}
            <div className="border-t border-gray-200 dark:border-zinc-800 pt-12 pb-8">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="relative inline-block mb-4">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 dark:from-orange-500/20 dark:to-red-500/20 rounded-xl blur-lg" />
                        <img src={assets.logo} alt="Sorcer" className="relative h-14 w-auto" />
                    </div>
                    <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
                        Transform your ideas into stunning AI-generated images in seconds. The creative playground for modern visionaries.
                    </p>

                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-11 h-11 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 flex items-center justify-center border border-gray-200 dark:border-zinc-700 transition-all duration-300 ${social.color}`}
                                whileHover={{ y: -4, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={social.label}
                            >
                                {social.svg}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-zinc-800">
                    <p className="text-sm text-gray-400 dark:text-zinc-500">
                        &copy; {new Date().getFullYear()} Chiza Labs. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:chizalabs@gmail.com"
                            className="text-sm text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1.5"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact Us
                        </a>
                        <span className="text-gray-300 dark:text-zinc-700">|</span>
                        <span className="text-sm text-gray-400 dark:text-zinc-500">Made with AI magic</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
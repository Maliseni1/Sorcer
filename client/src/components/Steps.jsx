import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'motion/react'

const stepIcons = [
    <path key="describe" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />,
    <path key="magic" d="M12 3v4M12 17v4M5 10h4M15 10h4M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" />,
    <path key="download" d="M12 3v12M7 11l5 5 5-5M5 21h14" />,
]

const Steps = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-32 px-4'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-night dark:text-cream'>How it works</h1>
            <p className='text-lg text-night/50 dark:text-cream/50 mb-8'>Three steps. Zero friction.</p>

            <div className='space-y-4 w-full max-w-3xl text-sm'>
                {stepsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, delay: index * 0.15 }}
                        className='flex items-center gap-4 p-5 px-8 bg-white dark:bg-cream/[0.04] border border-night/10 dark:border-cream/10 cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-xl'
                    >
                        <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-dark dark:text-gold" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {stepIcons[index]}
                            </svg>
                        </div>
                        <div>
                            <h2 className='text-xl font-medium text-night dark:text-cream'>{item.title}</h2>
                            <p className='text-night/50 dark:text-cream/50 mt-1 leading-relaxed'>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Steps

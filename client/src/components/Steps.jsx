import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'motion/react'
import { IconBadge } from './ui'
import { theme } from '../styles/theme'

const stepIcons = [
    <path key="describe" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />,
    <path key="magic" d="M12 3v4M12 17v4M5 10h4M15 10h4M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" />,
    <path key="download" d="M12 3v12M7 11l5 5 5-5M5 21h14" />,
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1, y: 0,
        transition: { type: 'spring', stiffness: 260, damping: 24 }
    }
}

const Steps = () => {
    return (
        <div className='flex flex-col items-center justify-center my-32 px-4'>
            <h1 className={`text-3xl sm:text-4xl font-semibold mb-2 ${theme.text.heading}`}>How it works</h1>
            <p className={`text-lg ${theme.text.muted} mb-16`}>Three steps. Zero friction.</p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='relative w-full max-w-5xl'
            >
                {/* Connecting line between the three steps, desktop only */}
                <div className={`hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px ${theme.accent.iconBg}`} />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6'>
                    {stepsData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className='relative flex flex-col items-center text-center'
                        >
                            <div className='flex items-center gap-2 mb-4'>
                                <span className='w-5 h-0.5 bg-gold inline-block' />
                                <span className={`text-xs font-semibold tracking-[0.18em] uppercase ${theme.accent.text}`}>
                                    Step 0{index + 1}
                                </span>
                            </div>

                            <IconBadge
                                size="lg"
                                className="relative z-10 mb-5"
                                icon={
                                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {stepIcons[index]}
                                    </svg>
                                }
                            />

                            <h2 className={`text-xl font-medium mb-2 ${theme.text.heading}`}>{item.title}</h2>
                            <p className={`${theme.text.muted} leading-relaxed max-w-[260px]`}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Steps

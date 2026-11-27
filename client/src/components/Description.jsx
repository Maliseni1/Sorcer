import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
        >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-night dark:text-cream'>Create AI Images</h1>
            <p className='text-night/50 dark:text-cream/50 mb-8'>Turn your imagination into visuals</p>

            <div className='flex flex-col gap-8 md:gap-14 md:flex-row items-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="relative"
                >
                    <div className="absolute -inset-3 bg-gold/15 rounded-2xl blur-xl" />
                    <img src={assets.sample_img_1} alt='' className='relative w-80 xl:w-96 rounded-2xl shadow-2xl' />
                </motion.div>

                <div className="max-w-lg">
                    <h2 className='text-3xl font-medium mb-4 text-night dark:text-cream'>Introducing the AI-Powered Text to Image Generator</h2>
                    <p className='text-night/60 dark:text-cream/60 mb-4 leading-relaxed'>
                        Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                    </p>
                    <p className='text-night/60 dark:text-cream/60 leading-relaxed'>
                        Simply type in a text prompt, and our cutting-edge AI will generate high quality images in seconds. From product visuals to character designs and portraits, effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description

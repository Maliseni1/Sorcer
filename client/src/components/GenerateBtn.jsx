import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui'
import { theme } from '../styles/theme'

const GenerateBtn = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='pb-16 text-center px-4'
        >
            <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gold/10 rounded-full blur-2xl" />
                <h1 className={`relative text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold ${theme.text.heading} py-6 md:py-16`}>
                    See the magic. Try now!
                </h1>
            </div>

            <Button
                as={motion.button}
                onClick={onClickHandler}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='relative group px-12 py-3.5 overflow-hidden'
            >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                Generate Images
                <img src={assets.star_group} alt='' className='h-6' />
            </Button>
        </motion.div>
    )
}

export default GenerateBtn

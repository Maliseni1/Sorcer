import React from 'react'
import { theme } from '../styles/theme'

const Footer = () => {
    return (
        <div className={`mt-20 pt-6 pb-8 border-t ${theme.border.subtle} text-center`}>
            <p className={`text-sm ${theme.text.subtle}`}>Built by Chizalabs 2026</p>
        </div>
    )
}

export default Footer

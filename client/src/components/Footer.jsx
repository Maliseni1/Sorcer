import React from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../styles/theme'

const Footer = () => {
    return (
        <div className={`mt-20 pt-6 pb-8 border-t ${theme.border.subtle} text-center`}>
            <p className={`text-sm ${theme.text.subtle}`}>
                &copy; {new Date().getFullYear()} Chiza Labs. All rights reserved.
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
                <Link to="/privacy-policy" className={`text-xs ${theme.text.subtle} hover:underline`}>
                    Privacy Policy
                </Link>
                <span className={`text-xs ${theme.text.faint}`}>·</span>
                <Link to="/terms" className={`text-xs ${theme.text.subtle} hover:underline`}>
                    Terms &amp; Conditions
                </Link>
            </div>
        </div>
    )
}

export default Footer

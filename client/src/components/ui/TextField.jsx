import React from 'react'
import { theme } from '../../styles/theme'

// Shared shape for Login's name/email/password fields: icon + input +
// optional trailing element (the password show/hide toggle), with the
// focus-ring and surface treatment defined once.
const TextField = ({ icon, rightElement, className = '', inputClassName = '', ...rest }) => {
    return (
        <div className={`group relative flex items-center gap-3 ${theme.surface.field} px-4 py-2.5 rounded-xl transition-all focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/15 ${className}`}>
            {icon && (
                <span className="h-5 w-5 opacity-50 group-focus-within:opacity-100 transition-opacity shrink-0">
                    {icon}
                </span>
            )}
            <input
                className={`outline-none text-sm bg-transparent w-full text-night dark:text-cream placeholder:text-night/35 dark:placeholder:text-cream/35 ${inputClassName}`}
                {...rest}
            />
            {rightElement}
        </div>
    )
}

export default TextField

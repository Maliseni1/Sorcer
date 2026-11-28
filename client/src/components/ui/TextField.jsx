import React from 'react'
import { theme } from '../../styles/theme'

// Shared shape for Login's name/email/password fields: icon + input +
// optional trailing element (the password show/hide toggle), with the
// focus-ring and surface treatment defined once.
//
// `invalid` swaps in a complete alternate surface treatment rather than
// appending an error class on top of the default one — mixing the two
// risks an unpredictable winner, since Tailwind utility precedence depends
// on generation order, not on where a class sits in the attribute string.
const TextField = ({ icon, rightElement, invalid = false, className = '', inputClassName = '', ...rest }) => {
    const surfaceClass = invalid
        ? 'border border-red-400 dark:border-red-500/70 bg-red-50/60 dark:bg-red-500/10 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/15'
        : `${theme.surface.field} focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/15`

    return (
        <div className={`group relative flex items-center gap-3 ${surfaceClass} px-4 py-2.5 rounded-xl transition-all ${className}`}>
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

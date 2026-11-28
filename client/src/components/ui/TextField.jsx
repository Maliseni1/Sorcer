import React from 'react'
import { theme } from '../../styles/theme'

// Shared shape for Login's name/email/password fields: icon + a floating
// label + input + optional trailing element (the password show/hide
// toggle). The label sits over the input like a placeholder until the
// field is focused or has a value, then rises to a small caption pinned
// to the top of the field, leaving the input's own text clearly readable
// below it.
//
// `invalid` swaps in a complete alternate surface treatment rather than
// appending an error class on top of the default one — mixing the two
// risks an unpredictable winner, since Tailwind utility precedence depends
// on generation order, not on where a class sits in the attribute string.
const TextField = ({ icon, rightElement, invalid = false, label, id, className = '', inputClassName = '', ...rest }) => {
    const surfaceClass = invalid
        ? 'border border-red-400 dark:border-red-500/70 bg-red-50/60 dark:bg-red-500/10 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/15'
        : `${theme.surface.field} focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/15`

    return (
        <div className={`group flex items-center gap-3 ${surfaceClass} px-4 py-2 rounded-xl transition-all ${className}`}>
            {icon && (
                <span className="h-5 w-5 opacity-50 group-focus-within:opacity-100 transition-opacity shrink-0">
                    {icon}
                </span>
            )}
            <div className="relative flex-1 h-10">
                <input
                    id={id}
                    placeholder=" "
                    className={`peer absolute inset-x-0 bottom-1 outline-none text-sm bg-transparent w-full text-night dark:text-cream ${inputClassName}`}
                    {...rest}
                />
                {label && (
                    <label
                        htmlFor={id}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 text-sm ${theme.text.subtle} transition-all duration-150 ease-out pointer-events-none origin-left
                            peer-focus:top-0 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-medium
                            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium
                            ${invalid ? 'peer-focus:text-red-500 peer-[:not(:placeholder-shown)]:text-red-500' : 'peer-focus:text-gold-dark dark:peer-focus:text-gold'}`}
                    >
                        {label}
                    </label>
                )}
            </div>
            {rightElement}
        </div>
    )
}

export default TextField

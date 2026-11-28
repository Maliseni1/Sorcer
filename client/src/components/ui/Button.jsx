import React from 'react'

// Strategy-style variant map: callers select a named style instead of
// repeating the night/gold color logic at every call site.
const VARIANTS = {
    primary: 'bg-night dark:bg-gold text-cream dark:text-night',
    outline: 'bg-transparent border-2 border-night/30 dark:border-cream/30 text-night dark:text-cream hover:bg-night/5 dark:hover:bg-cream/10',
}

// `as` lets the caller substitute the underlying element/component
// (plain "button"/"a", or motion.button/motion.a for an animated variant)
// without the styling logic needing to know or branch on which one it is.
const Button = ({ as: Component = 'button', variant = 'primary', className = '', children, ...rest }) => {
    return (
        <Component
            className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
            {...rest}
        >
            {children}
        </Component>
    )
}

export default Button

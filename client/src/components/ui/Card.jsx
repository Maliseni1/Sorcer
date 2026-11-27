import React from 'react'
import { theme } from '../../styles/theme'

const Card = ({ className = '', children, ...rest }) => {
    return (
        <div className={`${theme.surface.card} ${className}`} {...rest}>
            {children}
        </div>
    )
}

export default Card

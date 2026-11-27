import React from 'react'
import { theme } from '../../styles/theme'

// The gold icon-in-a-rounded-square badge reused by Steps and BuyCredit.
// Not used for OfflinePage's signal icon — that one is a larger, animated,
// differently-shaped composition and forcing it into this shape would cost
// more clarity than it would save in duplication.
const IconBadge = ({ icon, className = '' }) => {
    return (
        <div className={`w-12 h-12 rounded-xl ${theme.accent.iconBg} flex items-center justify-center shrink-0 ${className}`}>
            <span className={theme.accent.text}>{icon}</span>
        </div>
    )
}

export default IconBadge

import React from 'react'

export interface BadgeType {
    children?: React.ReactNode
    customCss?: string;
}

const Badge = ({children, customCss} : BadgeType) => {
  return (
    <span className={`py-1 px-2 rounded bg-[#7038cf] ${customCss}`}>
        { children ? children : 'Add some text' }
    </span>
  )
}

export default Badge
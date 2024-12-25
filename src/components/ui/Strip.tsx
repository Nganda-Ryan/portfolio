import React from 'react'

interface RipType {
    children?: React.ReactNode;
    color: string;
}
const Strip = ({children, color}: RipType) => {
  return (
    <div className={`relative w-fit z-10 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-1/3 after:${color} after:z-[-1]`}>
        {children}
    </div>
  )
}

export default Strip
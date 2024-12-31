import React from 'react';
import { StripBgColor } from '@/app/types/type';

interface StripType {
    children?: React.ReactNode;
    color?: StripBgColor;
}
const Strip = ({children, color}: StripType) => {
  return (
    <div className={`relative w-fit z-10 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-1/3 ${color ? color : 'after:bg-pur'} after:z-[-1]`}>
        {children}
    </div>
  )
}

export default Strip
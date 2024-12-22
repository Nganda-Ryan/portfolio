import React from 'react';
import { CodeCardType } from '@/app/types/type';
import Image from "next/image";

const CodeCard = ({ title, tech, description, cumstomCss, logo }: CodeCardType) => {
  return (
    <div className={`h-auto w-full sm:w-10/12 md:w-1/2 lg:w-1/3 border-2 border-zinc-300 p-9 sm:py-12 ${cumstomCss}`}>
        {/* header */}
        <div className='flex items-end h-16 text-2xl sm:text-3xl md:text-2xl'>
            <div className="relative h-[42px] w-[42px] mr-5 flex justify-center items-center">
                <Image
                    src={logo}
                    fill
                    alt={`icon-${title}`}
                    className=""
                />
            </div>
            <div className='poppins-font font-bold'>
                <div className="relative after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-1/3 after:bg-red-400 after:z-[-1]">{title}</div>
                <div className=''>{tech}</div>
            </div>
        </div>
        {/* content */}
        <div  className="robotoMono-font text-base sm:text-lg md:text-base relative my-9 ml-3 sm:ml-5 pl-3 border-l-2 border-white border-opacity-30 before:content-['<h3>'] before:text-sm before:sm:text-base md:before:text-sm before:absolute before:-top-6 before:-left-5 after:content-['</h3>'] after:text-sm after:sm:text-base md:after:text-sm after:absolute after:-bottom-6 after:-left-5 before:opacity-30 after:opacity-30">
            {description}
        </div>
    </div>
  )
}

export default CodeCard
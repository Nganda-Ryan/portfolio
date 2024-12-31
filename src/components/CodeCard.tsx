import React from 'react';
import { CodeCardType } from '@/app/types/type';
import Image from "next/image";
import Strip from './ui/Strip';

const CodeCard = ({ title, tech, description, cumstomCss, logo, stripColor }: CodeCardType) => {
  return (
    
    <div data-aos="fade-up" className={`holographic-card h-auto w-full border-2 border-zinc-300 p-6 hover:bg-[#1d242d89] duration-300 ${cumstomCss}`}>
        {/* header */}
        <div className='flex items-center h-16 text-2xl sm:text-3xl md:text-2xl'>
            <div className="relative h-[42px] w-[42px] mr-5 flex justify-center items-center">
                <Image
                    src={logo}
                    fill
                    alt={`icon-${title}`}
                    className=""
                />
            </div>
            <div className='poppins-font font-bold'>
                <Strip color={stripColor}>
                    {title}
                </Strip>
                <div className='text-lg sm:text-xl md:text-lg'>{tech?.join(", ")}</div>
            </div>
        </div>
        {/* content */}
        <div  className="robotoMono-font text-sm sm:text-base relative my-9 ml-3 sm:ml-5 pl-3 border-l-2 border-white border-opacity-30 before:content-['<h3>'] before:text-sm before:sm:text-base md:before:text-sm before:absolute before:-top-6 before:-left-5 after:content-['</h3>'] after:text-sm after:sm:text-base md:after:text-sm after:absolute after:-bottom-6 after:-left-5 before:opacity-30 after:opacity-30">
            {description}
        </div>
    </div>
  )
}

export default CodeCard
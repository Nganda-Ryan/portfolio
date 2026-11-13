import React from 'react';
import { CodeCardType } from '@/app/types/type';
import Image from "next/image";
import Strip from './ui/Strip';

const CodeCard = ({ title, tech, description, cumstomCss, logo, stripColor, startClosure='<h3>', endClosure='</h3>' }: CodeCardType) => {
  return (
    <div data-aos="fade-up" className={`holographic-card h-auto w-full border-2 border-border p-4 sm:p-6 hover:bg-card-hover duration-300 ${cumstomCss}`}>
        <div className="flex items-start gap-3 sm:gap-5">
            <div className="relative h-8 w-8 sm:h-[42px] sm:w-[42px] shrink-0">
                <Image
                    src={logo}
                    fill
                    alt={`icon-${title}`}
                />
            </div>
            <div className="poppins-font font-bold min-w-0">
                <Strip color={stripColor}>
                    <span className="block text-lg leading-tight sm:text-2xl">{title}</span>
                </Strip>
            </div>
        </div>
        <p className="mt-2 text-xs leading-snug font-semibold sm:mt-3 sm:text-lg">{tech?.join(", ")}</p>
        <div className={`robotoMono-font text-xs leading-relaxed sm:text-sm relative mt-5 mb-2 sm:my-9 ml-2 sm:ml-5 pl-3 border-l-2 border-muted-3 before:content-['${startClosure}'] before:text-xs before:sm:text-sm before:absolute before:-top-5 before:-left-4 after:content-['${endClosure}'] after:text-xs after:sm:text-sm after:absolute after:-bottom-5 after:-left-4 before:opacity-30 after:opacity-30`}>
            {description}
        </div>
    </div>
  )
}

export default CodeCard
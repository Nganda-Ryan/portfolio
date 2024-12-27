import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10 h-16 robotoMono-font py-10 px-5 md:p-10 md:px-7">
        <div className='text-3xl font-bold flex flex-nowrap'>
            <DropdownMenu />
            <Link href="#" className='flex flex-nowrap'>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-500 ease-in-out'>
                    <span>&#123;</span>
                    <span className='ml-[1px]'>NGANDA.</span>
                </div>_
            </Link>
        </div>
        <ul className="w-full hidden md:flex justify-end text-base ">
            <li className="relative hover:text-cyan-400 font-semibold before:content-['1'] before:absolute before:right-0 before:-top-3 mx-3 md:mx-4 lg:mx-7 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#">&#47;&#47; Expertise</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['2'] before:absolute before:right-0 before:-top-3 mx-3 md:mx-4 lg:mx-7 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#">&#47;&#47; Projects</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['3'] before:absolute before:right-0 before:-top-3 mx-3 md:mx-4 lg:mx-7 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#">&#47;&#47; Certifications</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['4'] before:absolute before:right-0 before:-top-3 mx-3 md:mx-4 lg:mx-7 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#">&#47;&#47; Contact</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
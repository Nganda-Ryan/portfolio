import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import { navItems } from '@/data/nav';

const Header = () => {
  return (
    <header className="z-[1000] bg-header backdrop-blur-md border-b border-border fixed w-full flex justify-between items-center mb-10 h-10 robotoMono-font py-8 px-5 md:p-10 md:px-7">
        <div className='text-3xl sm:text-4xl font-bold flex flex-nowrap'>
            <DropdownMenu />
            <Link href="/" className='flex flex-nowrap'>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-500 ease-in-out'>
                    <span>&#123;</span>
                    <span className='ml-[1px]'>NGANDA.</span>
                </div>_
            </Link>
        </div>
        <div className="flex items-center shrink-0">
            <ul className="hidden lg:flex justify-end items-center text-base gap-1">
                {navItems.map((item, index) => (
                    <li
                        key={item.href}
                        className="relative hover:text-cyan-400 font-semibold mx-2 text-nowrap mt-3 transition-all"
                    >
                        <span className="absolute right-0 -top-3 text-xs text-muted-2">{index + 1}</span>
                        <Link href={item.href}>&#47;&#47;<span className='ml-1'>{item.name}</span></Link>
                    </li>
                ))}
            </ul>
        </div>
    </header>
  )
}

export default Header

import React from 'react';
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10 h-16 robotoMono-font transition-all p-2 sm:p-10">
        <div className='text-3xl font-bold flex flex-nowrap'>
            <Link href="#" className='flex flex-nowrap'>
                <div className='text-indigo-300 hover:text-cyan-400'>
                    <span>&#123;</span>
                    <span className='ml-[1px]'>NGANDA.</span>
                </div>_
            </Link>
        </div>
        <ul className="w-full flex justify-center text-base">
            <li className="relative hover:text-cyan-400 font-semibold before:content-['1'] before:absolute before:right-0 before:-top-3 mx-10 before:text-xs mt-3 before:text-slate-400">
                <Link href="#">&#47;&#47; Expertise</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['2'] before:absolute before:right-0 before:-top-3 mx-10 before:text-xs mt-3 before:text-slate-400">
                <Link href="#">&#47;&#47; Projects</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['3'] before:absolute before:right-0 before:-top-3 mx-10 before:text-xs mt-3 before:text-slate-400">
                <Link href="#">&#47;&#47; Resume</Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['4'] before:absolute before:right-0 before:-top-3 mx-10 before:text-xs mt-3 before:text-slate-400">
                <Link href="#">&#47;&#47; Contact</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header
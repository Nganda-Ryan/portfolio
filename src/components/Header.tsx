import React from 'react';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import Image from 'next/image';

const Header = () => {
    
  return (
    <header id="section1" className="z-[1000] bg-[#0D1117] fixed w-full flex justify-between items-center mb-10 h-10 robotoMono-font py-8 px-5 md:p-10 md:px-7">
        <div className='text-3xl sm:text-4xl font-bold flex flex-nowrap'>
            <DropdownMenu />
            <Link href="#section1" className='flex flex-nowrap'>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-500 ease-in-out'>
                    <span>&#123;</span>
                    <span className='ml-[1px]'>NGANDA.</span>
                </div>_
            </Link>
        </div>
        <ul className="w-full hidden lg:flex justify-end items-center text-base gap-2">
            <li className="relative hover:text-cyan-400 font-semibold before:content-['1'] before:absolute before:right-0 before:-top-3 mx-3 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#section1">&#47;&#47;<span className='ml-1'>Home</span></Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['2'] before:absolute before:right-0 before:-top-3 mx-3 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
            <Link href="#section2">&#47;&#47;<span className='ml-1'>Expertise</span></Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['3'] before:absolute before:right-0 before:-top-3 mx-3 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#section3">&#47;&#47;<span className='ml-1'>Project</span></Link>
            </li>
            <li className="relative hover:text-cyan-400 font-semibold before:content-['4'] before:absolute before:right-0 before:-top-3 mx-3 text-nowrap before:text-xs mt-3 before:text-slate-400 transition-all">
                <Link href="#section4">&#47;&#47;<span className='ml-1'>Certifications</span></Link>
            </li>
            <li className="relative mt-2.5 flex flex-nowrap items-center justify-center gap-3 mb-6 md:mb-0 ml-5">
                {/* Email */}
                <a
                    href="mailto:steveloicnganda@gmail.com"
                    className="transition transform hover:scale-110 hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                    src="/email-icon.svg"
                    alt="Email Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    />
                </a>
                {/* WhatsApp */}
                <a
                    href="https://wa.me/+237690924753"
                    className="transition transform hover:scale-110 hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                    src="/whatsapp-icon.svg"
                    alt="WhatsApp Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    />
                </a>
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/steve-loic/"
                    className="transition transform hover:scale-110 hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                    src="/linkedin-icon.svg"
                    alt="LinkedIn Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    />
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/Nganda-Ryan"
                    className="transition transform hover:scale-110 hover:text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                    src="/github-icon.svg"
                    alt="GitHub Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    />
                </a>
            </li>
        </ul>
    </header>
  )
}

export default Header
"use client"
import React, { useState } from 'react'

const paths = [
    { name: "Home", link: "#section1" },
    { name: "Expertise", link: "#section2" },
    { name: "Project", link: "#section3" },
    { name: "Certification", link: "#section4" }
];

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 mr-4 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg lg:hidden hover:bg-slate-100 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-700" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
  
        {/* Dropdown */}
        <div className={`fixed top-0 left-0 bg-[#1E1F26] text-white w-96 z-50 h-full transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Header */}
            <div className="mb-4 pl-6 pt-6 flex items-center justify-between">
                <button className="bg-indigo-400 w-9 h-9 rounded-full -ml-1" onClick={toggleMenu}>
                    <span className="block text-xl font-bold">✕</span>
                </button>
                <div className="relative mr-5 flex justify-center items-center">
                    <div className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-500 ease-in-out'>
                        <span>&#123;</span>
                        <span className='ml-[1px]'>NGANDA.</span>
                    </div>_
                </div>
            </div>
    
            {/* Navigation Title */}
            <h2 className="opacity-60 text-xs uppercase mt-10 ml-6">Navigation</h2>
            <div className="h-[1px] w-full bg-slate-500 mt-4"></div>
    
            {/* Links */}
            <div className="px-6" id="links">
                {
                    paths.map((path, index) => (
                    <a
                        key={path.name}
                        href={path.link}
                        className={`py-2 text-lg block font-bold transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                        style={{transitionDelay: `${index * 100}ms`}}
                    >
                        {path.name}
                    </a>
                    ))
                }
            </div>
        </div>
      </div>
    );
}

export default DropdownMenu
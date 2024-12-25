"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Badge from './ui/Badge';


export interface ExperienceCardType {
    children?: React.ReactNode;
    country: string;
    city: string;
    job: string;
    compagnySite?: string;
    compagnyName: string;
    compagnyLogo: string;
    description: string;
    techs: string [];
    startYear: string;
    endYear: string;
}

const ExperienceCard = (props: ExperienceCardType) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative my-4">
            {/* Header */}
            <div className={`flex items-center justify-between rounded pl-7 pr-4 min-h-14 poppins-font font-bold select-none cursor-pointer ${isOpen ? "bg-[#853eff] " : "bg-[#612dba] transition-all duration-[0.38s]"}`}  onClick={() => setIsOpen(!isOpen)}>
                <div className='flex flex-wrap flex-col xs:flex-row'>
                    <span>{props.job}<span className='hidden xs:inline'> @ </span> </span>
                    <span>{props.compagnyName}</span>
                </div>
                <div className="flex items-center flex-nowrap">
                    <span className="mr-5 hidden xs:inline-block">
                        {props.startYear} - {props.endYear}
                    </span>
                    <span className={`transition-all duration-[0.38s] relative w-7 h-7 cursor-pointer select-none ${isOpen && "-rotate-180"}`} onClick={() => setIsOpen(!isOpen)}>
                        <Image
                            src="/chevron.svg"
                            fill
                            alt="chevron"
                            className=""
                        />
                    </span>
                </div>
            </div>

            {/* Contenu déroulant */}
            <div className={`rounded mt-1 px-3 xs:px-10 bg-[#1c1c1e] border-[#7037d2] text-sm overflow-hidden transition-all duration-[0.38s] 
                ${isOpen ? "max-h-96 py-4" : "max-h-0 py-0"}`}>
                <div>
                {/* Localisation */}
                <div className="robotoMono-font font-bold flex justify-start xs:justify-between gap-1 items-start xs:items-center flex-col xs:flex-row flex-wrap text-gray-400 text-sm tracking-tighter">
                    <span className="flex items-center gap-1">
                        <span className="relative flex h-[18px] w-[18px]">
                            <Image
                            src="/location.svg"
                            fill
                            alt="location"
                            className=""
                            />
                        </span>
                        <span>
                            {props.city}, {props.country}
                        </span>
                    </span>

                    <span className="flex items-center gap-1 sm:ml-7">
                        <span className="relative flex h-[18px] w-[18px]">
                            <Image
                            src="/website-click.svg"
                            fill
                            alt="website"
                            className=""
                            />
                        </span>
                        <span>{props.compagnySite}</span>
                    </span>

                    <span className="flex items-center gap-1 xs:hidden">
                        <span className="relative flex h-[18px] w-[18px]">
                            <Image
                            src="/calendar.svg"
                            fill
                            alt="website"
                            className=""
                            />
                        </span>
                        <span>{props.startYear} - {props.endYear}</span>
                    </span>
                </div>

                {/* Description */}
                <div className="poppins-font my-3 text-sm mt-7">
                    {props.description}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap poppins-font gap-2 mb-1 mt-10">
                    {props.techs?.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
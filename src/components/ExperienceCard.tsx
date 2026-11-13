"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Badge from './ui/Badge';
import ScrollAnimation from './ScrollAnimation';

export interface ExperienceCardType {
    country: string;
    city: string;
    job: string;
    companySite?: string;
    companyName: string;
    companyLogo: string;
    description: string[];
    contributions: string[];
    focus: string;
    techs: string [];
    startYear: string;
    endYear: string;
    linkedin: string;
}

const ExperienceCard = (props: ExperienceCardType) => {
    const [isOpen, setIsOpen] = useState(false);
    const companyHref = props.companySite || props.linkedin;
    
    return (
        <ScrollAnimation animation='fade-right'>
            <div className="relative my-4">
                <div className={`flex items-center justify-between rounded pl-7 pr-4 min-h-14 poppins-font font-bold text-white select-none cursor-pointer ${isOpen ? "bg-[#853eff] " : "bg-[#612dba] transition-all duration-[0.38s]"}`}  onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex flex-wrap flex-col xs:flex-row'>
                        <span>{props.job}<span className='hidden xs:inline'> @ </span> </span>
                        <span>{props.companyName}</span>
                    </div>
                    <div className="flex items-center flex-nowrap">
                        <span className="mr-5 hidden xs:inline-block">
                            {props.startYear} - {props.endYear}
                        </span>
                        <span className={`transition-all duration-[0.38s] relative w-7 h-7 cursor-pointer select-none ${isOpen && "-rotate-180"}`}>
                            <Image
                                src="/chevron.svg"
                                fill
                                alt="chevron"
                            />
                        </span>
                    </div>
                </div>

                <div className={`rounded mt-1 px-3 xs:px-10 bg-surface text-sm overflow-hidden transition-all duration-[0.38s] 
                    ${isOpen ? "max-h-[900px] py-4" : "max-h-0 py-0"}`}>
                    <div>
                    <div className="robotoMono-font font-bold flex justify-start xs:justify-between gap-1 items-start xs:items-center flex-col xs:flex-row flex-wrap text-muted-2 text-sm tracking-tighter [&_img]:invert dark:[&_img]:invert-0">
                        <span className="flex items-center gap-1">
                            <span className="relative flex h-[18px] w-[18px]">
                                <Image
                                src="/location.svg"
                                fill
                                alt="location"
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
                                />
                            </span>
                            <span>
                                {companyHref && companyHref !== "#" ? (
                                    <a href={companyHref} target="_blank" rel="noopener noreferrer">
                                        {props.companyName}
                                    </a>
                                ) : (
                                    props.companyName
                                )}
                            </span>
                        </span>

                        <span className="flex items-center gap-1 xs:hidden">
                            <span className="relative flex h-[18px] w-[18px]">
                                <Image
                                src="/calendar.svg"
                                fill
                                alt="calendar"
                                />
                            </span>
                            <span>{props.startYear} - {props.endYear}</span>
                        </span>
                    </div>

                    <div className="poppins-font my-3 text-sm mt-7 space-y-3">
                        {props.description.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="mt-6">
                        <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold mb-2">
                            Selected Contributions
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-muted">
                            {props.contributions.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <p className="mt-5 text-sm text-muted-2">Focus: {props.focus}</p>

                    <div className="flex flex-wrap poppins-font gap-2 mb-1 mt-6">
                        {props.techs?.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default ExperienceCard

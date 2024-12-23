import Image from 'next/image';
import React from 'react';
import { ProjectCardType } from '@/app/types/type';
import Link from 'next/link';

const ProjectCard = ({ title, img, demo, repo, cumstomCss }: ProjectCardType) => {
  return (<div className={`min-h-20 text-center w-full holographic-card rounded-lg transition-all duration-300 border border-purple-300 overflow-hidden ${cumstomCss}`}>
    <div className="relative h-56 xs:h-64 sm:h-70 w-full flex justify-center items-center overflow-hidden">
      <Image
        src={img}
        fill
        alt={`icon-${title}`}
        className="object-cover hover:scale-110 transition-all duration-300"
      />
    </div>
    <div className="text-left p-3.5 spaceGrotesk-font">
      <div className="text-lg font-bold text-white">{title}</div>
      <div className="mb-4 text-sm text-slate-300 italic">Project description</div>
      <div className="flex gap-3 justify-start">
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <Link href={repo} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Repo
            </Link>
          </button>
        </div>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <Link href={demo} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Demo
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProjectCard;

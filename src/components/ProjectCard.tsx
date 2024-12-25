import Image from 'next/image';
import React from 'react';
import { ProjectCardType } from '@/app/types/type';
import Button from './ui/Button';
import Link from 'next/link';

const ProjectCard = ({ title, img, demo, repo, cumstomCss }: ProjectCardType) => {
  return (<div className={`min-h-20 text-center w-full holographic-card rounded-lg hover:-translate-y-2 transition-all duration-300 border border-purple-300 overflow-hidden ${cumstomCss}`}>
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
          <Button>
            <Link href={repo}>
              Repo
            </Link>
          </Button>
        </div>
        <div>
          <Button>
            <Link href={demo}>
              demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default ProjectCard;

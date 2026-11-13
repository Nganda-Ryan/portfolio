"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectMediaProps = {
  src?: string;
  alt: string;
  category?: string;
  sizes: string;
  className?: string;
};

const ProjectMedia = ({ src, alt, category, sizes, className = "" }: ProjectMediaProps) => {
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full flex-col justify-end bg-gradient-to-br from-card via-surface to-teal-100 dark:from-[#161B22] dark:via-[#1d242d] dark:to-teal-950 p-6 ${className}`}
      >
        {category && (
          <p className="text-xs uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">{category}</p>
        )}
        <p className="mt-2 poppins-font font-bold text-xl text-foreground">{alt}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className || "object-cover object-center"}
      onError={() => setFailed(true)}
    />
  );
};

export default ProjectMedia;

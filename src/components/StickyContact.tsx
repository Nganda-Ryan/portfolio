'use client'
import { Download } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const StickyContact = () => {
    
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv-main.pdf";   // chemin vers ton CV dans public/
        link.download = "Mon-CV.pdf"; // nom du fichier téléchargé
        link.click();
    }
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 hidden lg:flex left-0 bottom-40 bg-gradient-to-r from-blue-500 to-teal-500 z-[10000] rounded-r-md flex-col items-center justify-center gap-4 p-3 min-h-52">
        {/* Email */}
        <a
            href="mailto:steveloicnganda@gmail.com"
            className="transition transform hover:scale-110 hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span onClick={handleDownload}>
                <Download/>
            </span>
        </a>
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
    </div>
  )
}

export default StickyContact
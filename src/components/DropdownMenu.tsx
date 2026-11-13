"use client"
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems } from "@/data/nav";
import { siteLinks } from "@/data/site";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = siteLinks.resume;
    link.download = "Steve-Loic-NGANDA-ONANA-Resume.pdf";
    link.click();
  };

  const menu = (
    <div
      className={`fixed inset-0 z-[1100] lg:hidden ${isOpen ? "visible" : "invisible pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        aria-label="Close menu"
        onClick={closeMenu}
      />
      <div
        className={`absolute top-0 left-0 flex h-dvh w-[min(100%,22rem)] flex-col bg-menu text-foreground shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-400 text-xl font-bold text-white"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <Link href="/" onClick={closeMenu} className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
              <span>&#123;</span>
              <span className="ml-[1px]">NGANDA.</span>
            </span>
            _
          </Link>
        </div>

        <h2 className="mt-6 ml-6 text-xs uppercase tracking-widest text-muted-2">Navigation</h2>
        <div className="mt-4 h-px w-full bg-border" />

        <nav className="flex flex-1 flex-col px-6 pt-4">
          {navItems.map((path) => (
            <Link
              key={path.name}
              href={path.href}
              onClick={closeMenu}
              className="py-3 text-lg font-bold"
            >
              {path.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-5 px-6 pb-10">
          <button type="button" onClick={handleDownload} aria-label="Download resume">
            <Download />
          </button>
          <a href={siteLinks.mailto} target="_blank" rel="noopener noreferrer">
            <Image src="/email-icon.svg" alt="Email" width={28} height={28} className="h-7 w-7 invert-0" />
          </a>
          <a href={siteLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={28} height={28} className="h-7 w-7 invert-0" />
          </a>
          <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.svg" alt="LinkedIn" width={28} height={28} className="h-7 w-7 invert-0" />
          </a>
          <a href={siteLinks.github} target="_blank" rel="noopener noreferrer">
            <Image src="/github-icon.svg" alt="GitHub" width={28} height={28} className="h-7 w-7 invert-0" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground lg:hidden"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Open main menu"
      >
        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      {mounted ? createPortal(menu, document.body) : null}
    </div>
  );
};

export default DropdownMenu;

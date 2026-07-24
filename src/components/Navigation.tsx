"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/logo.webp";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  // { label: "ART", href: "#art" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-black opacity-80">
      <div className="mx-3 flex items-center gap-x-4 p-3 text-lg font-bold text-white opacity-100">
        {/* logo + name */}
        <a href="#about" className="flex items-center" onClick={closeMenu}>
          <Image src={logo} alt="logo" className="w-8" />
          <div className="hover:text-kay-blue-300 mx-3 flex items-center whitespace-nowrap">
            KAYLIE ZHAO
          </div>
        </a>

        {/* desktop links */}
        <div className="hidden w-full justify-end gap-x-4 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-kay-blue-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-kay-blue-300 rounded-xl border-2 bg-white px-2 text-center text-gray-900 hover:text-white"
          >
            RESUME/CV
          </a>
        </div>

        {/* hamburger button — mobile only */}
        <button
          className="ml-auto flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="flex flex-col items-center gap-4 bg-black px-6 pb-6 text-lg font-bold text-white opacity-100 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-kay-blue-300"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-kay-blue-300 w-fit rounded-xl border-2 bg-white px-2 text-center text-gray-900 hover:text-white"
            onClick={closeMenu}
          >
            RESUME/CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

"use client";
import Image from "next/image";
// import { useState } from "react";
import logo from "../../public/logo.webp";
// import { navigation } from "@/data/navigation";
// import { AlignJustify } from "lucide-react";
// import { Link as ScrollLink } from "react-scroll";
// import { IoCloseOutline } from "react-icons/io5";
// import { motion, AnimatePresence } from "motion/react";
const Navigation = () => {
  //   const [nav, setNav] = useState(false);

  //   const handleNav = () => {
  //     setNav(!nav);
  //   };

  return (
    <nav className="sticky top-0 z-50 bg-black p-3 opacity-80">
      <div className="mx-3 flex items-center gap-x-4 text-lg font-bold text-white opacity-100">
        <a href="#about" className="flex items-center">
          <Image src={logo} alt="logo" className="w-8" />
          <div className="hover:text-kay-blue-300 mx-3 flex w-76 items-center">
            KAYLIE ZHAO
          </div>
        </a>
        <div className="flex w-full justify-end gap-x-4">
          <a href="#about" className="hover:text-kay-blue-300">
            ABOUT
          </a>
          <a href="#experience" className="hover:text-kay-blue-300">
            EXPERIENCE
          </a>
          <a href="#projects" className="hover:text-kay-blue-300">
            PROJECTS
          </a>
          {/* <a href="#art" className="hover:text-kay-blue-300">ART</a> */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-kay-blue-300 rounded-xl border-2 bg-white px-2 text-center text-gray-900 hover:text-white"
          >
            RESUME/CV
          </a>
        </div>
      </div>
      {/* <div className="mx-3" ></div> */}
    </nav>
  );
};

export default Navigation;

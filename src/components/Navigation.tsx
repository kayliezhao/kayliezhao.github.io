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
    <nav className="position:fixed sticky top-0 z-50 flex items-center justify-between bg-black p-3 opacity-80">
      <div className="mx-3 flex items-center text-white opacity-100">
        <Image src={logo} alt="logo" className="w-15 py-2 pr-[20%] md:w-20" />
        <p className="hover:text-kay-blue-300 text-2xl">KAYLIE ZHAO</p>
        {/* <p className="hover:text-kay-blue-300 text-2xl right-5">about</p>
        <p className="hover:text-kay-blue-300 text-2xl right-5">experience</p>
        <p className="hover:text-kay-blue-300 text-2xl right-5">projects</p>
        <p className="hover:text-kay-blue-300 text-2xl right-5">art</p>
        <p className="hover:text-kay-blue-300 text-2xl right-5">resume</p> */}
      </div>
      {/* <div className="mx-3" ></div> */}
    </nav>
  );
};

export default Navigation;

"use client";
import Image from "next/image";
// import { useState } from "react";
import logo from "../../public/logo.png";
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
    <nav className="bg-kay-blue-400 flex items-center justify-between p-3">
      <div className="mx-3 flex items-center text-white">
        <Image src={logo} alt="logo" className="w-15 py-2 pr-[20%] md:w-20" />
        <p className="hover:text-kay-blue-300 text-2xl">KAYLIE ZHAO</p>
      </div>
    </nav>
  );
};

export default Navigation;

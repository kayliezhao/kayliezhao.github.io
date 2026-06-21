import Image from "next/image";
import bunny from "../../public/bunnyfooter.svg";
import linkedin from "../../public/whitelinkedin.svg";
import github from "../../public/whitegithub.svg";
import email from "../../public/whiteemail.svg";
import devpost from "../../public/whitedevpost.svg";
import discord from "../../public/whitediscord.svg";

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col px-10 pt-8 pb-6">
      <div className="flex items-end justify-between">
        <div className="relative ml-[15%] w-[30%]">
          <Image src={bunny} alt="bunny footer decoration" className="w-full" />
          <p className="font-inter absolute top-4 -right-50 text-2xl font-bold text-white">
            Let&apos;s Connect!
          </p>
        </div>
        <div className="flex gap-6">
          <Image src={linkedin} alt="LinkedIn" className="w-12" />
          <Image src={github} alt="GitHub" className="w-12" />
          <Image src={devpost} alt="DevPost" className="w-12" />
          <Image src={discord} alt="Discord" className="w-12" />
          <Image src={email} alt="Email" className="w-12" />
        </div>
      </div>
      <hr className="my-4 border-white" />
      <div className="font-inter text-center text-sm text-white">
        <p>© 2026 Kaylie Zhao | Designed on Figma</p>
        <p>Last Updated: June 2026</p>
      </div>
    </footer>
  );
};

export default Footer;

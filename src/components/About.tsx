import Image from "next/image";
import card from "../../public/KaylieCard.webp";
import green from "../../public/green.svg";
import kay from "../../public/Kaylie.svg";
import textbox from "../../public/textbox.svg";

import linkedin from "@/public/LinkedIn.svg";
import github from "@/public/Github.svg";
import email from "@/public/email.svg";
import DevPost from "@/public/DevPost.svg";

const About = () => {
  return (
    <div className="font-outfit s:py-0 relative flex min-h-screen items-center justify-center py-10">
      <Image
        src={green}
        alt="bg green"
        className="absolute -top-[5%] right-0 z-0 w-[60%] bg-fixed md:block"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-0">
        {/* card */}
        <Image
          src={card}
          alt="Kaylie Designer Card"
          className="w-[55%] sm:w-[40%] md:m-10 md:w-[30%]"
        />

        {/* right-side content */}
        <div className="flex w-full flex-col items-center">
          <Image
            src={kay}
            alt="Kaylie Name Label"
            className="relative top-5 z-10 w-[30%] sm:w-[20%] md:right-50 md:w-[15%]"
          />
          <div className="relative w-[85%] sm:w-[80%]">
            <Image src={textbox} alt="textbox" className="z-0 w-full" />
            <div className="font-pixel absolute inset-0 flex items-center justify-center p-2 text-center text-base text-black sm:p-4 sm:text-sm md:p-6 md:text-xl">
              Computer Science with Business Applications Major who loves
              designing and web development at UCR. For fun, I enjoy playing
              games, making art, and going on walks.
            </div>
          </div>

          {/* staggered social icons */}
          <div className="grid grid-cols-4 gap-x-8 gap-y-2 p-[5%]">
            <a href="https://www.linkedin.com/in/kaylie-zhao/" target="_blank" rel="noopener noreferrer" className="col-start-1 row-start-1">
              <Image src={linkedin} alt="linkedin icon" className="w-8 transition-all duration-300 hover:scale-110 md:w-auto" />
            </a>
            <a href="https://devpost.com/zhaokaylie?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" className="col-start-3 row-start-1">
              <Image src={DevPost} alt="DevPost icon" className="w-8 transition-all duration-300 hover:scale-110 md:w-auto" />
            </a>
            <a href="https://github.com/kayliezhao" target="_blank" rel="noopener noreferrer" className="col-start-2 row-start-2">
              <Image src={github} alt="github icon" className="w-8 transition-all duration-300 hover:scale-110 md:w-auto" />
            </a>
            <a href="mailto:zhaokaylie@gmail.com" className="col-start-4 row-start-2">
              <Image src={email} alt="email icon" className="w-8 transition-all duration-300 hover:scale-110 md:w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

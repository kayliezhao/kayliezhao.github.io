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
    <div>
      <div className="col-span-2 flex items-center">
        <Image src={card} alt="Kaylie Designer Card" className="m-10 w-[30%]" />
        <Image
          src={green}
          alt="bg green"
          className="absolute top-[0%] right-[0%] z-10 w-[80%] bg-fixed"
        />

        {/* <div className="relative flex flex-col items-center">
          <div className="relative w-[50%]">
            <Image
              src={textbox}
              alt="textbox"
              className="absolute z-0 w-full"
            />
            <div className="font-pixel absolute inset-0 flex items-center justify-center p-4 text-center text-base font-medium text-black">
              Computer Science with Business Applications Major who loves
              designing and web development at UCR. For fun, I enjoy playing
              games, making art, and going on walks.
            </div>
          </div>
          <Image
            src={kay}
            alt="Kaylie Name Label"
            className="relative z-10 w-[25%]"
          />
        </div> */}

        <div className="col-span-2 flex items-center gap-4">
          <div className="relative flex w-full flex-col items-center">
            <Image
              src={kay}
              alt="Kaylie Name Label"
              className="relative top-5 right-50 z-10 w-[15%]"
            />
            <div className="relative w-4/5">
              <Image src={textbox} alt="textbox" className="z-0 w-full" />
              <div className="font-pixel m:text-base absolute inset-0 flex items-center justify-center p-6 text-center font-medium text-black">
                Computer Science with Business Applications Major who loves
                designing and web development at UCR. For fun, I enjoy playing
                games, making art, and going on walks.
              </div>
            </div>

            <Image src={linkedin} alt="linkedin icon" className="" />
            <Image src={DevPost} alt="DevPost icon" className="" />

            <Image src={github} alt="github icon" className="" />
            <Image src={email} alt="email icon" className="" />
          </div>
        </div>
      </div>

      {/* <div className="relative z-10">
          <div className="absolute z-5 pl-10 top-[-20%] left-[1%]">
        <div className=" to-kay-blue-200 rounded-2xl bg-gradient-to-b from-white/2 p-[2px]">
          <div className="font-jost rounded-2xl bg-gray-300/50 px-6 py-1 text-xl font-bold text-white backdrop-blur-xs">
            Kaylie
          </div>
        </div></div>
        <div className=" ml-[10%] p-[4px] w-[70%] to-kay-blue-200 font-pixel font-medium rounded-2xl bg-gradient-to-b from-white/50 ">
          <div className=" p-6 py-[5%]  rounded-2xl font-medium text-base bg-gradient-to-r to-kay-blue-300/10 from-white/10 px-6 py-1 text-2xl font-bold text-black backdrop-blur-xs">
            Computer Science with Business Applications Major who loves designing
            and web development at UCR. For fun, I enjoy playing games, making
            art, and going on walks.
          </div>
        </div></div>  */}
      {/* <div className="p-[2px] rounded-2xl bg-gradient-to-b from-white to-kay-blue-200">
          <div className=" bg-gradient-to-r backdrop-blur-xs  from-white to-kay-blue-200 opacity-70 w-1/3 p-[2%] rounded-2xl border-white">I'm a Computer Science with Business Applications Major who loves designing and web development at UCR. For fun, I enjoy playing games, making art, and going on walks.</div>
      </div> */}
    </div>
  );
};

export default About;

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
    <div className="font-outfit relative flex h-screen items-center justify-center">
      <div className="col-span-2 flex">
        <Image src={card} alt="Kaylie Designer Card" className="m-10 w-[30%]" />
        <Image
          src={green}
          alt="bg green"
          className="absolute -top-[20%] right-[0%] z-1 w-[50%] bg-fixed"
        />

        <div className="relative z-10 col-span-2 flex items-center gap-4">
          <div className="relative flex w-full flex-col items-center">
            <Image
              src={kay}
              alt="Kaylie Name Label"
              className="relative top-5 right-50 z-10 w-[15%]"
            />
            <div className="relative w-4/5">
              <Image src={textbox} alt="textbox" className="z-0 w-full" />
              <div className="font-pixel m:text-medium font-large absolute inset-0 flex items-center justify-center p-6 text-center text-black">
                Computer Science with Business Applications Major who loves
                designing and web development at UCR. For fun, I enjoy playing
                games, making art, and going on walks.
              </div>
            </div>
            <div className="center grid grid-cols-4 gap-x-3 gap-y-2 p-[5%]">
              <Image
                src={linkedin}
                alt="linkedin icon"
                className="col-start-1 row-start-1"
              />
              <Image
                src={DevPost}
                alt="DevPost icon"
                className="col-start-3 row-start-1"
              />
              <Image
                src={github}
                alt="github icon"
                className="col-start-2 row-start-2"
              />
              <Image
                src={email}
                alt="email icon"
                className="col-start-4 row-start-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

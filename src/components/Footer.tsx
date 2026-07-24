import Image from "next/image";
import bunny from "../../public/bunnyfooter.svg";
import linkedin from "../../public/whitelinkedin.svg";
import github from "../../public/whitegithub.svg";
import email from "../../public/whiteemail.svg";
import devpost from "../../public/whitedevpost.svg";

const icons = [
  {
    src: linkedin,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/kaylie-zhao/",
  },
  { src: github, alt: "GitHub", href: "https://github.com/kayliezhao" },
  {
    src: devpost,
    alt: "DevPost",
    href: "https://devpost.com/zhaokaylie?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
  },
  { src: email, alt: "Email", href: "mailto:zhaokaylie@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col px-10 pt-8 pb-6">
      {/* mobile: bunny + "Let's Connect!" centered above icons */}
      <div className="flex justify-center md:hidden">
        <div className="relative w-[50%]">
          <Image src={bunny} alt="bunny footer decoration" className="w-full" />
          <p className="font-inter absolute -top-4 -right-24 text-lg font-bold whitespace-nowrap text-white">
            Let&apos;s Connect!
          </p>
        </div>
      </div>

      {/* icon row — centered on mobile, right-aligned on desktop */}
      <div className="mt-4 flex items-end justify-center md:mt-0 md:justify-between">
        {/* desktop only: bunny + "Let's Connect!" on the left */}
        <div className="relative ml-[15%] hidden w-[30%] md:block">
          <Image src={bunny} alt="bunny footer decoration" className="w-full" />
          <p className="font-inter absolute top-4 -right-50 text-2xl font-bold text-white">
            Let&apos;s Connect!
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {icons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target={icon.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                className="w-12 transition-all duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      <hr className="my-4 border-white" />
      <div className="font-inter text-center text-sm text-white">
        <p>© 2026 Kaylie Zhao | Designed on Figma</p>
        <p>Last Updated: July 2026</p>
      </div>
    </footer>
  );
};

export default Footer;

import Image, { StaticImageData } from "next/image";

import pDocsIcon from "../../public/pDocs.svg";
import pDevpostIcon from "../../public/pDevPost.svg";
import pGithubIcon from "../../public/pGitHub.svg";
import pFigmaIcon from "../../public/pFigma.svg";
import pSiteIcon from "../../public/pSite.svg";
// import pSlidesIcon from "../../public/pSlides.svg";

type ProjectIcon = {
  src: StaticImageData | string;
  alt: string;
  href: string;
};

type Project = {
  image: StaticImageData | string;
  name: string;
  dateRange: string;
  description: string;
  projectLink: string;
  icons: ProjectIcon[];
};

const projects: Project[] = [
  {
    image: "/placeholder.png",
    name: "PROJECT NAME",
    dateRange: "2023",
    description:
      "Short description of the project, what it does, the problem it solves, and your role in it.",
    projectLink: "https://github.com/kayliezhao",
    icons: [
      { src: pSiteIcon, alt: "Website", href: "https://github.com/kayliezhao" },
    ],
  },
  {
    image: "/placeholder.png",
    name: "PROJECT NAME",
    dateRange: "2023",
    description:
      "Short description of the project, what it does, the problem it solves, and your role in it.",
    projectLink: "https://github.com/kayliezhao",
    icons: [
      { src: pSiteIcon, alt: "Website", href: "https://github.com/kayliezhao" },
    ],
  },
  {
    image: "/placeholder.png",
    name: "PROJECT NAME",
    dateRange: "2023",
    description:
      "Short description of the project, what it does, the problem it solves, and your role in it.",
    projectLink: "https://github.com/kayliezhao",
    icons: [
      { src: pSiteIcon, alt: "Website", href: "https://github.com/kayliezhao" },
    ],
  },
  {
    image: "/pAISC.webp",
    name: "AI Student Collective Website",
    dateRange: "Apr-Jun 2025",
    description:
      "Helped design on Figma a wireframe for the AI Student Collective website. Communicated alongside the team leads to ensure satisfaction and UI/UX principles.",
    projectLink: "https://aisc.ucrhighlanders.org/about",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://aisc.ucrhighlanders.org/about",
      },
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/design/I4IrVOPjV5PGpFLctwGJjd/Spring--25--AISC?node-id=0-1&p=f&t=9t1bAOaeJFVNeM1G-0",
      },
    ],
  },
  {
    image: "/pTKD.webp",
    name: "Taekwondo Club Website",
    dateRange: "Jan-Apr 2025",
    description:
      "Designed on Figma, communicating alongside the club ambassadors and team leads to ensure satisfaction and UI/UX principles.",
    projectLink: "https://tkd.ucrhighlanders.org/",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://tkd.ucrhighlanders.org/",
      },
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/design/xYf4Uwnb4asZQLMCjA8JZi/UCR-TKD?node-id=0-1&t=tMhPjv2xaqkk94e3-1",
      },
    ],
  },
  {
    image: "/pHG.webp",
    name: "Highlander Gloves Website",
    dateRange: "Jun-Dec 2024",
    description:
      "Designed on Figma, communicated alongside the team leads to ensure satisfaction and UI/UX principles. Then worked alongside a team of developers to develop the final website for Highlander Gloves. Created in React using Next.js, JavaSript, Motion, and Tailwind CSS.",
    projectLink: "https://highlandergloves.ucrhighlanders.org/",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://highlandergloves.ucrhighlanders.org/",
      },
      {
        src: pGithubIcon,
        alt: "GitHub",
        href: "https://github.com/acm-ucr/highlander-gloves-website",
      },
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/proto/jAjrtZ1lsL4bNDkyH2IpDi/UCR-Highlander-Gloves?node-id=10-11&p=f&t=oodClim93Mp6JFyn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A7",
      },
    ],
  },
  {
    image: "/WITL.webp",
    name: "Women in the Law Website",
    dateRange: "Jun-Sep 2024",
    description:
      "Worked alongside a team of developers to create a website for Women in the Law. Created in React using Next.js, JavaSript, Motion, and Tailwind CSS.",
    projectLink: "https://witl.ucrhighlanders.org/",
    icons: [
      {
        src: pGithubIcon,
        alt: "GitHub",
        href: "https://github.com/acm-ucr/witl-website",
      },
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://witl.ucrhighlanders.org/",
      },
    ],
  },
  {
    image: "/pGreenR.webp",
    name: "Green'R",
    dateRange: "May 2024",
    description:
      "Prototype platform promoting sustainability awareness through forums and eco-friendly product trading, fostering a greener future for the UCR community",
    projectLink:
      "https://www.figma.com/proto/6bXQysRzccOKzAKnmGiyrT/Green-R?node-id=304-41&p=f&t=hrcFv4xeoVG6jKaP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=336%3A156",
    icons: [
      {
        src: pDevpostIcon,
        alt: "DevPost",
        href: "https://devpost.com/software/green-r",
      },
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/proto/6bXQysRzccOKzAKnmGiyrT/Green-R?node-id=304-41&p=f&t=hrcFv4xeoVG6jKaP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=336%3A156",
      },
    ],
  },
  {
    image: "/PhaseYourFears.webp",
    name: "Phase Your Fears",
    dateRange: "2023",
    description:
      "App that took in a data set of elements and their properties to allow users to face their fears by learning what each element is. Created in Javascript using Code.org's Applab.",
    projectLink:
      "https://studio.code.org/projects/applab/Z4NfDoc_C7XlkF049KPFGCVECuvyfBhic7A1dY7XQmk",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://studio.code.org/projects/applab/Z4NfDoc_C7XlkF049KPFGCVECuvyfBhic7A1dY7XQmk",
      },
    ],
  },
  {
    image: "/AVCalc.webp",
    name: "Area/Volume Calculator",
    dateRange: "2022",
    description:
      "Area/Volume Calculator created in Code.org's Applab using JavaScript",
    projectLink:
      "https://studio.code.org/projects/applab/2ld3oZNQ-NMqT8mHVc77F4Nh3tbeowg8nfWQVB-DYik",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://studio.code.org/projects/applab/2ld3oZNQ-NMqT8mHVc77F4Nh3tbeowg8nfWQVB-DYik",
      },
    ],
  },
  {
    image: "/placeholder.png",
    name: "TETRIS-LIKE GAME",
    dateRange: "2021",
    description: "Tetris-like game created in JavaScript, HTML, and CSS",
    projectLink: "",
    icons: [],
  },
  {
    image: "/OTD.webp", // replace with your project image
    name: "Wildfires - Opportunity Through Data (Berkeley)",
    dateRange: "2020",
    description:
      "Research project on 2017 wildfires trends using Python, Pandas, and Matplotlib in Jupiter Notebook",
    projectLink: "/OTD'20_2017WildfiresResearch.pdf",
    icons: [
      { src: pDocsIcon, alt: "PDF", href: "/OTD'20_2017WildfiresResearch.pdf" },
      // { src: figmaIcon, alt: "Figma", href: "https://figma.com/..." },
    ],
  },
];

const Projects = () => {
  return (
    <section className="font-outfit px-16 py-[2%] text-white">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-semibold whitespace-nowrap">Projects</h2>
      </div>
      <div className="mb-[1%] h-[2px] w-full bg-white" />
      <div className="mb-[2%]" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border-1 border-white/30 bg-white/10 p-4 backdrop-blur-sm"
          >
            {/* clickable project image */}
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-all duration-300 hover:scale-105"
                />
              </div>
            </a>

            {/* project name + date */}
            <p className="mt-3 text-center text-lg font-bold tracking-wide">
              {project.name}
            </p>
            <p className="text-center text-sm font-light text-white/70">
              {project.dateRange}
            </p>

            {/* description */}
            <p className="mt-3 text-left text-sm leading-relaxed font-light text-white">
              {project.description}
            </p>

            {/* icon links */}
            <div className="mt-auto flex gap-3 pt-4">
              {project.icons.map((icon, j) => (
                <a
                  key={j}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain transition-all duration-300 hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

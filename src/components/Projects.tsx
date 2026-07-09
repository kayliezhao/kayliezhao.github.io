import Image, { StaticImageData } from "next/image";

import pDocsIcon from "../../public/pDocs.svg";
// import pDevpostIcon from "../../public/pDevPost.svg";
// import pGithubIcon from "../../public/pGithub.svg";
// import pFigmaIcon from "../../public/pFigma.svg";
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
                    className="w-6 transition-all duration-300 hover:scale-110"
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

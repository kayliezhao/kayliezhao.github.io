import Image, { StaticImageData } from "next/image";

import pDocsIcon from "../../public/pDocs.svg";
import pDevpostIcon from "../../public/pDevPost.svg";
import pGithubIcon from "../../public/pGitHub.svg";
import pFigmaIcon from "../../public/pFigma.svg";
import pSiteIcon from "../../public/pSite.svg";
import pSlidesIcon from "../../public/pSlides.svg";
import pLinkedInIcon from "../../public/pLinkedin.svg";

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
    image: "/pFlush.webp",
    name: "Flush",
    dateRange: "2026",
    description:
      "Flush is a local public restroom finder that allows users to find nearby restrooms. It uses Google Gemini API, Python, Google Slides API, and Google Drive API. It contains a three-layer architecture with the interface, engine, and storage layers.",
    projectLink: "https://www.youtube.com/watch?v=-DinhDqDZD8",
    icons: [
      {
        src: pGithubIcon,
        alt: "GitHub",
        href: "https://github.com/UCR-CS180/final-project-kaylie-zhao",
      },
      {
        src: pSiteIcon,
        alt: "YouTube",
        href: "https://www.youtube.com/watch?v=-DinhDqDZD8",
      },
    ],
  },
  {
    image: "/pNear.webp",
    name: "Feature Selection with Nearest Neighbor Classifier",
    dateRange: "Feb-Mar 2026",
    description:
      "The nearest neighbor classifier is a classifier that can be used to identify what class an object may belong to, essentially solving the classification problem. Created using Python, NumPy, and Google Sheets for graphing.",
    projectLink: "https://github.com/kayliezhao/cs170_lab_2",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://github.com/kayliezhao/cs170_lab_2",
      },
      { src: pDocsIcon, alt: "Report", href: "/pNearest.pdf" },
    ],
  },
  {
    image: "/pNorth.webp",
    name: "NorthStar - Disaster Response Coordination Platform",
    dateRange: "Feb 2026",
    description:
      "🏆 First-place winner of the 2026 AI Tech Venture Challenge for developing an innovative disaster relief solution. Designed and prototyped an AI-powered disaster response coordination platform. Built a streamlined system to mitigate logistical chaos and optimize communication during the critical first 48 hours of an emergency.",
    projectLink: "https://northstarai.figma.site/",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://northstarai.figma.site/",
      },
      {
        src: pLinkedInIcon,
        alt: "LinkedIn",
        href: "https://www.linkedin.com/posts/kaylie-zhao_im-proud-to-share-that-arielle-haryanto-ugcPost-7433407867497439232-WBtv/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEd0_0EB-RMJpzXDZOUf_FGTBthYPZ4iLSs",
      },
    ],
  },
  {
    image: "/pPuzzle.webp",
    name: "8 Puzzle Search",
    dateRange: "Feb 2026",
    description:
      "CS170 project on the 8 Puzzle using uniform cost search, A* with mismatched with the Misplaced Tile heuristic and A* with the Manhattan Distance heuristic. It shows the traces of the 8-puzzle and how to solve it with three different algorithms.",
    projectLink: "https://github.com/kayliezhao/cs170_lab_1",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://github.com/kayliezhao/cs170_lab_1",
      },
      { src: pDocsIcon, alt: "Report", href: "/pEight.pdf" },
    ],
  },
  {
    image: "/PCog.webp",
    name: "Cognitive Companion",
    dateRange: "Apr - Jun 2025",
    description:
      "Pitched and prototyped (Figma) a mobile app concept supporting neurodivergent individuals, authored functional specs and user personas. Reached pitch-ready stage, but not funded/built.",
    projectLink:
      "https://www.figma.com/proto/iDLrwDZtyF1EXVHaHEru2e/cognitive-companion?node-id=4-2&p=f&t=b7TOIXHlYyHzfcJO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    icons: [
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/proto/iDLrwDZtyF1EXVHaHEru2e/cognitive-companion?node-id=4-2&p=f&t=b7TOIXHlYyHzfcJO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      },
      {
        src: pDocsIcon,
        alt: "PDF",
        href: "https://docs.google.com/document/d/1tLuY6zQdLU1sG5K3ZVZh1VIr3un4DgGW/edit?usp=sharing&ouid=109767031481028025892&rtpof=true&sd=true",
      },
      {
        src: pSlidesIcon,
        alt: "Slides",
        href: "https://docs.google.com/presentation/d/1QcsQvXMSRVct9RCNn32NG2KRn9rNURnZk-1iMMWAg08/edit?usp=sharing",
      },
    ],
  },
  {
    image: "/pTASKLY.svg",
    name: "Taskly Calendar",
    dateRange: "Sep - Dec 2024",
    description:
      "A cross-platform C++ command-line application designed for efficient task management and scheduling. Developed throuhgout a series of scrum meetings following Kanban boards, and utilizing Agile methodologies.",
    projectLink:
      "https://github.com/cs100/final-project-kzhao051-ngrig007-yliu954-jpinc005",
    icons: [
      {
        src: pGithubIcon,
        alt: "GitHub",
        href: "https://github.com/cs100/final-project-kzhao051-ngrig007-yliu954-jpinc005",
      },
    ],
  },
  {
    image: "/pRCat.webp",
    name: "R’Cat’s Cosmic Quest",
    dateRange: "Nov 2024",
    description:
      "R’s Cosmic Quest is an educational game created in hopes of spreading awareness about space waste. Created with Figma, JavaScript, React, Motion, and Tailwind CSS.",
    projectLink: "https://r-cat-s-cosmic-quest.vercel.app/",
    icons: [
      {
        src: pSiteIcon,
        alt: "Website",
        href: "https://r-cat-s-cosmic-quest.vercel.app/",
      },
      {
        src: pFigmaIcon,
        alt: "Figma",
        href: "https://www.figma.com/design/HMaZJM9NdWAOYHWg50Jve8/R-Cat-s-Cosmic-Quest?node-id=0-1&p=f&t=yKPxK5Xr1lhdT2Nh-0",
      },
      {
        src: pGithubIcon,
        alt: "GitHub",
        href: "https://github.com/shirleyduong/r-cat-s-cosmic-quest",
      },
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
    <section id="projects" className="font-outfit px-16 py-[2%] text-white">
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

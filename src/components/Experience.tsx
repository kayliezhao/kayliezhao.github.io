import React from "react";

const experiences: {
  company: string;
  roles: { title: string; dateRange: string; bullets: React.ReactNode[] }[];
}[] = [
  {
    company: "Highlander News",
    roles: [
      {
        title: "Technology Director",
        dateRange: "Jul 2026 - Jun 2027",
        bullets: ["Updating..."],
      },
    ],
  },
  {
    company: "Association for Computing Machinery (ACM) @ UCR",
    roles: [
      {
        title: "UI/UX Create Director",
        dateRange: "Jan 2025 – Present",
        bullets: [
          "Conduct 14+ UI/UX and Figma workshops to train current and aspiring designers to enhance their skills",
          "Lead 27+ design teams, organize weekly meetings to track progress and ensure effective time management",
          "Address feedback and facilitate communication among designers, ambassadors, and directors",
        ],
      },
      {
        title: "UI/UX Web Designer",
        dateRange: "Jun 2024 – Jun 2025",
        bullets: [
          "Design wireframes for 4+ websites",
          <>
            Projects: <strong>UCR Highlander Gloves</strong>,{" "}
            <strong>UCR Taekwondo</strong>,{" "}
            <strong>UCR Nikkei Student Association</strong>,{" "}
            <strong>AISC</strong>
          </>,
          <>
            Created projects using <strong>Figma</strong>
          </>,
        ],
      },
      {
        title: "Web Developer",
        dateRange: "Jun 2024 – Dec 2024",
        bullets: [
          "Collaborated in a group to implement a website within 10 weeks",
          "Projects: Women in the Law, UCR Highlander Gloves",
          <>
            Created projects in{" "}
            <strong>
              JavaScript/TypeScript, Node.js, React.js, Tailwind CSS, HTML,
              Motion UI
            </strong>
          </>,
        ],
      },
    ],
  },
  {
    company: "Global Career Accelerator",
    roles: [
      {
        title: "Intern",
        dateRange: "Jan – Mar 2026",
        bullets: [
          <>
            <em>charity: water</em> (Product Design): Created high-fidelity
            landing page wireframes and a water filtering game prototype in{" "}
            <strong>Figma</strong>
          </>,
          <>
            <em>Intel</em> (Data Analytics): Performed comprehensive data
            analysis on large-scale datasets using <strong>Excel</strong>
          </>,
          <>
            <em>CeraVe</em> (Prototype): Prototyped an app in{" "}
            <strong>Figma</strong>, integrated user research and SEO using{" "}
            <strong>SemRush</strong> to streamline product discovery
          </>,
        ],
      },
    ],
  },
  {
    company: "Design at UCR (DAU) | UC Riverside",
    roles: [
      {
        title: "Design Co. VP Project Manager",
        dateRange: "Jun 2025 – Jun 2026",
        bullets: [
          <>
            Lead 7+ UI/UX and <strong>Figma</strong> workshops, training 6+
            designers in wireframing, component systems, and best practices
          </>,
          "Direct the creation of low- and high-fidelity wireframes for 4+ partner organizations, tailor them into user-centered designs",
          "Collaborate with 3+ partner organizations and ACM leadership to define project scope, user flows, and design constraints",
          <>
            Mentor designers through iterative design reviews, usability
            feedback, and <strong>Figma</strong> collaboration workflows
          </>,
        ],
      },
    ],
  },
  {
    company: "DesignVerse | UC Riverside",
    roles: [
      {
        title: "Marketing Lead",
        dateRange: "Jun 2025 – May 2026",
        bullets: [
          "Lead a marketing committee of designers, training members in design ethics, branding systems, visual hierarchy, and marketing best practices",
          <>
            Design digital marketing assets and event themes using{" "}
            <strong>Figma</strong>, driving engagement and participation for
            DesignVerse events
          </>,
          "Maintain consistent brand identity across digital platforms, producing professional marketing and branding visuals",
          "Assign design tasks and conduct iterative design critiques, providing feedback to improve asset quality and brand alignment",
        ],
      },
    ],
  },
  {
    company: "RoseHack | UCR Hack-a-thon",
    roles: [
      {
        title: "UI/UX / Marketing Lead",
        dateRange: "Jun 2025 – Feb 2026",
        bullets: [
          <>
            Design brand-aligned visual assets to promote RoseHack events and
            initiatives using <strong>Figma</strong> and{" "}
            <strong>Instagram Reels</strong>
          </>,
          "Research and apply audience engagement strategies to increase event visibility and participant outreach by 30%",
          "Collaborate with the marketing committee to ideate and execute creative campaigns supporting RoseHack's mission and community impact",
          "Maintain consistent branding and visual standards across marketing materials and digital platforms",
        ],
      },
    ],
  },
  {
    company: "Pinnacle Real Estate Group | Arcadia",
    roles: [
      {
        title: "Receptionist",
        dateRange: "Jul 2023 – Aug 2023",
        bullets: [
          "Supported agents and clients by managing front-desk operations and inquiries",
          "Assisted with printing, organizing, and retrieving important documents",
          "Handled phone calls and provided accurate property listing information",
          "Opened and closed the office, ensured building security and mail handling",
        ],
      },
    ],
  },
  {
    company: "Opportunity Through Data | UC Berkeley",
    roles: [
      {
        title: "Student Researcher",
        dateRange: "Sept 2020 – Dec 2020",
        bullets: [
          "Conducted data-driven analysis of 2017 U.S. wildfire patterns, with a focused study on California wildfires",
          <>
            <strong>Cleaned, manipulated, and analyzed</strong> real-world
            datasets using <strong>Python</strong> (Pandas, NumPy)
          </>,
          <>
            Created data visualizations with <strong>Matplotlib</strong> to
            identify and communicate trends
          </>,
          <>
            Applied <strong>Python</strong>-based data analysis workflows using{" "}
            <strong>Anaconda</strong> within an equity-focused education
            initiative
          </>,
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="font-outfit px-16 py-[2%] text-white">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-semibold whitespace-nowrap">Experience</h2>
      </div>
      <div className="mb-[1%] h-[2px] w-full bg-white" />

      <div className="flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <p className="text-2xl font-bold">{exp.company}</p>

            <div
              className={`mt-2 ml-6 pl-6 ${exp.roles.length > 1 ? "border-l-2 border-white" : ""}`}
            >
              {exp.roles.map((role, j) => (
                <div key={j} className={j !== 0 ? "mt-6" : ""}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-bold">{role.title}</p>
                    <p className="text-sm font-semibold text-white">
                      {role.dateRange}
                    </p>
                  </div>
                  <ul className="mt-2 ml-4 list-disc space-y-1">
                    {role.bullets.map((bullet, k) => (
                      <li key={k} className="text-sm font-light text-white">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

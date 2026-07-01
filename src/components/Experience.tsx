const experiences = [
  {
    company: "Company Name",
    roles: [
      {
        title: "Senior Job Title",
        dateRange: "Jun 2024 – Present",
        bullets: [
          "Description of responsibility or achievement.",
          "Another key contribution or skill demonstrated.",
        ],
      },
      {
        title: "Junior Job Title",
        dateRange: "Jan 2024 – Jun 2024",
        bullets: [
          "Earlier role bullet point.",
          "Another earlier responsibility.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section className="font-outfit px-16 py-[2%] text-white">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-semibold whitespace-nowrap">Experience</h2>
      </div>
      <div className="mb-[2%] h-[2px] w-full bg-white" />

      <div className="flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <p className="text-2xl font-bold">{exp.company}</p>

            <div className="mt-2 ml-6 border-l-2 border-white pl-6">
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
                      <li key={k} className="text-sm text-white">
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

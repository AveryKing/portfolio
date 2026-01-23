import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const experiences = [

  {
    title: "Software Developer",
    company: "RedMane Technology",
    location: "Remote",
    period: "Jul 2023 - Jul 2025",
    achievements: [
      "Engineered secure, serverless Azure Function APIs for Arkansas Child Welfare Information System ensuring state-level compliance",
      "Bridged technical teams and Business Analysts, translating complex regulatory requirements into .NET specifications",
      "Architected automated testing suites using Playwright and xUnit, reducing regression cycles",
      "Drove strategic refactoring of legacy subsystems, enhancing maintainability and performance",
    ],
  },
  {
    title: "Systems Developer",
    company: "VanDyk Mortgage",
    location: "Remote",
    period: "Apr 2022 - Jul 2023",
    achievements: [
      "Engineered custom C#/.NET solutions for Encompass Loan Origination System, automating mortgage workflows",
      "Solely architected and delivered a full-stack internal HR platform using Next.js and TypeScript",
      "Designed end-to-end data warehousing strategy to automate loan data processing",
      "Served as primary technical escalation point, resolving critical defects in web applications",
    ],
  },
];

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-violet-400 tracking-wider uppercase">
              Experience
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/50 to-transparent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
            Where I have{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              made an impact
            </span>
          </h2>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 border-l border-white/10 hover:border-violet-500/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-violet-500" />

                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-violet-400 font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-400 leading-relaxed flex gap-3"
                    >
                      <span className="text-violet-400 mt-1.5">›</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C#", "TypeScript", "JavaScript", "SQL", "PHP"],
  },
  {
    title: "Frameworks",
    skills: [".NET", "ASP.NET Core", "React", "Next.js", "NestJS", "Node.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Data",
    skills: ["SQL Server", "PostgreSQL", "Dapper", "Entity Framework", "TypeORM", "Prisma"],
  },
  {
    title: "Testing",
    skills: ["Playwright", "Selenium", "xUnit", "Jest"],
  },
];

const expertise = [
  "Event-Driven Architecture",
  "Serverless Computing",
  "Microservices",
  "System Design",
  "API Development",
  "Data Integration",
  "Test Automation",
  "Agile Methodologies",
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
              Skills
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/50 to-transparent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
            Technologies I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              work with
            </span>
          </h2>

          {/* Skills Grid */}
          <div className="space-y-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg text-cyan-300 text-sm hover:border-cyan-500/40 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

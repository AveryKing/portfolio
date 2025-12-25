import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Software Engineering",
    school: "Thinkful",
    type: "Certificate",
    icon: Award,
  },
  {
    degree: "Computer Science",
    school: "Western Michigan University",
    type: "Studies",
    icon: GraduationCap,
  },
];

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
              Education
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-16">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              learning journey
            </span>
          </h2>

          {/* Education Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.07] hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {edu.type}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-400 mt-1">{edu.school}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Continuous Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-white mb-3">
              Continuous Learning
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Committed to staying current with emerging technologies through
              continuous professional development, hands-on project work, and
              active engagement with the developer community. Always exploring
              new patterns, frameworks, and architectures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

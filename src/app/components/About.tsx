import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
              About
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent" />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Building secure systems for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                high-stakes environments
              </span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I thrive at the intersection of complex logic and high-stakes
                delivery. Over the last{" "}
                <span className="text-white font-medium">3+ years</span>, I have
                built a strong foundation in designing systems where security
                and reliability are foundational.
              </p>

              <p>
                My experience includes building{" "}
                <span className="text-white font-medium">
                  cloud-native solutions
                </span>{" "}
                for government agencies and streamlining nationwide mortgage
                operations. I specialize in architecting clean, resilient
                systems using{" "}
                <span className="text-blue-400">.NET, Node.js, and Azure</span>.
              </p>

              <p>
                I prioritize comprehensive automated testing and system
                modernization to ensure long-term stability and performance for
                high-volume platforms.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Sparkles, Code2, Zap, Award } from "lucide-react";

const highlights = [
  {
    icon: Award,
    number: "3+",
    label: "Years Experience",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Code2,
    number: "2",
    label: "Key Industries",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    number: "100%",
    label: "Cloud Native",
    color: "from-pink-500 to-rose-500",
  },
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  About Me
                </span>
                <div className="absolute inset-0 blur-xl bg-emerald-500/20 rounded-full" />
              </div>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-white bg-clip-text text-transparent">
                Building secure, reliable systems for high-stakes environments.
                Transforming complex requirements into scalable cloud-native
                solutions.
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-white bg-clip-text text-transparent blur-2xl opacity-30">
                Building secure, reliable systems for high-stakes environments.
                Transforming complex requirements into scalable cloud-native
                solutions.
              </div>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-cyan-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 hover:border-emerald-500/40 transition-all">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-200">
                  I thrive at the intersection of complex logic and high-stakes
                  delivery. Over the last{" "}
                  <span className="text-white font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    3+ years
                  </span>
                  , I’ve built a strong foundation in designing systems where
                  security and reliability are foundational.
                </p>

                <p className="text-gray-200">
                  My experience includes building{" "}
                  <span className="text-white font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    cloud-native solutions
                  </span>{" "}
                  for government agencies and streamlining nationwide mortgage
                  operations. I specialize in architecting clean, resilient
                  systems using{" "}
                  <span className="text-emerald-400 font-bold">
                    .NET, Node.js, and Azure
                  </span>
                  . I prioritize comprehensive automated testing and system
                  modernization to ensure long-term stability and performance
                  for high-volume platforms.
                </p>

                <p className="text-gray-200">
                  I enjoy bridging the gap between technical constraints and
                  business goals, ensuring that every solution provides
                  measurable value and scales effectively with the organization’s
                  needs.
                </p>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-emerald-400/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

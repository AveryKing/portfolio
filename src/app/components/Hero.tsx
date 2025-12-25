import { Mail, MapPin, Github, ArrowDown, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Avery King</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
            Software Engineer
          </p>
          <p className="mt-2 text-lg text-gray-500">.NET • Node.js • Azure</p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building secure, mission-critical applications for high-stakes
          environments. Transforming complex requirements into scalable
          cloud-native solutions.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 text-gray-400 mb-12"
        >
          <a
            href="mailto:avery@averyk.dev"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            avery@averyk.dev
          </a>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm">
            <MapPin className="w-4 h-4" />
            Peoria, IL
          </div>
          <a
            href="https://github.com/averyking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/averyking1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-white text-[#050508] font-medium rounded-full hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            Let's Work Together
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all"
          >
            View My Work
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050508]"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-gray-500" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

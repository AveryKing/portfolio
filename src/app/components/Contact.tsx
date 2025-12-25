import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Globe, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "avery@averyk.dev",
    href: "mailto:avery@averyk.dev",
  },
  {
    icon: Globe,
    label: "Website",
    value: "averyk.dev",
    href: "https://averyk.dev",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/averyking",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/averyking1",
  },
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-medium text-green-400 tracking-wider uppercase">
              Contact
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Let us{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  work together
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                I am always open to discussing new opportunities, interesting
                projects, or potential collaborations.
              </p>

              {/* CTA */}
              <motion.a
                href="mailto:avery@averyk.dev"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#050508] font-medium rounded-full hover:bg-gray-100 transition-all group"
              >
                <Mail className="w-4 h-4" />
                Send a Message
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Availability Badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Contact Methods */}
              {contactMethods.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="p-3 bg-white/5 rounded-lg">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {contact.label}
                      </p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="p-3 bg-white/5 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium">Peoria, IL</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-3 pt-4"
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center pt-20 mt-20 border-t border-white/10"
          >
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} Avery King. Built with React, Motion &
              Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

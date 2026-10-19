"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileDown, ChevronDown, Rocket, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

// SVG icons for brand logos (not available in lucide-react)
function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-28 md:pb-36 overflow-hidden"
    >
      {/* Ambient glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 rounded-full bg-nebula-blue/[0.04] blur-[120px]" />
        <div className="absolute inset-10 rounded-full bg-nebula-violet/[0.05] blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 md:gap-7 text-center lg:text-left order-2 lg:order-1">
            <motion.span
              {...fadeUp(0.1)}
              className="text-nebula-cyan text-sm md:text-base font-medium tracking-widest uppercase"
            >
              {personalInfo.greeting}
            </motion.span>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight gradient-text"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl lg:text-2xl text-star-dim font-medium"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              {...fadeUp(0.4)}
              className="text-star-dim/80 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4"
            >
              <a href="#projects" className="glow-btn glow-btn-primary">
                <Rocket size={16} />
                Ver proyectos
              </a>
              <a href="#contact" className="glow-btn glow-btn-secondary">
                <Mail size={16} />
                Contacto
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex items-center gap-5 justify-center lg:justify-start mt-6"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-star-dim hover:text-nebula-cyan hover:border-nebula-cyan/30 hover:bg-nebula-cyan/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-star-dim hover:text-nebula-blue hover:border-nebula-blue/30 hover:bg-nebula-blue/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.cvPath}
                download
                className="glow-btn glow-btn-secondary text-sm py-2 px-4"
              >
                <FileDown size={15} />
                Descargar CV
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Orbit rings */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-nebula-violet/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] rounded-full border border-nebula-cyan/[0.08] animate-[spin_30s_linear_infinite_reverse]" />
            </div>

            {/* Photo */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-nebula-cyan/30 via-nebula-violet/20 to-nebula-blue/30 blur-md opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <Image
                src={personalInfo.image}
                alt={personalInfo.name}
                width={280}
                height={280}
                priority
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-nebula-violet/20 group-hover:border-nebula-cyan/40 transition-all duration-500 group-hover:scale-[1.03]"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-star-dim/40"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}

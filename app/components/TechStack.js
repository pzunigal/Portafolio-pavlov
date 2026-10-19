"use client";

import { motion } from "framer-motion";
import { techStack } from "../data/portfolio-data";

export default function TechStack() {
  return (
    <section id="stack" className="section-block">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">Stack Tecnológico</h2>
          <span className="section-heading-line" />
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-24">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-4 mb-10 md:mb-12">
                <h3 className="text-star-white text-sm md:text-base font-semibold uppercase tracking-[0.22em] whitespace-nowrap">
                  {group.category}
                </h3>
                <span
                  className="h-px flex-1 bg-gradient-to-r from-nebula-violet/40 via-nebula-cyan/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-6">
                {group.technologies.map((tech, ti) => (
                  <motion.a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ti * 0.04 }}
                    className="glass-card group flex flex-col items-center justify-center gap-4 py-8 px-5 min-h-[140px] text-center hover:!border-nebula-cyan/30"
                  >
                    <i
                      className={`${tech.icon} text-3xl text-star-dim group-hover:text-nebula-cyan transition-colors duration-300`}
                    />
                    <span className="text-sm text-star-dim/80 group-hover:text-star-white font-medium transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

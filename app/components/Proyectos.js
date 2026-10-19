"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio-data";

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-star-dim hover:text-nebula-cyan hover:border-nebula-cyan/30 transition-colors"
      >
        <GithubIcon size={14} />
        Código
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-nebula-blue to-nebula-violet px-4 py-2 text-xs font-medium text-white"
        >
          <ExternalLink size={14} />
          Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-block">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">
            Proyectos Destacados
          </h2>
          <span className="section-heading-line" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="glass-card group overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[320px]"
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950/70 via-space-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-space-950/40" />
                <span className="absolute top-5 left-5 text-xs tracking-[0.2em] text-nebula-cyan/90 font-medium">
                  01 — DESTACADO
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 gap-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-star-white group-hover:text-nebula-cyan transition-colors">
                    {featured.title}
                  </h3>
                  <ArrowUpRight
                    size={22}
                    className="text-star-dim/40 group-hover:text-nebula-cyan transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-star-dim/80 text-sm md:text-base leading-relaxed max-w-xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <ProjectLinks project={featured} />
              </div>
            </motion.article>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                className="glass-card group flex flex-col overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-space-950/20 to-transparent" />
                  <span className="absolute top-5 left-5 text-xs tracking-[0.2em] text-nebula-cyan/90 font-medium">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-7 md:p-8 gap-5">
                  <h3 className="text-xl font-semibold text-star-white group-hover:text-nebula-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-star-dim/75 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

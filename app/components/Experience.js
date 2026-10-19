"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "../data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">Experiencia</h2>
          <span className="section-heading-line" />
        </motion.div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-[11.5rem] top-3 bottom-3 w-px bg-gradient-to-b from-nebula-cyan/40 via-nebula-violet/25 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 md:gap-14">
            {experience.map((exp, i) => {
              const isCurrent = exp.period.includes("Actualidad");

              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[10.5rem_1fr] gap-4 md:gap-10 items-start"
                >
                  <div className="md:text-right md:pt-6">
                    <p className="text-xs md:text-sm text-nebula-cyan/90 font-medium leading-snug">
                      {exp.period}
                    </p>
                    {isCurrent && (
                      <span className="inline-block mt-3 text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-nebula-cyan/10 text-nebula-cyan border border-nebula-cyan/20">
                        Actual
                      </span>
                    )}
                  </div>

                  <div className="relative">
                    <div
                      className="hidden md:block absolute -left-[1.7rem] top-7 w-3 h-3 rounded-full border-2 border-nebula-cyan bg-space-950"
                      aria-hidden="true"
                    />
                    <article className="glass-panel p-7 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-star-white">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-nebula-violet mt-1.5">
                            {exp.company}
                          </p>
                        </div>
                        {exp.location && (
                          <p className="flex items-center gap-1.5 text-xs text-star-dim/60">
                            <MapPin size={13} />
                            {exp.location}
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-star-dim/80 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {exp.highlights?.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-star-dim/75 leading-relaxed"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-24 md:mt-28"
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-star-white text-lg md:text-xl font-semibold whitespace-nowrap">
              Formación
            </h3>
            <span
              className="h-px flex-1 bg-gradient-to-r from-nebula-violet/40 via-nebula-cyan/20 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="glass-panel divide-y divide-white/[0.06] overflow-hidden">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-center gap-5 px-7 py-7 md:px-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-nebula-cyan/10 border border-nebula-cyan/15 flex items-center justify-center text-nebula-cyan">
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-star-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-nebula-cyan/80 mt-1">
                    {item.institution}
                  </p>
                </div>
                <p className="text-sm text-star-dim/70 sm:text-right whitespace-nowrap">
                  {item.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb } from "lucide-react";
import { aboutMe } from "../data/portfolio-data";

const highlights = [
  { icon: User, label: "Proactivo y colaborativo" },
  { icon: Target, label: "Orientado a la calidad" },
  { icon: Lightbulb, label: "Aprendizaje continuo" },
];

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">Sobre mí</h2>
          <span className="section-heading-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {aboutMe.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-star-dim/85 text-[0.95rem] leading-relaxed"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {highlights.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="glass-card px-6 py-5 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-nebula-violet/10 flex items-center justify-center text-nebula-cyan">
                  <Icon size={20} />
                </div>
                <span className="text-star-white text-sm font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

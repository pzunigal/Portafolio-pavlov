"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/portfolio-data";

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

const channels = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pzunigal",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/pzunigal",
    href: personalInfo.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "Ubicación",
    value: personalInfo.location,
    icon: MapPin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contacto desde el portafolio — ${form.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-block">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading gradient-text">Contacto</h2>
          <span className="section-heading-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-stretch max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-star-white mb-3">
                Hablemos
              </h3>
              <p className="text-star-dim/80 text-sm sm:text-base leading-relaxed">
                ¿Tienes un proyecto en mente o quieres conversar? Escríbeme por
                cualquiera de estos canales o usa el formulario.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {channels.map((item) => {
                const Icon = item.icon;
                const className =
                  "glass-card p-5 min-h-[118px] flex flex-col justify-between gap-4";
                const content = (
                  <>
                    <div className="w-10 h-10 rounded-xl bg-nebula-violet/10 flex items-center justify-center text-nebula-cyan">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-star-dim/55">
                        {item.label}
                      </p>
                      <p className="text-sm text-star-white mt-1.5 break-all">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                if (!item.href) {
                  return (
                    <div key={item.label} className={className}>
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`${className} hover:!border-nebula-cyan/30`}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-10 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-star-white">
                Envíame un mensaje
              </h3>
              <p className="text-sm text-star-dim/70 mt-2">
                Completa los datos y se abrirá tu cliente de correo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2.5">
                <label htmlFor="name" className="text-sm text-star-dim">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="email" className="text-sm text-star-dim">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@email.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-1">
              <label htmlFor="message" className="text-sm text-star-dim">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Cuéntame en qué puedo ayudarte"
                className="form-input resize-y min-h-[160px]"
              />
            </div>

            <button
              type="submit"
              className="glow-btn glow-btn-primary justify-center w-full sm:w-auto sm:self-end mt-1"
            >
              <Send size={16} />
              Enviar mensaje
            </button>

            {sent && (
              <p className="text-xs text-nebula-cyan/80">
                Se abrirá tu cliente de correo para completar el envío.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

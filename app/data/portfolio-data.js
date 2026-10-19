// ===== DATOS DEL PORTAFOLIO =====
// Centraliza toda la información para mantener los componentes limpios y reutilizables.

export const personalInfo = {
  name: "Pablo Zúñiga",
  title: "Full Stack Developer & QA Engineer",
  greeting: "Hola, soy",
  description:
    "Profesional de informática con experiencia en desarrollo de software y calidad de software. Apasionado por crear aplicaciones robustas con Java, Spring Boot y React, con un enfoque meticuloso en la calidad y las buenas prácticas.",
  github: "https://github.com/pzunigal",
  linkedin: "https://www.linkedin.com/in/pzunigal/",
  email: "pzunigal@outlook.com",
  location: "Temuco, Chile",
  cvPath: "/assets/docs/CV_Pablo_Zuniga.pdf",
  image: "/assets/images/main.jpg",
};

export const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const aboutMe = {
  paragraphs: [
    "Soy una persona proactiva, creativa y con buena disposición. Me destaco por mis capacidades de organización, trabajo en equipo y resolución de problemas.",
    "Mi interés profesional se centra en el desarrollo de software full stack y la calidad de software, buscando siempre construir soluciones eficientes, mantenibles y bien probadas.",
    "Cuento con amplia capacidad de aprendizaje y un buen nivel de inglés, lo que me permite adaptarme a distintos entornos y tecnologías.",
  ],
};

export const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "fab fa-react", url: "https://es.react.dev/learn" },
      { name: "JavaScript", icon: "fab fa-js", url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
      { name: "HTML5", icon: "fab fa-html5", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { name: "CSS3", icon: "fab fa-css3-alt", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { name: "TailwindCSS", icon: "fas fa-wind", url: "https://tailwindcss.com/docs" },
      { name: "Bootstrap", icon: "fab fa-bootstrap", url: "https://getbootstrap.com/docs/" },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Java", icon: "fab fa-java", url: "https://docs.oracle.com/en/java/" },
      { name: "Spring Boot", icon: "fas fa-leaf", url: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/" },
      { name: "Node.js", icon: "fab fa-node-js", url: "https://nodejs.org/en/docs" },
      { name: "Python", icon: "fab fa-python", url: "https://docs.python.org/3/" },
    ],
  },
  {
    category: "Bases de datos",
    technologies: [
      { name: "MySQL", icon: "fas fa-database", url: "https://dev.mysql.com/doc/" },
      { name: "PostgreSQL", icon: "fas fa-database", url: "https://www.postgresql.org/docs/" },
    ],
  },
  {
    category: "Herramientas",
    technologies: [
      { name: "Git", icon: "fab fa-git-alt", url: "https://git-scm.com/doc" },
      { name: "GitHub", icon: "fab fa-github", url: "https://docs.github.com/es" },
    ],
  },
];

export const projects = [
  {
    title: "Vive OffLine",
    description: "Proyecto en equipo para el cuidado del tiempo en pantalla. Una aplicación enfocada en promover el bienestar digital.",
    image: "/assets/images/viveOffline.png",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/g3rtr0z/AppBienestarDigital",
    demo: "https://app-bienestar-digital.vercel.app/",
  },
  {
    title: "Pololitos",
    description: "Marketplace de oficios locales que conecta a personas que ofrecen servicios con quienes los necesitan.",
    image: "https://pbs.twimg.com/media/Gm7xW9ZXQAAWX-M?format=jpg&name=large",
    technologies: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/pzunigal/Pololitos",
    demo: "https://youtu.be/KDliA6la4eA",
  },
  {
    title: "TV - Series",
    description: "Aplicación para gestionar series de televisión, desarrollada con Java y Spring Boot.",
    image: "https://pbs.twimg.com/media/GkCcsiuWYAIScXr?format=jpg&name=large",
    technologies: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/pzunigal/Series",
  },
];

export const experience = [
  {
    role: "Custom Software Engineer (QA)",
    company: "Accenture",
    period: "Jul 2025 — Actualidad",
    location: "Chile",
    description:
      "Participo en proyectos reales de aseguramiento de calidad en entornos ágiles, combinando criterio de QA con base en desarrollo Full Stack Java.",
    highlights: [
      "Diseño, ejecución y documentación de casos de prueba",
      "Pruebas de APIs con Postman y seguimiento de defectos",
      "Participación en planificación y retrospectivas con Scrum",
      "Uso de Git en entornos de desarrollo colaborativo",
    ],
  },
  {
    role: "Soporte Técnico",
    company: "SONDA",
    period: "Ago 2024 — Oct 2024",
    location: "Región de La Araucanía, Chile",
    description:
      "Mantención de equipos computacionales del área de salud, con foco en continuidad operativa y soporte a usuarios.",
    highlights: [
      "Mantenimiento de equipos en entorno de salud",
      "Diagnóstico y resolución de incidencias técnicas",
    ],
  },
  {
    role: "Analista de Software (Práctica profesional)",
    company: "Universidad de La Frontera (UFRO)",
    period: "Mar 2024 — Jun 2024",
    location: "Temuco, Chile",
    description:
      "Práctica profesional en la Dirección del Medio UFRO (SIVI), apoyando el análisis y desarrollo de software.",
    highlights: [
      "Análisis de requerimientos y apoyo al desarrollo",
      "Trabajo colaborativo en un entorno institucional",
    ],
  },
];

export const education = [
  {
    title: "Ingeniería en Ejecución Informática",
    institution: "Santo Tomás",
    period: "2022 — 2026",
  },
  {
    title: "Java Full Stack Developer",
    institution: "Coding Dojo / Skillnest",
    period: "2024 — 2025",
  },
  {
    title: "Analista Programador",
    institution: "Universidad Santo Tomás",
    period: "2022 — 2024",
  },
];

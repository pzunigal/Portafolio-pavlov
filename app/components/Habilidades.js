export default function Habilidades() {
  const skills = [
    { icon: 'fab fa-java', name: 'Java', url: 'https://docs.oracle.com/en/java/' },
    { icon: 'fas fa-leaf', name: 'Spring Boot', url: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/' },
    { icon: 'fas fa-database', name: 'MySQL', url: 'https://dev.mysql.com/doc/' },
    { icon: 'fab fa-html5', name: 'HTML', url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { icon: 'fab fa-css3-alt', name: 'CSS', url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
    { icon: 'fab fa-js', name: 'JavaScript', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
    { icon: 'fab fa-python', name: 'Python', url: 'https://docs.python.org/3/' },
    { icon: 'fab fa-git-alt', name: 'Git', url: 'https://git-scm.com/doc' },
    { icon: 'fab fa-github', name: 'GitHub', url: 'https://docs.github.com/es' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap', url: 'https://getbootstrap.com/docs/' },
    { icon: 'fab fa-react', name: 'React', url: 'https://es.react.dev/learn' },
    { icon: 'fab fa-node-js', name: 'Node.js', url: 'https://nodejs.org/en/docs' },
    { icon: 'fas fa-database', name: 'PostgreSQL', url: 'https://www.postgresql.org/docs/' },
    { icon: 'fas fa-wind', name: 'TailwindCSS', url: 'https://tailwindcss.com/docs' },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <a className="skill-card" key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer">
              <i className={skill.icon}></i>
              <h3>{skill.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
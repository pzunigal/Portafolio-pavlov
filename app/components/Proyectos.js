
export default function Proyectos() {
  const projects = [
    {
      title: 'Vive OffLine',
      description: 'Proyecto en Equipo para el Cuidado de nuestro tiempo en Pantalla',
      image: './assets/images/viveOffline.png',
      github: 'https://github.com/g3rtr0z/AppBienestarDigital',
      demo: 'https://app-bienestar-digital.vercel.app/',
    },
    {
      title: 'Pololitos',
      description: 'Marketplace de oficios locales...',
      image: 'https://pbs.twimg.com/media/Gm7xW9ZXQAAWX-M?format=jpg&name=large',
      github: 'https://github.com/pzunigal/Pololitos',
      demo: 'https://youtu.be/KDliA6la4eA',
    },
    {
      title: 'TV - Series',
      description: 'Proyecto para agregar Series con Java/Spring...',
      image: 'https://pbs.twimg.com/media/GkCcsiuWYAIScXr?format=jpg&name=large',
      github: 'https://github.com/pzunigal/Series',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} className="btn-small secondary" target="_blank">GitHub</a>
                  {project.demo && <a href={project.demo} className="btn-small primary" target="_blank">Demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
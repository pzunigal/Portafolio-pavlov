import Image from "next/image";

export default function SobreMi() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hola, soy</span>
            <h1>Pablo Zúñiga</h1>
            <h2>Software Enginner</h2>
            <p>Una persona proactiva, creativa, con buena disposición, grandes capacidades de organización, trabajo en equipo, buena resolución de problemas, amplia capacidad de aprendizaje y buen nivel de inglés.</p>
            <div className="social-links">
              <a href="https://github.com/pzunigal" target="_blank"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/pzunigal/" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="/assets/docs/CV_Pablo_Zuniga.pdf" className="cv-button" download>
                <i className="fas fa-file-download"></i> CV
              </a>
            </div>
          </div>
          <div className="hero-image">
            <a href="https://www.linkedin.com/in/pzunigal/" target="_blank">
              <Image src="/assets/images/main.jpg" width='800' height='800' alt="Pablo Zúñiga"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
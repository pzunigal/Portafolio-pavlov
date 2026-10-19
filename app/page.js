import Starfield from "./components/Starfield";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Proyectos";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <Starfield />
      <div className="nebula-bg" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 flex flex-col gap-8 md:gap-16 lg:gap-24">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
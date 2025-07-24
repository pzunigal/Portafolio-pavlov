import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Starfield from './components/Starfield';
import Footer from './components/Footer';


export default function Home() {
  return (
    <>
      <Starfield />
      <main>
        <SobreMi />
        <Habilidades />
        <Proyectos />
      </main>
      <Footer />
    </>
  );
}
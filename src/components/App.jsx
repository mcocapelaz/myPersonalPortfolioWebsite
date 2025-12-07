import "../styles/App.scss";
import HeroTitle from "./layout/HeroTitle";
import Lottie from "lottie-react";
import MyAnimation from "../assets/MyAnimation.json";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="hero-title">Hola, soy Mónica Coca</h1>
        <div className="hero-title">
          <HeroTitle />{" "}
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="section section-about">
          <div className="section-two-columns">
            <div className="section-left"></div>
            <div className="section-right">
              <h2>Sobre mí</h2>
              <p>Texto sobre ti...</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <div className="section-two-columns">
            <div className="section-left">
              <h2>Proyectos</h2>
              <p>Breve intro a tus proyectos.</p>
            </div>
            <div className="section-right">
              <div className="project-grid">
                <article className="project-card">
                  <h3>Proyecto 1</h3>
                  <p>Descripción del proyecto</p>
                </article>
                <article className="project-card">
                  <h3>Proyecto 2</h3>
                  <p>Descripción del proyecto</p>
                </article>
                <article className="project-card">
                  <h3>Proyecto 3</h3>
                  <p>Descripción del proyecto</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-two-columns">
            <div className="section-left">
              <div className="lottie-container">
                <Lottie
                  animationData={MyAnimation}
                  loop={true}
                  autoplay={true}
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                />
              </div>
            </div>
            <div className="section-right">
              <h2>Contacto</h2>
              <p>¿Quieres trabajar conmigo?</p>
              <a href="mailto:mcocapelaz@gmail.com" className="contact-link">
                Escríbeme
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Mónica Coca</p>
      </footer>
    </div>
  );
}

export default App;

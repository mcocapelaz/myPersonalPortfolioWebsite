import "../styles/App.scss";
import HeroTitle from "./layout/HeroTitle";
import Lottie from "lottie-react";
import MyAnimation from "../assets/MyAnimation.json";
import ProfileImage from "../images/profile-image.jpeg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="profile-image">
            <img src={ProfileImage} alt="Mónica Coca" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span>Mónica Coca</span>
            </h1>
            <div className="hero-subtitle">
              <HeroTitle />
            </div>
          </div>
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
          <div className="about-content">
            <h2 className="section-title">Sobre mí</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              nesciunt, ex magni consequuntur aperiam vel labore similique cum
              sed iusto possimus quod error earum voluptas voluptatibus culpa?
              Aspernatur, iste aut.
            </p>
            <div className="skills-grid">
              <div className="skill-tag">HTML</div>
              <div className="skill-tag">SCSS</div>
              <div className="skill-tag">JavaScript</div>
              <div className="skill-tag">React</div>
            </div>
          </div>
          <div className="section-footer">
            <a href="#" className="back-to-nav">
              ↑ Volver arriba
            </a>
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <div className="section-header">
            <h2 className="section-title">Proyectos</h2>
            <div className="lottie-container">
              <Lottie
                animationData={MyAnimation}
                loop={true}
                autoplay={true}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 1</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 2</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 3</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 4</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 5</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
            <article className="project-card">
              <div className="project-content">
                <h3>Proyecto 6</h3>
                <p>Descripción del proyecto</p>
              </div>
            </article>
          </div>
          <div className="projects-button-container">
            <a href="#contact" className="projects-button">
              Descubre cuál es el proyecto que necesitas
            </a>
          </div>
          <div className="section-footer">
            <a href="#" className="back-to-nav">
              ↑ Volver arriba
            </a>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-content">
            <h2 className="section-title">Contacto</h2>
            <p className="section-text">¿Quieres trabajar conmigo?</p>
            <a href="mailto:mcocapelaz@gmail.com" className="projects-button">
              Escríbeme
            </a>
          </div>
          <div className="section-footer">
            <a href="#" className="back-to-nav">
              ↑ Volver arriba
            </a>
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

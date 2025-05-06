import "./App.css";
import Navbar from "./components/Navbar";
import CrystalBall from "./components/CrystalBall";
import projects from "./data/projects.json";
import ProjectItem from "./components/ProjectItem";
import ContactForm from "./components/ContactForm";
import Envelope from "./components/Envelope";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about">
          <div className="flex-row">
            <div className="flex-1-3rd">
              <CrystalBall />
            </div>
            <div className="flex-2-3rds">
              <h2>About</h2>
              <p>
                I&apos;m <span className="highlight">Christina K. Boyt</span>, a
                hybrid developer-designer and CSS enthusiast.
              </p>
              <p>
                In addition to my degree in graphic design from Georgia State and a full stack
                certificate from Georgia Tech, I&apos;ve trained my skills as a
                hobbyist web designer from a young age—back when &quot;UI/UX
                designer &quot; and &quot;full stack developer&quot; were two
                halves of the same role—and have sought out and taken
                responsibility for coding opportunities in every graphic design
                position I&apos;ve held.
              </p>
              <p>
                If you&apos;d like to add my unique skillset and professional
                experience to your team, please reach out to{" "}
                <a href="mailto:me@ckboyt.com">me@ckboyt.com</a> or via{" "}
                <a
                  href="https://www.linkedin.com/in/ckboyt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                ! I am open to both volunteer work for open source projects as
                well as paid opportunities.
              </p>
            </div>
          </div>
        </section>
        <section id="work">
          <h2>Work</h2>
          <div id="proj-grid">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                img={project.img}
                live={project.live}
                gitHub={project.github}
                caseStudy={project.casestudy}
                name={project.name}
                langs={project.langs}
              />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <div className="flex-row">
            <div className="flex-half">
              <ContactForm />
            </div>
            <div className="flex-half tablet-hidden">
              <Envelope />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import projects from "../data/projects";
import articles from "../data/articles";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-tag">Operating Systems · Emulations · Concurrency</p>
        <h1>
          Efficiency, Speedups and Micro-optimisations.
        </h1>
        <p className="hero-description">
          Hi, I'm Akshat Arya. I enjoy building systems that are fast, scalable, and run with low overhead.
        </p>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Selected Projects</h2>
        </div>
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Latest Articles</h2>
        </div>
        {articles.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Currently</h2>
        </div>
        <div className="currently">
          <p>Completing my B.E. in Electronics and Tele-Communication Engineering at Jadavpur University.</p>
          <p>On some chapter of Operating System:Three Easy Pieces.</p>
          <p>Developing robust systems that are highly scalable and work with minimal dependencies.</p>
        </div>
      </section>

      <section className="home-section contact-section">
        <div className="section-header">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-content">
          <p>If you enjoy building low level software, work on visual classifiers or just want to chat, I'd love to hear from you.</p>
          <div className="contact-links">
            <a href="mailto:akshat3rya@gmail.com">Email</a>
            <a href="https://github.com/akshat3rya" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/akshat3rya" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Akshat_Arya_resume.pdf"target="_blank"rel="noreferrer">Resume ↗</a>
          </div>
          <p className="copyright">© 2026 Akshat Arya</p>
        </div>
      </section>
    </>
  );
}
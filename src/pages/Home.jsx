import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import Reveal from "../components/Reveal";
import projects from "../data/projects";
import articles from "../data/articles";

export default function Home() {
  return (
    <div className="home-dashboard">
      <section className="hero">
        <p className="hero-tag">Operating Systems · Emulations · Concurrency</p>
        <h1>
          Efficiency, Speedups and Micro-optimisations.
        </h1>
        <p className="hero-description">
          Hi, I'm Akshat Arya. I enjoy building systems that are fast, scalable, and run with low overhead.
        </p>
      </section>

      <Reveal className="home-section">
        <div className="section-header">
          <h2>Selected Projects</h2>
        </div>
        {projects.slice(0, 3).map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </Reveal>

      <Reveal className="home-section" delay={0.05}>
        <div className="section-header">
          <h2>Latest Articles</h2>
        </div>
        {articles.slice(0, 3).map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </Reveal>

      {/* <Reveal className="home-section" delay={0.1}>
        <div className="section-header">
          <h2>Currently</h2>
        </div>
        <div className="status-panel">
          <div className="status-row">
            <span className="status-label">education</span>
            <span className="status-value">Completing my B.E. in Electronics and Tele-Communication Engineering at Jadavpur University.</span>
          </div>
          <div className="status-row">
            <span className="status-label">reading</span>
            <span className="status-value">On some chapter of Operating Systems: Three Easy Pieces.</span>
          </div>
          <div className="status-row">
            <span className="status-label">building</span>
            <span className="status-value">Developing robust systems that are highly scalable and work with minimal dependencies.</span>
          </div>
        </div>
      </Reveal> */}

      <Reveal className="home-section contact-section" delay={0.15}>
        <div className="section-header">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-content">
          <p>If you enjoy building low level software, work on visual classifiers or just want to chat, I'd love to hear from you.</p>
          <div className="contact-links">
            <a href="mailto:akshat3rya@gmail.com">Email</a>
            <a href="https://github.com/akshat3rya" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/akshat-arya-a6ba2227a" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Akshat_Arya_resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
          </div>
          <p className="copyright">© 2026 Akshat Arya</p>
        </div>
      </Reveal>
    </div>
  );
}

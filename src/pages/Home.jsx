import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import projects from "../data/projects";
import articles from "../data/articles";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-tag">
          Software Engineer · AI · Builder
        </p>

        <h1>
          Building thoughtful software,
          <br />
          creating useful AI tools,
          <br />
          and writing along the way.
        </h1>

        <p className="hero-description">
          Hi, I'm Your Name. I enjoy building products that are simple,
          reliable, and a pleasure to use.
        </p>
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <a href="/projects">View all →</a>
        </div>

        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <section className="home-section">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <a href="/articles">View all →</a>
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
          <p>
            Building an AI-powered workflow assistant for developers.
          </p>

          <p>
            Reading <em>Designing Data-Intensive Applications</em>.
          </p>

          <p>
            Exploring agentic systems and local LLMs.
          </p>
        </div>
      </section>
          <section className="home-section contact-section">
      <div className="section-header">
        <h2>Get in Touch</h2>
      </div>

      <div className="contact-content">
        <p>
          If you enjoy building thoughtful software, working with AI, or just
          want to chat, I'd love to hear from you.
        </p>

        <div className="contact-links">
          <a href="mailto:hello@yourmail.com">Email</a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © 2026 Your Name
        </p>
      </div>
    </section>
    </>
  );
}
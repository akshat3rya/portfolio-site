import { useParams, Link } from "react-router-dom";
import projectDetails from "../data/projectsDetails";
import Section from "../components/Section";

export default function Project() {
  const { slug } = useParams();

  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="page">
        <h1>Project not found.</h1>

        <p>
          The project you're looking for doesn't exist or has been removed.
        </p>

        <Link to="/projects">← Back to Projects</Link>
      </section>
    );
  }

  return (
    <article className="project-page">
      {/* Hero */}

      <header className="project-hero">
        <p className="project-year">{project.year}</p>

        <h1>{project.title}</h1>

        <p className="project-subtitle">{project.subtitle}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </header>

      {/* Sections */}

      {project.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          <p>{section.content}</p>
        </Section>
      ))}

      {/* Gallery */}

      {project.gallery && project.gallery.length > 0 && (
        <Section title="Gallery">
          <div className="project-gallery">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Links */}

      <Section title="Links">
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </Section>

      {/* Bottom Navigation */}

      <div className="project-navigation">
        <Link to="/projects">← Back to all projects</Link>
      </div>
    </article>
  );
}
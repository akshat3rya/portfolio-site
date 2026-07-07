import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="page-eyebrow">Projects</p>

        <h1>
          A collection of things I've built over the years.
        </h1>

        <p className="page-description">
          These projects range from AI experiments and developer tools to
          production-ready applications. Each one taught me something new.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} bordered/>
        ))}
      </div>
    </section>
  );
}
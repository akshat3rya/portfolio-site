import { Link } from "react-router-dom";

export default function ProjectCard({
  project,
  bordered = false,
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${bordered ? "bordered-card" : ""}`}
    >
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      {/* <span>{project.year}</span> */}
    </Link>
  );
}
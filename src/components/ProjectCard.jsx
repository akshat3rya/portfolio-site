import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  index = 0,
  bordered = false,
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card ${bordered ? "bordered-card" : ""}`}
    >
      <span className="card-index">{String(index + 1).padStart(2, "0")}</span>

      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ArrowUpRight className="card-arrow" size={20} />
    </Link>
  );
}

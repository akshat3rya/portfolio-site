import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ArticleCard({
  article,
  index = 0,
  bordered = false,
}) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`article-card ${bordered ? "bordered-card" : ""}`}
    >
      <span className="card-index">{String(index + 1).padStart(2, "0")}</span>

      <div className="card-body">
        <h3>{article.title}</h3>
        <span className="card-date">{article.date}</span>
      </div>

      <ArrowUpRight className="card-arrow" size={20} />
    </Link>
  );
}

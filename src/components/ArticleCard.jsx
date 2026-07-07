import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="article-card"
    >
      <div>
        <h3>{article.title}</h3>

        <p>{article.description}</p>
      </div>

      <span>{article.date}</span>
    </Link>
  );
}
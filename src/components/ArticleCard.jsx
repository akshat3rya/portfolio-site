import { Link } from "react-router-dom";

export default function ArticleCard({
  article,
  bordered = false,
}) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`article-card ${bordered ? "bordered-card" : ""}`}
    >
      <div>
        <h3>{article.title}</h3>

        <p>{article.description}</p>
      </div>

      {/* <span>{article.date}</span> */}
    </Link>
  );
}
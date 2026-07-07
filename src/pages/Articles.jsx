import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Articles() {
  return (
    <section className="page">

      <div className="page-header">

        <p className="page-eyebrow">
          Articles
        </p>

        <h1>
          Notes, ideas and things I've learned while building.
        </h1>

        <p className="page-description">
          Writing helps me organize my thoughts and document what I discover.
        </p>

      </div>

      {articles.map(article => (
        <ArticleCard
          key={article.slug}
          article={article}
        />
      ))}

    </section>
  );
}
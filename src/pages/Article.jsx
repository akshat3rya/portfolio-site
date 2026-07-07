import { useParams, Link } from "react-router-dom";
import articleDetails from "../data/articlesDetails";
import Section from "../components/Section";

export default function Article() {
  const { slug } = useParams();

  const article = articleDetails.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="page">
        <h1>Article not found.</h1>
        <p>The article you're looking for doesn't exist or may have been removed.</p>
        <Link to="/articles">← Back to Articles</Link>
      </section>
    );
  }

  return (
    <article className="project-page">
      {/* Hero */}
      <header className="project-hero">
        <p className="project-year">{article.date}</p>
        <h1>{article.title}</h1>
        <p className="project-subtitle">{article.subtitle}</p>
        {article.tags && article.tags.length > 0 && (
          <div className="project-tech">
            {article.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}
      </header>

      {/* Sections */}
      {article.sections.map((section) => (
        <Section key={section.title} title={section.title}>
          <p>{section.content}</p>
        </Section>
      ))}

      {/* Links */}
      {(article.github || article.demo || article.reference) && (
        <Section title="References" bordered>
          <div className="project-links">
            {article.reference && <a href={article.reference} target="_blank" rel="noopener noreferrer">Reference ↗</a>}
            {article.github && <a href={article.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
            {article.demo && <a href={article.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}
          </div>
        </Section>
      )}
    </article>
  );
}
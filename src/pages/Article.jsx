import { useParams, Link } from "react-router-dom";
import articleDetails from "../data/articlesDetails";
import Section from "../components/Section";

export default function Article() {

    const { slug } = useParams();

    const article = articleDetails.find(
        a => a.slug === slug
    );

    if(!article){

        return <h1>Article not found.</h1>;

    }

    return(

        <article className="project-page">

            <header className="project-hero">

                <p className="project-year">
                    {article.date}
                </p>

                <h1>
                    {article.title}
                </h1>

                <p className="project-subtitle">
                    {article.subtitle}
                </p>

            </header>

            {article.sections.map(section=>(
                <Section
                    key={section.title}
                    title={section.title}
                >
                    <p>{section.content}</p>
                </Section>
            ))}

            <div className="project-navigation">

                <Link to="/articles">

                    ← Back to Articles

                </Link>

            </div>

        </article>

    );

}
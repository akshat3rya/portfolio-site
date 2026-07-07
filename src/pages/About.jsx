import Section from "../components/Section";

export default function About() {
  return (
    <article className="about-page">
      <header className="project-hero">
        <p className="project-year">About</p>

        <h1>Your Name</h1>

        <p className="project-subtitle">
          Software engineer with an interest in artificial intelligence,
          thoughtful product design, and building tools that solve real
          problems. I enjoy turning complex ideas into simple, reliable
          experiences.
        </p>
      </header>

      <Section title="Who I Am">
        <p>
          I'm a software engineer who enjoys building products from the ground
          up. My interests lie at the intersection of software engineering,
          machine learning, and design. I'm particularly drawn to projects that
          require careful thinking rather than unnecessary complexity.
        </p>
      </Section>

      <Section title="What I'm Interested In">
        <p>
          Recently I've been exploring AI agents, retrieval-augmented
          generation, local language models, and developer tooling. I'm
          fascinated by systems that combine good engineering practices with
          modern AI to create genuinely useful products.
        </p>
      </Section>

      <Section title="Beyond Code">
        <p>
          Outside of programming, I enjoy reading about technology, systems
          design, economics, and psychology. I believe that good software is
          shaped just as much by understanding people as it is by writing code.
        </p>
      </Section>

      <Section title="Current Focus">
        <p>
          At the moment I'm focused on building practical AI applications,
          improving my understanding of large language models, and creating
          software that is simple, elegant, and enjoyable to use.
        </p>
      </Section>

      <Section title="Elsewhere">
        <p>
          If you'd like to collaborate, discuss ideas, or simply say hello,
          feel free to reach out.
        </p>

        <div className="project-links">
          <a href="mailto:hello@yourmail.com">
            Email ↗
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </Section>
    </article>
  );
}
import Section from "../components/Section";

export default function About() {
  return (
    <article className="about-page">
      <header className="project-hero">
        <p className="project-year">About</p>

        <h1>Akshat Arya</h1>

        <p className="project-subtitle">
          Final-year Electronics and Telecommunication Engineering student and upcoming systems programmer. 
          I specialize in distributed systems, storage systems, classifiers and developer tools, 
          turning low-level concepts into robust, reliable architectures.
        </p>
      </header>

      <Section title="Who I Am">
        <p>
          I'm a software engineer pursuing my Bachelor of Engineering at Jadavpur University, Kolkata. 
          My technical background spans from digital circuits, hardware emulation, to multi-layer machine learning models from scratch. 
          I am drawn to projects that rely on core engineering fundamentals, clean algorithmic design, and architectural efficiency.
        </p>
      </Section>

      <Section title="What I'm Interested In">
        <p>
          I am deeply fascinated by systems programming and low-level computer architecture. My current obssession is going through OSTEP and discovering the core parts of an operating system. 
          Additionally, I explore the intersections of generative AI and analytics, having researched generative sampling 
          with Variational Autoencoders (VAEs) and integrated CNN pipelines for survelliance systems that sit right at our national borders for defenses.
        </p>
      </Section>

      <Section title="Beyond Code">
        <p>
          Apart from what I have mentioned, a good portion of my previous years have been spent in game development, building and shipping 10+ games without any publisher support.
          I have a strong academic foundation in digital logic, linear algebra, and computer organization, which heavily influences my approach 
          to optimization. Sometimes, I might surprise you with a niche history fact if you listen with enough devotion.
        </p>
      </Section>

      <Section title="Current Focus">
        <p>
          At the moment, I'm focusing on building concurrent architectures and project that have true parallelization.
          I aim to create codebases that are self-contained, performant, and 
          entirely free from bloated dependency layers.
        </p>
      </Section>

      <Section title="Elsewhere">
        <p>
          If you'd like to collaborate on anything or simply say hello, feel free to reach out.
        </p>

        <div className="project-links">
          <a href="mailto:akshat3rya@gmail.com">
            Email ↗
          </a>

          <a
            href="https://github.com/akshat3rya"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/akshat3rya"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗          
          </a>
          <a
            href="/Akshat_Arya_resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>  
        </div>
      </Section>
    </article>
  );
}
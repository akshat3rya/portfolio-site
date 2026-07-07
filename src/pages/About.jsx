import Section from "../components/Section";

export default function About() {
  return (
    <article className="about-page">
      <header className="project-hero">
        <p className="project-year">About</p>

        <h1>Akshat Arya</h1>

        <p className="project-subtitle">
          Final-year Electronics and Telecommunication Engineering student and systems programmer. 
          I specialize in distributed systems, storage systems, browser infrastructure, and developer tools, 
          turning low-level concepts into robust, reliable architectures.
        </p>
      </header>

      <Section title="Who I Am">
        <p>
          I'm a software engineer pursuing my Bachelor of Engineering at Jadavpur University, Kolkata. 
          My technical background spans low-overhead programming, hardware emulation, and building infrastructure from scratch. 
          Whether designing highly concurrent video analytics servers or writing decentralized peer-to-peer storage meshes, 
          I am drawn to projects that rely on core engineering fundamentals, clean algorithmic design, and architectural efficiency.
        </p>
      </Section>

      <Section title="What I'm Interested In">
        <p>
          I am deeply fascinated by systems programming and low-level computer architecture. My work ranges from emulating 
          microprocessor pipelines (like the MOS 6502 CPU and PPU hardware) to custom network protocols implemented directly over TCP sockets. 
          Additionally, I explore the intersections of generative AI and analytics, having researched high-imbalance generative oversampling 
          with Variational Autoencoders (VAEs) and integrated CNN pipelines into edge execution environments.
        </p>
      </Section>

      <Section title="Beyond Code">
        <p>
          Outside of pure systems programming, I spend time analyzing technical data structures, operating systems internals, and network theory. 
          I have a strong academic foundation in digital logic, linear algebra, and computer organization, which heavily influences my approach 
          to optimization. I believe that building efficient infrastructure requires a continuous appreciation for how hardware and software 
          interact natively.
        </p>
      </Section>

      <Section title="Current Focus">
        <p>
          At the moment, I'm focusing on strengthening my understanding of concurrent architectures, distributed consensus mechanisms, and 
          deterministic lookup layouts like content-addressable storage. I aim to create codebases that are self-contained, performant, and 
          entirely free from bloated dependency layers.
        </p>
      </Section>

      <Section title="Elsewhere">
        <p>
          If you'd like to collaborate on systems engineering, discuss low-level mechanics, or simply say hello, feel free to reach out.
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
        </div>
      </Section>
    </article>
  );
}
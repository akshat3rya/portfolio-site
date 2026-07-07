const projectDetails = [
  {
    slug: "portfolio",
    title: "Editorial Portfolio",
    year: "2026",
    subtitle: "A calm, typography-first portfolio designed to showcase projects and writing without unnecessary distractions.",
    tech: ["React", "Vite", "React Router", "CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
    gallery: [
      "/images/portfolio/home.png",
      "/images/portfolio/projects.png",
      "/images/portfolio/project-page.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "I wanted a portfolio that felt closer to a publication than a product landing page. Instead of relying on heavy animations or elaborate UI elements, I focused on spacing, typography, and clear storytelling. The goal was to create a place where visitors naturally spend time reading about the work rather than being distracted by the interface."
      },
      {
        title: "The Problem",
        content: "Most developer portfolios today look remarkably similar—dark backgrounds, glassmorphism, animated blobs, and countless UI effects. While visually impressive, they often shift attention away from the projects themselves. I wanted something timeless that would still feel relevant years from now."
      },
      {
        title: "The Solution",
        content: "The site was built using React, React Router, and plain CSS. Navigation follows an editorial layout with a minimal bookmark-style sidebar, while every project is presented as a case study. The design intentionally relies on typography, whitespace, and subtle interactions instead of visual effects."
      },
      {
        title: "What I Learned",
        content: "This project reinforced how much visual hierarchy can be achieved through spacing and typography alone. Removing unnecessary UI elements made the content significantly easier to consume while also simplifying the codebase."
      }
    ]
  },
  {
    slug: "ai-agent",
    title: "AI Research Agent",
    year: "2026",
    subtitle: "An autonomous assistant capable of researching technical topics and producing structured reports.",
    tech: ["Python", "FastAPI", "SQLite", "OpenAI API"],
    github: "https://github.com/yourusername/ai-agent",
    demo: "https://demo.com",
    gallery: [
      "/images/ai-agent/dashboard.png",
      "/images/ai-agent/workflow.png",
      "/images/ai-agent/report.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "The project explores how modern language models can perform multi-step research tasks with minimal supervision. Instead of behaving like a chatbot, the system acts more like an autonomous research assistant."
      },
      {
        title: "Research Workflow",
        content: "Every request is divided into planning, searching, retrieval, summarization, verification, and report generation. Each stage can be improved independently while keeping the overall pipeline reliable."
      },
      {
        title: "Challenges",
        content: "The biggest challenge was managing context across multiple research iterations. Simply increasing prompt size wasn't enough; relevant information had to be selected and organized before generation."
      },
      {
        title: "What I Learned",
        content: "Reliable AI systems depend far more on context management than on clever prompting. Good retrieval and verification consistently produced better results than larger prompts."
      }
    ]
  },
  {
    slug: "rag-system",
    title: "Private RAG System",
    year: "2025",
    subtitle: "A retrieval-augmented generation system for querying private documents locally.",
    tech: ["Python", "LangChain", "ChromaDB", "OpenAI"],
    github: "https://github.com/yourusername/rag-system",
    demo: "https://demo.com",
    gallery: [
      "/images/rag/search.png",
      "/images/rag/results.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "This project enables users to ask natural language questions over PDFs and internal documentation without uploading their files to external services."
      },
      {
        title: "Architecture",
        content: "Documents are indexed into a vector database, retrieved using semantic search, reranked, and finally passed to the language model with only the most relevant context."
      },
      {
        title: "Challenges",
        content: "Finding the right chunk size, overlap strategy, and metadata proved to be more important than changing language models."
      },
      {
        title: "What I Learned",
        content: "Building retrieval systems taught me that data quality and retrieval strategy often have a greater impact on answer quality than model selection."
      }
    ]
  }
];

export default projectDetails;
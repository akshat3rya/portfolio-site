const projectDetails = [
  {
    slug: "whack-a-storage",
    title: "Whack-A-Storage",
    year: "2026",
    subtitle: "A distributed, content-addressable peer-to-peer file storage system featuring stream encryption and custom transport protocols.",
    tech: ["Go", "TCP", "AES-CTR", "MD5", "Gob Encoding"],
    github: "https://github.com/akshat3rya/whack-a-storage",
    demo: "https://github.com/akshat3rya/whack-a-storage",
    gallery: [
      "/images/whack-a-storage/architecture.png",
      "/images/whack-a-storage/p2p-mesh.png",
      "/images/whack-a-storage/cas-tree.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "Whack-A-Storage is a decentralized storage platform engineered to handle reliable file distribution across a peer-to-peer mesh network. It orchestrates node discovery, data integrity verification, and secure transmission lines entirely through custom-built primitives rather than higher-level framework abstractions. The system functions as a modular cluster where each instance hosts a server, a storage engine, and a networking suite operating concurrently."
      },
      {
        title: "Architecture & Content-Addressing",
        content: "Storage efficiency is driven by Content-Addressable Storage (CAS). Files are uniquely addressed based on their payload identity rather than arbitrary filenames. A key-transformation function generates an MD5 hash of the data, splitting the hash string into deterministic, nested path structures on disk. This completely mitigates data duplication across local systems while facilitating precise replication policies among connected nodes."
      },
      {
        title: "Networking & Transport",
        content: "Instead of standard HTTP or gRPC, communication is handled via a low-level TCP-based transport layer. It implements a lightweight validation handshake (`NOPHandshakeFunc`) and controls data stream isolation using precise byte-flag headers. This design choice enables the system to reliably multiplex discrete control commands (such as file metadata synchronization requests) alongside high-bandwidth raw file data streams over unified socket interfaces."
      },
      {
        title: "Concurrency & Cryptography",
        content: "Leveraging Go's concurrency model, intensive operations like network loop reading, peer broadcasts, and background replications are managed via independent Goroutines interconnected by structural channels. To protect data boundaries, a cryptographic pipeline leverages AES-CTR mode. Stream processing functions (`copyEncrypt` and `copyDecrypt`) read blocks sequentially while prepending a random initialization vector (IV) directly to the ciphertext, preserving an optimal, zero-memory-bloat footprint."
      }
    ]
  },
  {
    slug: "vnes",
    title: "vNES Emulator",
    year: "2026",
    subtitle: "A modular, cross-platform hardware emulator reproducing the internal mechanics of the Nintendo Entertainment System console.",
    tech: ["C++17", "OpenGL", "PixelGameEngine", "ALSA", "X11"],
    github: "https://github.com/akshat3rya",
    demo: "https://github.com/akshat3rya",
    gallery: [
      "/images/vnes/emulator-core.png",
      "/images/vnes/ppu-nametable.png",
      "/images/vnes/audio-waves.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "VNES is a desktop application written in modern C++17 that emulates the legacy architecture of the original NES hardware components. By adhering strictly to the specifications of early computing platforms, it correctly parses iNES ROM files, handles discrete instruction decoding loops, and translates memory configurations to match target console states in real time."
      },
      {
        title: "The CPU & Memory Interconnect Bus",
        content: "The core engine runs a cycle-accurate emulation of the MOS 6502 microprocessor. The system relies on a central interconnected communication bus to route reads and writes across memory-mapped spaces, cartridge banks, and special controller states. Opcode execution, addressing modes, and accurate clock cycle timings are replicated to prevent timing mismatches during runtime."
      },
      {
        title: "Graphics (PPU) and Sound (APU) Emulation",
        content: "The custom graphics pipeline mimics the 2C02 Picture Processing Unit, rendering pattern tables, attribute layouts, and background/sprite nametables to an OpenGL-accelerated display buffer. Concurrently, audio generation is modeled after the 2A03 Audio Processing Unit, which manages internal frequency registers to drive sound synthesis via native ALSA APIs on Linux platforms."
      },
      {
        title: "Dynamic ROM Mapping & Diagnostic Tools",
        content: "Because standard cartridge sizes were historically restricted, game logic utilized internal hardware expanders known as Mappers. VNES implements highly modular class abstractions to switch physical addresses dynamically at runtime based on cartridge specifications. Additionally, custom visual logging suites are embedded into the UI to allow real-time palette inspections and hardware register debugging."
      }
    ]
  },
  {
    slug: "tab-recommender",
    title: "Tab Recommender System",
    year: "2026",
    subtitle: "A contextual browser extension utilizing predictive Markovian modeling to accelerate user session navigation.",
    tech: ["JavaScript", "Manifest V3", "Python", "Node.js", "Chrome Extension APIs"],
    github: "https://github.com/akshat3rya",
    demo: "https://github.com/akshat3rya",
    gallery: [
      "/images/tab-recommender/extension-overlay.png",
      "/images/tab-recommender/markov-pipeline.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "This project provides an intelligent browser layout component by integrating background telemetry collection with a fast client-side inference engine. Operating inside the restrictions of Chrome's Manifest V3 architecture, it dynamically serves interface recommendations to help users quickly switch between frequent workflow nodes based on cumulative browsing history patterns."
      },
      {
        title: "The Mathematical Model",
        content: "Prediction logic relies on a custom 6-dimensional Markovian chain model. Rather than storing singular transition rates, the state vectors evaluate broader variables—including exact historical sequence depths, specific times of day, and chronological groupings (such as weekdays vs. weekends). This produces context-sensitive probabilities to confidently select the top 4 most likely next destinations."
      },
      {
        title: "Offline Pipeline & State Reduction",
        content: "Running complex matrix evaluations directly inside active browser threads risks heavy computational lags and memory bloat. To resolve this, user interaction logs are securely captured by `logger.js` and exported. An offline Python/Node.js training sequence cleans the telemetry records and executes state reduction filters to block state-space explosions before serializing compressed runtime model files."
      },
      {
        title: "Runtime Optimization",
        content: "Once compiled, the resulting state configurations are loaded into the extension's runtime module. By turning runtime lookups into direct matrix indices, the extension bypasses real-time recalculations and delivers relevant recommendations within constant $O(1)$ time. The visual overlay adapts instantly without altering core browser background performance."
      }
    ]
  },
  {
    slug: "smartvigil",
    title: "SmartVigil",
    year: "2025",
    subtitle: "A scalable, highly concurrent C++ surveillance server executing deep learning computer vision analytics on edge environments.",
    tech: ["C++", "Pthreads", "FFmpeg", "Python", "CNNs"],
    github: "https://github.com/akshat3rya",
    demo: "https://github.com/akshat3rya",
    gallery: [
      "/images/smartvigil/dashboard.png",
      "/images/smartvigil/pipeline-metrics.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "SmartVigil is an enterprise-grade multi-IP camera analytics server built to handle continuous real-time video feeds with tight performance requirements. Developed using native C++ systems engineering, the framework processes heavy camera streams, feeds raw visuals through deep convolutional neural networks (CNNs), and manages concurrent database storage operations under extreme bandwidth pressure."
      },
      {
        title: "Pipelining & Hardware Optimization",
        content: "Connecting dozens of high-definition cameras directly to neural networks often introduces deep thread-blocking challenges. To achieve maximum throughput, the ingestion engine uses deep software pipelining powered by low-level POSIX threads (`Pthreads`) and native FFmpeg decoding libraries. This allows frame capture, image preprocessing, and GPU tensor inference tasks to execute concurrently without waiting on shared bottlenecks."
      },
      {
        title: "Performance Breakthroughs",
        content: "Deployed across enterprise-level configurations running NVIDIA A6000 hardware clusters, SmartVigil scales to handle over 200 distinct camera feeds simultaneously while keeping processing latencies beneath 30ms. Eliminating continuous thread-locking problems improved overall GPU resource efficiency by 48% and unlocked an 80x overall speedup over legacy processing methods."
      },
      {
        title: "Edge Resilience & Notification Systems",
        content: "Operating on physical edge networks demands optimized fallback and reporting architectures. SmartVigil pairs its compute-heavy video ingestion layers with an independent, asynchronous event monitor. Whenever the internal CNN scoring model registers anomalies, the server pushes critical tracking flags across localized network bounds to hit warning endpoints within 2 seconds."
      }
    ]
  },
  {
    slug: "worse-than-git",
    title: "Worse-Than-Git (WTGit)",
    year: "2025",
    subtitle: "A lightweight, content-addressable command-line version control engine implementing local staging mechanics.",
    tech: ["C++17", "OpenSSL", "C++ Filesystem API"],
    github: "https://github.com/akshat3rya",
    demo: "https://github.com/akshat3rya",
    gallery: [
      "/images/wtgit/cli-status.png",
      "/images/wtgit/object-store.png"
    ],
    sections: [
      {
        title: "Overview",
        content: "Worse-Than-Git (WTGit) is an educational, terminal-driven tool built to demonstrate version control theory. Developed in C++17, it replicates git-style internals like content-addressable databases and file tracking snapshots using the standard structural OS file APIs."
      },
      {
        title: "Content Addressing & Staging",
        content: "The storage layout is managed as a directed acyclic graph of data components. Whenever files are staged using `wtgit add`, OpenSSL libraries process the data to generate unique SHA-1 hashes. Files are immediately converted into immutable blobs stored inside a custom metadata directory, guaranteeing data versioning integrity across subsequent modifications."
      },
      {
        title: "Snapshots & History Management",
        content: "Committing states via `wtgit commit` saves a full snapshot pointing to the specific directory tree, associated timestamp arrays, and authorship info. The linear history is tracked via text logs. The application features a robust custom parsing architecture that reads delta objects to handle safe, transaction-style lookups across previous working directory commits during `checkout` or `revert` commands."
      },
      {
        title: "Failsafe Engineering & Conflict Resolution",
        content: "To safeguard working directories during destructive tree transformations, WTGit relies on defensive staging checks and file verification wrappers. If updates hit concurrent merge friction, the engine deploys a file-locking system via the `resolve` terminal utility, ensuring index structures remain clean and free from corruption."
      }
    ]
  }
];

export default projectDetails;
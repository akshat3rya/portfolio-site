const articleDetails = [
    {
      slug: "understanding-paging-virtual-memory",
      title: "Demystifying Paging: How Operating Systems Manage Virtual Memory Architecture",
      subtitle: "An in-depth look at memory virtualization, page tables, fragmentation tradeoffs, and the hardware-software contract that keeps programs isolated.",
      date: "July 2026",
      tags: ["Operating Systems", "Memory Management", "Systems Programming"],
      sections: [
        {
          title: "The Necessity of Virtual Memory",
          content: "In modern operating systems, programs do not access physical RAM directly. Instead, they operate entirely within an isolated virtual address space. This abstraction simplifies compilation, prevents malicious software from corrupting other processes' states, and allows the system to utilize disk storage as overflow space. Paging is the foundational mechanism that breaks this virtual address space into uniform blocks, mapping them dynamically onto physical memory frames."
        },
        {
          title: "Page Tables and Address Translation",
          content: "When a CPU executes an instruction to fetch data from an address, that address is split into two components: a virtual page number (VPN) and a page offset. The OS maintains a structured directory known as a Page Table for each process. The memory management unit (MMU) intersects the VPN with this table to locate the physical frame number (PFN). Combining the PFN with the original page offset yields the precise physical address in hardware."
        },
        {
          title: "The Problem of Space: Multi-Level Page Tables",
          content: "On a 64-bit architecture, a flat, linear page table tracking every single page would consume gigabytes of raw memory just to store mapping pointers. To mitigate this space-complexity explosion, operating systems deploy Multi-Level Page Tables. This design acts like a sparse tree layout, creating directory nodes only for regions of memory that a process actively allocates. Unused virtual space consumes zero physical page table overhead, dramatically lowering kernel footprints."
        },
        {
          title: "Handling Page Faults",
          content: "If a program attempts to read an unmapped page or a page that has been swapped out to secondary disk storage, the MMU triggers a hardware interrupt called a Page Fault. The kernel immediately halts the execution thread, switches to supervisor mode, allocates a physical frame, reads the missing block from disk, updates the page table flags (such as the valid/dirty bit), and resumes the user instruction seamlessly."
        }
      ],
      reference: "",
      github: "",
      demo: ""
    },
    {
      slug: "hardware-acceleration-tlb",
      title: "Hardware-Accelerated Translation: Optimizing Address Lookups with the TLB",
      subtitle: "Why multi-level page tables introduce catastrophic memory overhead, and how CPU caches bypass the lookup penalty.",
      date: "June 2026",
      tags: ["Computer Architecture", "Hardware", "Performance Tuning"],
      sections: [
        {
          title: "The Multi-Level Page Table Tax",
          content: "While multi-level page tables solve the spatial problem of memory tracking, they introduce a massive performance penalty. For every single data reference, a 4-level page table requires the CPU to execute four separate memory reads just to resolve the physical location before performing the actual data operation. Without hardware acceleration, this would slow down end-to-end program execution velocities by several hundred percent."
        },
        {
          title: "The Translation Lookaside Buffer (TLB)",
          content: "To bypass this lookup penalty, computer architects integrated a specialized high-speed associative hardware cache into the MMU: the Translation Lookaside Buffer (TLB). The TLB acts as an $O(1)$ fast-path storage array containing recent VPN-to-PFN mappings. Due to spatial and temporal locality in application memory access loops, a vast majority of virtual memory queries result in a TLB Hit, dropping translation latencies to a single clock cycle."
        },
        {
          title: "TLB Misses and Page Walks",
          content: "When a VPN is missing from the TLB cache, a TLB Miss occurs. The processor must fallback to a full 'Page Walk', parsing the multi-level tree structure in main RAM. Once found, the mapping is loaded into the TLB, replacing an older entry via eviction algorithms like Least Recently Used (LRU). Minimizing these cache misses is critical when optimizing cache-conscious data structures and high-frequency execution code blocks."
        },
        {
          title: "Context Switches and TLB Flushing",
          content: "Because every process possesses an independent virtual address space, a specific virtual address maps to entirely distinct physical frames across different applications. Consequently, context-switching between processes historically required flushing the entire TLB cache. Modern processors overcome this overhead by appending an Address Space Identifier (ASID) tag to each entry, allowing mappings from multiple execution environments to persist concurrently."
        }
      ],
      reference: "",
      github: "",
      demo: ""
    },
    {
      slug: "ipc-mechanisms-performance",
      title: "Shared Memory vs. Message Passing: A Performance Analysis of IPC Mechanisms",
      subtitle: "Evaluating the microarchitectural tradeoffs between kernel isolation and raw processing throughput in concurrent system runtimes.",
      date: "June 2026",
      tags: ["Operating Systems", "Concurrency", "Low Level"],
      sections: [
        {
          title: "The IPC Spectrum",
          content: "By default, operating systems strictly isolate process address boundaries to guarantee stability and security. However, complex systems architectures (such as distributed databases or microservice processes) frequently need to coordinate. Inter-Process Communication (IPC) provides the pathways for this coordination, falling into two primary architectural paradigms: Message Passing and Shared Memory."
        },
        {
          title: "Message Passing: Safety and Kernel Control",
          content: "Message passing relies on explicit channel utilities managed via system calls (such as UNIX pipes, message queues, or local sockets). To send data, Process A copies information into a kernel-space buffer, and Process B executes a reading system call to clone that data into its own private user-space stack. While this separation makes synchronization trivial and prevents race conditions, the continuous user-to-kernel boundary crossings introduce noticeable execution context overhead."
        },
        {
          title: "Shared Memory: Maximum Throughput",
          content: "Shared Memory completely eliminates the kernel copy bottleneck. During initialization, the OS maps a shared region of physical memory frames into the page tables of multiple separate processes. Once established, processes read and write to this segment at raw hardware speeds without invoking system calls. This mechanism provides the absolute lowest latency boundaries for moving heavy data blocks across running processes."
        },
        {
          title: "The Synchronization Cost",
          content: "The extreme performance of Shared Memory introduces significant architectural complexity. Because the kernel no longer orchestrates data access boundaries, applications must implement their own low-level synchronization models. Developers must deploy atomic operations, mutex locks, or conditional semaphores to protect against memory corruption and data races, balancing memory speed with programmatic safety."
        }
      ],
      reference: "",
      github: "",
      demo: ""
    },
    {
      slug: "competitive-programming-systems",
      title: "From Codeforces to Core Systems: Applying Competitive Programming Tricks to Systems Design",
      subtitle: "How constraints from algorithmic contests translate directly into building memory-efficient kernels, low-overhead network tools, and predictable execution loops.",
      date: "May 2026",
      tags: ["Algorithms", "Systems Design", "Competitive Programming"],
      sections: [
        {
          title: "Bridging the Divide",
          content: "Competitive programming (CP) is often criticized for producing unmaintainable, 'one-off' code solutions optimized purely for competitive judges like Codeforces or LeetCode. However, the deep restrictions enforced by these judges—such as rigid 256MB memory ceilings and strict 1.0-second execution intervals—force a developer to master low-level memory layout control and cache-conscious computational paths."
        },
        {
          title: "Bit Manipulation and Bitmasks as Primitives",
          content: "In algorithmic competitions, space and state representations are routinely condensed into individual integer variables using bitmasks. In systems engineering, this translates directly into optimizing low-overhead configuration flags, hardware emulator register files (like mapping individual bits for NES CPU/PPU status flags), and tracking disk allocation bitmaps inside content-addressable block storage layouts."
        },
        {
          title: "Bypassing Dynamic Allocation Constraints",
          content: "A major cause of non-deterministic performance spikes in production software is frequent runtime heap allocation (`malloc` or `new`). CP contests teach developers to avoid allocations by utilizing statically-allocated fixed-size arrays or arena allocators. Applying this pattern to real-time engines—such as low-latency video streaming frameworks or emulator network queues—safeguards performance against memory fragmentation and garbage collection interference."
        },
        {
          title: "Algorithmic Precision in Network Protocols",
          content: "Familiarity with tracking complex multi-pointer data states helps immensely when developing custom stateful streaming protocols over raw TCP sockets. The precise management of sliding windows, stream boundary flags, packet fragment stitching, and offset index corrections mirrors the exact logic needed to debug intricate data structure implementations under stressful contest countdown parameters."
        }
      ],
      reference: "",
      github: "",
      demo: ""
    },
    {
      slug: "matching-engine-architecture",
      title: "Designing an appropriate Matching Engine for a orderbook",
      subtitle: "Why deterministic execution, single-writer architecture, and asynchronous communication form the foundation of modern electronic exchanges.",
      date: "July 2026",
      tags: ["C++", "Systems Design", "Distributed Systems"],
      sections: [
        {
          title: "Building for Determinism",
          content: "A matching engine is more than an order book capable of pairing buy and sell orders. Real electronic exchanges must guarantee deterministic execution, preserve price-time fairness, and process thousands of client requests without allowing concurrency to alter market state. This project was designed around those principles by separating networking, order processing, and market data distribution into independent components, allowing each subsystem to focus on a single responsibility while keeping the overall architecture modular and predictable."
        },
        {
          title: "Why a Single Matching Thread?",
          content: "Although modern processors offer abundant parallelism, allowing multiple threads to modify the order book simultaneously introduces race conditions and makes execution dependent on operating system scheduling. Instead, every incoming client request is serialized into a command and pushed through a thread-safe queue, where a dedicated matching thread processes them sequentially. Restricting the order book to a single writer eliminates lock contention, guarantees deterministic execution, and naturally enforces strict price-time priority for every trade."
        },
        {
          title: "Designing an Efficient Order Book",
          content: "Rather than storing all active orders in a single collection, the order book groups orders into ordered price levels while maintaining FIFO queues within each level. This organization allows the engine to immediately locate the best bid or ask while preserving execution fairness among orders at the same price. Active orders are additionally indexed by their unique identifiers, allowing cancellations and modifications to be performed without traversing the entire book, significantly reducing latency on common operations."
        },
        {
          title: "Asynchronous Communication and Binary Protocols",
          content: "To prevent networking from impacting execution latency, client communication, order matching, and market data broadcasting operate as separate concurrent components connected through guarded blocking queues. A compact binary protocol replaces text-based serialization, reducing parsing overhead and unnecessary memory allocations while allowing messages to be reconstructed safely over TCP's continuous byte stream. Once trades are executed, market events are published asynchronously to dedicated broadcaster threads, ensuring that slow subscribers never interfere with the exchange's critical matching path."
        }
      ],
      reference: "https://akshat3rya.vercel.app/projects/matching-engine",
      github: "https://github.com/akshat3rya/orderbook",
      demo: ""
    },
    {
      slug: "wtgit-architecture",
      title: "Building a Lightweight Version Control System",
      subtitle: "How a simple, fail-safe architecture can recreate the core ideas behind Git while remaining compact, efficient, and easy to understand.",
      date: "July 2026",
      tags: ["C++", "Version Control", "Systems Design"],
      sections: [
        {
          title: "Keeping It Lightweight",
          content: "Worse Than Git was designed with the belief that a version control system does not need to replicate every feature of Git to be useful. Instead of implementing distributed workflows, pack files, or complex object graphs, the project focuses on the operations developers rely on most—staging files, creating commits, inspecting history, restoring snapshots, and reverting changes. By deliberately limiting the scope, the implementation stays compact and easy to follow while still demonstrating the core concepts that power modern version control systems. The result is a codebase that emphasizes clarity without sacrificing the workflows developers expect."
        },
        {
          title: "Fail Fast, Not Later",
          content: "Rather than attempting to recover from inconsistent repository states after something goes wrong, WTGit validates every operation before modifying data. Commands verify repository initialization, ensure metadata is present, reject duplicate staging operations, and prevent commits whenever the repository enters an invalid state. Catching problems early keeps the repository predictable and eliminates the need for complicated recovery logic. This defensive approach simplifies the implementation while making it significantly harder for users to accidentally corrupt repository history."
        },
        {
          title: "Storing Snapshots Efficiently",
          content: "Instead of maintaining complex delta chains or tracking every filesystem operation individually, WTGit stores immutable snapshots identified by SHA-1 hashes. Identical file contents naturally resolve to the same object, eliminating redundant storage while keeping lookups straightforward. Buffered file operations further reduce memory usage by avoiding unnecessary allocations when processing larger files. Although intentionally minimal, this storage model demonstrates how content-addressable systems provide both efficiency and integrity without requiring heavyweight indexing or metadata management."
        },
        {
          title: "Easy to Read, Easy to Extend",
          content: "One of the project's primary goals was to make the internals approachable. Repository management, hashing, filesystem operations, and command execution are separated into independent modules with clearly defined responsibilities, making the flow of data easy to follow. This modular structure keeps the implementation maintainable today while leaving room for future additions such as branching, merging, remote synchronization, or object compression. Rather than hiding the underlying mechanics behind layers of abstraction, WTGit exposes them through a clean and lightweight architecture that is simple to understand yet flexible enough to evolve."
        }
      ],
      reference: "https://akshat3rya.vercel.app/projects/worse-than-git",
      github: "https://github.com/akshat3rya/wtgit",
      demo: ""
    },
    {
      slug: "vnes-architecture",
      title: "Building a Modular NES Emulator",
      subtitle: "How separating the CPU, PPU, memory bus, and cartridge hardware creates an emulator that is accurate today and extensible for tomorrow.",
      date: "July 2026",
      tags: ["C++", "Emulation", "Systems Design"],
      sections: [
        {
          title: "Keeping It Modular",
          content: "One of the primary goals of vNES was to mirror the architecture of the original NES rather than simply emulate its behavior. Instead of building a monolithic emulator, every major hardware component—the 6502 CPU, the 2C02 Picture Processing Unit (PPU), the Audio Processing Unit (APU), the system bus, and cartridge mappers—is implemented as an independent module with clearly defined responsibilities. This separation keeps each component focused on emulating a single piece of hardware while making the overall codebase significantly easier to reason about. More importantly, new hardware features or debugging tools can be introduced without requiring large architectural changes throughout the emulator."
        },
        {
          title: "Accuracy Over Shortcuts",
          content: "The heart of the emulator is a software implementation of the MOS 6502 processor, faithfully reproducing its instruction set, addressing modes, status flags, and cycle timing. Rather than translating instructions into higher-level operations, the CPU executes them exactly as the original hardware would, allowing commercial ROMs to behave predictably. The PPU follows the same philosophy by reproducing the console's rendering pipeline instead of drawing frames directly, making sprite evaluation, background rendering, scrolling, and register interactions closely resemble the behavior of the physical NES hardware."
        },
        {
          title: "Built Around the Hardware",
          content: "Communication between components is handled through a central system bus, allowing the CPU, PPU, APU, controllers, RAM, and cartridge to interact exactly as they would on the original console. This abstraction removes direct dependencies between hardware modules while making cartridge mappers interchangeable through a shared interface. As a result, supporting additional mapper implementations becomes largely self-contained, allowing new games to run without modifying the emulator core itself. The same architecture also simplifies future additions such as save states, debugging facilities, and controller remapping by exposing well-defined hardware boundaries."
        },
        {
          title: "Easy to Read, Easy to Extend",
          content: "Although the emulator already supports multiple cartridge mappers and faithfully reproduces much of the original hardware, its architecture was intentionally designed with future development in mind. Planned additions include a ROM browser for easier game management, configurable controller mappings, save and load state functionality, integrated breakpoints and debugging tools, broader mapper support, and a modern CMake build system with automated testing and continuous integration. By keeping the emulator modular from the beginning, these improvements can be introduced incrementally without requiring substantial changes to the core CPU, PPU, or memory subsystem."
        }
      ],
      reference: "https://akshat3rya.vercel.app/projects/vnes",
      github: "https://github.com/akshat3rya/vNES",
      demo: ""
    },
    {
      slug: "markov-tab-recommender-architecture",
      title: "Why Markov Chains Still Beat Heavy Models for Tab Recommendation",
      subtitle: "Using probabilistic state transitions instead of deep learning to build a browser recommender that is lightweight, explainable, and delivers constant-time predictions.",
      date: "July 2026",
      tags: ["Machine Learning", "Algorithms", "Chrome Extensions"],
      sections: [
        {
          title: "Why Markov Chains?",
          content: "A Markov Chain models a system by assuming that the probability of the next state depends only on the current state and a set of observed transition frequencies. While this assumption appears restrictive, it is surprisingly effective for sequential human behavior such as browsing patterns, where users naturally move between a relatively stable set of websites and workflows. Unlike deep learning models that require millions of parameters and extensive training, a Markov model learns directly from observed transitions, producing interpretable probabilities that can be updated incrementally as new browsing data becomes available. Its mathematical simplicity makes it particularly well suited for recommendation systems where low latency and predictable behavior are more valuable than unnecessarily complex inference."
        },
        {
          title: "Making It Work in Practice",
          content: "Real browsing behavior is rarely as clean as theoretical models suggest, so the recommender extends the traditional Markov formulation with additional contextual dimensions such as browsing history depth, time of day, and weekday groupings. These features allow identical website transitions to produce different recommendations depending on user context while preserving the lightweight nature of the underlying model. When a particular state has little or no historical data, fallback strategies progressively reduce the amount of contextual information required, ensuring that the extension continues producing meaningful recommendations instead of failing because an exact state has never been observed."
        },
        {
          title: "Training Offline, Serving Online",
          content: "The recommendation pipeline is intentionally divided into two stages. A lightweight Chrome extension continuously logs browsing activity in the background, while an offline Python and Node.js pipeline processes those logs into compressed transition matrices. Once training is complete, the generated model is shipped directly with the extension, allowing the runtime component to perform only fast lookups rather than expensive statistical computations. Separating data collection, model generation, and inference keeps the browser extension responsive while making the training process completely independent of the user's browsing session."
        },
        {
          title: "Built for Constant-Time Decisions",
          content: "Once the transition tables have been generated, every recommendation reduces to a direct lookup followed by selecting the highest-probability candidates, giving the extension effectively constant-time inference regardless of the amount of historical data collected. This makes the system significantly more predictable than transformer-based recommendation models, whose computational cost grows with sequence length and model size while requiring substantially more memory and processing power. For a constrained environment such as a browser extension, where recommendations must appear instantly without impacting the user's workflow, a compact probabilistic model provides a far more practical balance of speed, explainability, and accuracy than modern deep learning alternatives."
        }
      ],
      reference: "https://akshat3rya.vercel.app/projects/tab-recommender",
      github: "https://github.com/akshat3rya/tab-recommender-system",
      demo: ""
    },
    {
      slug: "whack-a-storage-architecture",
      title: "Building a Peer-to-Peer Distributed Storage System",
      subtitle: "How content-addressable storage, streaming encryption, and modular networking combine to build a lightweight decentralized file storage platform.",
      date: "July 2026",
      tags: ["Go", "Distributed Systems", "Networking"],
      sections: [
        {
          title: "Keeping It Decentralized",
          content: "The primary objective of Whack-A-Storage was to remove the dependence on a central storage server while keeping the overall architecture lightweight and easy to understand. Every node in the network acts as both a client and a server, capable of storing its own files while responding to requests from peers. Instead of tightly coupling storage, networking, and cryptography into a single component, each subsystem operates independently and communicates through simple interfaces. This separation keeps the codebase modular while making it straightforward to replace or extend individual pieces, such as introducing new transport layers or replication strategies without affecting the storage engine itself."
        },
        {
          title: "Finding Files Efficiently",
          content: "Rather than organizing files by their original names, the storage layer adopts a content-addressable design where each key is transformed into a deterministic hash and mapped onto a nested directory structure. This approach guarantees that identical content always resolves to the same storage location while avoiding inefficient flat directory layouts as the repository grows. More importantly, deterministic addressing allows every node in the network to independently calculate where a file belongs without maintaining additional lookup tables, reducing metadata overhead and simplifying synchronization between peers."
        },
        {
          title: "Streaming Instead of Buffering",
          content: "Large files can quickly become expensive if they must be loaded entirely into memory before encryption or transmission. To avoid this, the project treats every file as a continuous stream. AES-CTR encryption operates directly on streaming data while prepending the initialization vector to the ciphertext, allowing peers to decrypt incoming files immediately without additional metadata exchanges. The same streaming philosophy extends to network transfers, where files are copied directly between disk and socket using Go's io.Reader and io.Writer abstractions, keeping memory consumption low regardless of file size."
        },
        {
          title: "Built to Grow",
          content: "The networking layer is intentionally implemented as an independent transport abstraction rather than embedding TCP logic directly into the storage engine. Message encoding, peer discovery, transport management, cryptographic operations, and file storage all remain isolated behind well-defined interfaces, making the system considerably easier to evolve. This modular design leaves room for future improvements such as automatic peer discovery, replication policies, distributed consensus, stronger hashing algorithms, compression, or alternative transport protocols, all without requiring fundamental changes to the core storage architecture."
        }
      ],
      reference: "https://akshat3rya.vercel.app/projects/whack-a-storage",
      github: "https://github.com/akshat3rya/whack-a-storage",
      demo: ""
    }
  ];
  
  export default articleDetails;
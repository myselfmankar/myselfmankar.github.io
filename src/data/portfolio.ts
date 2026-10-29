export const HERO_CONTENT =
  "I build and debug backend systems, real-time data pipelines, and the infrastructure that keeps services dependable when things go wrong.";

export const ABOUT_TEXT =
  "I'm a computer engineering student (graduating 2027) who's spent my internships building backend systems that have to stay reliable under real-world messiness — flaky networks, concurrent requests, long-running processes that can't just restart and lose everything. At Golain, I worked on live video/telemetry pipelines for remote robot control. At ATG, I sped up an AI video-generation pipeline and automated a manual document workflow end-to-end. Outside of work, I build distributed systems projects for fun — an IoT backend that processes real-time sensor data from industrial devices, and an AI shopping agent that handles real payments safely. I'm looking for new-graduate opportunities in software engineering, backend systems, cloud infrastructure, and SRE.";

export const SKILLS = [
  // Languages
  {
    name: "Go",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    category: "languages",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "languages",
  },

  // Cloud & Infra
  {
    name: "AWS (Lambda)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "cloud",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "cloud",
  },
  {
    name: "Cloudflare Workers",
    icon: "https://cdn.simpleicons.org/cloudflare",
    category: "cloud",
  },

  // Systems & Messaging
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: "systems",
  },
  {
    name: "Networking (TCP/IP, DNS, HTTP)",
    icon: "https://cdn.simpleicons.org/wireshark",
    category: "systems",
  },
  {
    name: "gRPC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-plain.svg",
    category: "systems",
  },
  {
    name: "MQTT",
    icon: "https://cdn.simpleicons.org/mqtt",
    category: "systems",
  },
  {
    name: "REST APIs",
    icon: "https://cdn.simpleicons.org/fastapi",
    category: "systems",
  },
  {
    name: "Event-Driven Architecture",
    icon: "https://cdn.simpleicons.org/apachekafka",
    category: "systems",
  },
  {
    name: "Microservices",
    icon: "https://cdn.simpleicons.org/kubernetes",
    category: "systems",
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "database",
  },

  // Tools
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "tools",
  },
  {
    name: "Playwright",
    icon: "https://cdn.simpleicons.org/playwright",
    category: "tools",
  },
];

export const PROJECTS = [
  {
    title: "FieldPulse — Distributed Industrial IoT Backend",
    image: "",
    description:
      "A multi-service industrial IoT backend that ingests, routes, and persists telemetry from connected devices. Built in Go with gRPC, MQTT, and PostgreSQL.",
    technologies: ["Go", "gRPC", "MQTT", "PostgreSQL", "Microservices"],
    category: "backend",
    githubLink: "https://github.com/myselfmankar/FieldPulse",
    websiteLink: "",
  },
  {
    title: "AgentCart — Autonomous Shopping Agent",
    image: "",
    description:
      "An AI agent that shops for you — compares offers, waits on unmet goals and resumes automatically when prices or inventory change, and pays safely through Razorpay with signed spending limits so it can't go rogue. Built from natural-language intent through merchant discovery to checkout.",
    technologies: ["Python", "Event-Driven Architecture", "AP2", "Razorpay", "Agentic AI"],
    category: "backend",
    githubLink: "https://github.com/myselfmankar/agentcart",
    websiteLink: "",
    videoLink: "https://youtu.be/Ohklz4oMt0o",
  },
  {
    title: "ros2-jazzy — Edge Telemetry Ingestion",
    image: "",
    description:
      "An edge-side endpoint that collects sensor and robot telemetry data in real time and forwards it for processing — the data-collection layer any robotics or IoT backend depends on.",
    technologies: ["ROS 2", "Python", "Telemetry", "Edge Computing"],
    category: "backend",
    githubLink: "https://github.com/myselfmankar/ros2-jazzy",
    websiteLink: "",
  },
  {
    title: "PhotoStack — Self-Hosted Photo Library",
    image: "/projects/photostack.webp",
    description:
      "A self-hosted photo library that reads EXIF data to build a timeline, groups photos into albums, maps them by GPS, and finds duplicates even when resized or re-saved. FastAPI backend with SQLAlchemy, a TypeScript frontend, and integrity checks (file-type verification, SHA-256 hashing, edit detection) running underneath.",
    technologies: ["Python", "FastAPI", "TypeScript", "SQLAlchemy", "Docker"],
    category: "fullstack",
    githubLink: "https://github.com/myselfmankar/photostack",
    websiteLink: "https://myselfmankar.github.io/photostack/",
  },
];

export const RESEARCH = [
  {
    title: "Friend Recommendation using Graph Embeddings for Social Media",
    venue: "IEEE, 2026",
    authors: "Vaishnav Mankar, Omkar Mutyalwar, Abhishek Bobade, Madhuri Wakode",
    abstract:
      "Real-time friend suggestions at social-network scale come down to a trade-off: accurate but slow, or fast but approximate. We built both — a neural network classifier and a fast approximate-nearest-neighbor retrieval system — on the same graph data, and measured the difference directly. The comparison highlights the latency–accuracy trade-off between model-based prediction and retrieval-based recommendation.",
    paperLink: "https://ieeexplore.ieee.org/abstract/document/11484910",
    githubLink: "https://github.com/myselfmankar/graph_embedding_recommendation",
  },
];

export const EXPERIENCE = [
  {
    role: "Backend Engineering Intern",
    company: "Golain",
    period: "May 2026 – Aug 2026",
    points: [
      "Integrated a Go real-time-communication service with a React dashboard over REST APIs, giving operators live robot video, audio, telemetry, and control for remote fleet operation.",
      "Built a one-click Copy cURL feature in the RPC UI so engineers can reproduce failing device requests directly in Postman, removing manual browser network-tab inspection from the debugging workflow.",
    ],
  },
  {
    role: "AI Software Developer Intern",
    company: "ATG",
    period: "Aug 2025 – May 2026",
    points: [
      "Sped up an AWS Lambda video-generation workflow by replacing sequential slide processing with concurrent processing, cutting end-to-end execution time.",
      "Automated generation of personalized AI-based notes and Markdown-to-PDF conversion using HTML and Playwright, turning a manual document workflow into a repeatable pipeline.",
    ],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "",
  email: "vaishnavmankar04@gmail.com",
  social: {
    github: "https://github.com/myselfmankar",
    linkedin: "https://www.linkedin.com/in/vaishnav-mankar",
    twitter: "",
    youtube: "https://www.youtube.com/@Vaishnav-Mankar",
    neetcode: "https://neetcode.io/user/AstuteSpeeder675",
  },
};

export const SKILLS_BY_CATEGORY = {
  languages: SKILLS.filter((skill) => skill.category === "languages"),
  cloud: SKILLS.filter((skill) => skill.category === "cloud"),
  systems: SKILLS.filter((skill) => skill.category === "systems"),
  database: SKILLS.filter((skill) => skill.category === "database"),
  tools: SKILLS.filter((skill) => skill.category === "tools"),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  backend: PROJECTS.filter((project) => project.category === "backend"),
};

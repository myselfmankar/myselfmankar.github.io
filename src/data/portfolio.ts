export const HERO_CONTENT =
  "I'm Vaishnav Mankar, a Computer Engineering student at Pune Institute of Computer Technology (PICT), graduating in 2027 with a 9.02/10 CGPA. I've completed two internships and built projects across backend development, data processing, and AI.";

export const ABOUT_TEXT =
  "I'm a PICT Computer Engineering student graduating in 2027 with a 9.02/10 CGPA. During internships at Golain and ATG, I worked on a robot operations dashboard, live telemetry, an AWS Lambda video-generation workflow, and document automation. My projects let me keep practising backend development, databases, APIs, Linux, and AI-related workflows. I'm looking for my first full-time Software Engineer role, with a particular interest in backend and cloud work while remaining open to general software engineering opportunities.";

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
    name: "Event-Driven Workflows",
    icon: "https://cdn.simpleicons.org/apachekafka",
    category: "systems",
  },
  {
    name: "Microservices (Project Work)",
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
      "An industrial IoT backend project for ingesting and storing telemetry from connected devices. Uses Go, gRPC, MQTT, and PostgreSQL to connect services and persist device data.",
    technologies: ["Go", "gRPC", "MQTT", "PostgreSQL", "Microservices"],
    category: "backend",
    githubLink: "https://github.com/myselfmankar/FieldPulse",
    websiteLink: "",
  },
  {
    title: "AgentCart — Autonomous Shopping Agent",
    image: "",
    description:
      "A prototype shopping agent that compares offers and explores a payment flow with signed spending limits. Connects natural-language intent, merchant discovery, and checkout in one project.",
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
      "A small ROS 2 project that collects robot sensor telemetry and forwards it to a backend for processing. Built while experimenting with ROS 2 Jazzy and edge-side data collection.",
    technologies: ["ROS 2", "Python", "Telemetry", "Edge Computing"],
    category: "backend",
    githubLink: "https://github.com/myselfmankar/ros2-jazzy",
    websiteLink: "",
  },
  {
    title: "PhotoStack — Self-Hosted Photo Library",
    image: "/projects/photostack.webp",
    description:
      "A self-hosted photo library that organizes images by timeline, album, and GPS metadata, with duplicate detection. Built with a FastAPI backend, SQLAlchemy, and a TypeScript frontend.",
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
      "Connected a Go real-time communication service to a React dashboard, helping operators access live robot video, audio, and telemetry for remote operation.",
      "Added a one-click Copy cURL feature so engineers could reproduce device requests in Postman while debugging.",
    ],
  },
  {
    role: "AI Software Developer Intern",
    company: "ATG",
    period: "Aug 2025 – May 2026",
    points: [
      "Improved an AWS Lambda video-generation workflow by processing slides concurrently instead of sequentially.",
      "Automated AI-generated notes and Markdown-to-PDF conversion with HTML and Playwright, making a manual document workflow repeatable.",
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

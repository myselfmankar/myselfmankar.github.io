export const HERO_CONTENT = "Building scalable and reliable cloud platforms from infrastructure to production. Cloud, DevOps & SRE Engineer passionate about automation, Kubernetes, observability, cloud security, and highly available systems across AWS and Google Cloud Platform.";

export const ABOUT_TEXT = "I design, automate, and operate reliable cloud platforms that enable teams to deliver software efficiently and at scale. My journey began with software development before evolving into Cloud, DevOps, and Site Reliability Engineering, where I focus on building scalable infrastructure, automating operations, and improving system reliability. I work extensively across AWS and Google Cloud Platform (GCP), leveraging Terraform, Kubernetes, Docker, and CI/CD pipelines to deliver secure and resilient environments. My experience includes cloud networking, load balancing, Cloud Armor security policies, DDoS protection, private connectivity across projects, infrastructure automation, observability, and performance monitoring. Using tools such as Jenkins, GitHub Actions, GitLab CI/CD, Prometheus, Grafana, Dynatrace, Site24x7, and Bash scripting, I help organizations improve reliability, reduce operational overhead, and accelerate software delivery.";

export const SKILLS = [
  // Cloud
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud",
    level: 90,
  },
  {
    name: "Google Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    category: "cloud",
    level: 90,
  },

  // Containers
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "containers",
    level: 90,
  },
  {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    category: "containers",
    level: 90,
  },

  // Infrastructure
  {
    name: "Terraform",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    category: "infrastructure",
    level: 90,
  },
  {
    name: "Ansible",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg",
    category: "infrastructure",
    level: 90,
  },
  {
    name: "AWS CloudFormation",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg",
    category: "infrastructure",
    level: 90,
  },

  // DevOps / SRE
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Jenkins",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "GitHub Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "GitLab CI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "AWS CodePipeline",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "AWS CodeBuild",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Prometheus",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Grafana",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    category: "devops",
    level: 90,
  },
  {
    name: "Dynatrace",
    icon: "https://cdn.simpleicons.org/dynatrace",
    category: "devops",
    level: 90,
  },
  {
    name: "Bash Scripting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    category: "devops",
    level: 90,
  },

  // Development
{
  name: "Python",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  category: "development",
  level: 90,
},
{
  name: "Java",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  category: "development",
  level: 90,
},
{
  name: "JavaScript",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  category: "development",
  level: 90,
},
{
  name: "Node.js",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  category: "development",
  level: 90,
},
{
  name: "React",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  category: "development",
  level: 90,
},

 // Databases
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "database",
    level: 90,
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "database",
    level: 90,
  },
];

export const PROJECTS = [
  {
    title: 'Amazon Clone — EKS & ArgoCD Deployment',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Deployed a production-grade Amazon Clone on AWS EKS with full GitOps automation via ArgoCD. Integrated CI/CD pipelines using GitHub Actions, containerized microservices with Docker, and managed configuration using Kustomize for seamless auto-sync deployments.',
    technologies: ['AWS EKS', 'Kubernetes', 'ArgoCD', 'GitHub Actions', 'Kustomize', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/amazon-clone-k8s-eks-argoCD',
    websiteLink: '',
  },
  {
    title: 'Next.js CI/CD Pipeline with Docker & Kubernetes',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed and containerized a Next.js application, deploying it to Kubernetes clusters using GitHub Actions for automated CI/CD. Implemented multi-stage Docker builds, health probes, resource limits, and rolling updates for high availability.',
    technologies: ['Next.js', 'Docker', 'Kubernetes', 'GitHub Actions', 'GHCR'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka/nextjs-docker-kubernetes-app',
    websiteLink: '',
  },
  {
    title: 'Realtime Chat App — MERN + Socket.IO',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Developed a real-time chat application using the MERN stack with Socket.IO for instant communication. Implemented custom hooks and Zustand for efficient state management. Dockerized for deployment.',
    technologies: ['React', 'Node', 'Express', 'MongoDB', 'Socket.IO', 'Zustand', 'Docker'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Mern_ChatApp',
    websiteLink: 'https://mern-chatapp-rfj5.onrender.com/',
  },
  {
    title: 'Cloud Infrastructure Automation',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Automated AWS infrastructure provisioning using Terraform with reusable modules for EC2, VPC, and S3. Integrated CI/CD with GitHub Actions for continuous deployment of cloud environments.',
    technologies: ['AWS', 'Terraform', 'GitHub Actions', 'EC2', 'S3'],
    category: 'devops',
    githubLink: 'https://github.com/neerajnakka',
    websiteLink: '',
  },
  {
    title: 'Netflix Clone using React',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Built a Netflix clone with React, Tailwind CSS, and Firebase. Integrated React Router for seamless navigation and Firebase for authentication.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/NetflixReact_Clone',
    websiteLink: 'https://netflix-clone-wi5g.onrender.com/',
  },
  {
    title: 'Modern Portfolio with 3D Animations',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Designed and developed a modern portfolio website featuring smooth animations, 3D effects powered by Three.js, and a sleek user interface. Leveraged Tailwind CSS for responsive design, React for dynamic interactivity, and Zustand for state management. The site incorporates Framer Motion for fluid transitions.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'HTML', 'CSS'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/Neeraj_Portfolio',
    websiteLink: 'https://neerajnakka.onrender.com/',
  },
  {
    title: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Dynamic React portfolio showcasing projects with Tailwind CSS design and Framer Motion animations.',
    technologies: ['Tailwind CSS', 'React.js', 'React Router Dom', 'Framer Motion'],
    category: 'fullstack',
    githubLink: 'https://github.com/neerajnakka/PortFolio_React/tree/master',
    websiteLink: 'https://neerajchandra.onrender.com/',
  },
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 **********',
  email: 'neerajnakka.n@gmail.com',
  social: {
    github: 'https://github.com/neerajnakka',
    linkedin: 'https://linkedin.com/in/neerajchandran',
    twitter: 'https://twitter.com/neerajnakka',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};

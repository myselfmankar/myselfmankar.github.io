import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import Blog from './pages/Blog';
import Research from './pages/Research';
import { Contact } from './pages/Contact';
import './App.css';

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Vaishnav Mankar | Software Engineer — Backend & Cloud',
    description: 'Software engineer focused on backend systems, cloud infrastructure, distributed systems, Linux, and networking.',
  },
  '/about': {
    title: 'About | Vaishnav Mankar',
    description: 'Background, internship experience, and engineering principles of Vaishnav Mankar.',
  },
  '/skills': {
    title: 'Skills | Vaishnav Mankar',
    description: 'Programming languages, cloud tools, Linux, networking, messaging, and databases.',
  },
  '/projects': {
    title: 'Projects | Vaishnav Mankar',
    description: 'Selected backend, distributed systems, edge telemetry, and full-stack projects.',
  },
  '/blog': {
    title: 'Technical Notes | Vaishnav Mankar',
    description: 'Planned technical notes on Linux, algorithms, and networking, with articles published on Medium.',
  },
  '/research': {
    title: 'Research | Vaishnav Mankar',
    description: 'Research work and paper links from Vaishnav Mankar.',
  },
  '/contact': {
    title: 'Contact | Vaishnav Mankar',
    description: 'Contact Vaishnav Mankar about software engineering, backend, cloud, and infrastructure roles.',
  },
};

const RouteMetadata = () => {
  const location = useLocation();

  useEffect(() => {
    const page = PAGE_METADATA[location.pathname] ?? PAGE_METADATA['/'];
    document.title = page.title;

    let descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = page.description;
  }, [location.pathname]);

  return null;
};


function App() {
  return (
    <Router>
      <RouteMetadata />
      <div className="min-h-screen bg-bg-page text-neutral-200 font-sans">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

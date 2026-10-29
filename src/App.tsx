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
    title: "Vaishnav Mankar | PICT CE '27 | Software Engineer",
    description: 'PICT Computer Engineering student graduating in 2027 with a 9.02/10 CGPA, two internships, and hands-on projects. Seeking new-grad software engineering roles.',
  },
  '/about': {
    title: "About Vaishnav Mankar | PICT CE '27",
    description: 'Meet Vaishnav Mankar, a PICT Computer Engineering student graduating in 2027, with a 9.02/10 CGPA and two internship experiences.',
  },
  '/skills': {
    title: 'Skills | Vaishnav Mankar',
    description: 'Technologies practised in internships and projects, including Python, Go, PostgreSQL, Linux, networking, Docker, and APIs.',
  },
  '/projects': {
    title: 'Projects | Vaishnav Mankar',
    description: 'Projects built across coursework, internships, backend development, IoT telemetry, AI workflows, and full-stack development.',
  },
  '/blog': {
    title: 'Technical Notes | Vaishnav Mankar',
    description: 'Planned short notes on Linux command-line data wrangling, LCA in trees and BSTs, and networking revision.',
  },
  '/research': {
    title: 'Research | Vaishnav Mankar',
    description: 'Undergraduate research and a published IEEE paper by Vaishnav Mankar and co-authors.',
  },
  '/contact': {
    title: "Contact Vaishnav Mankar | PICT CE '27",
    description: 'Contact Vaishnav Mankar, a PICT Computer Engineering student graduating in 2027, about new-grad Software Engineer opportunities.',
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

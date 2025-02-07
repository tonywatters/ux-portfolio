import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ProjectDetail from './components/ProjectDetail';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const name = "Tony Watters";
  const basename = process.env.NODE_ENV === 'production' ? '/ux-portfolio' : '/';

  const projects: Project[] = [
    {
      id: 'search',
      title: "Learning Pool Search Filters",
      description: "A comprehensive filtering interface was designed for the Learning Experience Platform's search functionality. ",
      tags: ["UX Research", "User Testing", "Mobile Design", "Wireframing", "Prototyping"],
      image: process.env.NODE_ENV === 'production' ? "/ux-portfolio/images/pages/filters4.png" : "/images/pages/filter4.png"
    },
    {
      id: 'discover',
      title: "Public Discovery Page: Frontend for Guests",
      description: "Our goal is to maintain consistency with the current design of the Discover page while also optimizing user flows for registration and purchasing.",
      tags: ["UX Research", "User Testing", "Mobile Design", "Wireframing", "Prototyping"],
      image: process.env.NODE_ENV === 'production' ? "/ux-portfolio/images/pages/discover1.png" : "/images/pages/discover1.png"
    },
    {
      id: 'learning-pool',
      title: "LCMS Key Metrics feature",
      description: "The Key Metrics feature in the Content Details tab provides administrators with an overview of content performance, showing metrics like Total Learners, Completion Rate, and Success Rate.",
      tags: ["UX Research", "User Testing", "Mobile Design", "Wireframing", "Prototyping"],
      image: process.env.NODE_ENV === 'production' ? "/ux-portfolio/images/pages/keymetrics1.png" : "/images/pages/keymetrics1.png"
    },
    {
      id: 'legibility-articles',
      title: "Legibility of articles",
      description: "Users of the Vision website have voiced concerns about the degrading legibility of Vision articles",
      tags: ["UX Research", "User Testing", "Wireframing", "Prototyping"],
      image: process.env.NODE_ENV === 'production' ? "/ux-portfolio/images/cards/portfolio-1.jpg" : "/images/cards/portfolio-1.jpg"
    },
    {
      id: 'skills-accelerator',
      title: "Skills Accelerator",
      description: "The company needed to up-skill their workforce of nearly 60,000 Employees for future work.",
      tags: ["Mobile Design", "Wireframing", "Prototyping"],
      image: process.env.NODE_ENV === 'production' ? "/ux-portfolio/images/pages/Skills_1.jpg" : "/images/pages/Skills_1.jpg"
    }
  ];

  const HomePage = () => (
    <>
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
    </>
  );

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          name={name}
        />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
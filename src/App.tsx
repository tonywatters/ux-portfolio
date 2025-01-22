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

  const projects: Project[] = [
    {
      id: 'legibility-articles',
      title: "Legibility of articles",
      description: "Users of the Vision website have voiced concerns about the degrading legibility of Vision articles",
      tags: ["UX Research", "User Testing", "Wireframing", "Prototyping"],
      image: "/images/cards/portfolio-1.jpg"
    },
    {
      id: 'skills-accelerator',
      title: "Skills Accelerator",
      description: "The company needed to up-skill their workforce of nearly 60,000 Employees for future work.",
      tags: ["Mobile Design", "Wireframing", "Prototyping"],
      image: "/images/pages/Skills_1.jpg"
    },
    {
      id: 'learning-pool',
      title: "Learning Pool Design work",
      description: "Designed user-friendly interfaces and streamlined workflows for Learning Pool's platform, improving navigation and evidence upload processes.",
      tags: ["UX Research", "User Testing","Mobile Design", "Wireframing", "Prototyping"],
      image: "/images/pages/keymetrics1.png"
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
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
          name={name}
        />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/project/:id" 
              element={<ProjectDetail projects={projects} />} 
            />
          </Routes>
        </div>
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
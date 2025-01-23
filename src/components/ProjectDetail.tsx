import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ImageModal from './ImageModal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projectsData.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/ux-portfolio/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          <div className="flex gap-4">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('work')}
              className="text-gray-600 hover:text-gray-900"
            >
              Work
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </button>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <div className="mb-8">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full rounded-lg shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
          />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
          <p className="text-gray-600 mb-6">{project.challenge}</p>

          <h2 className="text-2xl font-semibold mb-4">Process</h2>
          <p className="text-gray-600 mb-6">{project.process}</p>
          
          {project.processImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {project.processImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Process step ${index + 1}`}
                  className="rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}

          <h2 className="text-2xl font-semibold mb-4">Solution</h2>
          <p className="text-gray-600 mb-6">{project.solution}</p>

          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p className="text-gray-600 mb-6">{project.results}</p>
          
          {project.resultImages && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {project.resultImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Result ${index + 1}`}
                  className="rounded-lg shadow-md cursor-pointer hover:opacity-95 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <ImageModal
        image={selectedImage || ''}
        alt="Project detail"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default ProjectDetail;
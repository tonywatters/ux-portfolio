import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import ImageModal from './ImageModal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (sectionId: string) => {
    navigate('/ux-portfolio/');  // Updated to include the correct base path
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
        
        {/* Rest of your component remains the same */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
        
        <div className="mb-8">
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full rounded-lg shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
          />
        </div>

        {/* ... rest of your existing JSX ... */}
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
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  name: string;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen, name }) => {
  const location = useLocation();
  
  const handleNavClick = (sectionId: string) => {
    if (location.pathname.includes('/project/')) {
      window.location.href = `/ux-portfolio/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">{name}</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('work')} 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Work
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => {
                handleNavClick('about');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleNavClick('work');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300"
            >
              Work
            </button>
            <button 
              onClick={() => {
                handleNavClick('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
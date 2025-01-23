import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Creating meaningful digital experiences through user-centered design
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-3xl">
            Hi, I'm Tony. A Senior product desiger with 10+ years of experience in creating innovative and intuitive digital solutions. 
            Specialized in user research, interaction design, and creating accessible experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { LinkedinIcon, MailIcon, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a Senior UX Designer passionate about creating user-centered digital experiences
              that solve real problems. With expertise in user research, interaction design,
              and usability testing, I help businesses build products that users love.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines analytical thinking with creative problem-solving,
              ensuring that every design decision is backed by user insights and data.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/tony-watters/" className="text-gray-600 hover:text-gray-900">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:contact@johndoe.com" className="text-gray-600 hover:text-gray-900">
                <MailIcon size={24} />
              </a>
              {/* <a href="#" className="text-gray-600 hover:text-gray-900">
                <ExternalLink size={24} />
              </a> */}
            </div>
          </div>
          <div>
            <img
              src="/images/tonywatters.png"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
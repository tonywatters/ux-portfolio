import React from 'react';
import { LinkedinIcon, MailIcon, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const imagePath = process.env.NODE_ENV === 'production'
    ? '/ux-portfolio/images/tonywatters.png'
    : '/images/tonywatters.png';

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
              For over a decade, I've bridged the gap between users and technology, simplifying complexity as a Senior Product Designer with a programming background. I've helped teams, mentored designers, and built scalable design systems. From discovery to user testing, I ensure every decision is user-focused and intentional. Collaboration is at the core of my work, aligning teams around a shared vision to drive innovation.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
            <div>
              <ul>
                <li>Visual Design</li>
                <li>Design Systems</li>
                <li>User Research</li>
                <li>Prototyping</li>
                <li>Web Development</li>
              </ul>
            </div>
            <br/>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/tony-watters/" className="text-gray-600 hover:text-gray-900">
                <LinkedinIcon size={24} />
              </a>
              <a href="mailto:contact@johndoe.com" className="text-gray-600 hover:text-gray-900">
                <MailIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <img
              src={imagePath}
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
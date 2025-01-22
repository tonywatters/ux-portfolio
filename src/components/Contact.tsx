import React from 'react';
import { MailIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(
      'Hi,\n\nI would like to discuss...'
    );
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <MailIcon size={32} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">Let's Connect</h3>
            <p className="text-gray-600 mb-4">
              I'm always interested in discussing new projects and opportunities.
            </p>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <MailIcon size={20} className="mr-2" />
              Send me an email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
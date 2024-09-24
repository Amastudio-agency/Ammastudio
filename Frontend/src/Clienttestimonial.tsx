

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ClientTestimonial: React.FC = () => {
  return (
    <div className="bg-black p-6 rounded-lg flex flex-col justify-center items-center h-auto">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-xl mr-2"
        />
        <h1 className="text-white text-xl font-semibold">Client Testimonial</h1>
      </div>
      {/* Three Parallel White Lines */}
      <div className="w-full border-t border-white mb-4"></div>

      {/* Centered Testimonial Text */}
      <div className="w-full flex flex-col items-center mb-6">
        <p className="text-white text-xl font-semibold text-center max-w-lg">
          This design agency redefined our brand with their
          <br />
          impeccable minimalist approach, truly
          <br />
          transforming our visual identity.
        </p>
      </div>

      {/* Circular Image and People Name */}
      <div className="flex flex-col items-center">
        <img
          src="https://i.postimg.cc/nL2GLfzP/AI-NAYA.png"  // Replace with actual image URL
          alt="Client"
          className="w-24 h-24 rounded-full border-4 border-white mb-2"
        />
        <p className="text-white text-lg font-semibold">John Doe</p>
      </div>

      <div className="w-full border-t border-white mt-6"></div>
    </div>
  );
};

export default ClientTestimonial;








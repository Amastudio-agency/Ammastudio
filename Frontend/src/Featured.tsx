

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Featured: React.FC = () => {
  return (
    <div className="bg-black p-4 rounded-lg flex flex-col justify-center h-auto">
      <div className="flex items-center mb-4">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-xl mr-2"
        />
        <h1 className="text-white text-xl font-semibold">Our method</h1>
      </div>
      {/* Three Parallel White Lines with Full-Height Hover Effect */}
      <div className="w-full">
        {/* Section 1 */}
        <div className="w-full mb-2 group relative">
          {/* Hover effect container */}
          <div className="absolute inset-0 group-hover:bg-gray-700 transition-colors duration-300 rounded"></div>
          <div className="w-full border-t border-white"></div>
          <div className="flex flex-row items-center mb-4 relative p-2">
            <h1 className="text-white text-xl font-semibold mr-4 z-10">01.</h1>
            <h1 className="text-white text-xl font-semibold z-10">Project idea</h1>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full mb-2 group relative">
          <div className="absolute inset-0 group-hover:bg-gray-700 transition-colors duration-300 rounded"></div>
          <div className="w-full border-t border-white"></div>
          <div className="flex flex-row items-center mb-4 relative p-2">
            <h1 className="text-white text-xl font-semibold mr-4 z-10">02.</h1>
            <h1 className="text-white text-xl font-semibold z-10">Brainstorming</h1>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full group relative">
          <div className="absolute inset-0 group-hover:bg-gray-700 transition-colors duration-300 rounded"></div>
          <div className="w-full border-t border-white"></div>
          <div className="flex flex-row items-center mb-4 relative p-2">
            <h1 className="text-white text-xl font-semibold mr-4 z-10">03.</h1>
            <h1 className="text-white text-xl font-semibold z-10">Execution</h1>
          </div>
          <div className="w-full border-t border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Featured;








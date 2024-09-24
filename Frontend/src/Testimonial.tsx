

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Featured: React.FC = () => {
  return (
    <div className="bg-black p-6 rounded-lg flex flex-col justify-center h-auto">
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white text-xl mr-2"
        />
        <h1 className="text-white text-xl font-semibold">Our team</h1>
      </div>
      {/* Three Parallel White Lines */}
      <div className="w-full border-t border-white mb-6"></div>

      {/* Three Cards */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
          <div className="w-full h-48">
            <img
              src="https://i.postimg.cc/SszRvcwf/car2.jpg"
              alt="Team Member 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-black text-lg font-semibold">Abubakkar</h2>
            <p className="text-gray-700 mt-2">Full Stack developer</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
          <div className="w-full h-48">
            <img
              src="https://i.postimg.cc/SszRvcwf/car2.jpg"
              alt="Team Member 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-black text-lg font-semibold">Muhammad nirmutulla</h2>
            <p className="text-gray-700 mt-2">Ui/ux designer</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
          <div className="w-full h-48">
            <img
              src="https://i.postimg.cc/SszRvcwf/car2.jpg"
              alt="Team Member 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-black text-lg font-semibold">Ashish Nagvanshi</h2>
            <p className="text-gray-700 mt-2">Full stack developer</p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white mt-6"></div>
    </div>
  );
};

export default Featured;








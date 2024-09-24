
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Header1: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-auto text-white p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full mb-4">
        <div className="flex-1 flex items-center mb-4 sm:mb-0">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-xl sm:text-2xl mr-2"
          />
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-wide">
            Our Services Included
          </h2>
        </div>

        <div className="flex-1 text-left sm:text-right">
          <p className="text-base sm:text-lg">
            Explore our range of services and hit us right away as soon as you
            find <br className="hidden sm:block" />
            the perfect one for you
          </p>
        </div>
      </div>

      {/* White Line */}
      <div className="w-full flex justify-center mb-6">
        <div className="w-full border-t border-white"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* Card 1 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">Web design</h3>
            <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUp} className="text-sm sm:text-lg" />
            </button>
          </div>

          {/* Paragraph in Card 1 */}
          <p className="text-xs sm:text-sm mb-4">
            Brief description of the service provided, explaining what it
            includes and why it's beneficial.
          </p>

          {/* White Line */}
          <div className="w-full flex justify-center mb-4 sm:mb-6">
            <div className="w-full border-t border-white"></div>
          </div>

          {/* Image in Card 1 */}
          <div className="mb-4">
            <img
              src="https://i.postimg.cc/4N3rRzGq/card2.jpg"
              alt="Web design example"
              className="w-full h-32 sm:h-40 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">Web design</h3>
            <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUp} className="text-sm sm:text-lg" />
            </button>
          </div>

          {/* Paragraph in Card 2 */}
          <p className="text-xs sm:text-sm mb-4">
            Brief description of the service provided, explaining what it
            includes and why it's beneficial.
          </p>

          {/* White Line */}
          <div className="w-full flex justify-center mb-4 sm:mb-6">
            <div className="w-full border-t border-white"></div>
          </div>

          {/* Image in Card 2 */}
          <div className="mb-4">
            <img
              src="https://i.postimg.cc/3RxxMkxB/car2.jpg"
              alt="Web design example"
              className="w-full h-32 sm:h-40 rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-semibold">Web design</h3>
            <button className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUp} className="text-sm sm:text-lg" />
            </button>
          </div>

          {/* Paragraph in Card 3 */}
          <p className="text-xs sm:text-sm mb-4">
            Brief description of the service provided, explaining what it
            includes and why it's beneficial.
          </p>

          {/* White Line */}
          <div className="w-full flex justify-center mb-4 sm:mb-6">
            <div className="w-full border-t border-white"></div>
          </div>

          {/* Image in Card 3 */}
          <div className="mb-4">
            <img
              src="https://i.postimg.cc/wxcc9P2b/mickey.jpg"
              alt="Web design example"
              className="w-full h-32 sm:h-40 rounded-lg object-cover "
            />
          </div>
        </div>
      </div>

      {/* Additional Image Section */}
      <div className="w-full mt-6 relative">
        <div className="relative w-full sm:w-1/4">
          <img
            src="https://i.postimg.cc/Xq3dsZqg/Whats-App-Image-2024-08-05-at-17-04-20.jpg"
            alt="Additional section"
            className="rounded-lg object-cover w-full h-32 sm:h-auto opacity-10"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
            <p className="text-lg sm:text-2xl font-bold text-center">
              OUR MISSION IS TO CREATE IMPACTFUL WEB EXPERIENCES THAT DRIVE RESULTS AND HELP YOUR BUSINESS THRIVE
            </p>
          </div>
          {/* Line parallel to paragraph */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="border-t-2 border-white w-3/4 ml-20 sm:ml-24"></div> {/* Adjusted margin-left */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;





import React from 'react';

// Define the Header component
const Header: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto text-white p-6">
      <h1 className="text-5xl font-bold text-center leading-tight tracking-wide mb-4">
        Your
        <br />
        Digital
        <br />
        Storytellers
      </h1>

      <p className="text-lg text-center mb-6">
        Engage and inspire with web design<br /> that tells your brand's unique story
      </p>

      <button className="bg-white text-black border border-white rounded-full px-6 py-2 hover:bg-gray-200 mb-6">
        View Our Work
      </button>

      {/* Image Frames */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-gray-300 rounded-lg overflow-hidden h-80 flex items-center">
          <img
            src="https://i.postimg.cc/SKVRZQ7m/af1.jpg"
            alt="Frame 1"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden h-80 flex items-center mt-4">
          <img
            src="https://i.postimg.cc/mkWQ42qK/af2.jpg"
            alt="Frame 2"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="border border-gray-300 rounded-lg overflow-hidden h-80 flex items-center">
          <img
            src="https://i.postimg.cc/RhmXRRM3/af3.jpg"
            alt="Frame 3"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Single Smaller Image Frame with Animation */}
      <div className="overflow-hidden w-full mb-6 flex justify-center gap-4">
        <div className="border border-gray-300  overflow-hidden h-22 w-100 flex items-center animate-move-down">
          <img
            src="https://i.postimg.cc/YqtBTxF1/framer1.png"
            alt="Frame 4"
            className="w-32 h-15 object-cover"
          />
        </div>



        <div className="border border-gray-300  overflow-hidden h-22 w-100 flex items-center animate-move-down">
          <img
            src="https://i.postimg.cc/YqtBTxF1/framer1.png"
            alt="Frame 4"
            className="w-32 h-15 object-cover"
          />
        </div>


        <div className="border border-gray-300  overflow-hidden h-22 w-100 flex items-center animate-move-down">
          <img
            src="https://i.postimg.cc/YqtBTxF1/framer1.png"
            alt="Frame 4"
            className="w-32 h-15 object-cover"
          />
        </div>

     
        <div className="border border-gray-300  overflow-hidden h-22 w-100 flex items-center animate-move-down">
          <img
            src="https://i.postimg.cc/YqtBTxF1/framer1.png"
            alt="Frame 4"
            className="w-32 h-15 object-cover"
          />
        </div>


        <div className="border border-gray-300  overflow-hidden h-22 w-100 flex items-center animate-move-down">
          <img
            src="https://i.postimg.cc/YqtBTxF1/framer1.png"
            alt="Frame 4"
            className="w-32 h-15 object-cover"
          />
        </div>






      </div>
    </div>
  );
};

export default Header;

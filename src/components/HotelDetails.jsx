import React, { useState } from 'react';
import { FaWifi, FaDumbbell, FaUtensils, FaStar, FaSwimmingPool, FaGlassMartiniAlt, FaMugHot, FaParking, FaUserTie, FaHotTub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdLocalAirport, MdRoomService, MdBusinessCenter } from 'react-icons/md';

const HotelDetails = ({ hotel, onClose, onPrevious, onNext, onBook }) => {
  const [activeAmenity, setActiveAmenity] = useState(null);

  const amenityIcons = {
    'Free Wifi': <FaWifi />,
    'Fitness Center': <FaDumbbell />,
    'Restaurant': <FaUtensils />,
    'Swimming Pool': <FaSwimmingPool />,
    'Bar': <FaGlassMartiniAlt />,
    'Coffee Shop': <FaMugHot />,
    'Parking': <FaParking />,
    'Concierge': <FaUserTie />,
    'Spa': <FaHotTub />,
    'Airport Shuttle': <MdLocalAirport />,
    'Room Service': <MdRoomService />,
    'Business Center': <MdBusinessCenter />,
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full p-6 mx-4 bg-white rounded-lg shadow-2xl max-w-7xl md:mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-6">
            <div className="relative mb-6 overflow-hidden rounded-lg shadow-md">
              <img src={hotel.imageSrc} alt={hotel.name} className="object-cover w-full h-64 transition-transform duration-300 lg:h-96 hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent">
                <div className="p-6 text-white">
                  <h2 className="mb-2 text-3xl font-bold md:text-4xl">{hotel.name}</h2>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      {renderStars(hotel.rating)}
                      <span className="ml-2 text-lg">{hotel.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold md:text-3xl">{hotel.price}</p>
                </div>
              </div>
            </div>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">{hotel.description}</p>
          </div>
          
          <div className="lg:w-1/2 lg:pl-6">
            <div className="mb-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Amenities</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {hotel.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex flex-col items-center p-3 transition-colors duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                    onClick={() => setActiveAmenity(amenity)}
                  >
                    <span className="mb-2 text-3xl text-proj">{amenityIcons[amenity]}</span>
                    <span className="text-center text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {activeAmenity && (
              <div className="p-4 mb-6 bg-gray-100 rounded-lg">
                <h4 className="mb-2 text-lg font-semibold text-gray-800">{activeAmenity}</h4>
                <p className="text-gray-700">{hotel.amenityDescriptions[activeAmenity]}</p>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">More Features</h3>
              <ul className="grid grid-cols-2 gap-2 pl-5 list-disc">
                <li>24/7 Front Desk</li>
                <li>Multilingual Staff</li>
                <li>Luggage Storage</li>
                <li>Express Check-in/Check-out</li>
              </ul>
            </div>
            
            <button
              onClick={onBook}
              className="w-full px-8 py-3 text-white transition-all duration-300 rounded-lg shadow-md bg-proj hover:bg-opacity-90 hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-200">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">Guest Reviews</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hotel.reviews.map((review, index) => (
              <div key={index} className="p-4 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
                <p className="mb-2 italic text-gray-700">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <div className="flex">{renderStars(5)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            onClick={onPrevious}
            className="flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-proj hover:bg-opacity-90"
          >
            <FaChevronLeft className="mr-2" /> Previous
          </button>
          <button
            onClick={onNext}
            className="flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-proj hover:bg-opacity-90"
          >
            Next <FaChevronRight className="ml-2" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute text-gray-600 transition-colors duration-300 top-4 right-4 hover:text-gray-800 focus:outline-none"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;

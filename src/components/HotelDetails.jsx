import React, { useState } from 'react';
import {
  FaWifi, FaDumbbell, FaUtensils, FaStar, FaSwimmingPool, FaGlassMartiniAlt,
  FaCoffee, FaParking, FaConciergeBell, FaSpa, FaChevronLeft, FaChevronRight,
  FaSuitcase, FaBriefcase, FaUmbrellaBeach, FaSwimmer, FaWater, 
  FaPlane, FaHiking, FaTable, FaMountain, FaHorse, FaPaintBrush,
  FaGlassCheers, FaSmokingBan, FaLandmark, FaCar, FaTree, FaCamera,
  FaLeaf, FaShip, FaBook, FaBinoculars, FaHotel, FaMoon, FaBed, FaShower
} from 'react-icons/fa';
import { 
  MdAirportShuttle, MdRoomService, MdBusiness, MdSpa, MdLocalBar, 
  MdNightsStay, MdFitnessCenter, MdPool, MdRestaurant, MdLocalCafe
} from 'react-icons/md';
import { GiMeditation, GiButterfly, GiHorseshoe, GiMountainClimbing } from 'react-icons/gi';

const HotelDetails = ({ hotel, onClose, onPrevious, onNext, onBook }) => {
  const [activeAmenity, setActiveAmenity] = useState(null);

  const amenityIcons = {
    'Free Wifi': <FaWifi />,
    'Fitness Center': <MdFitnessCenter />,
    'Restaurant': <MdRestaurant />,
    'Swimming Pool': <MdPool />,
    'Bar': <FaGlassMartiniAlt />,
    'Coffee Shop': <MdLocalCafe />,
    'Parking': <FaParking />,
    'Concierge': <FaConciergeBell />,
    'Spa': <FaSpa />,
    'Airport Shuttle': <MdAirportShuttle />,
    'Room Service': <MdRoomService />,
    'Business Center': <MdBusiness />,
    'Star Rating': <FaStar />,
    'Luggage': <FaSuitcase />,
    'Business Facilities': <FaBriefcase />,
    'Beach Access': <FaUmbrellaBeach />,
    'Indoor Pool': <FaSwimmer />,
    'Spa Services': <MdSpa />,
    'Water Activities': <FaWater />,
    'Yoga Classes': <GiMeditation />,
    'Airport Transfer': <FaPlane />,
    'Hiking Trails': <FaHiking />,
    'Billiards': <FaTable />,
    'Mountain View': <GiMountainClimbing />,
    'Horseback Riding': <GiHorseshoe />,
    'Art Gallery': <FaPaintBrush />,
    'Bar/Lounge': <MdLocalBar />,
    'Non-Smoking Rooms': <FaSmokingBan />,
    'Historic Building': <FaLandmark />,
    'Car Rental': <FaCar />,
    'Garden': <FaTree />,
    'Photography Service': <FaCamera />,
    'Eco-Friendly': <FaLeaf />,
    'Cruise': <FaShip />,
    'Butterfly Garden': <GiButterfly />,
    'Library': <FaBook />,
    'Birdwatching': <FaBinoculars />,
    'Hotel Information': <FaHotel />,
    'Night Activities': <MdNightsStay />,
    'Art Classes': <FaPaintBrush />,
    'Meditation Sessions': <GiMeditation />,
    'Bedroom': <FaBed />,
    'Bathroom': <FaShower />
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-full p-4 mx-2 bg-white rounded-lg shadow-2xl max-w-7xl sm:p-6 md:mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-6">
            <div className="relative mb-4 overflow-hidden rounded-lg shadow-md">
              <img src={hotel.imageSrc} alt={hotel.name} className="object-cover w-full h-48 transition-transform duration-300 lg:h-72 hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent">
                <div className="p-4 text-white">
                  <h2 className="mb-1 text-2xl font-bold md:text-3xl">{hotel.name}</h2>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      {renderStars(hotel.rating)}
                      <span className="ml-2 text-lg">{hotel.rating}/5</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold md:text-2xl">{hotel.price}</p>
                </div>
              </div>
            </div>
            <p className="mb-4 text-base leading-relaxed text-gray-700">{hotel.description}</p>
          </div>
          
          <div className="lg:w-1/2 lg:pl-6">
            <div className="mb-4">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">Amenities</h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                {hotel.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex flex-col items-center p-2 transition-colors duration-300 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                    onClick={() => setActiveAmenity(amenity)}
                  >
                    <span className="mb-1 text-2xl text-proj">{amenityIcons[amenity]}</span>
                    <span className="text-xs text-center text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {activeAmenity && (
              <div className="p-3 mb-4 bg-gray-100 rounded-lg">
                <h4 className="mb-1 text-base font-semibold text-gray-800">{activeAmenity}</h4>
                <p className="text-sm text-gray-700">{hotel.amenityDescriptions?.[activeAmenity] || 'Description not available.'}</p>
              </div>
            )}
            
            <div className="mb-4">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">More Features</h3>
              <ul className="grid grid-cols-2 gap-2 pl-5 text-sm list-disc">
                <li>24/7 Front Desk</li>
                <li>Multilingual Staff</li>
                <li>Luggage Storage</li>
                <li>Express Check-in/Check-out</li>
              </ul>
            </div>
            
            <button
              onClick={onBook}
              className="w-full px-6 py-2 text-white transition-all duration-300 rounded-lg shadow-md bg-proj hover:bg-opacity-90 hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
        
        <div className="pt-4 mt-4 border-t border-gray-200">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">Guest Reviews</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hotel.reviews.map((review, index) => (
              <div key={index} className="p-3 transition-shadow duration-300 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
                <p className="mb-2 text-sm italic text-gray-700">{review.text}</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800">{review.author}</p>
                  <div className="flex">{renderStars(5)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <button
            onClick={onPrevious}
            className="flex items-center px-3 py-1 text-sm text-white transition-colors duration-300 rounded-lg bg-proj hover:bg-opacity-90"
          >
            <FaChevronLeft className="mr-1" /> Previous
          </button>
          <button
            onClick={onNext}
            className="flex items-center px-3 py-1 text-sm text-white transition-colors duration-300 rounded-lg bg-proj hover:bg-opacity-90"
          >
            Next <FaChevronRight className="ml-1" />
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
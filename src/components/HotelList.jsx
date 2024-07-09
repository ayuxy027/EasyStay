import React, { useState } from 'react';
import HotelDetails from './HotelDetails';
import { FaStar } from 'react-icons/fa';

const HotelList = ({ location, hotels }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleHotelClick = (hotel, index) => {
    setSelectedHotel(hotel);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handlePrevious = () => {
    const newIndex = (selectedIndex - 1 + hotels.length) % hotels.length;
    setSelectedHotel(hotels[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % hotels.length;
    setSelectedHotel(hotels[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleBook = () => {
    console.log('Booking', selectedHotel.name);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-normal text-transparent bg-proj-hover bg-clip-text">Hotels in {location}</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="overflow-hidden transition-transform bg-white rounded-lg shadow-md cursor-pointer duration-400 hover:scale-105"
              onClick={() => handleHotelClick(hotel, index)}
            >
              <img
                src={hotel.imageSrc}
                alt={hotel.name}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-normal text-gray-900">{hotel.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(hotel.rating)}
                  <span className="ml-2 text-sm text-gray-600">{hotel.rating}/5</span>
                </div>
                <p className="font-semibold text-proj">{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedHotel && (
        <HotelDetails
          hotel={selectedHotel}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onBook={handleBook}
        />
      )}
    </div>
  );
};

export default HotelList;
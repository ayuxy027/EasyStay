import React, { useState } from 'react';
import HotelDetails from './HotelDetails';

const HotelList = ({ location, hotels }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-6 text-2xl font-semibold text-transparent bg-proj bg-clip-text">Hotels in {location}</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="cursor-pointer group"
              onClick={() => handleHotelClick(hotel)}
            >
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1">
                <img
                  src={hotel.imageSrc}
                  alt={hotel.name}
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{hotel.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{hotel.price}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedHotel && (
        <HotelDetails hotel={selectedHotel} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default HotelList;

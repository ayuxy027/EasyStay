import React, { useState } from 'react';
import { FaStar, FaFilter, FaSort } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HotelList = ({ location, hotels, onHotelSelect }) => {
  const [sortBy, setSortBy] = useState('price');
  const [filterRating, setFilterRating] = useState(0);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  const sortedAndFilteredHotels = hotels
    .filter(hotel => hotel.rating >= filterRating)
    .sort((a, b) => {
      if (sortBy === 'price') {
        return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-normal text-transparent bg-proj-hover bg-clip-text">
            Hotels in {location}
          </h2>
          <div className="flex space-x-4">
            <div className="relative">
              <select
                className="py-2 pl-3 pr-10 text-sm leading-5 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-proj focus:border-proj"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
              <FaSort className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
            <div className="relative">
              <select
                className="py-2 pl-3 pr-10 text-sm leading-5 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-proj focus:border-proj"
                value={filterRating}
                onChange={(e) => setFilterRating(Number(e.target.value))}
              >
                <option value={0}>All Ratings</option>
                <option value={3}>3+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={4.5}>4.5+ Stars</option>
              </select>
              <FaFilter className="absolute text-gray-400 transform -translate-y-1/2 right-3 top-1/2" />
            </div>
          </div>
        </div>
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {sortedAndFilteredHotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => onHotelSelect(hotel, index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={hotel.imageSrc}
                alt={hotel.name}
                className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-normal text-gray-900">{hotel.name}</h3>
                <div className="flex items-center mb-2">
                  {renderStars(hotel.rating)}
                  <span className="ml-2 text-sm text-gray-600">{hotel.rating}/5</span>
                </div>
                <p className="font-semibold text-proj">{hotel.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HotelList;
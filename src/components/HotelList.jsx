import React, { useState, useCallback } from 'react';
import { FaStar, FaFilter, FaSort, FaChevronDown, FaSearch, FaInfoCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const HotelList = ({ location, hotels, onHotelSelect }) => {
  const [sortBy, setSortBy] = useState('price');
  const [filterRating, setFilterRating] = useState(0);
  const [visibleHotels, setVisibleHotels] = useState(8);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showDetails, setShowDetails] = useState({});

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useCallback(
    debounce((value) => setSearchTerm(value), 300),
    []
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar key={index} className={index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} />
    ));
  };

  const filteredAndSortedHotels = hotels
    .filter(hotel => 
      hotel.rating >= filterRating &&
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      parseFloat(hotel.price.replace(/[^\d.]/g, '')) >= priceRange[0] &&
      parseFloat(hotel.price.replace(/[^\d.]/g, '')) <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });

  const loadMoreHotels = () => {
    setVisibleHotels(prevVisible => Math.min(prevVisible + 8, filteredAndSortedHotels.length));
  };

  const toggleDetails = (id) => {
    setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-semibold text-gray-900">
          Hotels in {location}
        </h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-6 md:w-1/4 md:mb-0 md:pr-6">
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search hotels..."
                  className="w-full px-4 py-2 pl-10 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-proj focus:border-proj"
                  onChange={handleSearchChange}
                />
                <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              </div>
              
              <div className="relative">
                <select
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-proj focus:border-proj"
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
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-proj focus:border-proj"
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
              
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹0</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/4">
            <motion.div 
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                {filteredAndSortedHotels.slice(0, visibleHotels).map((hotel) => (
                  <motion.div
                    key={hotel.id}
                    className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <img
                        src={hotel.imageSrc}
                        alt={hotel.name}
                        className="object-cover w-full h-48"
                      />
                      <div className="absolute top-0 left-0 p-2 m-2 text-sm font-semibold text-white rounded-md bg-proj">
                        {hotel.price}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">{hotel.name}</h3>
                      <div className="flex items-center mb-2">
                        {renderStars(hotel.rating)}
                        <span className="ml-2 text-sm text-gray-600">{hotel.rating}/5</span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{hotel.description}</p>
                      <div className="flex justify-between mt-4">
                        <button
                          onClick={() => toggleDetails(hotel.id)}
                          className="text-sm text-proj hover:text-proj-hover focus:outline-none"
                        >
                          {showDetails[hotel.id] ? 'Hide Details' : 'Show Details'}
                        </button>
                        <button
                          onClick={() => onHotelSelect(hotel)}
                          className="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 rounded-md bg-proj hover:bg-proj-hover focus:outline-none focus:ring-2 focus:ring-proj focus:ring-offset-2"
                        >
                          Select
                        </button>
                      </div>
                      {showDetails[hotel.id] && (
                        <div className="mt-4 text-sm text-gray-600">
                          <p className="mb-2">{hotel.description}</p>
                          <ul className="pl-5 list-disc">
                            {hotel.amenities.slice(0, 5).map((amenity, index) => (
                              <li key={index}>{amenity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {visibleHotels < filteredAndSortedHotels.length && (
              <div className="flex justify-center mt-8">
                <button
                  className="flex items-center px-6 py-3 text-sm font-medium text-white transition-colors duration-300 rounded-md bg-proj hover:bg-proj-hover focus:outline-none focus:ring-2 focus:ring-proj focus:ring-offset-2"
                  onClick={loadMoreHotels}
                >
                  Load More <FaChevronDown className="ml-2" />
                </button>
              </div>
            )}
            
            {filteredAndSortedHotels.length === 0 && (
              <div className="mt-8 text-center">
                <p className="text-xl text-gray-600">No hotels found matching your criteria. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
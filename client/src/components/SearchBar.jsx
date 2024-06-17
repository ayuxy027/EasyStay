import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar() {
  const [location, setLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [showCheckinDatePicker, setShowCheckinDatePicker] = useState(false);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [showCheckoutDatePicker, setShowCheckoutDatePicker] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleGuestChange = (type, action) => {
    if (type === 'adults') {
      setAdults(action === 'increment' ? adults + 1 : adults - 1);
    } else if (type === 'children') {
      setChildren(action === 'increment' ? children + 1 : children - 1);
    }
  };

  return (
    <div className="w-full max-w-5xl p-8 mx-auto mt-8 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col items-stretch gap-6 lg:flex-row">
        {/* Location Input */}
        <div className="relative flex-1">
          <label className="flex items-center mb-2 text-lg font-semibold text-gray-700">
            <FaSearch className="mr-2" /> Location
          </label>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onClick={() => setShowLocationDropdown(true)}
          />
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl">
              {['New York', 'Los Angeles', 'Chicago'].map((loc) => (
                <div
                  key={loc}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setLocation(loc);
                    setShowLocationDropdown(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkin Date */}
        <div className="relative flex-1">
          <label className="flex items-center mb-2 text-lg font-semibold text-gray-700">
            <FaCalendarAlt className="mr-2" /> Check-in
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={(date) => setCheckinDate(date)}
            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkout Date */}
        <div className="relative flex-1">
          <label className="flex items-center mb-2 text-lg font-semibold text-gray-700">
            <FaCalendarAlt className="mr-2" /> Check-out
          </label>
          <DatePicker
            selected={checkoutDate}
            onChange={(date) => setCheckoutDate(date)}
            className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Guests */}
        <div className="relative flex-1">
          <label className="flex items-center mb-2 text-lg font-semibold text-gray-700">
            <FaUser className="mr-2" /> Guests
          </label>
          <div onClick={() => setShowGuestDropdown(!showGuestDropdown)} className="w-full p-4 border border-gray-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
            {`Adults:${adults} Children:${children}`}
          </div>
          {showGuestDropdown && (
            <div className="absolute z-10 w-full p-4 mt-1 bg-white border border-gray-300 rounded-xl">
              <div className="flex justify-between p-2 hover:bg-gray-200">
                <span>Adults</span>
                <div className="flex items-center">
                  <button
                    className="p-2 bg-gray-300 rounded-full"
                    onClick={() => handleGuestChange('adults', 'decrement')}
                    disabled={adults === 1}
                  >
                    -
                  </button>
                  <span className="mx-4">{adults}</span>
                  <button
                    className="p-2 bg-gray-300 rounded-full"
                    onClick={() => handleGuestChange('adults', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between p-2 hover:bg-gray-200">
                <span>Children</span>
                <div className="flex items-center">
                  <button
                    className="p-2 bg-gray-300 rounded-full"
                    onClick={() => handleGuestChange('children', 'decrement')}
                    disabled={children === 0}
                  >
                    -
                  </button>
                  <span className="mx-4">{children}</span>
                  <button
                    className="p-2 bg-gray-300 rounded-full"
                    onClick={() => handleGuestChange('children', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="p-2 text-white bg-blue-500 rounded-2xl"
                  onClick={() => setShowGuestDropdown(false)}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

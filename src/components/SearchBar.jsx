import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './css/datepicker.css';

const destinations = [
  { name: 'Mumbai', state: 'Maharashtra' },
  { name: 'Agra', state: 'Uttar Pradesh' },
  { name: 'Ooty', state: 'Tamil Nadu' },
  { name: 'Panjim', state: 'Goa' },
  { name: 'Kolkata', state: 'West Bengal' },
  { name: 'Shimla', state: 'Himachal Pradesh' },
  { name: 'Jaipur', state: 'Rajasthan' },
  { name: 'Manali', state: 'Himachal Pradesh' },
  { name: 'Bhubaneshwar', state: 'Odisha' },
];

function SearchBar({ onSearch }) {
  const [bookingType, setBookingType] = useState('daily');
  const [location, setLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [checkinTime, setCheckinTime] = useState(null);
  const [checkoutTime, setCheckoutTime] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGuestChange = (type, action) => {
    if (type === 'adults') {
      setAdults(prevAdults => Math.max(1, action === 'increment' ? prevAdults + 1 : prevAdults - 1));
    } else if (type === 'children') {
      setChildren(prevChildren => Math.max(0, action === 'increment' ? prevChildren + 1 : prevChildren - 1));
    }
  };

  const handleDateChange = (date, type) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (type === 'checkin') {
      if (date < currentDate) {
        setErrorMessage('The Check-In Date must be Today or Later.');
      } else {
        setCheckinDate(date);
        if (checkoutDate && date >= checkoutDate) {
          setCheckoutDate(null);
        }
        setErrorMessage('');
      }
    } else if (type === 'checkout') {
      if (checkinDate && date <= checkinDate) {
        setErrorMessage('Check-Out Date must be AFTER Check-In Date');
      } else {
        setCheckoutDate(date);
        setErrorMessage('');
      }
    }
  };

  const handleTimeChange = (time, type) => {
    if (type === 'checkin') {
      setCheckinTime(time);
      if (checkoutTime && time >= checkoutTime) {
        setCheckoutTime(null);
      }
      setErrorMessage('');
    } else if (type === 'checkout') {
      if (checkinTime) {
        const checkinDateTime = new Date(checkinTime);
        const checkoutDateTime = new Date(time);
        
        if (checkoutDateTime <= checkinDateTime) {
          checkoutDateTime.setDate(checkoutDateTime.getDate() + 1);
        }
        
        setCheckoutTime(checkoutDateTime);
        setErrorMessage('');
      } else {
        setErrorMessage('Please select Check-In Time first');
      }
    }
  };

  const handleSearch = () => {
    if (!location) {
      setErrorMessage('Please select a location.');
      return;
    }
  
    if (bookingType === 'daily' && (!checkinDate || !checkoutDate)) {
      setErrorMessage('Please select both Check-In and Check-Out dates.');
      return;
    }
  
    if (bookingType === 'hourly' && (!checkinTime || !checkoutTime)) {
      setErrorMessage('Please select both Check-In and Check-Out times.');
      return;
    }
  
    setErrorMessage('');
    const searchData = {
      bookingType,
      location,
      checkinDate,
      checkoutDate,
      checkinTime,
      checkoutTime,
      adults,
      children
    };
    onSearch(searchData);
  };

  return (
    <div className="w-full max-w-[1200px] p-6 sm:p-10 mx-auto mt-10 bg-white shadow-xl rounded-3xl">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base font-medium rounded-l-lg transition-all duration-300 ${
              bookingType === 'daily' ? 'bg-gradient-to-r from-[#2b6cb0] to-[#3182ce] text-white' : 'bg-white text-gray-700'
            } border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
            onClick={() => setBookingType('daily')}
          >
            Daily Booking
          </button>
          <button
            type="button"
            className={`px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base font-medium rounded-r-lg transition-all duration-300 ${
              bookingType === 'hourly' ? 'bg-gradient-to-r from-[#2b6cb0] to-[#3182ce] text-white' : 'bg-white text-gray-700'
            } border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
            onClick={() => setBookingType('hourly')}
          >
            Hourly Booking
          </button>
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-6 lg:flex-row">
        {/* Location Input */}
        <div className="relative flex-1">
          <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
            <FaSearch className="mr-3 text-[#2b6cb0]" /> Location
          </label>
          <input
            type="text"
            className="w-full p-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
            placeholder="Search location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onClick={() => setShowLocationDropdown(true)}
          />
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 shadow-lg rounded-xl">
              {destinations.map((dest) => (
                <div
                  key={dest.name}
                  className="p-3 transition-all duration-200 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setLocation(dest.name);
                    setShowLocationDropdown(false);
                  }}
                >
                  {dest.name}, {dest.state}
                </div>
              ))}
            </div>
          )}
        </div>

        {bookingType === 'daily' ? (
          <>
            {/* Check-in Date */}
            <div className="relative flex-1">
              <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
                <FaCalendarAlt className="mr-3 text-[#2b6cb0]" /> Check-in
              </label>
              <DatePicker
                selected={checkinDate}
                onChange={(date) => handleDateChange(date, 'checkin')}
                selectsStart
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={new Date()}
                placeholderText="Select Check-in Date"
                className="w-full p-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
              />
            </div>

            {/* Check-out Date */}
            <div className="relative flex-1">
              <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
                <FaCalendarAlt className="mr-3 text-[#2b6cb0]" /> Check-out
              </label>
              <DatePicker
                selected={checkoutDate}
                onChange={(date) => handleDateChange(date, 'checkout')}
                selectsEnd
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={checkinDate}
                placeholderText="Select Check-out Date"
                className="w-full p-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
              />
            </div>
          </>
        ) : (
          <>
            {/* Check-in Time */}
            <div className="relative flex-1">
              <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
                <FaClock className="mr-3 text-[#2b6cb0]" /> Check-in Time
              </label>
              <DatePicker
                selected={checkinTime}
                onChange={(time) => handleTimeChange(time, 'checkin')}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select Check-in Time"
                className="w-full p-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
              />
            </div>

            {/* Check-out Time */}
            <div className="relative flex-1">
              <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
                <FaClock className="mr-3 text-[#2b6cb0]" /> Check-out Time
              </label>
              <DatePicker
                selected={checkoutTime}
                onChange={(time) => handleTimeChange(time, 'checkout')}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select Check-out Time"
                className="w-full p-3 text-lg border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
              />
            </div>
          </>
        )}

        {/* Guests Dropdown */}
        <div className="relative flex-1">
          <label className="flex items-center mb-3 ml-4 text-lg font-semibold text-gray-700">
            <FaUser className="mr-3 text-[#2b6cb0]" /> Guests
          </label>
          <div
            className="w-full p-3 text-lg border border-gray-300 rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3182ce] transition-all duration-300"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            {adults} Adults, {children} Children
          </div>
          {showGuestDropdown && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 shadow-lg rounded-xl">
              <div className="flex items-center justify-between p-3">
                <span>Adults</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 font-bold text-white bg-gray-400 rounded-full"
                    onClick={() => handleGuestChange('adults', 'decrement')}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button
                    className="px-2 py-1 font-bold text-white bg-gray-400 rounded-full"
                    onClick={() => handleGuestChange('adults', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span>Children</span>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 font-bold text-white bg-gray-400 rounded-full"
                    onClick={() => handleGuestChange('children', 'decrement')}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button
                    className="px-2 py-1 font-bold text-white bg-gray-400 rounded-full"
                    onClick={() => handleGuestChange('children', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex items-end justify-center w-full lg:w-auto lg:justify-end">
          <button
            className="flex items-center justify-center px-3 py-2 sm:px-6 sm:py-3 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#2b6cb0] to-[#3182ce] rounded-xl hover:from-[#3182ce] hover:to-[#2b6cb0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b6cb0]"
            onClick={handleSearch}
          >
            <FaSearch className="mr-2 text-white" />
            Search
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-4 text-center text-red-500">{errorMessage}</div>
      )}
    </div>
  );
}

export default SearchBar;
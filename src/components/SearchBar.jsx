import React, { useState, useEffect, useRef } from 'react';
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

  const locationRef = useRef(null);
  const guestRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setShowGuestDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <div className="w-full p-4 mx-auto mt-4 bg-white shadow-lg sm:p-6 md:p-8 max-w-7xl rounded-2xl">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${bookingType === 'daily'
                ? 'bg-proj text-white'
                : 'bg-white hover:bg-gray-50'
              } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-proj`}
            onClick={() => setBookingType('daily')}
          >
            Daily Booking
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-all duration-300 sm:px-6 sm:py-3 sm:text-base ${bookingType === 'hourly'
                ? 'bg-proj text-white'
                : 'bg-white hover:bg-gray-50'
              } border border-gray-200 focus:z-10 focus:ring-2 focus:ring-proj`}
            onClick={() => setBookingType('hourly')}
          >
            Hourly Booking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
        {/* Location Input */}
        <div className="relative" ref={locationRef}>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            <FaSearch className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Location
          </label>
          <input
            type="text"
            className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onClick={() => setShowLocationDropdown(true)}
          />
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-1 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg max-h-48">
              {destinations.map((dest) => (
                <div
                  key={dest.name}
                  className="p-2 text-sm cursor-pointer sm:text-base hover:bg-gray-100"
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
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                <FaCalendarAlt className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Check-in
              </label>
              <DatePicker
                selected={checkinDate}
                onChange={(date) => handleDateChange(date, 'checkin')}
                selectsStart
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={new Date()}
                placeholderText="Select Check-in Date"
                className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
              />
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                <FaCalendarAlt className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Check-out
              </label>
              <DatePicker
                selected={checkoutDate}
                onChange={(date) => handleDateChange(date, 'checkout')}
                selectsEnd
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={checkinDate}
                placeholderText="Select Check-out Date"
                className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
              />
            </div>
          </>
        ) : (
          <>
            {/* Check-in Time */}
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                <FaClock className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Check-in Time
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
                className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
              />
            </div>

            {/* Check-out Time */}
            <div className="relative">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                <FaClock className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Check-out Time
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
                className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
              />
            </div>
          </>
        )}

        {/* Guests Dropdown */}
        <div className="relative" ref={guestRef}>
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            <FaUser className="inline-block mr-2 text-transparent bg-proj bg-clip-text" /> Guests
          </label>
          <div
            className="w-full p-2 text-sm transition-all duration-300 border border-gray-300 rounded-lg cursor-pointer sm:p-3 sm:text-base focus:outline-none focus:ring-2 focus:ring-proj"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            {adults} Adults, {children} Children
          </div>
          {showGuestDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
              <div className="flex items-center justify-between p-3 border-b">
                <span className="text-sm font-medium sm:text-base">Adults</span>
                <div className="flex items-center space-x-3">
                  <button
                    className="px-2 py-1 text-sm font-medium text-white transition-colors duration-300 rounded-md sm:px-3 sm:py-1 sm:text-base bg-proj hover:bg-proj-hover"
                    onClick={() => handleGuestChange('adults', 'decrement')}
                  >
                    -
                  </button>
                  <span className="w-8 text-sm font-semibold text-center sm:text-base">{adults}</span>
                  <button
                    className="px-2 py-1 text-sm font-medium text-white transition-colors duration-300 rounded-md sm:px-3 sm:py-1 sm:text-base bg-proj hover:bg-proj-hover"
                    onClick={() => handleGuestChange('adults', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3">
                <span className="text-sm font-medium sm:text-base">Children</span>
                <div className="flex items-center space-x-3">
                  <button
                    className="px-2 py-1 text-sm font-medium text-white transition-colors duration-300 rounded-md sm:px-3 sm:py-1 sm:text-base bg-proj hover:bg-proj-hover"
                    onClick={() => handleGuestChange('children', 'decrement')}
                  >
                    -
                  </button>
                  <span className="w-8 text-sm font-semibold text-center sm:text-base">{children}</span>
                  <button
                    className="px-2 py-1 text-sm font-medium text-white transition-colors duration-300 rounded-md sm:px-3 sm:py-1 sm:text-base bg-proj hover:bg-proj-hover"
                    onClick={() => handleGuestChange('children', 'increment')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Search Button */}
      <div className="mt-6 text-center sm:mt-8">
        <button
          className="w-full px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg sm:w-auto sm:px-8 sm:py-3 sm:text-base bg-proj hover:bg-proj-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proj"
          onClick={handleSearch}
        >
          <FaSearch className="inline-block mr-2" />
          Search
        </button>
      </div>

      {errorMessage && (
        <div className="mt-4 text-sm text-center text-red-500 sm:text-base">{errorMessage}</div>
      )}
    </div>
  );
}

export default SearchBar;
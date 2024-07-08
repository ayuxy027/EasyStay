// src/pages/HomePage.jsx
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Services from '../components/Services'
import Feedback from '../components/Feedback'
import Navbar from '../components/NavBar'
import HotelList from '../components/HotelList'

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData) => {
    // In a real application, you would fetch hotel data based on the searchData
    // For now, we'll use mock data
    const mockHotels = [
      {
        id: 1,
        name: 'Luxury Hotel',
        price: '$200 per night',
        imageSrc: 'https://example.com/hotel1.jpg',
        description: 'Experience luxury like never before in our 5-star hotel with breathtaking views and world-class amenities.',
        amenities: ['Free Wi-Fi', 'Swimming Pool', 'Spa', 'Fitness Center', 'Restaurant'],
      },
      {
        id: 2,
        name: 'Budget Inn',
        price: '$80 per night',
        imageSrc: 'https://example.com/hotel2.jpg',
        description: 'Affordable comfort in the heart of the city. Perfect for budget-conscious travelers.',
        amenities: ['Free Wi-Fi', 'Continental Breakfast', 'Parking'],
      },
      {
        id: 3,
        name: 'Seaside Resort',
        price: '$150 per night',
        imageSrc: 'https://example.com/hotel3.jpg',
        description: 'Relax and unwind in our beachfront resort with stunning ocean views and private beach access.',
        amenities: ['Private Beach', 'Swimming Pool', 'Water Sports', 'Beachside Restaurant'],
      },
      {
        id: 4,
        name: 'City Center Hotel',
        price: '$120 per night',
        imageSrc: 'https://example.com/hotel4.jpg',
        description: 'Stay in the heart of the action with easy access to shopping, dining, and entertainment.',
        amenities: ['Free Wi-Fi', 'Business Center', 'Fitness Room', 'On-site Restaurant'],
      },
    ];

    setSearchResults({
      location: searchData.location,
      hotels: mockHotels,
    });
  };

  return (
    <div>
      <Navbar />
      <Hero/>
      <SearchBar onSearch={handleSearch}/>
      {searchResults && (
        <HotelList location={searchResults.location} hotels={searchResults.hotels} />
      )}
      <Destination/>
      <Services />
      <Feedback />
    </div>
  )
}

export default HomePage
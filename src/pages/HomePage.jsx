// src/pages/HomePage.jsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Services from '../components/Services';
import Feedback from '../components/Feedback';
import Navbar from '../components/NavBar';
import HotelList from '../components/HotelList';

import hotel1 from '../images/Hotels/hotel1.jpg';
import hotel2 from '../images/Hotels/hotel2.jpg';
import hotel3 from '../images/Hotels/hotel3.jpg';
import hotel4 from '../images/Hotels/hotel4.jpg';
import hotel5 from '../images/Hotels/hotel5.jpg';
import hotel6 from '../images/Hotels/hotel6.jpg';
import hotel7 from '../images/Hotels/hotel7.jpg';
import hotel8 from '../images/Hotels/hotel8.jpg';
import hotel9 from '../images/Hotels/hotel9.jpg';
import hotel10 from '../images/Hotels/hotel10.jpg';
import hotel11 from '../images/Hotels/hotel11.jpg';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData) => {
    // In a real application, you would fetch hotel data based on the searchData
    // For now, we'll use mock data
    const mockHotels = [
      {
        id: 1,
        name: 'Pine Valley Lodge',
        price: '₹3,500 per Night',
        imageSrc: hotel1,
        description: 'Affordable comfort in the heart of the city. Perfect for budget-conscious travelers.',
        amenities: ['Free Wifi', 'Coffee Shop', 'Parking'],
        rating: 3,
        reviews: [
          { text: "Great value for money. Clean and comfortable.", author: "John D." },
          { text: "Good location, but basic amenities.", author: "Sarah M." },
        ],
      },
      {
        id: 2,
        name: 'Harbor View Hotel',
        price: '₹4,500 per Night',
        imageSrc: hotel2,
        description: 'Stay in the heart of the action with easy access to shopping, dining, and entertainment.',
        amenities: ['Free Wifi', 'Fitness Center', 'Restaurant', 'Bar'],
        rating: 4,
        reviews: [
          { text: "Wonderful stay! Great views and friendly staff.", author: "Emily R." },
          { text: "Perfect location for exploring the city.", author: "Michael T." },
        ],
      },
      {
        id: 3,
        name: 'Urban Oasis Hotel',
        price: '₹6,000 per Night',
        imageSrc: hotel6,
        description: 'Relax and unwind in our beachfront resort with stunning ocean views and private beach access.',
        amenities: ['Free Wifi', 'Swimming Pool', 'Bar', 'Restaurant', 'Spa', 'Concierge'],
        rating: 4,
        reviews: [
          { text: "Amazing beachfront location. The spa was incredible!", author: "Lisa K." },
          { text: "Luxurious rooms and excellent service.", author: "David W." },
        ],
      },
      {
        id: 4,
        name: 'Grand Horizon Hotel',
        price: '₹8,500 per Night',
        imageSrc: hotel8,
        description: 'Experience luxury like never before in our 5-star hotel with breathtaking views and world-class amenities.',
        amenities: ['Free Wifi', 'Restaurant', 'Fitness Center', 'Swimming Pool', 'Spa', 'Business Center', 'Room Service', 'Airport Shuttle'],
        rating: 5,
        reviews: [
          { text: "Absolutely stunning! The epitome of luxury.", author: "Jennifer L." },
          { text: "Impeccable service and attention to detail. Worth every penny.", author: "Robert S." },
        ],
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
      <Hero />
      <SearchBar onSearch={handleSearch} />
      {searchResults && (
        <HotelList location={searchResults.location} hotels={searchResults.hotels} />
      )}
      <Destination />
      <Services />
      <Feedback />
    </div>
  );
};

export default HomePage;

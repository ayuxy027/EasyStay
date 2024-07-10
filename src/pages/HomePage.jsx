import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Services from '../components/Services';
import Feedback from '../components/Feedback';
import Navbar from '../components/NavBar';
import HotelList from '../components/HotelList';
import HotelDetails from '../components/HotelDetails';

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
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);

  const handleSearch = (searchData) => {
    // In a real application, you would fetch hotel data based on the searchData
    // For now, we'll use mock data
    const mockHotels = [
      {
        id: 1,
        name: 'Cozy Budget Inn',
        price: '₹2,500 per night',
        imageSrc: hotel1,
        description: 'A comfortable retreat for budget-conscious travelers. Our recently renovated rooms provide modern comfort without breaking the bank, all while surrounded by natural beauty.',
        amenities: ['Free Wi-Fi', '24/7 Reception', 'Continental Breakfast', 'Secure Parking', 'Luggage Storage'],
        rating: 3.5,
        reviews: [
          { text: "Clean rooms and friendly staff. Great value for a short stay.", author: "Rahul Sharma" },
          { text: "Convenient location, but the breakfast could use some improvement.", author: "Priya Malhotra" },
        ],
      },
      {
        id: 2,
        name: 'Urban Oasis Hotel',
        price: '₹4,800 per night',
        imageSrc: hotel2,
        description: 'Experience the vibrant energy of the city from our centrally located hotel. Enjoy easy access to iconic landmarks, bustling markets, and the city\'s pulsating nightlife.',
        amenities: ['Rooftop Restaurant', 'Fitness Center', '24/7 Room Service', 'Business Center', 'Free Wi-Fi', 'Concierge Services'],
        rating: 4,
        reviews: [
          { text: "Stunning views from my room. The rooftop restaurant is a must-visit!", author: "Arjun Patel" },
          { text: "Perfect base for exploring. Staff were extremely helpful with recommendations.", author: "Meera Thakur" },
        ],
      },
      {
        id: 3,
        name: 'Beachfront Paradise Resort',
        price: '₹8,200 per night',
        imageSrc: hotel3,
        description: 'Escape to our tranquil beachfront paradise. We offer a perfect blend of luxury and natural beauty, with private beach access, world-class amenities, and authentic local hospitality.',
        amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Water Sports', 'Beachfront Dining', 'Yoga Classes', 'Airport Transfers'],
        rating: 4.5,
        reviews: [
          { text: "A slice of paradise! The private beach and infinity pool were highlights of our stay.", author: "Vikram Kapoor" },
          { text: "Impeccable service and the spa treatments were out of this world.", author: "Anita Desai" },
        ],
      },
      {
        id: 4,
        name: 'Grand Heritage Hotel',
        price: '₹11,500 per night',
        imageSrc: hotel4,
        description: 'Indulge in unparalleled luxury at our heritage property. We boast timeless charm, exquisite dining options, and personalized butler service for an unforgettable stay.',
        amenities: ['Award-winning Restaurants', 'Champagne Lounge', 'Luxury Spa', 'Outdoor Pool', 'Personal Butler Service', 'Heritage Tours', 'Pillow Menu'],
        rating: 5,
        reviews: [
          { text: "Absolutely phenomenal! The attention to detail and personalized service exceeded all expectations.", author: "Rajesh Khanna" },
          { text: "A true 5-star experience. The fine dining restaurant alone is worth the stay.", author: "Sunita Reddy" },
        ],
      },
      {
        id: 5,
        name: 'Mountain Retreat Resort',
        price: '₹17,800 per night',
        imageSrc: hotel5,
        description: 'Embrace serenity at our luxurious mountain resort. Perched at a high altitude and surrounded by forests, it offers breathtaking views and world-class amenities for an unforgettable retreat.',
        amenities: ['Heated Indoor Pool', 'Mountain Biking', 'Billiards Room', 'Yoga Studio', 'Gourmet Restaurants', 'Guided Nature Walks', 'Spa'],
        rating: 4.8,
        reviews: [
          { text: "A magical getaway! The views are incredible and the guided nature walks were enlightening.", author: "Arun Mehta" },
          { text: "Luxurious rooms with stunning views. The heated pool overlooking the mountains was surreal.", author: "Nisha Gupta" },
        ],
      },
      {
        id: 6,
        name: 'Metropolitan Luxury Hotel',
        price: '₹21,000 per night',
        imageSrc: hotel6,
        description: 'Discover contemporary luxury in the heart of the city. We combine sleek design with traditional elements for a unique and sophisticated urban retreat steps away from major attractions.',
        amenities: ['Private Plunge Pools', '24/7 Fitness Center', 'Cigar Lounge', 'Art Gallery', 'Tennis Courts', 'Hammam', 'Salon Services'],
        rating: 4.7,
        reviews: [
          { text: "A true urban oasis! The rooms with private plunge pools are worth every penny.", author: "Sanjay Singhania" },
          { text: "Stylish interiors and impeccable service. The hammam experience was incredibly relaxing.", author: "Pooja Sharma" },
        ],
      },
      {
        id: 7,
        name: 'Royal Palace Hotel',
        price: '₹32,000 per night',
        imageSrc: hotel7,
        description: 'Step into the lap of royal luxury at our iconic palace hotel. Once home to royalty, this meticulously restored palace offers an unparalleled glimpse into regal living with modern comforts.',
        amenities: ['Royal Butlers', 'Vintage Car Rides', 'Croquet Lawn', 'Palace Tours', 'Manicured Gardens', 'Royal Cuisine', 'Luxury Spa'],
        rating: 4.9,
        reviews: [
          { text: "Felt like royalty! The palace tour and vintage car ride were unforgettable experiences.", author: "Karan Malhotra" },
          { text: "Absolutely enchanting! Every corner of this palace tells a story. Impeccable service.", author: "Ritu Deshmukh" },
        ],
      },
      {
        id: 8,
        name: 'Lakeside Wellness Resort',
        price: '₹14,500 per night',
        imageSrc: hotel8,
        description: 'Unwind in nature\'s lap at our serene lakeside resort. With stunning views, world-class wellness treatments, and a range of water activities, we promise a rejuvenating escape.',
        amenities: ['Lake Cruises', 'Wellness Center', 'Infinity Pool', 'Butterfly Garden', 'Yoga Sessions', 'Cooking Classes', 'Bird Sanctuary Visits'],
        rating: 4.6,
        reviews: [
          { text: "The lakeside setting is breathtaking. Wellness treatments were life-changing!", author: "Amit Choudhury" },
          { text: "A perfect mix of relaxation and activities. Loved the sunset lake cruise.", author: "Neha Kapoor" },
        ],
      },
      {
        id: 9,
        name: 'Eco Treehouse Resort',
        price: '₹11,800 per night',
        imageSrc: hotel9,
        description: 'Experience luxury amidst the wilderness in our unique treehouse accommodations. Nestled in a national park, our eco-resort offers an immersive nature experience without compromising on comfort.',
        amenities: ['Treehouse Accommodation', 'Wildlife Safaris', 'Stargazing Deck', 'Photography Workshops', 'Local Art Classes', 'Organic Dining', 'Guided Nature Walks'],
        rating: 4.5,
        reviews: [
          { text: "A truly unique experience! Watching wildlife from our treehouse was magical.", author: "Vivek Oberoi" },
          { text: "Loved the eco-friendly approach. The safari was the highlight of our trip.", author: "Shweta Tiwari" },
        ],
      },
      {
        id: 10,
        name: 'Historic Hilltop Palace',
        price: '₹35,000 per night',
        imageSrc: hotel10,
        description: 'Live like royalty in this restored historic palace perched high above the city. We offer regal accommodations, unparalleled views, and a glimpse into the opulent lifestyle of bygone eras.',
        amenities: ['Royal High Tea', 'Horse Carriage Rides', 'Luxury Spa', 'Heritage Walks', 'Gourmet Restaurants', 'Hookah Lounge', 'Billiards Room'],
        rating: 4.9,
        reviews: [
          { text: "Absolutely majestic! Each moment felt like we were living in a different era.", author: "Rohit Shetty" },
          { text: "Exceptional service and fantastic cuisine. A true royal experience!", author: "Anjali Menon" },
        ],
      },
      {
        id: 11,
        name: 'Romantic Lakeside Palace',
        price: '₹29,500 per night',
        imageSrc: hotel11,
        description: 'Experience romance at our modern palace hotel on a serene lakeshore. Combining regional opulence with contemporary luxury, it offers breathtaking views of the lake and surrounding mountains.',
        amenities: ['Lakeview Rooftop Pool', 'Scenic Gardens', 'Fine Dining Restaurant', 'Lake Boat Rides', 'Royal Spa', 'Cultural Shows', 'Art Classes'],
        rating: 4.8,
        reviews: [
          { text: "Utterly romantic! The lake views and boat ride at sunset were unforgettable.", author: "Aryan Khanna" },
          { text: "Impeccable hospitality. The cultural experiences added so much to our stay.", author: "Deepika Padukone" },
        ],
      },
      {
        id: 12,
        name: 'Riverside Retreat Resort',
        price: '₹26,500 per night',
        imageSrc: hotel5, // Repeating an image as requested
        description: 'Nestled along a picturesque river, our resort offers a perfect blend of natural beauty and luxury. Enjoy stunning river views, world-class amenities, and a range of outdoor activities.',
        amenities: ['River-view Suites', 'Infinity Pool', 'Adventure Sports', 'Riverside Dining', 'Luxury Spa', 'Nature Trails', 'Meditation Classes'],
        rating: 4.7,
        reviews: [
          { text: "The riverside location is simply stunning. Loved the adventure sports options!", author: "Varun Dhawan" },
          { text: "Peaceful and luxurious. The meditation classes by the river were a highlight.", author: "Alia Bhatt" },
        ],
      },
    ];

    setSearchResults({
      location: searchData.location,
      hotels: mockHotels,
    });
  };

  const handleHotelSelect = (hotel, index) => {
    setSelectedHotel(hotel);
    setCurrentHotelIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
  };

  const handlePrevious = () => {
    const newIndex = (currentHotelIndex - 1 + searchResults.hotels.length) % searchResults.hotels.length;
    setSelectedHotel(searchResults.hotels[newIndex]);
    setCurrentHotelIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentHotelIndex + 1) % searchResults.hotels.length;
    setSelectedHotel(searchResults.hotels[newIndex]);
    setCurrentHotelIndex(newIndex);
  };

  const handleBook = () => {
    console.log('Booking', selectedHotel.name);
    // Implement booking logic here
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar onSearch={handleSearch} />
      {searchResults && (
        <HotelList 
          location={searchResults.location} 
          hotels={searchResults.hotels} 
          onHotelSelect={handleHotelSelect}
        />
      )}
      {selectedHotel && (
        <HotelDetails
          hotel={selectedHotel}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onBook={handleBook}
        />
      )}
      <Destination />
      <Services />
      <Feedback />
    </div>
  );
};

export default HomePage;
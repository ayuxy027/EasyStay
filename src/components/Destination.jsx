import React, { useState } from 'react';
import { BsArrowRight, BsX } from 'react-icons/bs';
import MumbaiImg from '../images/Destinations/Mumbai.jpg';
import AgraImg from '../images/Destinations/Agra.jpg';
import OotyImg from '../images/Destinations/Ooty.jpg';
import GoaImg from '../images/Destinations/Goa.jpg';
import KolkataImg from '../images/Destinations/Kolkata.jpg';
import ShimlaImg from '../images/Destinations/Shimla.jpg';
import JaipurImg from '../images/Destinations/Jaipur.jpg';
import ManaliImg from '../images/Destinations/Manali.png';
import BhubaneshwarImg from '../images/Destinations/Bhubaneshwar.jpg'; // Import the new image

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedState, setSelectedState] = useState(""); // State for selected filter
    const [sortOrder, setSortOrder] = useState(""); // State for sorting
    const [visibleCount, setVisibleCount] = useState(6); // State for visible cards

    const destinations = [
        {
            name: 'Mumbai',
            imgSrc: MumbaiImg,
            info: 'Mumbai is the financial, commercial, and entertainment capital of India.',
            state: 'Maharashtra',
        },
        {
            name: 'Agra',
            imgSrc: AgraImg,
            info: 'Agra is famous for its cultural heritage and the magnificent Taj Mahal.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Ooty',
            imgSrc: OotyImg,
            info: 'Ooty is famous for its tea plantations and beautiful landscapes.',
            state: 'Tamil Nadu',
        },
        {
            name: 'Panjim',
            imgSrc: GoaImg,
            info: 'Goa is renowned for its beaches, Portuguese heritage, and lively parties.',
            state: 'Goa',
        },
        {
            name: 'Kolkata',
            imgSrc: KolkataImg,
            info: 'Kolkata is known for its rich culture, colonial architecture, and delicious cuisine.',
            state: 'West Bengal',
        },
        {
            name: 'Shimla',
            imgSrc: ShimlaImg,
            info: 'Shimla is a picturesque hill station known for its scenic beauty and colonial charm.',
            state: 'Himachal',
        },
        {
            name: 'Jaipur',
            imgSrc: JaipurImg,
            info: 'Jaipur, the Pink City, is known for its majestic palaces, vibrant culture, and rich history.',
            state: 'Rajasthan',
        },
        {
            name: 'Manali',
            imgSrc: ManaliImg,
            info: 'Manali is famous for its adventure sports, snow-capped mountains, and serene landscapes.',
            state: 'Himachal',
        },
        {
            name: 'Bhubaneshwar',
            imgSrc: BhubaneshwarImg,
            info: 'Bhubaneshwar is known for its ancient temples and rich cultural heritage.',
            state: 'Odisha',
        },
    ];

    const handleClick = (index) => {
        setSelectedDestination(selectedDestination === index ? null : index);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const sortedDestinations = [...destinations].sort((a, b) => {
        if (sortOrder === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === 'state') {
            return a.state.localeCompare(b.state);
        }
        return 0;
    });

    const filteredDestinations = sortedDestinations.filter(dest => 
        selectedState === '' || dest.state === selectedState
    );

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-12 mb-6 text-3xl font-semibold leading-tight text-transparent text-gray-900 sm:text-4xl xl:text-5xl font-pj bg-proj bg-clip-text">Popular Destinations</h2>
                    <p className="mt-4 mb-12 text-lg leading-7 text-gray-600 sm:mt-8 font-pj">Explore some of the most popular travel destinations in India.</p>
                </div>

                {/* State filter dropdown */}
                <div className="flex justify-center mb-8">
                    <label htmlFor="stateFilter" className="mr-2 font-medium text-gray-900">Filter by State:</label>
                    <select id="stateFilter" value={selectedState} onChange={handleStateChange} className="px-1 py-1 border rounded-md focus:outline-none">
                        <option value="">All States</option>
                        {Array.from(new Set(destinations.map(dest => dest.state))).map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                {/* Sort dropdown */}
                <div className="flex justify-center mb-8">
                    <label htmlFor="sortOrder" className="mr-2 font-medium text-gray-900">Sort by:</label>
                    <select id="sortOrder" value={sortOrder} onChange={handleSortChange} className="px-1 py-1 border rounded-md focus:outline-none">
                        <option value="">Default</option>
                        <option value="name">Name</option>
                        <option value="state">State</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredDestinations.slice(0, visibleCount).map((destination, index) => (
                        <div key={index} className="p-4">
                            <div 
                                className="relative p-6 overflow-hidden transition-transform duration-300 transform bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105" 
                                onClick={() => handleClick(index)}
                            >
                                <div
                                    className="h-40 bg-center bg-cover rounded"
                                    style={{ backgroundImage: `url(${destination.imgSrc})` }}
                                ></div>
                                <h2 className="mt-6 mb-4 text-lg font-semibold text-gray-900 title-font">{destination.name}, {destination.state}</h2>
                                <button className="px-4 py-2 mb-4 text-white transition duration-300 ease-in-out rounded-full bg-proj focus:outline-none">
                                    View Details <BsArrowRight className="inline ml-1" />
                                </button>
                                <div
                                    className={`absolute inset-0 bg-gray-100 bg-opacity-90 p-6 rounded transition-transform duration-300 ${selectedDestination === index ? 'translate-y-0' : 'translate-y-full'}`}
                                    style={{ height: '100%' }}
                                >
                                    <button className="absolute p-2 text-white transition duration-300 ease-in-out rounded-full top-4 right-4 bg-proj focus:outline-none hover:scale-105" onClick={() => handleClick(null)}>
                                        <BsX className="w-5 h-5" />
                                    </button>
                                    <p className="mt-4 text-lg text-gray-600 break-words">{destination.info}</p>
                                    <button className="px-4 py-2 mt-6 font-semibold text-white transition duration-300 ease-in-out rounded-md bg-proj focus:outline-none hover:scale-105">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < filteredDestinations.length && (
                    <div className="flex justify-center mt-8">
                        <button 
                            className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out rounded-full bg-proj focus:outline-none hover:scale-105"
                            onClick={handleViewMore}
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Destination;

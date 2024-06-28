import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'; // Remove BsX as it's no longer used
import MumbaiImg from '../images/Destinations/Mumbai.jpg';
import AgraImg from '../images/Destinations/Agra.jpg';
import OotyImg from '../images/Destinations/Ooty.jpg';
import GoaImg from '../images/Destinations/Goa.jpg';
import KolkataImg from '../images/Destinations/Kolkata.jpg';
import ShimlaImg from '../images/Destinations/Shimla.jpg';
import JaipurImg from '../images/Destinations/Jaipur.jpg';
import ManaliImg from '../images/Destinations/Manali.png';
import BhubaneshwarImg from '../images/Destinations/Bhubaneshwar.jpg';

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedState, setSelectedState] = useState(""); // State for selected filter
    const [sortOrder, setSortOrder] = useState(""); // State for sorting
    const [searchQuery, setSearchQuery] = useState(""); // State for search
    const [visibleCount, setVisibleCount] = useState(6); // State for visible cards

    const destinations = [
        {
            name: 'Mumbai',
            imgSrc: MumbaiImg,
            info: 'Mumbai is the financial, commercial, and entertainment capital of India, bustling with vibrant nightlife and diverse cultural heritage. The city is home to Bollywood, the iconic Gateway of India, and numerous museums, galleries, and beaches.',
            state: 'Maharashtra',
        },
        {
            name: 'Agra',
            imgSrc: AgraImg,
            info: 'Agra is renowned for its rich cultural heritage and the magnificent Taj Mahal, a UNESCO World Heritage Site. Visitors can also explore the Agra Fort and Fatehpur Sikri, both showcasing Mughal architecture at its finest.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Ooty',
            imgSrc: OotyImg,
            info: 'Ooty, also known as Udhagamandalam, is famous for its tea plantations, rolling hills, and stunning landscapes. The Nilgiri Mountain Railway offers scenic views, and the botanical gardens are a delight for nature enthusiasts.',
            state: 'Tamil Nadu',
        },
        {
            name: 'Panjim',
            imgSrc: GoaImg,
            info: 'Goa is renowned for its beautiful beaches, Portuguese heritage, and vibrant nightlife. The state capital, Panjim, offers a mix of colonial architecture, lively markets, and serene waterfronts.',
            state: 'Goa',
        },
        {
            name: 'Kolkata',
            imgSrc: KolkataImg,
            info: 'Kolkata, the cultural capital of India, is known for its rich history, colonial architecture, and literary heritage. Key attractions include the Victoria Memorial, Howrah Bridge, and a thriving arts scene.',
            state: 'West Bengal',
        },
        {
            name: 'Shimla',
            imgSrc: ShimlaImg,
            info: 'Shimla, the capital of Himachal Pradesh, is a picturesque hill station known for its scenic beauty, colonial architecture, and pleasant climate. Major attractions include the Mall Road, Jakhoo Temple, and Christ Church.',
            state: 'Himachal Pradesh',
        },
        {
            name: 'Jaipur',
            imgSrc: JaipurImg,
            info: 'Jaipur, the Pink City, is famous for its majestic palaces, vibrant culture, and rich history. Visitors can explore the City Palace, Amber Fort, and Hawa Mahal, and experience the lively markets and traditional Rajasthani cuisine.',
            state: 'Rajasthan',
        },
        {
            name: 'Manali',
            imgSrc: ManaliImg,
            info: 'Manali is a popular hill station in Himachal Pradesh, known for its adventure sports, snow-capped mountains, and serene landscapes. Key attractions include the Solang Valley, Rohtang Pass, and Hadimba Temple.',
            state: 'Himachal Pradesh',
        },
        {
            name: 'Bhubaneshwar',
            imgSrc: BhubaneshwarImg,
            info: 'Bhubaneshwar, the capital of Odisha, is known for its ancient temples and rich cultural heritage. The city is home to the Lingaraj Temple, Udayagiri and Khandagiri Caves, and the Odisha State Museum.',
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

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleViewMore = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const filteredDestinations = destinations.filter(dest =>
        (selectedState === '' || dest.state === selectedState) &&
        (searchQuery === '' || dest.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const sortedDestinations = filteredDestinations.sort((a, b) => {
        if (sortOrder === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === 'state') {
            return a.state.localeCompare(b.state);
        }
        return 0;
    });

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-12 mb-6 text-3xl font-semibold leading-tight text-transparent text-gray-900 sm:text-4xl xl:text-5xl font-pj bg-proj bg-clip-text">Popular Destinations</h2>
                    <p className="mt-4 mb-12 text-lg leading-7 text-gray-600 sm:mt-8 font-pj">Explore some of the most popular travel destinations in India.</p>
                </div>

                {/* Filter, Sort, and Search Bar */}
                <div className="flex flex-col items-center justify-center mb-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <div>
                        <label htmlFor="stateFilter" className="mr-2 font-medium text-gray-900">Filter by State:</label>
                        <select id="stateFilter" value={selectedState} onChange={handleStateChange} className="px-2 py-1 border rounded-md focus:outline-none">
                            <option value="">All States</option>
                            {Array.from(new Set(destinations.map(dest => dest.state))).map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="sortOrder" className="mr-2 font-medium text-gray-900">Sort by:</label>
                        <select id="sortOrder" value={sortOrder} onChange={handleSortChange} className="px-2 py-1 border rounded-md focus:outline-none">
                            <option value="">Default</option>
                            <option value="name">Name</option>
                            <option value="state">State</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="searchQuery" className="ml-2 mr-2 font-medium text-gray-900">Search City</label>
                        <input
                            type="text"
                            id="searchQuery"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="px-2 py-1 border rounded-md focus:outline-none"
                            placeholder="Search by name"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedDestinations.slice(0, visibleCount).map((destination, index) => (
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
                                    className={`absolute inset-0 bg-gray-100 bg-opacity-90 p-6 rounded transition-transform duration-300 ${selectedDestination === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                                    style={{ zIndex: selectedDestination === index ? 10 : -1 }}
                                >
                                    {/* <button
                                        className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-full bg-proj focus:outline-none"
                                        onClick={() => handleClick(index)}
                                    >
                                        Book Now
                                    </button> */}
                                    <h2 className="mb-4 text-xl font-semibold text-gray-900 title-font">{destination.name}, {destination.state}</h2>
                                    <p className="leading-relaxed text-gray-700">{destination.info}</p>
                                    <button className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out rounded-full bg-proj focus:outline-none">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < sortedDestinations.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={handleViewMore}
                            className="px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out rounded-full bg-proj hover:bg-proj-light focus:outline-none"
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

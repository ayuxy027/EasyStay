import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import MumbaiImg from '../images/Destinations/Mumbai.jpg';
import AgraImg from '../images/Destinations/Agra.jpg';
import OotyImg from '../images/Destinations/Ooty.jpg';
import GoaImg from '../images/Destinations/Goa.jpg';
import KolkataImg from '../images/Destinations/Kolkata.jpg';
import ShimlaImg from '../images/Destinations/Shimla.jpg';
import JaipurImg from '../images/Destinations/Jaipur.jpg';
import ManaliImg from '../images/Destinations/Manali.png';

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedState, setSelectedState] = useState(""); // State for selected filter

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
    ];

    const handleClick = (index) => {
        setSelectedDestination(selectedDestination === index ? null : index);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-12 mb-6 text-3xl font-bold leading-tight text-transparent text-gray-900 sm:text-4xl xl:text-5xl font-pj bg-proj bg-clip-text">Popular Destinations</h2>
                    <p className="mt-4 mb-12 text-lg leading-7 text-gray-600 sm:mt-8 font-pj">Explore some of the most popular travel destinations in India.</p>
                </div>

                {/* State filter dropdown */}
                <div className="flex justify-center mb-8">
                    <label htmlFor="stateFilter" className="mr-2 font-medium text-gray-900">Filter by State:</label>
                    <select id="stateFilter" value={selectedState} onChange={handleStateChange} className="px-2 py-1 border rounded-md focus:outline-none">
                        <option value="">All States</option>
                        {/* Populate dropdown with unique states from destinations */}
                        {Array.from(new Set(destinations.map(dest => dest.state))).map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {destinations.map((destination, index) => (
                        // Filter destinations based on selected state
                        (selectedState === '' || destination.state === selectedState) && (
                            <div key={index} className="p-4">
                                <div 
                                    className="relative p-6 overflow-hidden transition-shadow duration-300 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg" 
                                    onClick={() => handleClick(index)}
                                >
                                    <div
                                        className="h-40 bg-center bg-cover rounded"
                                        style={{ backgroundImage: `url(${destination.imgSrc})` }}
                                    ></div>
                                    <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 title-font">{destination.name}, {destination.state}</h2>
                                    <button className="flex items-center text-base font-bold tracking-widest text-blue-500 focus:outline-none">
                                        View Details <BsArrowRight className="ml-1" />
                                    </button>
                                    <div
                                        className={`absolute inset-0 bg-gray-100 bg-opacity-90 p-6 rounded transition-transform duration-300 ${selectedDestination === index ? 'translate-y-0' : 'translate-y-full'}`}
                                        style={{ height: '100%' }}
                                    >
                                        <button className="absolute text-base font-bold tracking-widest text-blue-500 top-4 right-4 focus:outline-none" onClick={() => handleClick(null)}>
                                            Close <BsArrowRight className="ml-1 rotate-180" />
                                        </button>
                                        <p className="mt-4 text-lg text-gray-600">{destination.info}</p>
                                        <button className="px-4 py-2 mt-6 font-bold text-white bg-blue-500 rounded-md focus:outline-none">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destination;

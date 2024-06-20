import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'; // Importing the right arrow icon from React Icons

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [selectedState, setSelectedState] = useState(""); // State for selected filter

        const destinations = [
        {
            name: 'Mumbai',
            imgSrc: 'https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg',
            info: 'Mumbai is the financial, commercial, and entertainment capital of India.',
            state: 'Maharashtra',
        },
        {
            name: 'Agra',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg',
            info: 'Agra is famous for its cultural heritage and the magnificent Taj Mahal.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Ooty',
            imgSrc: 'https://www.desktopbackground.org/p/2015/01/30/894926_ooty-nature-images-wallpapers-hd-wide_1024x770_h.jpg',
            info: 'Ooty is famous for its tea plantations and beautiful landscapes.',
            state: 'Tamil Nadu',
        },
        {
            name: 'Panjim',
            imgSrc: 'https://cdn.pixabay.com/photo/2018/12/18/10/41/india-3882103_1280.jpg',
            info: 'Goa is renowned for its beaches, Portuguese heritage, and lively parties.',
            state: 'Goa',
        },
        {
            name: 'Kolkata',
            imgSrc: 'https://t3.ftcdn.net/jpg/00/79/37/88/360_F_79378891_k4Lq0nFbWdC4AICYoPOWYzhGI7YwgMvG.jpg',
            info: 'Kolkata is known for its rich culture, colonial architecture, and delicious cuisine.',
            state: 'West Bengal',
        },
        {
            name: 'Shimla',
            imgSrc: 'https://t3.ftcdn.net/jpg/03/40/58/02/360_F_340580278_RTo3vXppsiITp3XSdIvNTENpBzDRWlAn.jpg',
            info: 'Shimla is a picturesque hill station known for its scenic beauty and colonial charm.',
            state: 'Himachal Pradesh',
        },
        {
            name: 'Jaipur',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5J3IoI5-1xNVVM86-mISRAgMcyV-ago4EQ&s',
            info: 'Jaipur, the Pink City, is known for its majestic palaces, vibrant culture, and rich history.',
            state: 'Rajasthan',
        },
        {
            name: 'Manali',
            imgSrc: 'https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/p179.png',
            info: 'Manali is famous for its adventure sports, snow-capped mountains, and serene landscapes.',
            state: 'Himachal Pradesh',
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
    <h2 className="mt-12 mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Popular Destinations</h2>
    <p className="mt-4 mb-12 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Explore some of the most popular travel destinations in India.</p>
</div>

                {/* State filter dropdown */}
                <div className="mb-4">
                    <label htmlFor="stateFilter" className="mr-2 font-medium text-gray-900">Filter by State:</label>
                    <select id="stateFilter" value={selectedState} onChange={handleStateChange} className="px-2 py-1 border rounded-md focus:outline-none">
                        <option value="">All States</option>
                        {/* Populate dropdown with unique states from destinations */}
                        {Array.from(new Set(destinations.map(dest => dest.state))).map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap -m-4">
                    {destinations.map((destination, index) => (
                        // Filter destinations based on selected state
                        (selectedState === '' || destination.state === selectedState) && (
                            <div key={index} className="p-4 xl:w-1/4 md:w-1/2">
                                <div className="p-6 bg-gray-100 rounded-lg" onClick={() => handleClick(index)}>
                                    <img className="object-cover object-center w-full h-40 mb-6 rounded" src={destination.imgSrc} alt={destination.name} />
                                    <h2 className="mb-4 text-lg font-medium text-gray-900 title-font">{destination.state === destination.name ? `${destination.locality}, ${destination.state}` : `${destination.name}, ${destination.state}`}</h2>
                                    <button className="flex items-center text-xs font-medium tracking-widest text-blue-500 focus:outline-none">
                                        View Details <BsArrowRight className="ml-1" />
                                    </button>
                                    {selectedDestination === index && (
                                        <p className="mt-4 text-sm text-gray-600">{destination.info}</p>
                                    )}
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

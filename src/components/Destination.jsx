import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'; // Importing the right arrow icon from React Icons

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(null);

    const destinations = [
        {
            name: 'Mumbai',
            subtitle: 'City of Dreams and Bollywood.',
            imgSrc: 'https://t3.ftcdn.net/jpg/03/55/64/04/360_F_355640480_FKKv2BQwqY6sMa6jmEGVPnEndX1GPtJU.jpg',
            info: 'Mumbai is the financial, commercial, and entertainment capital of India.',
            state: 'Maharashtra',
        },
        {
            name: 'Agra',
            subtitle: 'Home of historic monuments.',
            imgSrc: 'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg',
            info: 'Agra is famous for its cultural heritage and the magnificent Taj Mahal.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Ooty',
            subtitle: 'Scenic hill station in Tamil Nadu.',
            imgSrc: 'https://www.desktopbackground.org/p/2015/01/30/894926_ooty-nature-images-wallpapers-hd-wide_1024x770_h.jpg',
            info: 'Ooty is famous for its tea plantations and beautiful landscapes.',
            state: 'Tamil Nadu',
        },
        {
            name: 'Panjim',
            subtitle: 'Dynamic nightlife at Beaches.',
            imgSrc: 'https://cdn.pixabay.com/photo/2018/12/18/10/41/india-3882103_1280.jpg',
            info: 'Goa is renowned for its beaches, Portuguese heritage, and lively parties.',
            state: 'Goa',
        },
    ];

    const handleClick = (index) => {
        setSelectedDestination(selectedDestination === index ? null : index);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                        <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Popular Destinations</h1>
                        <div className="w-20 h-1 bg-blue-500 rounded"></div>
                    </div>
                    <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
                        Explore some of the most popular travel destinations in India.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {destinations.map((destination, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Destination;

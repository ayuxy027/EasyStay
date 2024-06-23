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
import BhubaneshwarImg from '../images/Destinations/Bhubaneshwar.jpg';
// import BengaluruImg from '../images/Destinations/Bengaluru.jpg';
// import HyderabadImg from '../images/Destinations/Hyderabad.jpg';
// import ChandigarhImg from '../images/Destinations/Chandigarh.jpg';
// import LucknowImg from '../images/Destinations/Lucknow.jpg';
// import PuneImg from '../images/Destinations/Pune.jpg';
// import ThiruvananthapuramImg from '../images/Destinations/Thiruvananthapuram.jpg';
// import AhmedabadImg from '../images/Destinations/Ahmedabad.jpg';
// import GuwahatiImg from '../images/Destinations/Guwahati.jpg';
// import VaranasiImg from '../images/Destinations/Varanasi.jpg';
// import AmritsarImg from '../images/Destinations/Amritsar.jpg';
// import BhopalImg from '../images/Destinations/Bhopal.jpg';
// import UdaipurImg from '../images/Destinations/Udaipur.jpg';
// import MysoreImg from '../images/Destinations/Mysore.jpg';
// import VisakhapatnamImg from '../images/Destinations/Visakhapatnam.jpg';
// import CoimbatoreImg from '../images/Destinations/Coimbatore.jpg';
// import SuratImg from '../images/Destinations/Surat.jpg';
// import PatnaImg from '../images/Destinations/Patna.jpg';
// import RanchiImg from '../images/Destinations/Ranchi.jpg';
// import GangtokImg from '../images/Destinations/Gangtok.jpg';
// import ItanagarImg from '../images/Destinations/Itanagar.jpg';

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
        {
            name: 'Bengaluru',
            // imgSrc: BengaluruImg,
            info: 'Bengaluru, the Silicon Valley of India, is known for its pleasant climate, lush parks, and vibrant nightlife. Key attractions include Lalbagh Botanical Garden, Bangalore Palace, and a thriving tech industry.',
            state: 'Karnataka',
        },
        {
            name: 'Hyderabad',
            // imgSrc: HyderabadImg,
            info: 'Hyderabad, the City of Pearls, is known for its rich history, magnificent palaces, and delicious cuisine. Visitors can explore the Charminar, Golconda Fort, and Ramoji Film City.',
            state: 'Telangana',
        },
        {
            name: 'Chandigarh',
            // imgSrc: ChandigarhImg,
            info: 'Chandigarh, a union territory and the capital of Punjab and Haryana, is known for its modern architecture and urban design. Key attractions include the Rock Garden, Sukhna Lake, and the Capitol Complex.',
            state: 'Chandigarh',
        },
        {
            name: 'Lucknow',
            // imgSrc: LucknowImg,
            info: 'Lucknow, the City of Nawabs, is known for its rich history, exquisite cuisine, and beautiful architecture. Major attractions include Bara Imambara, Rumi Darwaza, and Hazratganj market.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Pune',
            // imgSrc: PuneImg,
            info: 'Pune, the cultural capital of Maharashtra, is known for its educational institutions, historical sites, and vibrant nightlife. Key attractions include Shaniwar Wada, Aga Khan Palace, and Osho Ashram.',
            state: 'Maharashtra',
        },
        {
            name: 'Thiruvananthapuram',
            // imgSrc: ThiruvananthapuramImg,
            info: 'Thiruvananthapuram, the capital of Kerala, is known for its serene beaches, historical landmarks, and vibrant cultural scene. Major attractions include the Padmanabhaswamy Temple, Kovalam Beach, and the Napier Museum.',
            state: 'Kerala',
        },
        {
            name: 'Ahmedabad',
            // imgSrc: AhmedabadImg,
            info: 'Ahmedabad, a major city in Gujarat, is known for its rich cultural heritage, textile industry, and historic sites. Key attractions include the Sabarmati Ashram, Kankaria Lake, and the vibrant old city area.',
            state: 'Gujarat',
        },
        {
            name: 'Guwahati',
            // imgSrc: GuwahatiImg,
            info: 'Guwahati, the gateway to Northeast India, is known for its ancient temples, scenic beauty, and vibrant markets. Major attractions include the Kamakhya Temple, Umananda Island, and the Assam State Museum.',
            state: 'Assam',
        },
        {
            name: 'Varanasi',
            // imgSrc: VaranasiImg,
            info: 'Varanasi, one of the oldest cities in the world, is known for its spiritual significance, ghats, and temples. Key attractions include the Kashi Vishwanath Temple, Dashashwamedh Ghat, and the evening Ganga Aarti.',
            state: 'Uttar Pradesh',
        },
        {
            name: 'Amritsar',
            // imgSrc: AmritsarImg,
            info: 'Amritsar, the spiritual center of Sikhism, is known for the Golden Temple, its vibrant markets, and rich history. Visitors can also explore the Jallianwala Bagh and the Wagah Border ceremony.',
            state: 'Punjab',
        },
        {
            name: 'Bhopal',
            // imgSrc: BhopalImg,
            info: 'Bhopal, the capital of Madhya Pradesh, is known for its beautiful lakes, historical sites, and rich cultural heritage. Major attractions include the Upper Lake, Taj-ul-Masajid, and the Bhimbetka rock shelters.',
            state: 'Madhya Pradesh',
        },
        {
            name: 'Udaipur',
            // imgSrc: UdaipurImg,
            info: 'Udaipur, the City of Lakes, is known for its stunning palaces, lakes, and vibrant culture. Key attractions include the City Palace, Lake Pichola, and Jag Mandir.',
            state: 'Rajasthan',
        },
        {
            name: 'Mysore',
            // imgSrc: MysoreImg,
            info: 'Mysore, known as the cultural capital of Karnataka, is famous for its royal heritage, Mysore Palace, and the annual Dussehra festival. Other attractions include the Chamundi Hills and Brindavan Gardens.',
            state: 'Karnataka',
        },
        {
            name: 'Visakhapatnam',
            // imgSrc: VisakhapatnamImg,
            info: 'Visakhapatnam, also known as Vizag, is a coastal city in Andhra Pradesh known for its beaches, ports, and natural beauty. Major attractions include the Kailasagiri Park, RK Beach, and the INS Kursura Submarine Museum.',
            state: 'Andhra Pradesh',
        },
        {
            name: 'Coimbatore',
            // imgSrc: CoimbatoreImg,
            info: 'Coimbatore, a major city in Tamil Nadu, is known for its textile industry, pleasant climate, and educational institutions. Key attractions include the Marudamalai Temple, Gass Forest Museum, and Kovai Kondattam theme park.',
            state: 'Tamil Nadu',
        },
        {
            name: 'Surat',
            // imgSrc: SuratImg,
            info: 'Surat, a major port city in Gujarat, is known for its diamond cutting and polishing industry, textiles, and vibrant markets. Key attractions include the Dumas Beach, Dutch Garden, and the Sardar Patel Museum.',
            state: 'Gujarat',
        },
        {
            name: 'Patna',
            // imgSrc: PatnaImg,
            info: 'Patna, the capital of Bihar, is known for its historical significance, educational institutions, and cultural heritage. Major attractions include the Mahavir Mandir, Patna Museum, and the ruins of Nalanda University.',
            state: 'Bihar',
        },
        {
            name: 'Ranchi',
            // imgSrc: RanchiImg,
            info: 'Ranchi, the capital of Jharkhand, is known for its picturesque waterfalls, pleasant climate, and rich cultural heritage. Key attractions include the Dassam Falls, Jagannath Temple, and the Rock Garden.',
            state: 'Jharkhand',
        },
        {
            name: 'Gangtok',
            // imgSrc: GangtokImg,
            info: 'Gangtok, the capital of Sikkim, is known for its stunning mountain views, Buddhist monasteries, and vibrant culture. Major attractions include the Rumtek Monastery, Tsomgo Lake, and the Nathula Pass.',
            state: 'Sikkim',
        },
        {
            name: 'Itanagar',
            // imgSrc: ItanagarImg,
            info: 'Itanagar, the capital of Arunachal Pradesh, is known for its scenic beauty, historical sites, and rich cultural heritage. Key attractions include the Ita Fort, Ganga Lake, and the Jawaharlal Nehru State Museum.',
            state: 'Arunachal Pradesh',
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
                <div className="flex justify-center mb-8 space-x-4">
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
                                    className={`absolute inset-0 bg-gray-100 bg-opacity-90 p-6 rounded transition-transform duration-300 ${selectedDestination === index ? 'translate-y-0' : 'translate-y-full'}`}
                                    style={{ height: '100%' }}
                                >
                                    <button className="absolute p-2 text-white transition duration-300 ease-in-out bg-gray-800 rounded-full right-6 top-6 focus:outline-none" onClick={() => handleClick(index)}>
                                        <BsX className="text-xl" />
                                    </button>
                                    <p className="mt-4 text-base leading-relaxed text-gray-800">{destination.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < sortedDestinations.length && (
                    <div className="flex justify-center mt-8">
                        <button onClick={handleViewMore} className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out rounded-full bg-proj focus:outline-none">View More</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Destination;

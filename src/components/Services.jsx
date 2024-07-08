import React from 'react';
import { FaWifi, FaCar, FaGlassMartiniAlt, FaUtensils, FaDumbbell, FaSwimmingPool } from 'react-icons/fa';

const servicesData = [
    {
        icon: <FaWifi className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Free Wifi',
        description: 'Enjoy complimentary high-speed internet access throughout your stay.',
    },
    {
        icon: <FaCar className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Subtle Services',
        description: 'Benefit from our secure and convenient parking services.',
    },
    {
        icon: <FaGlassMartiniAlt className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Bar',
        description: 'Relax and enjoy a drink at our well-stocked bar.',
    },
    {
        icon: <FaUtensils className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Restaurant',
        description: 'Savor delicious meals at our in-house restaurant.',
    },
    {
        icon: <FaDumbbell className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Fitness Center',
        description: 'Keep fit with our state-of-the-art gym facilities.',
    },
    {
        icon: <FaSwimmingPool className="mx-auto text-4xl text-gray-900 transition duration-300 ease-in-out hover:text-blue-600" />,
        title: 'Swimming Pool',
        description: 'Relax by our refreshing pool area.',
    },
];
function Services() {
    return (
        <section className="py-8 bg-white sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold leading-tight text-transparent bg-proj bg-clip-text sm:text-4xl xl:text-5xl font-pj">Our Services</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 font-pj">Experience the exceptional services we offer for a memorable stay.</p>
                </div>
                <div className="grid grid-cols-1 mt-8 text-center gap-y-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 xl:mt-16">
                    {servicesData.map((service, index) => (
                        <div key={index} className="p-6 transition duration-300 ease-in-out transform bg-white rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(72,61,139,0.3)] hover:bg-gray-100">
                            {service.icon}
                            <h3 className="mt-8 text-xl font-semibold text-gray-900 font-pj">{service.title}</h3>
                            <p className="mt-4 text-base text-gray-600 font-pj">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

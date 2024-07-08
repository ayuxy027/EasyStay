import React, { useState, useEffect } from 'react';
import './css/cursor.css';

function Hero() {
    const dynamicWords = ["Affordable", "Premium", "Luxurious"];
    const [dynamicText, setDynamicText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = dynamicWords[wordIndex];

            if (isDeleting) {
                setDynamicText(prevText => prevText.slice(0, -1));
                setCharIndex(prevIndex => prevIndex - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex(prevIndex => (prevIndex + 1) % dynamicWords.length);
                }
            } else {
                setDynamicText(prevText => prevText + currentWord.charAt(charIndex));
                setCharIndex(prevIndex => prevIndex + 1);
                if (charIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, 150);
        return () => clearInterval(typingInterval);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <div className="py-12 bg-gray-50 sm:py-16 lg:py-20 lg:pb-36">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold leading-tight text-transparent text-gray-900 bg-proj bg-clip-text sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                        India's Leading <br />
                        <span className="text-transparent bg-proj bg-clip-text">
                            {dynamicText}<span className="cursor">|</span>
                        </span>
                        Hotels Chain
                    </h1>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 sm:mt-8 font-inter lg:mx-0">
                        Enjoy a perfect vacation at any holiday destination with our affordable and
                        flexible hourly hotels.
                    </p>
                    <div className="flex justify-center mt-8 space-x-4 lg:justify-start">
                        <button className="w-full px-6 py-3 font-semibold text-white transition duration-300 rounded-md bg-proj hover:bg-blue-700 sm:w-auto">
                            Book Now
                        </button>
                        <button className="w-full px-6 py-3 font-semibold transition duration-300 bg-gray-200 rounded-md text-sky-700 hover:bg-gray-300 sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
import React, { useState, useEffect } from 'react';
import './css/cursor.css';

function Hero() {
    // Array of words to be typed out dynamically
    const dynamicWords = ["Affordable", "Premium", "Luxurious"];
    const [dynamicText, setDynamicText] = useState(''); // Current text being displayed
    const [wordIndex, setWordIndex] = useState(0); // Index of the current word
    const [charIndex, setCharIndex] = useState(0); // Index of the current character in the word
    const [isDeleting, setIsDeleting] = useState(false); // Flag to indicate if the word is being deleted

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = dynamicWords[wordIndex];

            if (isDeleting) {
                // Deleting text logic
                setDynamicText(prevText => prevText.slice(0, -1));
                setCharIndex(prevIndex => prevIndex - 1);
                if (charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex(prevIndex => (prevIndex + 1) % dynamicWords.length);
                }
            } else {
                // Typing text logic
                setDynamicText(prevText => prevText + currentWord.charAt(charIndex));
                setCharIndex(prevIndex => prevIndex + 1);
                if (charIndex === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), 1000); // Delay before starting to delete
                }
            }
        };

        // Controls the speed of typing and deleting
        const typingInterval = setInterval(handleTyping, 150); 
        return () => clearInterval(typingInterval);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <div className="relative bg-gray-50">
            <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
            {/* <img className="w-auto h-full" src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png" alt="" /> */}
            </div>
            <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                        <div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl font-bold leading-tight text-transparent text-gray-900 bg-proj bg-clip-text sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                                    India’s Leading <br /> {dynamicText}<span className="cursor">|</span>Hotels Chain
                                </h1>
                                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                                    Enjoy a perfect vacation at any holiday destination with our affordable and flexible hourly hotels.
                                </p>
                            </div>
                            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">500+</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Hotels<br />Worldwide</p>
                                </div>
                                <div className="hidden sm:block">
                                    <svg className="text-gray-400" width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                        <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                        <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                        <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                        <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                                    </svg>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">10K+</p>
                                    <p className="ml-3 text-sm text-gray-900 font-pj">Rooms<br />Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;

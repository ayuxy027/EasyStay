import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [height, setHeight] = useState(0);

    const faqs = [
        {
            question: 'What is Idbook?',
            answer: 'Idbook is India\'s hospitality company, offering hourly stays and flexible check-in and check-out times. We provide standardized rooms across various locations in India.'
        },
        {
            question: 'How is Idbook different from an online marketplace of hotel rooms?',
            answer: 'Idbook guarantees a consistent experience across all its hotels, unlike online marketplaces where user experiences can vary. Customers can book rooms for a minimum of 4 hours and check in at any time.'
        },
        {
            question: 'What is the minimum duration of stay in any hotel?',
            answer: 'The minimum stay duration is 4 hours.'
        },
        {
            question: 'How big is the Idbook network?',
            answer: 'Idbook operates in most parts of NCR and select other cities. Please check our app or website for specific locations.'
        },
        {
            question: 'What are the key features of "standardized" Idbook?',
            answer: 'Key features include AC rooms with TV, clean linen, complimentary tea/coffee for 4-hour stays, free breakfast for stays over 8 hours, free Wi-Fi, and hygienic washrooms.'
        },
        {
            question: 'How much does an Idbook cost? Are there any hidden charges?',
            answer: 'Rooms start at Rs 400 for short stays, and there are no hidden charges. Prices can be lower during sales or with coupon discounts.'
        },
        {
            question: 'How can one book an Idbook?',
            answer: 'You can book through the Idbook app, website (www.idbook.co), by calling +91-9599916085, or via WhatsApp at +91-7897717337. Partner online travel agents may not offer short-duration bookings.'
        },
        {
            question: 'Does any payment need to be made at the time of booking?',
            answer: 'Customers can either pay in advance through the app or website or pay at the hotel during check-in/check-out.'
        },
        {
            question: 'What are the standard check-in and check-out times?',
            answer: 'There are no standard check-in times. Guests can check in at any time by selecting their preferred time through our app, website, call, or WhatsApp.'
        },
        {
            question: 'Can I get my booking revised?',
            answer: 'Yes, you can revise your booking by calling +91-9599916085 or WhatsApp at +91-7897717337.'
        },
        {
            question: 'Can I get my booking canceled?',
            answer: 'Yes, you can cancel your booking via the website, app, or by calling +91-9599916085. Refunds are processed within 4 working days, but it may take 3-14 additional days to reflect in your account, depending on your bank\'s processing time. Review the cancellation policy when making your reservation.'
        },
        {
            question: 'What documents do I need to carry to the hotel to ensure a quick check-in?',
            answer: 'Carry the confirmation email/booking ID and any ID proof with your address and photograph, such as a passport, Aadhaar card, driving license, or voter ID card. PAN cards are not accepted.'
        },
        {
            question: 'Am I eligible for any special discounts if I stay at Idbook for a long period of time?',
            answer: 'Yes, long-term stays may qualify for special discounts. Contact bookings@idbook.co or call +91-9599916085 for details.'
        },
        {
            question: 'I am looking for corporate bookings with Idbook. How should I go about it?',
            answer: 'For corporate bookings, email bookings@idbook.co or call +91-9599916085.'
        },
        {
            question: 'I am a hotel owner. How can I partner with Idbook?',
            answer: 'Call +91-9599916085 to join the Idbook network. We will provide you with all the necessary details.'
        },
        {
            question: 'I have further questions. How should I contact Idbook?',
            answer: 'Email bookings@idbook.co or call +91-9599916085.'
        },
        {
            question: 'What are the different modes of payment for booking a trip on Idbook hotels?',
            answer: 'Idbook accepts credit cards, debit cards, Paytm wallet, UPI, net banking, and bank transfers.'
        },
        {
            question: 'What is Idbook\'s cancellation policy?',
            answer: 'For cancellations:\n- 100% refund if canceled 30 days before the trip\n- 50% refund if canceled 15 days before the trip\n- 30% refund if canceled 1 week before the trip\nFlight charges are subject to the airline\'s cancellation policy.'
        },
        {
            question: 'What is Idbook\'s refund policy?',
            answer: 'Refunds follow the same process as the cancellation policy.'
        },
        {
            question: 'Does Idbook offer any discount?',
            answer: 'Yes, Idbook offers various discounts and coupons, including bank offers, coupon codes, pro membership offers, and wallet options.'
        },
        {
            question: 'What COVID-19 precautions does Idbook take?',
            answer: 'Idbook ensures regular sanitization of rooms, contactless check-in/check-out, and adherence to social distancing guidelines to ensure guest safety.'
        },
        {
            question: 'Can I book a room for day use only?',
            answer: 'Yes, Idbook offers rooms for day use. You can book a room for as little as 4 hours, which is perfect for short stays or day use.'
        },
        {
            question: 'Are pets allowed in Idbook hotels?',
            answer: 'Policies on pets vary by hotel. Please check the specific hotel\'s policy on our app or website before booking.'
        },
        {
            question: 'Do Idbook hotels offer airport transfers?',
            answer: 'Some Idbook hotels offer airport transfers. Please check with the specific hotel or contact our support for details.'
        },
        {
            question: 'Can I book multiple rooms at once?',
            answer: 'Yes, you can book multiple rooms at once through the Idbook app or website. For large group bookings, contact our support team for assistance.'
        }
    ];

    const toggleFAQ = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
            setHeight(0);
        } else {
            setActiveIndex(index);
            setHeight(document.getElementById(`faq-${index}`).scrollHeight);
        }
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Wonder.Explore.Discover</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6 focus:outline-none" onClick={() => toggleFAQ(index)}>
                                <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                                <svg className={`w-6 h-6 text-gray-400 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div id={`faq-${index}`} className="overflow-hidden duration-300 transition-height" style={{ height: activeIndex === index ? `${height}px` : '0' }}>
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               <Link to="/support"><p className="text-base text-center text-gray-600 transition-colors duration-300 ease-in-out mt-9 hover:text-blue-500">Didn’t find the answer you are looking for? Contact our support</p></Link>
            </div>
        </section>
    );
}

export default FAQ;

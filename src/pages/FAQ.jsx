import React, { useState } from 'react';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'What Is Idbook?',
            answer: 'Idbook Is India\'s Hospitality Company, Offering Hourly Stays And Flexible Check-In And Check-Out Times. We Provide Standardized Rooms Across Various Locations In India.'
        },
        {
            question: 'How Is Idbook Different From An Online Marketplace Of Hotel Rooms?',
            answer: 'Idbook Guarantees A Consistent Experience Across All Its Hotels, Unlike Online Marketplaces Where User Experiences Can Vary. Customers Can Book Rooms For A Minimum Of 4 Hours And Check In At Any Time.'
        },
        {
            question: 'What Is The Minimum Duration Of Stay In Any Hotel?',
            answer: 'The Minimum Stay Duration Is 4 Hours.'
        },
        {
            question: 'How Big Is The Idbook Network?',
            answer: 'Idbook Operates In Most Parts Of NCR And Select Other Cities. Please Check Our App Or Website For Specific Locations.'
        },
        {
            question: 'What Are The Key Features Of "Standardized" Idbook?',
            answer: 'Key Features Include AC Rooms With TV, Clean Linen, Complimentary Tea/Coffee For 4-Hour Stays, Free Breakfast For Stays Over 8 Hours, Free Wi-Fi, And Hygienic Washrooms.'
        },
        {
            question: 'How Much Does An Idbook Cost? Are There Any Hidden Charges?',
            answer: 'Rooms Start At Rs 400 For Short Stays, And There Are No Hidden Charges. Prices Can Be Lower During Sales Or With Coupon Discounts.'
        },
        {
            question: 'How Can One Book An Idbook?',
            answer: 'You Can Book Through The Idbook App, Website (www.idbook.co), By Calling +91-9599916085, Or Via WhatsApp At +91-7897717337. Partner Online Travel Agents May Not Offer Short-Duration Bookings.'
        },
        {
            question: 'Does Any Payment Need To Be Made At The Time Of Booking?',
            answer: 'Customers Can Either Pay In Advance Through The App Or Website Or Pay At The Hotel During Check-In/Check-Out.'
        },
        {
            question: 'What Are The Standard Check-In And Check-Out Times?',
            answer: 'There Are No Standard Check-In Times. Guests Can Check In At Any Time By Selecting Their Preferred Time Through Our App, Website, Call, Or WhatsApp.'
        },
        {
            question: 'Can I Get My Booking Revised?',
            answer: 'Yes, You Can Revise Your Booking By Calling +91-9599916085 Or WhatsApp At +91-7897717337.'
        },
        {
            question: 'Can I Get My Booking Canceled?',
            answer: 'Yes, You Can Cancel Your Booking Via The Website, App, Or By Calling +91-9599916085. Refunds Are Processed Within 4 Working Days, But It May Take 3-14 Additional Days To Reflect In Your Account, Depending On Your Bank\'s Processing Time. Review The Cancellation Policy When Making Your Reservation.'
        },
        {
            question: 'What Documents Do I Need To Carry To The Hotel To Ensure A Quick Check-In?',
            answer: 'Carry The Confirmation Email/Booking ID And Any ID Proof With Your Address And Photograph, Such As A Passport, Aadhaar Card, Driving License, Or Voter ID Card. PAN Cards Are Not Accepted.'
        },
        {
            question: 'Am I Eligible For Any Special Discounts if I stay at Idbook for a long period of time?',
            answer: 'Yes, Long-Term Stays May Qualify For Special Discounts. Contact Bookings@idbook.co Or Call +91-9599916085 For Details.'
        },
        {
            question: 'I Am Looking For Corporate Bookings With Idbook. How Should I Go About It?',
            answer: 'For Corporate Bookings, Email Bookings@idbook.co Or Call +91-9599916085.'
        },
        {
            question: 'I Am A Hotel Owner. How Can I Partner With Idbook?',
            answer: 'Call +91-9599916085 To Join The Idbook Network. We Will Provide You With All The Necessary Details.'
        },
        {
            question: 'I Have Further Questions. How Should I Contact Idbook?',
            answer: 'Email Bookings@idbook.co Or Call +91-9599916085.'
        },
        {
            question: 'What Are The Different Modes Of Payment For Booking A Trip On Idbook Hotels?',
            answer: 'Idbook Accepts Credit Cards, Debit Cards, Paytm Wallet, UPI, Net Banking, And Bank Transfers.'
        },
        {
            question: 'What Is Idbook\'s Cancellation Policy?',
            answer: 'For Cancellations:\n- 100% Refund If Canceled 30 Days Before The Trip\n- 50% Refund If Canceled 15 Days Before The Trip\n- 30% Refund If Canceled 1 Week Before The Trip\nFlight Charges Are Subject To The Airline\'s Cancellation Policy.'
        },
        {
            question: 'What Is Idbook\'s Refund Policy?',
            answer: 'Refunds Follow The Same Process As The Cancellation Policy.'
        },
        {
            question: 'Does Idbook Offer Any Discount?',
            answer: 'Yes, Idbook Offers Various Discounts And Coupons, Including Bank Offers, Coupon Codes, Pro Membership Offers, And Wallet Options.'
        },
        {
            question: 'What COVID-19 Precautions Does Idbook Take?',
            answer: 'Idbook Ensures Regular Sanitization Of Rooms, Contactless Check-In/Check-Out, And Adherence To Social Distancing Guidelines To Ensure Guest Safety.'
        },
        {
            question: 'Can I Book A Room For Day Use Only?',
            answer: 'Yes, Idbook Offers Rooms For Day Use. You Can Book A Room For As Little As 4 Hours, Which Is Perfect For Short Stays Or Day Use.'
        },
        {
            question: 'Are Pets Allowed In Idbook Hotels?',
            answer: 'Policies On Pets Vary By Hotel. Please Check The Specific Hotel\'s Policy On Our App Or Website Before Booking.'
        },
        {
            question: 'Do Idbook Hotels Offer Airport Transfers?',
            answer: 'Some Idbook Hotels Offer Airport Transfers. Please Check With The Specific Hotel Or Contact Our Support For Details.'
        },
        {
            question: 'Can I Book Multiple Rooms At Once?',
            answer: 'Yes, You Can Book Multiple Rooms At Once Through The Idbook App Or Website. For Large Group Bookings, Contact Our Support Team For Assistance.'
        }
    ];
    
    
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFAQ(index)}>
                                <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                                <svg className={`w-6 h-6 text-gray-400 ${activeIndex === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? Contact our support</p>
            </div>
        </section>
    );
}

export default FAQ;

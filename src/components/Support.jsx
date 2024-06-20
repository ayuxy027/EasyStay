import React, { useState } from 'react';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission (stub for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add your form submission logic, e.g., sending data to a server
  };

  return (
    <div className="bg-neutral-900">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact Us</h2>
          <p className="mt-1 text-neutral-400">We're here to assist you with your stay.</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Input for Name */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" 
                    placeholder="Name"
                    required
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute top-0 left-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                </div>
                {/* End Input */}

                {/* Input for Email */}
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" 
                    placeholder="Email"
                    required
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute top-0 left-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email
                  </label>
                </div>
                {/* End Input */}

                {/* Input for Phone */}
                <div className="relative">
                  <input 
                    type="text" 
                    id="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" 
                    placeholder="Phone"
                    required
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute top-0 left-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>
                {/* End Input */}

                {/* Textarea for Message */}
                <div className="relative">
                  <textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2" 
                    placeholder="How can we assist you with your booking?"
                    required
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute top-0 left-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-neutral-400
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    How can we assist you with your booking?
                  </label>
                </div>
                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required.
                </p>

                <p className="mt-5">
                  <button 
                    type="submit" 
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-white font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  >
                    Submit
                    <svg 
                      className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0" 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>
          {/* End Col */}

          <div className="space-y-14">
            {/* Item for Address */}
            <div className="flex gap-x-5">
              <svg className="flex-shrink-0 h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-white">Address</h3>
                <p className="text-neutral-400">1234 Hotel Blvd, City, Country</p>
              </div>
            </div>
            {/* End Item */}

            {/* Item for Email */}
            <div className="flex gap-x-5">
              <svg className="flex-shrink-0 h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                <path d="M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                <path d="M3 12h18" />
                <path d="M7 12l5 5 5-5" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-neutral-400">contact@hotel.com</p>
              </div>
            </div>
            {/* End Item */}

            {/* Item for Phone */}
            <div className="flex gap-x-5">
              <svg className="flex-shrink-0 h-7 w-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.83 19.83 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12 1 .51 2.05 1.09 2.92a2 2 0 0 1-.45 2.32L10 12.54a16 16 0 0 0 6.09 6.09l2.58-2.58a2 2 0 0 1 2.32-.45 11.55 11.55 0 0 0 2.92 1.09 2 2 0 0 1 1.72 2.04z" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-neutral-400">+123 456 7890</p>
              </div>
            </div>
            {/* End Item */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}

        {/* FAQ Link */}
        <div className="mt-10 text-center">
          <a href="/faq" className="text-white underline text-sm md:text-base">Frequently Asked Questions</a>
        </div>
      </div>
    </div>
  );
};

export default Support;

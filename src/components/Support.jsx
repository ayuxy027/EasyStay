import React, { useState } from "react";
import { Link } from "react-router-dom";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto mt-[80px] text-center">
        <h2
          className="mt-8 text-3xl font-bold leading-tight text-transparent text-black sm:text-4xl lg:text-5xl bg-proj bg-clip-text md:mt-6"
        >
          Contact Us
        </h2>
        <p className="mt-5 leading-tight text-slate-600">
          We're here to assist you with your stay.
        </p>
      </div>

      <div className="max-w-5xl px-4 py-6 mx-auto mt-20 xl:px-0 lg:py-12 md:mt-14 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="pb-6 mb-6 border-b border-gray-300 md:order-2 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer p-4 block w-full bg-gray-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
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
                    className="absolute top-0 left-0 p-4 h-full text-gray-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-gray-600
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-gray-600"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer p-4 block w-full bg-gray-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
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
                    className="absolute top-0 left-0 p-4 h-full text-gray-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-gray-600
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-gray-600"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer p-4 block w-full bg-gray-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
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
                    className="absolute top-0 left-0 p-4 h-full text-gray-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-gray-600
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-gray-600"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer p-4 block w-full bg-gray-200 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
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
                    className="absolute top-0 left-0 p-4 h-full text-gray-600 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                      peer-focus:text-xs
                      peer-focus:-translate-y-1.5
                      peer-focus:text-gray-600
                      peer-[:not(:placeholder-shown)]:text-xs
                      peer-[:not(:placeholder-shown)]:-translate-y-1.5
                      peer-[:not(:placeholder-shown)]:text-gray-600"
                  >
                    How can we assist you with your booking?
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-gray-500">
                  All fields are required.
                </p>

                <p className="mt-5">
                  <button
                    type="submit"
                    className="inline-flex items-center px-3 py-2 font-medium text-white transition-transform duration-200 ease-in-out rounded-full bg-proj hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 gap-x-2"
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

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 text-gray-800 h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="mt-1 text-gray-700">
                  Pune, Maharashtra 441101, India
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 text-gray-800 h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Email
                </h3>
                <p className="mt-1 text-gray-700">
                  support@easystay.co
                </p>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="flex-shrink-0 text-gray-800 h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  Help Center
                </h3>
                <p className="mt-1 text-gray-700">
                  We're here to help you with any queries or concerns
                  regarding your stay.
                </p>
              </div>
            </div>

            <div>
              <Link
                to="/home"
                className="inline-flex items-center gap-2 text-transparent bg-proj bg-clip-text hover:underline"
              >
                Go to Home-Page
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-7-7 7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

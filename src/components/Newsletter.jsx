import { FaCalendarAlt, FaHandPaper } from 'react-icons/fa';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle the subscribe action
  };

  return (
    <div className="relative py-16 overflow-hidden bg-gray-100 isolate sm:py-24 lg:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-transparent text-gray-900 sm:text-4xl bg-proj bg-clip-text">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              Stay updated with the latest news and exclusive offers. Join our newsletter now!
            </p>
            <div className="flex max-w-md mt-6">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-l-md border border-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="flex-none rounded-r-md bg-proj px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition transform duration-500 hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 bg-gray-200 rounded-md ring-1 ring-gray-300">
                <FaCalendarAlt className="w-6 h-6 text-gray-900" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                Get access to our exclusive weekly articles that cover various topics, from tech trends to personal development tips.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 bg-gray-200 rounded-md ring-1 ring-gray-300">
                <FaHandPaper className="w-6 h-6 text-gray-900" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-700">
                We value your privacy. Receive only the content you signed up for. No spam, ever.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

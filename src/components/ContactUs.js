import { Link } from 'gatsby';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="mx-auto p-8 lg:px-16 lg:py-8">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Is your happy hour really worth it?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Want to know what music is popular with which cocktail and at what time? Is your happy
              hour really worth it? Talk to us and we'll show you how.
            </p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex items-center font-semibold transition-colors duration-200"
          >
            Contact Us
            <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <svg
            className="text-primary-lighter absolute w-full text-teal-accent-400"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg className="relative w-full " fill="currentColor" viewBox="0 0 600 392">
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;

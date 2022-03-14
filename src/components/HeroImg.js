import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const HeroImg = () => {
  return (
    <div className="relative md:flex flex-col-reverse py-6 md:py-16  lg:pt-0 lg:flex-col md:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <StaticImage
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 5% 100%)' }}
          className="hidden md:block object-cover w-full h-56 rounded lg:rounded-none md:h-96 lg:h-full"
          src="../images/heroimg.jpg"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-1 md:mb-16 lg:my-10 lg:max-w-lg lg:pr-5">
          <h2 className="text-center md:text-left mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:leading-none">
            GIVE YOUR VENUE THE BOOST IT NEEDS
          </h2>

          <div className="mb-1 text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-darker"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-4 text-gray-700">Reduce 6-12% average draught beer loss</span>
          </div>

          <div className="mb-1 text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-darker "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-4 text-gray-700 ">Eliminate Gassy, Flat, Foamy or warm bee</span>
          </div>

          <div className="mb-1 text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-darker"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-4 text-gray-700 ">
              Ensure clean and hygenic lines for your patrons
            </span>
          </div>

          <div className="mb-1 text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-darker"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-4 text-gray-700 ">Complete Inventory consumption/revenue</span>
          </div>
          <div className="mb-1 text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary-darker"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-4 text-gray-700 ">
              Alerts for pressure, temperature or cleaning cycles
            </span>
          </div>

          <div className="mt-8  text-2xl flex flex-col md:flex-row items-center">
            <Link
              href="/"
              className="mx-auto md:mx-0 px-6 py-4 font-medium tracking-wide bg-primary-lighter hover:bg-primary-darker  text-white transition duration-200 rounded  focus:shadow-outline focus:outline-none ease-in-out"
            >
              Free Pilot For Your Venue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroImg;

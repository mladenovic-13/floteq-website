import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Benefits = () => {
  return (
    <div className="mx-auto">
      <div className="mx-auto mb-6 lg:w-1/3">
        <h2 className="text-center mb-4 md:mb-12 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          GIVE YOUR VENUE
          <br />
          THE BOOST IT NEEDS
        </h2>
      </div>
      <div className="grid gap-4 md:gap-10 row-gap-10 lg:grid-cols-2">
        <div className="order-last md:order-first">
          <StaticImage
            alt="Image Alt Text"
            imgStyle={{ borderRadius: '3%' }}
            className="object-cover w-5/6 xsm:w-full md:h-96  "
            src="../images/solution.jpeg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6 text-3xl flex items-center">
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

          <div className="mb-6 text-3xl flex items-center">
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

          <div className="mb-6 text-3xl flex items-center">
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

            <span className="mx-4 text-gray-700 ">Ensure clean and hygenic lines</span>
          </div>

          <div className="mb-6 text-3xl flex items-center">
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
          <div className=" text-3xl flex items-center">
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

            <span className="mx-4 text-gray-700 ">Alerts for pressure and temperature</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;

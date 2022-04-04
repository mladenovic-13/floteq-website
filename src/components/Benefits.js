import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Benefits = () => {
  return (
    <div className="mx-auto lg:w-11/12">
      <div className="mx-auto w-4/5 lg:w-2/5 my-6">
        <StaticImage width={600} alt="Floteq Header Image" src="../images/heroh1.png" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between">
        <StaticImage
          alt="Image Alt Text"
          height={660}
          imgStyle={{ borderRadius: '3%' }}
          src="../images/herocrop.jpg"
        />
        <div className="hidden lg:flex flex-col justify-center">
          <div className="mb-6 text-xl lg:text-2xl flex items-center">
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

          <div className="mb-6 text-xl lg:text-2xl flex items-center">
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

            <span className="mx-4 text-gray-700 ">Eliminate Gassy, Flat, Foamy or warm beer</span>
          </div>

          <div className="mb-6 text-xl lg:text-2xl flex items-center">
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

          <div className="mb-6 text-xl lg:text-2xl flex items-center">
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
          <div className=" text-xl lg:text-2xl flex items-center">
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

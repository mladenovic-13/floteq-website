import { Link } from 'gatsby';
import React from 'react';
const Pricing = () => {
  return (
    <div>
      <section id="pricing">
        <div className="container mx-auto">
          <h2 className="text-4xl text-center font-bold text-gray-800 ">Pricing plans</h2>
          <div className=" grid gap-6 mt-10 md:mt-16 mx-auto sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="bg-white px-6 py-4 border-0 shadow-lg transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
              <p className="text-lg font-medium text-gray-800 ">Basic</p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 ">
                $399 <span className="text-base font-normal text-gray-700 ">/ Month</span>
              </h4>
              <p className="mt-4 text-gray-600 ">
                If you are an independent pub or bar owner a sigle module will statisfy all your
                draught beer monitoring
              </p>

              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Full reporting</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Stocktake</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Integration with POS</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Alerts</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-700 ">Predictive maintenance</span>
                </div>
              </div>

              <Link to="/orderBasic">
                <div className="text-center mx-auto md:w-2/5 px-4 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-lighter rounded-md hover:bg-primary-darker focus:outline-none focus:bg-blue-600">
                  Choose plan
                </div>
              </Link>
            </div>
            <div className="px-6 py-4 transition-colors duration-200 transform bg-gray-700 hover:bg-gray-800 rounded-lg ">
              <p className="text-lg font-medium text-gray-100">Popular</p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-100">
                $299 <span className="text-base font-normal text-gray-400">/ Month</span>
              </h4>
              <p className="mt-4 text-gray-300">
                Designed for multi Venue operators with 10 venues or more.
              </p>

              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">Full reporting</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">Stocktake</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">Integration with POS</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">Alerts</span>
                </div>

                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mx-4 text-gray-300">Predictive maintenance</span>
                </div>
              </div>

              <Link to="/orderPopular">
                <div className="text-center mx-auto md:w-2/5 px-4 py-2 mt-2 md:mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-lighter rounded-md hover:bg-primary-darker focus:outline-none focus:bg-blue-600">
                  Choose plan
                </div>
              </Link>
            </div>

            <div className="bg-white border-0 shadow-lg px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 ">
              <p className="text-lg font-medium text-gray-800 ">Enterprise</p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 ">Custom</h4>
              <p className="text-lg mt-4 text-gray-600">
                If you are a multi venue operators and have dynamic demands for variety of bars,
                pubs and clubs as well as entertaimmnet venues please contact us for a full custom
                solution
              </p>

              <Link to="/orderCustom">
                <div className="mx-auto text-center md:w-2/5 px-4 py-2 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-primary-lighter rounded-md hover:bg-primary-darker focus:outline-none focus:bg-blue-600">
                  Choose plan
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pricing;

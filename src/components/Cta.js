import React from 'react';

const Cta = () => {
  return (
    <div className="mx-auto my-0 sm:my-4 md:my-8 md:w-1/2 bg-black bg-opacity-50  rounded">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-4xl xsm:text-6xl font-extrabold text-white  ">
          <span className="block">We love your beer</span>
          <span className="block">as much as you do!</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-100">
          Some text. Some text.Some text. Some text. Some text. Some text. Some text. Some text.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="uppercase py-3 px-4 bg-white bg-opacity-80 w-full transition ease-in duration-200 text-center text-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded 
              "
            >
              Free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cta;

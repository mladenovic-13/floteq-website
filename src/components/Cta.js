import { Link } from 'gatsby';
import React from 'react';

const Cta = () => {
  return (
    <div className="py-8 mx-auto my-0 md:mb-52 lg:mb-28 md:w-2/3 lg:w-1/2 bg-black bg-opacity-70  rounded">
      <div className="text-center w-full mx-auto pt-6 px-4 z-20">
        <h2 className="text-4xl xsm:text-6xl font-extrabold text-white  ">
          <span className="block">We love your beer</span>
          <span className="block">as much as you do!</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-100">
          Some text. Some text.Some text. Some text. Some text. Some text. Some text. Some text.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link
              to="/orderDemo"
              className="uppercase py-3 px-4 bg-white bg-opacity-90 w-full transition ease-in duration-200 text-center text-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded 
              "
            >
              Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cta;

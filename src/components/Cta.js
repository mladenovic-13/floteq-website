import { Link } from 'gatsby';
import React from 'react';

const Cta = () => {
  return (
    <div className="py-16 mx-auto my-0 md:mb-52 lg:mb-28 md:w-2/3 lg:w-1/2 bg-black bg-opacity-70  rounded">
      <div className="text-center w-full mx-auto pt-6 px-4 z-20">
        <h2 className="text-4xl xsm:text-6xl font-extrabold text-white  ">
          <span className="block">We love your beer</span>
          <span className="block">as much as you do!</span>
        </h2>

        <div className="lg:mt-6 lg:flex-shrink-0">
          <div className="mt-12 mb-4 inline-flex rounded-md shadow transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer">
            <Link
              to="/request-demo"
              className="uppercase py-3 px-4 bg-white w-full text-center text-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded 
              "
            >
              book a free demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cta;

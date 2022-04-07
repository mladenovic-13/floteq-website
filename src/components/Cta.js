import { Link } from 'gatsby';
import React from 'react';

const Cta = () => {
  return (
    <div className="py-6 mx-auto mb-20 xsm:mb-28 md:mb-52 lg:mb-56 md:w-2/3 lg:w-1/2 bg-black bg-opacity-70  rounded">
      <div className="text-center w-full mx-auto pt-6 px-4 z-20">
        <h2 className="text-4xl xsm:text-6xl font-extrabold text-white  ">
          <span className="block">We love your beer</span>
          <span className="block">as much as you do!</span>
        </h2>

        <div className="mt-16 w-2/3 mx-auto">
          <div className="rounded-md shadow transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer">
            <Link
              to="/request-demo"
              className="mx-auto w-2/3 uppercase py-3 px-3 bg-white lg:w-1/3 text-center text-2xl shadow-md rounded 
              "
            >
              Book a Free Demo
            </Link>
          </div>
          <div className="mt-5 transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer">
            <Link
              to="/solutions"
              className="text-white text-xl font-bold 
              "
            >
              Learn more &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cta;

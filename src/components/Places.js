import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Places = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex order-last md:order-first items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <StaticImage
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover mb-6 rounded shadow-lg h-36 sm:h-48 xl:h-56 w-32 sm:w-48 xl:w-56"
              src="../images/stadium.jpg"
              alt=""
            />
            <StaticImage
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover w-28 h-28 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="../images/bar.jpg"
              alt=""
            />
          </div>
          <div className="px-3">
            <StaticImage
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover w-48 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="../images/concert.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next <span className="inline-block ">event</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Some text.Some text.Some text.Some text. Some text. Some text. Some text. Some text.
              Some text. Some text. Some text. Some text. Some text. Some text.
            </p>
          </div>
          <div>
            <Link
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200  hover:text-deep-purple-800"
            >
              Learn more
              <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Places;

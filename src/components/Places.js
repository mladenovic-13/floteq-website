import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Places = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-2 md:gap-16 lg:grid-cols-2">
        <div className="flex order-last md:order-first items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover mb-6 rounded shadow-lg h-36 sm:h-48 xl:h-56 w-32 sm:w-48 xl:w-56"
              src="../images/stadium.jpeg"
            />
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover w-28 h-28 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="../images/bar.jpeg"
            />
          </div>
          <div className="px-3">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              className="object-cover w-48 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="../images/concert.jpeg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="text-center md:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next <span className="inline-block ">event</span>
            </h2>
            <p className="text-center md:text-left text-base text-gray-700 md:text-lg">
              Some text.Some text.Some text.Some text. Some text. Some text. Some text. Some text.
              Some text. Some text. Some text. Some text. Some text. Some text.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Places;

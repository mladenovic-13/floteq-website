import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Places = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-2 md:gap-16 lg:grid-cols-2">
        <div className="mx-auto w-5/6 flex order-last lg:order-first items-center justify-center">
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
              className="object-cover w-32 h-32 xsm:w-44 xsm:h-44 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="../images/concert.jpeg"
            />
          </div>
        </div>
        <div className="w-5/6 xsm:w-full flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="mb-6">
            <h2 className="text-center lg:text-left  mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Scalable technology thats easy to use
            </h2>
            <p className="text-center md:text-left text-base text-gray-700 md:text-lg">
              Floteq’s draught beverage system is designed to scale up and down as required. From
              handling individual venues with cost control focus to large outdoor stadiums,
              improving operational effectiveness, cost reduction, revenue growth, staff, and stock
              control to consumer behavior and brand integrity. Floteqs Draught monitoring system is
              designed with venues and patrons at the front. We love your beer as much as you do!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Places;

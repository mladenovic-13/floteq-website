import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Places = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-2 md:gap-16 lg:grid-cols-2">
        <div className="mx-auto w-5/6 flex order-last lg:order-first items-center justify-center">
          <StaticImage
            alt="Image Alt Text"
            height={780}
            imgStyle={{ borderRadius: '3%' }}
            className=" object-cover rounded shadow-lg"
            src="../images/stadium.jpeg"
          />
        </div>
        <div className="w-5/6 xsm:w-full flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="mb-6">
            <h2 className="text-center lg:text-left  mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
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

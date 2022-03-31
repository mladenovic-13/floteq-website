import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const IotBenefits = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="text-center  max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          BENEFITS OF IOT DRAUGHT SYSTEM
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className=" flex flex-col justify-center lg:pr-4">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <StaticImage alt="Image Alt Text" className="w-10 h-10" src="../images/data1.png" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Always ON predictive intelligence</h6>
              <p className="text-sm text-gray-900">
                Always connected on dedicated bandwidth, deep signal penetration allowing for
                maximum use of space, cloud enabled machine learning and enhanced AI modules for
                predictive consumption and lower cost of maintenance
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <StaticImage alt="Image Alt Text" className="w-10 h-10" src="../images/data2.png" />
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Realtime reporting and monitoring</h6>
              <p className="text-sm text-gray-900">
                Real Time insights into consumer behaviour, consumption and complete brand
                integrity.real time stock control! Perfect pours every time!
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <StaticImage alt="Image Alt Text" className="w-10 h-10" src="../images/data3.png" />
              </div>
            </div>
            <div className="mb-2">
              <h6 className="mb-2 font-semibold leading-5">Minimised Wastre/Sustainable revenue</h6>
              <p className="text-sm text-gray-900">
                Cost effective solutions for draught beer infrastructure enabling operatyional
                improvements, cost reduction and revenue growth.
              </p>
            </div>
          </div>
        </div>
        <StaticImage
          alt="Image Alt Text"
          src="../images/macbookDemo.png"
          className="mt-4 lg:mt-0"
        />
      </div>
    </div>
  );
};
export default IotBenefits;

import React from 'react';

const Statistic = () => {
  return (
    <div className="py-12 md:py-0 px-4 md:my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="mb-6 text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">4Mil</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Liters Monitored
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">1Mil</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Liters Saved
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">3</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Continents
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">63%</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Average Waste Eliminated
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;

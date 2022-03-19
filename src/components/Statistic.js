import React, { useEffect } from 'react';
import CountUp from 'react-countup';

const Statistic = () => {
  return (
    <div className="mt-10 p-4 xsm:mt-20 md:mt-20 xsm:py-8 bg-black rounded bg-opacity-40 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-col">
        <div className="mb-12 md:mb-0 text-center md:border-r">
          <h6 className="text-white text-5xl font-bold  xl:text-6xl">
            <span className="text-white">
              <CountUp start={0} end={4} duration={0.7} />
            </span>{' '}
            Mil
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-lg">
            Liters Monitored
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-white text-5xl font-bold xl:text-6xl">
            <span>
              <CountUp start={0} end={1} duration={0.2} />
            </span>{' '}
            Mil
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-lg">
            Liters Saved
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-white text-5xl font-bold  xl:text-6xl">
            <span>
              <CountUp start={0} end={3} duration={0.5} />
            </span>{' '}
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest uppercase lg:text-lg">
            Continents
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-white text-5xl font-bold  xl:text-6xl">
            <span>
              <CountUp start={0} end={63} duration={1.5} />
            </span>{' '}
            %
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-lg">
            Waste Eliminated
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;

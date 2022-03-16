import React, { useEffect } from 'react';
import CountUp from 'react-countup';

const Statistic = () => {
  return (
    <div className="mb=4 bg-black rounded bg-opacity-10 py-8 xsm:py-16 px-4 md:my-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-col">
        <div className="mb-8 md:mb-6 text-center md:border-r">
          <h6 className="text-white text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span className="text-white">
              <CountUp start={0} end={4} duration={0.7} delay={0.3} />
            </span>{' '}
            Mil
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-base">
            Liters Monitored
          </p>
        </div>
        <div className="md:mb-6 text-center md:border-r">
          <h6 className="text-white text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span>
              <CountUp start={0} end={1} duration={0.2} delay={1.2} />
            </span>{' '}
            Mil
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-base">
            Liters Saved
          </p>
        </div>
        <div className="md:mb-6  text-center md:border-r">
          <h6 className="text-white text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span>
              <CountUp start={0} end={3} duration={0.5} delay={1.6} />
            </span>{' '}
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest uppercase lg:text-base">
            Continents
          </p>
        </div>
        <div className="md:px-8 text-center">
          <h6 className="text-white text-4xl font-bold lg:text-5xl xl:text-6xl">
            <span>
              <CountUp start={0} end={63} duration={1.5} delay={2.3} />
            </span>{' '}
            %
          </h6>
          <p className="text-gray-300 text-sm font-medium tracking-widest  uppercase lg:text-base">
            Waste Eliminated
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistic;

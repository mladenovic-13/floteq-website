import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Monitoring = () => {
  return (
    <div className="mx-auto">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-center lg:text-left  mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Android / iOS and Desktop Application
            </h2>
            <p className="text-center lg:text-left text-base text-gray-700 md:text-lg">
              Download and install our application for your managers, venue operators, and draught
              beer controllers. Real-time updates on temperature fluctuations, pressure levels,
              flow, and cleaning and hygiene alerts and schedules.
            </p>
            <p lassName="text-center lg:text-left text-base text-gray-700 md:text-lg">
              POS integration in the cloud or on-premise with open APIs for easy management.
            </p>
          </div>
          <div className="flex justify-around">
            <div>
              <div className="mx-auto flex items-center justify-center w-16 h-16 m-4 rounded-full">
                <StaticImage alt="Image Alt Text" src="../images/apple.png" className="w-16 h-16" />
              </div>
            </div>
            <div>
              <div className="mx-auto flex items-center justify-center w-16 h-16 m-4 rounded-full">
                <StaticImage
                  alt="Image Alt Text"
                  src="../images/android.png"
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            alt="Image Alt Text"
            imgStyle={{ borderRadius: '3%' }}
            className="hidden lg:block object-cover w-full h-56 rounded sm:h-96"
            src="../images/monitoring.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
export default Monitoring;

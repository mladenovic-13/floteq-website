import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Steps = () => {
  return (
    <div className="px-4 pt-10 pb-16 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-1 lg:pr-16">
          <h1 className="mb-10 text-center md:text-left md:ml-12 md:mb-6 md:pl-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
            Our Installation Process
          </h1>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-blue-600"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                    <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Space</p>
              <p className="text-gray-700">
                Alocate space per flowmetar close to line and power source
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-blue-600"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                    <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Attach turbines to lines</p>
              <p className="text-gray-700">
                Standard lines 3/8 inc fit in the turbine. Drain line, cut line and attach turbine
                with appropriate flow direction as indicated on turbine.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-blue-600"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                    <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Connect Power</p>
              <p className="text-gray-700">
                Flowmetar plugs in directly into AC power. Range is from 105 to 240V. Attach
                tethered turbines to back of flowmetar. 5 x 6 x 10 inch per flowmetar.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-blue-600"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22" />
                    <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15" />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Screw and Secure</p>
              <p className="text-gray-700">
                Screw in bolts to flowmeters and attach to wall or appropriate space.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg className="w-6 text-blue-600" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline
                      fill="none"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">
                Device will self heal and find Network. It will begin reporting in 1 hour intervals
              </p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="order-last md:order-first relative">
          <StaticImage
            imgStyle={{ borderRadius: '3%' }}
            className="inset-0 object-cover object-bottom w-full rounded-md h-96 lg:absolute lg:h-full"
            src="../images/solution4.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Steps;

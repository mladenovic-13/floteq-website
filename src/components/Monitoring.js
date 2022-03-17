import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Monitoring = () => {
  return (
    <div className="px-4 pt-10 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-0 lg:pb-6">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="text-center md:text-left max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Android / iOS and Desktop Application
            </h2>
            <p className="text-center md:text-left text-base text-gray-700 md:text-lg">
              Some text. Some text. Some text.Some text. Some text. Some text. Some text. Some text.
              Some text. Some text. Some text. Some text. Some text.
            </p>
          </div>
          <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div className="mx-auto flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <StaticImage alt="Image Alt Text" src="../images/apple.png" className="w-10 h-10" />
              </div>
              <p className="text-center md:text-left text-sm text-gray-900">
                Some text. Some text.Some text.Some text.Some text. Some text. Some text. Some text.
                Some text. Some text.
              </p>
            </div>
            <div>
              <div className="mx-auto flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                <StaticImage
                  alt="Image Alt Text"
                  src="../images/android.png"
                  className="w-10 h-10"
                />
              </div>
              <p className="text-center md:text-left text-sm text-gray-900">
                Some text. Some text.Some text. Some text. Some text. Some text. Some text. Some
                text. Some text.
              </p>
            </div>
          </div>
        </div>
        <div>
          <StaticImage
            alt="Image Alt Text"
            imgStyle={{ borderRadius: '3%' }}
            className="object-cover w-full h-56 rounded sm:h-96"
            src="../images/monitoring.jpeg"
          />
        </div>
      </div>
    </div>
  );
};
export default Monitoring;

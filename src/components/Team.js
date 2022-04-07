import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function Team() {
  return (
    <div>
      <p className="text-center text-3xl font-bold text-gray-800 ">Professional team</p>
      <p className="text-center mb-12 text-xl font-normal text-gray-500 ">
        Meat the best team in wolrd
      </p>
      <div className="flex items-center flex-col md:flex-row justify-evenly">
        <div className="p-4">
          <div className="text-center mb-4 opacity-90">
            <a href="#" className="block relative">
              <div className="rounded-full">
                <StaticImage
                  alt="Image Alt Text"
                  imgStyle={{ borderRadius: '100%' }}
                  src="../images/miles.webp"
                  className="rounded-full mx-auto object-cover  h-40 w-40 "
                />
              </div>
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 ">Miles Lazic</p>
            <p className="text-xl text-gray-500  font-light">CEO and Founder</p>
          </div>
          <div className="mx-auto w-8 pt-2 border-t border-gray-200 text-gray-500 ">
            <a href="#">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800  transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="text-center mb-4 opacity-90">
            <a href="#" className="block relative">
              <StaticImage
                alt="Image Alt Text"
                imgStyle={{ borderRadius: '100%' }}
                src="../images/diana.webp"
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 ">Diana Lazic</p>
            <p className="text-xl text-gray-500  font-light">Co Founder- COO</p>
          </div>
          <div className="pt-2 w-8 flex border-t border-gray-200 mx-auto text-gray-500 items-center justify-between">
            <a href="#">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800  transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="text-center mb-4 opacity-90">
            <a href="#" className="block relative">
              <StaticImage
                alt="Image Alt Text"
                imgStyle={{ borderRadius: '100%' }}
                src="../images/david.webp"
                className="mx-auto object-cover rounded-full h-40 w-40 "
              />
            </a>
          </div>
          <div className="text-center">
            <p className="text-2xl text-gray-800 ">David May</p>
            <p className="text-xl text-gray-500  font-light">General Manager</p>
          </div>
          <div className="pt-2  flex border-t border-white w-8 mx-auto text-gray-500 items-center justify-between">
            <a href="#">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800  transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

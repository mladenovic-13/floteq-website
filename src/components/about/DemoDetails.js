import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const DemoDetails = () => {
  return (
    <div className="lg:w-full">
      <h1 className="text-center lg:text-left text-3xl">FLEXIBLE. SECURE. REAL TIME INSIGHTS</h1>
      <p className="mt-4 text-gray-600 text-center lg:text-left">
        Enhance your business with a data platform built for you.
      </p>
      <div className="my-2 p-4 w-full mx-auto">
        <StaticImage
          style={{ borderRadius: '2%' }}
          src="../../images/macbookDemo.png"
          alt="Floteq Requst Demo Image"
        />
      </div>
      <h2 className="text-2xl">Why Floteq? Give your venue insights they deserve</h2>
      <ul className="list-disc text-gray-600">
        <li className="mt-4">Quick to install and scale</li>
        <p className="-ml-4 mt-4">Set the system up whilst your lines are being cleaned.</p>
        <li className="mt-4">Prevent Waste and ensure quality of pour</li>
        <p className="-ml-4 mt-4">
          Reduce waste by 60%, increase revenue from day 1, pour a perfect beer every time.
        </p>
        <li className="mt-4">Complete Business Intelligence and consumer insight</li>
        <p className="-ml-4 mt-4">
          Find out exactly where the losses are occurring, manage your stock predictively, and know
          what your patrons are drinking and at what time enhancing your marketing and improving
          operations
        </p>
      </ul>
    </div>
  );
};

export default DemoDetails;

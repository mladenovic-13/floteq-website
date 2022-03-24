import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const DemoDetails = () => {
  return (
    <div className="lg:w-full">
      <h1 className="text-center lg:text-left text-3xl">Flexible. Secure. Governed.</h1>
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
      <h2 className="text-2xl">Why Looker? Because your business needs:</h2>
      <ul className="list-disc text-gray-600">
        <li className="mt-4">Fast time to value</li>
        <p className="-ml-4 mt-4">
          Get up and running quickly so you can focus on what matters to your business.
        </p>
        <li className="mt-4">Enterprise-class security</li>
        <p className="-ml-4 mt-4">
          Easily manage access to your data down to the user level with encryption key management
          architecture.
        </p>
        <li className="mt-4">Modern BI & analytics</li>
        <p className="-ml-4 mt-4">
          Serve up real-time dashboards for more in-depth, consistent analysis. Access to
          trustworthy data can enable teams to collect fresh results for more precise reporting.
        </p>
      </ul>
    </div>
  );
};

export default DemoDetails;

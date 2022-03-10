import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Team() {
  return (
    <div className="container mx-auto">
      <p className=" text-5xl text-center text-gray-700 font-semibold">OUR TEAM</p>
      <div className="my-10 flex flex-col md:flex-row mx-auto">
        {/* MILES */}
        <div
          style={{
            width: '300px',
            boxShadow: '0 10px 28px rgba(0,0,0,.2)',
          }}
          className="my-4 p-6 mx-auto flex flex-col items-center text-center border-solid border-2"
        >
          <StaticImage className="rounded-full w-40 h-40" src="../images/miles.webp" />
          <div className="flex flex-col rounded-lg bg-gradient-to-r from-green-600 to-green-400 via-green-500 w-5/6 p-3 mt-3 text-white">
            <h2 className="text-xl font-semibold">Miles Lazic</h2>
            <p className="text-sm">CEO and Founder</p>
          </div>
          <p className=" text-gray-800 mt-4">miles@floteq.com.au</p>
        </div>

        {/* DIANA */}
        <div
          style={{
            width: '300px',
            boxShadow: '0 10px 28px rgba(0,0,0,.2)',
          }}
          className="my-4 p-6 mx-auto flex flex-col items-center text-center border-solid border-2"
        >
          <StaticImage className="rounded-full w-40 h-40" src="../images/diana.webp" />
          <div className="flex flex-col rounded-lg bg-gradient-to-r from-green-600 to-green-400 via-green-500 w-5/6 p-3 mt-3 text-white">
            <h2 className="text-xl font-semibold">Diana Lazic</h2>
            <p className="text-sm">Co Founder- COO</p>
          </div>
          <p className=" text-gray-800 mt-4">diana@floteq.com.au</p>
        </div>

        {/* DAVID */}
        <div
          style={{
            width: '300px',
            boxShadow: '0 10px 28px rgba(0,0,0,.2)',
          }}
          className="my-4 p-6 mx-auto flex flex-col items-center text-center border-solid border-2"
        >
          <StaticImage className="rounded-full w-40 h-40" src="../images/david.webp" />
          <div className="flex flex-col rounded-lg bg-gradient-to-r from-green-600 to-green-400 via-green-500 w-5/6 p-3 mt-3 text-white">
            <h2 className="text-xl font-semibold">David May</h2>
            <p className="text-sm">General Manager</p>
          </div>
          <p className=" text-gray-800 mt-4">david@floteq.com.au</p>
        </div>
      </div>
    </div>
  );
}

export default Team;

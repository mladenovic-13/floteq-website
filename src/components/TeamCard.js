import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function TeamCard({ member }) {
  return (
    <div
      style={{
        width: '300px',
        boxShadow: '0 10px 28px rgba(0,0,0,.2)',
      }}
      className=" p-6 mx-auto flex flex-col items-center text-center border-solid border-2"
    >
      <StaticImage className="rounded-full w-40 h-40" src="../images/miles.webp" />
      <div className="flex flex-col rounded-lg bg-gradient-to-r from-green-600 to-green-400 via-green-500 w-5/6 p-3 mt-3 text-white">
        <h2 className="text-xl font-semibold">Miles Lazic</h2>
        <p className="text-sm">CEO and Founder</p>
      </div>
      <p className=" text-gray-800 mt-4">miles@floteq.com.au</p>
    </div>
  );
}

export default TeamCard;

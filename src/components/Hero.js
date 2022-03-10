import React from 'react';

export default function Hero() {
  let background = '../images/hero.jpeg';

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className=" w-full h-64"
    ></div>
  );
}

import React from 'react';
import BackgroundImage from '../images/hero3.jpeg';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        marginTop: '-56px',
      }}
      className="-mt-14"
    >
      <div className="absolute mx-auto mt-28 md:mt-36 md:ml-32 lg:mt-40 lg:ml-48">
        <h1
          style={{ clipPath: 'polygon(4% 0, 100% 0%, 96% 100%, 0% 100%)' }}
          className="border-2 px-3 py-2 md:py-4 md:px-10 mb-8 italic font-extrabold uppercase text-center text-blue-900 text-3xl md:text-5xl bg-white "
        >
          we love your beer
        </h1>
        <h1
          style={{ clipPath: 'polygon(4% 0, 100% 0%, 96% 100%, 0% 100%)' }}
          className="border-2 px-3   py-2 md:py-4 md:px-10 italic font-extrabold uppercase text-center text-blue-900 text-3xl md:text-5xl bg-white "
        >
          as much as you do
        </h1>
      </div>
    </div>
  );
};

export default Hero;

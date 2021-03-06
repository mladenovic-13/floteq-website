import React from 'react';
import BackgroundImage from '../images/herobeer2test.jpeg';
import Cta from './Cta';
import Statistic from './Statistic';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        maxWidth: '100%',
        top: 0,
      }}
    >
      <div className="pt-6 lg:pt-36">
        <Cta />
        <Statistic />
      </div>
    </div>
  );
};

export default Hero;

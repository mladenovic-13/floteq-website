import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Partners = () => {
  return (
    <section className="mx-auto py-2 px-8 grid grid-cols-3 gap-2 grid-rows-2 md:grid-cols-6 md:grid-rows-1 md:px-32 md:gap-10">
      <StaticImage objectFit="contain" src="../../images/acc.png" />
      <StaticImage objectFit="contain" src="../../images/asahi.png" />
      <StaticImage objectFit="contain" src="../../images/australian.png" />
      <StaticImage objectFit="contain" src="../../images/cowboys.png" />
      <StaticImage src="../../images/hein.png" />
      <StaticImage objectFit="contain" src="../../images/pmy.png" />
    </section>
  );
};

export default Partners;

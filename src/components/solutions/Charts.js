import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Chart from 'react-google-charts';

const Charts = () => {
  const data = [
    ['Language', 'Speakers (in millions)'],
    ['Assamese', 13],
    ['Bengali', 83],
    ['Bodo', 1.4],
    ['Dogri', 2.3],
    ['Gujarati', 46],
    ['Hindi', 300],
    ['Kannada', 38],
  ];

  const options = {
    legend: 'none',
    pieSliceText: 'label',
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  return (
    <section className="p-4 my-16 md:p-12 lg:p-24 mx-auto text-center w-full grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-5 gap-2 md:gap-4 bg-gray-100">
      {/* row */}
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL SALES</h1>
        $265,760.96
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL COST OF GOODS</h1>
        $30,557.24
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg col-span-2 text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL KEGS SOLD</h1>
        125.2 keg
      </div>

      {/* row */}
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl row-span-2">
        <h1 className="mb-2 md:mb-8 text-sm text-gray-500 text-left">TOTAL QUANTITY</h1>
        <div className="md:py-16">
          3.5K<span className="text-2xl">L</span>{' '}
        </div>
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl row-span-2">
        <h1 className="mb-2 md:mb-8 text-sm text-gray-500 text-left">AVERAGE TEMPERATURE</h1>
        <div className="md:py-16 text-green-600">9.95˚C</div>
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg col-span-2 text-2xl md:text-4xl row-span-2">
        <h1 className="mb-4 text-sm text-gray-500 text-left">DAILY TEMPERATURE</h1>
        <StaticImage alt="Floteq Solutions Chart" src="../../images/chart.jpeg" />
      </div>

      {/* row */}
      <div className="border-0 p-1 md:p-6 bg-white shadow-lg col-span-2 row-span-2">
        <h1 className="text-sm text-gray-500 text-left">SHARE OF BRENDS</h1>
        <Chart
          className="mx-auto h-48 md:h-64"
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
        />
      </div>
      <div className="border-0 p-1 md:p-6 bg-white shadow-lg col-span-2 row-span-2">
        <h1 className="text-sm text-gray-500 text-left">SHARE OF BRENDS</h1>
        <Chart
          className="mx-auto h-48 md:h-64"
          chartType="PieChart"
          data={data}
          options={options}
          width={'100%'}
        />
      </div>
    </section>
  );
};
export default Charts;

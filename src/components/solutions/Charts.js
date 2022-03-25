import React from 'react';
import Chart from 'react-google-charts';
import CountUp from 'react-countup';

const Charts = () => {
  const data = [
    ['Share of brands', 'in litars'],
    ['Cape cooler', 751],
    ['Aperol Spritz', 340],
    ['4 Pines Pale Ale', 187],
    ['Pure Blond', 164],
    ['Espresso Martini', 68],
    ['Bonnamys Cider', 180],
  ];

  const options = {
    legend: 'label',
    pieSliceText: '',
    is3D: true,
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  return (
    <section className="p-4 md:px-12 md:py-6 mx-auto text-center  grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-3 gap-2 md:gap-4 bg-gray-100">
      {/* row */}
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL SALES</h1>
        $<CountUp start={0} end={265} duration={3} />
        <span>, </span>
        <CountUp start={0} end={760} duration={3} />
        <span>.</span>
        <CountUp start={0} end={96} duration={3} />
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL COST OF GOODS</h1>
        $<CountUp start={0} end={30} duration={2.5} />
        <span>, </span>
        <CountUp start={0} end={557} duration={2.5} />
        <span>.</span>
        <CountUp start={0} end={24} duration={2.5} />
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg col-span-2 text-2xl md:text-4xl">
        <h1 className="mb-2 md:mb-4 text-sm text-gray-500 text-left">TOTAL KEGS SOLD</h1>
        <CountUp start={0} end={125} duration={2} />
        <span>.</span>
        <CountUp start={0} end={2} duration={2} />
        <span> keg</span>
      </div>

      {/* row */}
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl row-span-2">
        <h1 className="mb-2 md:mb-8 text-sm text-gray-500 text-left">TOTAL QUANTITY</h1>
        <div className="md:py-16">
          <CountUp start={0} end={3} duration={2} />
          <span>.</span>
          <CountUp start={0} end={5} duration={2} />
          <span> K</span>
          <span className="text-2xl">L</span>{' '}
        </div>
      </div>
      <div className="border-0 p-1 md:p-6 text-primary-darker bg-white shadow-lg text-2xl md:text-4xl row-span-2">
        <h1 className="mb-2 md:mb-8 text-sm text-gray-500 text-left">AVERAGE TEMPERATURE</h1>
        <div className="md:py-16 text-green-600">
          <CountUp start={0} end={9} duration={2} />
          <span>.</span>
          <CountUp start={0} end={95} duration={2} />
          <span> ˚C</span>
        </div>
      </div>
      <div className="border-0 p-1 md:p-6 bg-white shadow-lg col-span-2 row-span-2">
        <h1 className="text-sm text-gray-500 text-left">SHARE OF BRENDS IN LITERS</h1>
        <Chart chartType="PieChart" data={data} options={options} width={'100%'} />
      </div>
    </section>
  );
};
export default Charts;

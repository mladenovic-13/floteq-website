import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Wrapper from '../layout/Wrapper';

const Solutions = () => {
  return (
    <section>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">SOLUTIONS</h2>
        <p className="max-w-3xl mx-auto mt-2 text-xl text-center ">KNOW MORE. DO MORE.</p>
      </div>
      <div className="container max-w-xl mx-auto lg:max-w-7xl">
        <Wrapper isDark={true}>
          <div id="data" className="grid lg:gap-8 lg:grid-cols-2 lg:place-items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                SOLUTIONS DATA MANAGEMENT
                <br /> AND ANALYTICS
              </h3>
              <p className="mt-3 text-lg ">
                Between 8-12% of draught beer is wasted everyday, across pubs, bars, clubs and
                stadiums. Waste is a part of cost. Not anymore!
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">TECHNOLOGY = INTELLIGENCE</h4>
                    <p className="mt-2 ">
                      Floteq brings you a revolutionary new ability to monitor your bar, pub, club
                      or stadium at your fingertips.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">DATA = INSIGHT</h4>
                    <p className="mt-2 ">
                      Monitor and control your brand integrity and gain consumer insights in real
                      time across one or multiple venues.Monitor your revenue, temperature,
                      pressure, cleaning cycles, stocktake and so much more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <StaticImage
                alt="Image Alt Text"
                imgStyle={{ borderRadius: '4%' }}
                height={560}
                src="../../images/solution.jpeg"
                className="mx-auto rounded-lg shadow-lg "
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper isDark={false}>
          <div>
            <div id="autoData" className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                  AUTOMATED DATA INTEGRATION MONITOR
                </h3>
                <p className="mt-3 text-lg ">
                  Whether you are a cellar man, venue manager or the financial controller, data on
                  demand has the ability to transform your business.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 ">MANAGE</h4>
                      <p className="mt-2 ">
                        Know exactly how your brands are consumed, @ what temperature, and @ the
                        exact time.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 ">CONTROL</h4>
                      <p className="mt-2 ">
                        Never serve a flat, warm or gassy pint again. Manage your staff, stock or
                        power consumption, all in one.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 ">POWER IN YOUR HANDS</h4>
                      <p className="mt-2 ">
                        With a fully open API and reporting on regular time intervals or real time,
                        your data is fully automated and can integrate into any cloud based Point of
                        Sale or data warehouse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <StaticImage
                  alt="Image Alt Text"
                  imgStyle={{ borderRadius: '4%' }}
                  src="../../images/solution2.jpeg"
                  className="mx-auto rounded-lg shadow-lg "
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div
        id="chs"
        className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
      >
        <Wrapper isDark={true}>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                CUSTOM HARDWARE AND SOFTWARE
              </h3>
              <p className="mt-3 text-lg ">
                Whether you are managing a single location, multiple locations and bars, or large
                stadiums and halls, your data is safe, secure and meaningful every time you open the
                dashboard.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">ACCESSIBLE FROM EVERYWHERE</h4>
                    <p className="mt-2 ">
                      Know in real time if you are meeting your KPIs, your daily or hourly targets,
                      which brands are selling well and why.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 ">DATA IS THERE</h4>
                    <p className="mt-2 ">
                      Watch your revenue grow and your costs disappear. Floteq's elegant business
                      analysis tool allows you to make the right decisions instantly!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <StaticImage
                alt="Image Alt Text"
                imgStyle={{ borderRadius: '4%' }}
                height={380}
                src="../../images/solution3.jpeg"
                className="mx-auto rounded-lg shadow-lg "
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper isDark={false}>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                  RUGGEDISED HARDWARE
                  <br />
                  BEAUTIFUL SOFTWARE
                </h3>
                <p className="mt-3 text-lg ">
                  You are great at running your venue. Leave the tech stuff to us.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 ">HARDWARE</h4>
                      <p className="mt-2 ">
                        Our rugged hardware is designed to withstand tough conditions, from your bar
                        staff to freezing cold cellars
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md  ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 ">SOFTWARE</h4>
                      <p className="mt-2 ">
                        Our software is designed with you in mind. It will plug and play into any
                        cloud enabled POS and work with any data feed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <StaticImage
                  alt="Image Alt Text"
                  imgStyle={{ borderRadius: '4%' }}
                  height={400}
                  src="../../images/solution4.jpeg"
                  className="mx-auto rounded-lg shadow-lg "
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default Solutions;

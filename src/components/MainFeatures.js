const MainFeatures = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-center text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
            Simple and easy
            <br /> this is how we do it
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-600 dark:border-blue-300 rounded-xl">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Data Management and Analytics waste reduction and revenue boost
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Set your reporting period. Make real time decisions on promotions. Tap optimisation
                and profitability
              </p>

              <a
                href="#"
                className="inline-flex p-2 border-blue-600 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-600 dark:border-blue-300 rounded-xl">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Automated Data Integration with any POS or data point
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                iOS/Android Appliactions Connect to any cloud based POS Integrate into any cloud or
                datawarehouse with open APIs t
              </p>

              <a
                href="#"
                className="inline-flex p-2 border-blue-600 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-600 dark:border-blue-300 rounded-xl">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white">
                Tap, Bar, Venue, Local, National and Global Profitability insights in real time
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Hourly, Daily, Weekly, Monthly, Yearly... Manage Campaigns and consumer behaviour
                Eliminate unprofitable brands and taps
              </p>

              <a
                href="#"
                className="inline-flex p-2 border-blue-600 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MainFeatures;

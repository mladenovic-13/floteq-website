import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="bg-white shadow w-full fixed top-0 overflow-hidden z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/index">
            <div className="flex-shrink-0 cursor-pointer">
              <StaticImage
                className="h-8 w-32 transition ease-in-out delay-150 hover:scale-110 duration-200"
                src="../../images/Logo.png"
                alt="Workflow"
              />
            </div>
          </Link>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/solutions"
                  className="text-primary-darker hover:text-blue-800 px-3 py-2 rounded-md text-xl font-light"
                >
                  Solutions
                </Link>

                <AnchorLink
                  to="#pricing"
                  className="text-primary-darker hover:text-blue-800 px-3 py-2 rounded-md text-xl font-light"
                >
                  Pricing
                </AnchorLink>

                <Link
                  to="/about"
                  className="text-primary-darker hover:text-blue-800 px-3 py-2 rounded-md text-xl font-light"
                >
                  About Us
                </Link>

                <AnchorLink
                  to="#contact"
                  className="text-primary-darker hover:text-blue-800 px-3 py-2 rounded-md text-xl font-light"
                >
                  Contact
                </AnchorLink>
              </div>
            </div>
          </div>
          <div>
            <a
              href="https://floteq.sitelantern.com/console/"
              className="transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer bg-primary-lighter hover:bg-primary-darker hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white font-light"
            >
              Client Login
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-primary-darker inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/solutions"
                className=" text-primary-darker block px-3 py-2 rounded-md text-lg font-medium"
              >
                Solutions
              </Link>

              <AnchorLink
                onAnchorLinkClick={() => setIsOpen(!isOpen)}
                to="#pricing"
                className="text-primary-darker block px-3 py-2 rounded-md text-lg font-medium"
              >
                Pricing
              </AnchorLink>

              <Link
                to="/about"
                className="text-primary-darker block px-3 py-2 rounded-md text-lg font-medium"
              >
                About Us
              </Link>

              <AnchorLink
                onAnchorLinkClick={() => setIsOpen(!isOpen)}
                to="#contact"
                className="text-primary-darker block px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </AnchorLink>
              <a
                href="https://floteq.sitelantern.com/console/"
                className="my-6 bg-primary-darker uppercase mx-auto lg:mx-0  text-white font-bold rounded-full py-2 px-6 shadow-lg focus:outline-none focus:shadow-outline"
              >
                Client Login
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;

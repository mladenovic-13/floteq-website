import React from 'react';
import Button from '../Button';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Header = () => (
  <header className=" sticky top-0 bg-white shadow">
    <div className="text-lg container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <Link to="/">
        <StaticImage className=" w-40 h-10" src="../../images/Logo.png" />
      </Link>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" href="/about">
          About Us
        </Link>
        <Link className="px-4" href="/solutions">
          Solutions
        </Link>
        <Link className="px-4" href="/contact">
          Contact Us
        </Link>
        <Link className="px-4" href="pricing">
          Pricing
        </Link>
      </div>
      <div className="hidden md:block">
        <a href="https://floteq.sitelantern.com/console/">
          <Button className=" text-base">Client Login</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;

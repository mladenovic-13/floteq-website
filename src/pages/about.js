import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import SEO from '../components/Seo';

export default function about() {
  return (
    <>
      <SEO title="Floteq | About Us" />
      <Header />
      <div className="text-center p-4 mt-12 md:mt-20">
        <div id="data" className="grid lg:grid-cols-2 lg:place-items-center">
          <div className="md:ml-32">
            <h3 className="mb-6 text-center text-2xl font-bold tracking-tight sm:text-3xl ">
              Who we are?
            </h3>
            <p className="mt-3 text-lg ">
              &nbsp;&nbsp;&nbsp;&nbsp;Floteq was born out of necessity. Our founders were the first
              people to open up a wine-bar in the Hills district in Sydney. It was a place that you
              love to go to. A space for adults, where they could safely and comfortably enjoy great
              food, wine and beer. A place you'd would want to hang out. A little rustic, a little
              dark and most importantly a place you would be proud to be your local. The food was
              terrific, staff were loyal and engaged and there was a true place where everybody knew
              your name.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;However, The sales reports on beverages were seldom matching.
              We were selling great beer, but the amount sold and amount used was always different.
              And losses were piling up. So with a background in IT and rugged equipment from
              Motorola and through to Google analytics, we set out on an adventure.
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Is Wastage a problem and how big was it? We did our research
              surveyed hundreds of pubs and found this is a problem that plagues hospitality and
              entertainment venues. Now we serve everyone from small bars to large pub groups to
              worlds largest breweries!
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '4%' }}
              height={560}
              src="../images/solution.jpeg"
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-4/5 mb-12 mx-auto">
          <div className="flex flex-col md:flex-row">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              src="../images/miles.webp"
              className="mx-auto object-cover  md:h-64 md:w-64 "
            />
            <div className="md:w-2/3">
              <h1 className="text-2xl mb-1">Miles Lazic</h1>
              <h2 className="text-xl mb-3">CEO and Founder</h2>
              <p className="text-lg">
                With over 25 years of experience in corporate sales predominantly in IT hardware
                software and analytics, with a passion for wine, beer and business. If it concerns
                draught beer Miles knows about it. especially how to drink a cold one. With his keen
                interest in everything concerning hospitality Miles and the wider team constantly
                look for new challenges and how to overcome them. From suatinability to automation
                Floteq's key drive is to change the way we do things for the better!
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/5 mb-12 mx-auto">
          <div className="flex flex-col md:flex-row">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              src="../images/diana.webp"
              className="mx-auto object-cover md:h-64 md:w-64 "
            />
            <div className="md:w-2/3">
              <h1 className="text-2xl mb-1">Diana Lazic</h1>
              <h2 className="text-xl mb-3">Co Founder - COO</h2>
              <p className="text-lg">
                Diana has been intricately involved from the "Aha" moment of checking the empty keg
                to understanding and delivering insights for effective marketing derived from raw
                data. Diana heads up Operations and her previous experience at large retail outlets
                sauch as L'oreal, David Jones and running a winebar for 6 years gives Floteq a
                unique belnd of experience and drive.
              </p>
            </div>
          </div>
        </div>
        <div className="w-4/5 mb-12 mx-auto">
          <div className="flex flex-col md:flex-row">
            <StaticImage
              alt="Image Alt Text"
              imgStyle={{ borderRadius: '3%' }}
              src="../images/david.webp"
              className="mx-auto object-cover  md:h-64 md:w-64 "
            />
            <div className="md:w-2/3">
              <h1 className="text-2xl mb-1">David May</h1>
              <h2 className="text-xl mb-3">General Manager</h2>
              <p className="text-lg">
                David and Miles spent years working together. From Motorola to IBM to Floteq. David
                is a Sales Professional with a sound background in IT and T and Electrical
                Engineering, coupled with commercial experience and business acumen David is an
                integral part of Floteq International with focus on A/NZ and APAC
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

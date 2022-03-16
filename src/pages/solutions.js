import React from 'react';
import Contact from '../components/about/Contact';
import ContactUs from '../components/ContactUs';
import Solutions from '../components/solutions/Solutions';
import Pricing from '../components/Pricing';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
export default function solutions() {
  return (
    <>
      <Header />

      <div className="mt-12">
        <Solutions />
        <ContactUs />
        <Pricing />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

import React from 'react';
import ContactUs from '../components/ContactUs';
import Solutions from '../components/solutions/Solutions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function solutions() {
  return (
    <>
      <Header />
      <div className="mt-12">
        <Solutions />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

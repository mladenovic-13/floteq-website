import React from 'react';
import ContactUs from '../components/ContactUs';
import Solutions from '../components/solutions/Solutions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/Seo';
import Charts from '../components/solutions/Charts';

export default function solutions() {
  return (
    <>
      <SEO title="Floteq | Solutions" />
      <Header />
      <div className="mt-14">
        <Charts />
        <Solutions />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

import React from 'react';
import ContactUs from '../components/ContactUs';
import Solutions from '../components/solutions/Solutions';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Wrapper from '../components/layout/Wrapper';
import SEO from '../components/Seo';
import Charts from '../components/solutions/Charts';
import Partners from '../components/about/Partners';

export default function solutions() {
  return (
    <>
      <SEO title="Floteq | Solutions" />
      <Header />
      <div className="mt-20">
        <Solutions />
        <Wrapper>
          <ContactUs />
        </Wrapper>
      </div>
      <Footer />
    </>
  );
}

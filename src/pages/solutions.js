import React from 'react';
import Contact from '../components/about/Contact';
import ContactUs from '../components/ContactUs';
import Layout from '../components/layout/Layout';
import Solutions from '../components/solutions/Solutions';
import Pricing from '../components/Pricing';
export default function solutions() {
  return (
    <Layout>
      <Solutions />
      <ContactUs />
      <Pricing />
      <Contact />
    </Layout>
  );
}

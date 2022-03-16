import React from 'react';
import Layout from '../components/layout/Layout';
import FreePilot from '../components/FreePilot';
import Team from '../components/Team';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import MainFeatures from '../components/MainFeatures';
import Places from '../components/Places';
import Monitoring from '../components/Monitoring';
import IotBenefits from '../components/IotBenefits';
import Contact from '../components/about/Contact';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <Layout>
      <Hero />

      <MainFeatures />

      <IotBenefits />

      <Places />

      <Monitoring />

      <Steps />

      <Pricing />

      <Team />

      <FreePilot />

      {/* ADD PARTNERS */}

      <Contact />
    </Layout>
  );
};

export default Index;

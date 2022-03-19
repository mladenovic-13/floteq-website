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
import Benefits from '../components/Benefits';
import Wrapper from '../components/layout/Wrapper';

const Index = () => {
  return (
    <Layout>
      <Hero />

      <Wrapper isDark={true}>
        <Benefits />
      </Wrapper>
      <Wrapper isDark={false}>
        <MainFeatures />
      </Wrapper>

      <Wrapper isDark={true}>
        <IotBenefits />
      </Wrapper>

      <Wrapper isDark={false}>
        <Places />
      </Wrapper>
      <Wrapper isDark={true}>
        <Monitoring />
      </Wrapper>
      <Wrapper isDark={false}>
        <Steps />
      </Wrapper>
      <Wrapper isDark={true}>
        <Pricing />
      </Wrapper>

      <Wrapper isDark={false}>
        <Team />
      </Wrapper>
      <Wrapper isDark={true}>
        <FreePilot />
      </Wrapper>

      {/* ADD PARTNERS */}
      <Wrapper isDark={false}>
        <Contact />
      </Wrapper>
    </Layout>
  );
};

export default Index;

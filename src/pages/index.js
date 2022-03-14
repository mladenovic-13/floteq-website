import React from 'react';
import Layout from '../components/layout/Layout';
import FreePilot from '../components/FreePilot';
import Team from '../components/Team';
import Steps from '../components/Steps';
import HeroImg from '../components/HeroImg';
import Pricing from '../components/Pricing';
import MainFeatures from '../components/MainFeatures';
import Statistic from '../components/Statistic';
import Places from '../components/Places';
import Monitoring from '../components/Monitoring';
import IotBenefits from '../components/IotBenefits';
import Benefits from '../components/Benefits';
import WrapperDark from '../components/layout/WraperDark';
import WrapperLight from '../components/layout/WraperLight';

const Index = () => (
  <Layout>
    <WrapperDark>
      <HeroImg />
    </WrapperDark>

    <WrapperLight>
      <Statistic />
    </WrapperLight>

    <WrapperDark>
      <MainFeatures />
    </WrapperDark>

    <WrapperLight>
      <IotBenefits />
    </WrapperLight>

    <WrapperDark>
      <Places />
    </WrapperDark>

    <WrapperLight>
      <Monitoring />
    </WrapperLight>

    <WrapperDark>
      <Steps />
    </WrapperDark>

    <WrapperLight>
      <Pricing />
    </WrapperLight>

    <WrapperDark>
      <Team />
    </WrapperDark>

    <WrapperLight>
      <FreePilot />
    </WrapperLight>
  </Layout>
);

export default Index;

import React from 'react';
import Layout from '../components/layout/Layout';
import FreePilot from '../components/FreePilot';
import Team from '../components/Team';
import Steps from '../components/Steps';
import HeroImg from '../components/HeroImg';
import Pricing from '../components/Pricing';
import MainFeatures from '../components/MainFeatures';
import Statistic from '../components/Statistic';

const Index = () => (
  <Layout>
    <HeroImg />
    <Statistic />
    <MainFeatures />
    <Steps />
    <Pricing />
    <FreePilot />
    <Team />
  </Layout>
);

export default Index;

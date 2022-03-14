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

const Index = () => (
  <Layout>
    <HeroImg />
    <Statistic />
    <MainFeatures />
    <Places />
    <Steps />
    <Pricing />
    <Team />
    <FreePilot />
  </Layout>
);

export default Index;

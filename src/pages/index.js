import React from 'react';
import Layout from '../components/layout/Layout';
import FreePilot from '../components/FreePilot';
import Solutions from '../components/Solutions';
import Stats from '../components/Stats';
import Customers from '../components/Customers';
import Team from '../components/Team';
import Steps from '../components/Steps';
import Hero from '../components/Hero';
import HeroSimple from '../components/HeroSimple';
import HeroImg from '../components/HeroImg';
import Pricing from '../components/Pricing';
import MainFeatures from '../components/MainFeatures';

const Index = () => (
  <Layout>
    <HeroImg />
    <MainFeatures />
    <Hero />
    <Steps />
    <Pricing />
    <Solutions />
    <Stats />
    <Team />
    <HeroSimple />
    <Customers />
    <FreePilot />
  </Layout>
);

export default Index;

import React from 'react';
import Layout from '../components/layout/Layout';
import FreePilot from '../components/FreePilot';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import Stats from '../components/Stats';
import Customers from '../components/Customers';
import Team from '../components/Team';

const Index = () => (
  <Layout>
    <Features />
    <Solutions />
    <Stats />
    <Team />
    <Customers />
    <FreePilot />
  </Layout>
);

export default Index;

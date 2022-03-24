import React from 'react';
import DemoDetails from '../components/about/DemoDetails';
import Form from '../components/about/Form';
import Layout from '../components/layout/Layout';
const requestDemo = () => {
  return (
    <Layout>
      <div className="mx-auto mt-16 lg:mt-4 lg:w-4/5 flex flex-col-reverse lg:flex-row-reverse lg:pt-10">
        <section className="lg:w-1/2  lg:ml-12 lg:mt-10 px-8">
          <Form />
        </section>
        <section className="mx-auto w-5/6 mb-6 lg:mb-0 lg:w-1/2 lg:mt-4 lg:p-4">
          <DemoDetails />
        </section>
      </div>
    </Layout>
  );
};
export default requestDemo;

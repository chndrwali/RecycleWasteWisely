import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/hero/Hero';
import Steps from '../component/stepsSection/Steps';
import Featured from '../component/featuredSection/Featured';

function Home() {
  return (
    <Layout>
      <Hero />
      <Steps />
      <Featured />
    </Layout>
  );
}

export default Home;
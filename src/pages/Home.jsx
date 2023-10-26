import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/hero/Hero';
import About from '../component/aboutSection/About';
import Steps from '../component/stepsSection/Steps';
import Featured from '../component/featuredSection/Featured';

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Steps />
      <Featured />
    </Layout>
  );
}

export default Home;
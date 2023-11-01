import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/heroAbout/Hero';
import Contributors from '../component/contributorSection/Contributors';
import About from '../component/aboutSection/About';
import Steps from '../component/stepsSection/Steps';

function Abouts() {
  return (
    <Layout>
      <Hero />
      <Contributors />
      <About />
      <Steps />
    </Layout>
  );
}

export default Abouts;
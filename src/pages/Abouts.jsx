import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/heroAbout/Hero';
import Contributors from '../component/contributorSection/Contributors';
import About from '../component/aboutSection/About';

function Abouts() {
  return (
    <Layout>
      <Hero />
      <About />
      <Contributors />
    </Layout>
  );
}

export default Abouts;
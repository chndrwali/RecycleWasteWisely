import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/heroAbout/Hero';
import Contributors from '../component/contributorSection/Contributors';

function About() {
  return (
    <Layout>
      <Hero />
      <Contributors />
    </Layout>
  );
}

export default About;
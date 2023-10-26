import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/heroAbout/Hero';
import Contributors from '../component/contributorSection/Contributors';
import TechStacks from '../component/techStackSection/TechStacks';
import Credits from '../component/creditsSection/Credits';

function About() {
  return (
    <Layout>
      <Hero />
      <Contributors />
      <TechStacks />
      <Credits />
    </Layout>
  );
}

export default About;
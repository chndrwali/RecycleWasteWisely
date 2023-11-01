import React from 'react';
import Layout from '../component/Layout';
import Hero from '../component/hero/Hero';
import Featured from '../component/featuredSection/Featured';

function Home() {
  return (
    <Layout>
      <Hero />
      <Featured />
    </Layout>
  );
}

export default Home;
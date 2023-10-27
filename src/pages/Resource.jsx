import React from 'react';
import Layout from '../component/Layout';
import TechStacks from '../component/techStackSection/TechStacks';
import Credits from '../component/creditsSection/Credits';

function Resource() {
  return (
    <Layout>
      <TechStacks />
      <Credits />
    </Layout>
  );
}

export default Resource;
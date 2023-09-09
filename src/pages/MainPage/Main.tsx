import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from './Content';
import Details from './Details';
import Soilder from './Soilder';

const Main = () => {
  return (
    <Layout>
      <div style={{ height: '70vh' }}>
        <Content />
        <Soilder />
        <Details />
      </div>
    </Layout>
  );
};

export default Main;

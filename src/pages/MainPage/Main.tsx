import React from 'react';
import Layout from '../../components/layout/Layout';
import Content from './Content';
import Details from './Details';
import Soilder from './Soilder';
import Carousel from './Carousel/Carousel';

const Main = () => {
  return (
    <Layout>
      <Content />
      <Carousel />
      <Soilder />
      <Details />
    </Layout>
  );
};

export default Main;

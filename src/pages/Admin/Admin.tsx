import React from 'react';
import Layout from '../../components/layout/Layout';
import Table from './Table';
import Form from './Form';

const Admin = () => {
  return (
    <Layout>
      <div
        className='flex mt-10 justify-between'
        style={{ minHeight: '700px' }}
      >
        <Table />
        <Form />
      </div>
    </Layout>
  );
};

export default Admin;

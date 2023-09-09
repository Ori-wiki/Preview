import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className='p-12 relative bg-cover bg-no-repeat'
      style={{ backgroundImage: 'url(${})' }}
    >
      {children}
    </div>
  );
};

export default Layout;

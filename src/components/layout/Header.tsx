import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <Logo />
      <Navigation />
      <Hamburger />
    </div>
  );
};

export default Header;

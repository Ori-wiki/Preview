import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/pngwing.com.png';

const Logo = () => {
  return (
    <Link to='/'>
      <img alt='Logo' src={LogoImage} width='90' draggable={false}></img>
    </Link>
  );
};

export default Logo;

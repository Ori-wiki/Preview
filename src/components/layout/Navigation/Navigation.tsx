import React from 'react';
import { Link } from 'react-router-dom';
import { list } from './list';
import netflixImage from '../../../assets/images/netflix.png';

const Navigation = () => {
  return (
    <ul className='flex items-center'>
      {list.map((title, idx) => (
        <li key={title} className='flex px-4 text-center justify-center'>
          {idx !== 2 ? (
            <Link
              to={`/${title.toLowerCase()}`}
              className='block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out'
            >
              {title}
            </Link>
          ) : (
            <img
              src={netflixImage}
              alt='Netflix'
              width={55}
              draggable={false}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

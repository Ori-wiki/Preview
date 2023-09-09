import React from 'react';
import soilder from '../../assets/images/pngimg.com - squid_game_PNG69.png';

const Soilder = () => {
  return (
    <div className='absolute -bottom-12 -right-7'>
      <img
        draggable={false}
        alt='Soilder'
        src={soilder}
        width={600}
        style={{ transform: 'scale(-1, 1)' }}
      />
    </div>
  );
};

export default Soilder;

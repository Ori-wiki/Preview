import React from 'react';
import logoImg from '../../assets/images/SquidLogo.png';
import logoObjImg from '../../assets/images/netflix.png';

const Content = () => {
  return (
    <div className='mt-28 w-1/2'>
      <img
        alt='logo'
        src={logoImg}
        className='mb-10 -ml-20'
        draggable={false}
        style={{ width: '630px' }}
      />
      <div className='flex ml-5'>
        <img
          alt='logo'
          src={logoObjImg}
          className='mr-8 h-auto block'
          width='90'
          draggable={false}
        />
        <p
          className='text-white opacity-70 leading-8 text-lg'
          style={{ maxWidth: '60%' }}
        >
          Once you start the game, there is no turning back. The winner is
          alone, the loser only faces death.
        </p>
      </div>
    </div>
  );
};

export default Content;

import React from 'react';
import { useSeries } from '../../hooks/useSeries';

const Table = () => {
  const [series] = useSeries();

  return (
    <div
      className='py-10 px-20 text-white'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '48%' }}
    >
      <div className='text-left font-bold flex'>
        <span className='block w-1/4 p-2'>Img</span>
        <span className='block p-2'>Video Url</span>
      </div>
      <ul>
        {series.map((item) => (
          <li
            className='flex items-center m-3'
            key={item._id}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <img className='w-1/4' src={item.thumbnailPath} alt='Video Image' />
            <span className='p-2'>{item.videoUrl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;

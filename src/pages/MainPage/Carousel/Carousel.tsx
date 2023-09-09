import React, { useState } from 'react';

import thumbImg_1 from '../../../assets/images/thumb-1.jpg';
import thumbImg_2 from '../../../assets/images/thumb-2.jpg';
import thumbImg_3 from '../../../assets/images/thumb-3.jpg';
import thumbImg_4 from '../../../assets/images/thumb-4.jpeg';
import thumbImg_5 from '../../../assets/images/thumb-5.jpg';
import VideoList from './VideoList';
import Controls from './Controls';
import { Slide } from '../../../types/Slide';
import { useSeries } from '../../../hooks/useSeries';

// const initialSlides: Slide[] = [
//   {
//     _id: 'wef2we',
//     thumbnailPath: thumbImg_1,
//     videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
//   },
//   {
//     _id: '123fqw',
//     thumbnailPath: thumbImg_2,
//     videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
//   },
//   {
//     _id: '43gsw',
//     thumbnailPath: thumbImg_3,
//     videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
//   },
//   {
//     _id: '53uyi5k',
//     thumbnailPath: thumbImg_4,
//     videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
//   },
//   {
//     _id: 'w*#fgr',
//     thumbnailPath: thumbImg_5,
//     videoUrl: 'https://www.youtube.com/watch?v=oqxAJKy0ii4',
//   },
// ];

const Carousel = () => {
  // const [slides] = useState<Slide[]>(initialSlides);
  const [slides] = useSeries();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className='mt-24'>
      <div className='flex items-center'>
        <div className='text-white opacity-90 text-lg font-medium mr-20'>
          1 series
        </div>
        <Controls
          slidesLength={slides.length}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
      <VideoList
        slides={slides}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Carousel;

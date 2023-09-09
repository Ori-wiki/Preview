import React from 'react';
import { Slide } from '../../../types/Slide';
import VideoItem from './VideoItem';
interface IVideoListProps {
  slides: Slide[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const VideoList = ({
  slides,
  currentIndex,
  setCurrentIndex,
}: IVideoListProps) => {
  const playHandler = (index: number, videoUrl: string) => {
    setCurrentIndex(index);
  };

  const count = currentIndex * 192;

  return (
    <div
      className='flex items-end h-32 transition-all duration-300 ease-linear'
      style={{ transform: currentIndex ? `translateX(-${count}px)` : '' }}
    >
      {slides.map((slide, index) => {
        const isActive = currentIndex === index;

        return (
          <VideoItem
            key={slide._id}
            slide={slide}
            clickHandler={() => playHandler(index, slide.videoUrl)}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default VideoList;

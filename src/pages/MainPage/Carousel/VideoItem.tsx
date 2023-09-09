import React from 'react';
import { Slide } from '../../../types/Slide';
import PlayButton from './PlayButton';
interface IVideoItem {
  isActive: boolean;
  slide: Slide;
  clickHandler: () => void;
}

const VideoItem = ({ slide, isActive, clickHandler }: IVideoItem) => {
  return (
    <button
      onClick={clickHandler}
      className={`block relative mr-8 transition-all duration-300 ease-in-out ${
        isActive ? 'w-52 h-full' : 'w-40 h-24'
      }`}
    >
      {isActive && <PlayButton />}
      <div
        className={`bg-cover bg-no-repeat bg-center h-full ${
          isActive && 'filter grayscale'
        }`}
        style={{ backgroundImage: `url(${slide.thumbnailPath})` }}
      ></div>
    </button>
  );
};

export default VideoItem;

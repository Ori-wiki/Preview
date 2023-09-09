import React from 'react';
import { Slide } from '../../../types/Slide';
import VideoItem from './VideoItem';
import { useModal } from '../../../components/layout/ModalProvider';
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
  const { setVideoUrl } = useModal();

  const playHandler = (index: number, videoUrl: string) => {
    setCurrentIndex(index);
    setVideoUrl(videoUrl);
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

import React from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

interface IControls {
  slidesLength: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Controls = ({
  slidesLength,
  setCurrentIndex,
  currentIndex,
}: IControls) => {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + 1 === slidesLength;
  console.log(currentIndex);
  console.log(slidesLength);

  const prevHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextHandler = () => {
    if (currentIndex < slidesLength - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className='text-white'>
      <button
        onClick={prevHandler}
        className={`'duration-300 ease-in-out transition-opacity' ${
          isPrevDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-90'
        }`}
        disabled={isPrevDisabled}
      >
        <HiChevronLeft size={26} />
      </button>
      <button
        onClick={nextHandler}
        className={`'duration-300 ease-in-out transition-opacity' ${
          isNextDisabled ? 'opacity-30 cursor-not-allowed' : 'opacity-90'
        }`}
        disabled={isNextDisabled}
      >
        <HiChevronRight size={26} />
      </button>
    </div>
  );
};

export default Controls;

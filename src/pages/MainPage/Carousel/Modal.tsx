import React from 'react';
import ReactPlayer from 'react-player';

const Modal = () => {
  return (
    <div className='fixed top-1/4 left-1/4 w-1/2 h-96 flex items-center justify-center z-50 keyframe'>
      <ReactPlayer url={''} />
    </div>
  );
};

export default Modal;

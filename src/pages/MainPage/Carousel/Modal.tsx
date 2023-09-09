import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useOutside } from '../../../hooks/useOutside';
import { useModal } from '../../../components/layout/ModalProvider';

const Modal = () => {
  const { isShow, ref, setIsShow } = useOutside(false);
  const { videoUrl } = useModal();
  useEffect(() => {
    if (videoUrl && !isShow) setIsShow(true);
  }, [videoUrl, isShow, setIsShow]);

  if (!isShow) {
    return null;
  }

  return (
    <div
      ref={ref}
      className='fixed top-1/4 left-1/4 w-1/2 h-96 flex items-center justify-center z-50 keyframe'
    >
      <ReactPlayer url={videoUrl} />
    </div>
  );
};

export default Modal;

import { useEffect, useRef, useState } from 'react';
import { useModal } from '../components/layout/ModalProvider';

export const useOutside = (initialVisible: boolean) => {
  const { setVideoUrl } = useModal();

  const [isShow, setIsShow] = useState<boolean>(initialVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShow(false);
      setVideoUrl('');
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return { ref, isShow, setIsShow };
};

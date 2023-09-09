import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface ModalContextType {
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string>('');

  const values = useMemo(() => ({ videoUrl, setVideoUrl }), [videoUrl]);
  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

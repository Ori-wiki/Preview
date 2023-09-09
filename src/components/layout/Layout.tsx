import { ReactNode } from 'react';
import BgImage from '../../assets/images/Background.jpeg';
import Header from './Header';
import SocialMedia from './SocialMedia';
import Modal from '../../pages/MainPage/Carousel/Modal';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className='p-12 relative bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${BgImage})`,
        // backgroundPositionX: -200,
      }}
    >
      <div className='gradient z-10' />
      <div className='relative z-20'>
        <Header />
        <SocialMedia />
        <Modal />
        {children}
      </div>
    </div>
  );
};

export default Layout;

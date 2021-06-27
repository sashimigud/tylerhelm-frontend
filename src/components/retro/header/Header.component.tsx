import React, { FC } from 'react';
import './header.styles.scss';

//import { useStore } from '../../../utils/globalStore';

type HeaderProps = {
  toggleFlyout: () => void
}

const Header: FC<HeaderProps> = ({ toggleFlyout }: HeaderProps) => {
  //const { dispatch } = useStore();

  return (
    <div className="header-container">
      <div className="site-controls">
        <img className="logo" src="assets/datamaskin.gif" alt="" />
        <div>
          <p>Home</p>
          <p>About</p>
        </div>
      </div>
      <div className="burger-container" onClick={() => toggleFlyout()}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </div>
  );
};

export default Header;

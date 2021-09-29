import React, { FC } from 'react';
import './header.styles.scss';

type HeaderProps = {
  toggleFlyout: () => void;
};

const Header: FC<HeaderProps> = ({ toggleFlyout }: HeaderProps) => {
  return (
    <div className="header-container">
      <div className="site-controls">
        <img className="logo" src="assets/datamaskin.gif" alt="" />
        <div>
          <div className="header-link h-l-home"></div>
          <div className="header-link h-l-about"></div>
          <div className="header-link h-l-nfts"></div>
        </div>
      </div>
      <img
        className="burger-menu"
        src="assets/vaporwave_cat.gif"
        alt=""
        onClick={() => toggleFlyout()}
      />
    </div>
  );
};

export default Header;

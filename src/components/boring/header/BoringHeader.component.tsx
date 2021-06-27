import React, { FC } from "react";
import "boringheader.styles.scss";

const BoringHeader: FC = () => {


  return (
    <div className="b-header-container">
      <div className="site-controls">
        <div className="logo"></div>
        <div className="links">
          <p>Home</p>
          <p>About</p>
        </div>
      </div>
      <div className="burger-container">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </div>
  );
};

export default BoringHeader;

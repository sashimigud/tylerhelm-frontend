import React, { FC } from 'react';
import './redTape.styles.scss';

import Carousel from '../carousel/Carousel.component';

const RedTape: FC = () => {
  return (
    <div className="red-tape-container">
      <img className="pinup-gif" src="/assets/girl.gif" alt="" />
      <img className="hot-gif" src="/assets/HOT.gif" alt="" />
      <Carousel isRedTape={true} />
    </div>
  );
};

export default RedTape;

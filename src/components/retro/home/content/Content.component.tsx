import React, { FC } from 'react';
import './content.styles.scss';

//import RetroContent from './retro-content/RetroContent.component';
import Carousel from '../../../common/carousel/Carousel.component';

const Content: FC = () => {
  return (
    <div className="content-container">
      {/* <RetroContent /> */}
      <Carousel />
    </div>
  );
};

export default Content;

import React, { FC } from 'react';
import './content.styles.scss';

//import Carousel from '../../../common/carousel/Carousel.component';

const Content: FC = () => {
  return (
    <div className="content-container">
      <img className="retro-img l-img-1" src="assets/cat.gif" alt="" />
      <img className="retro-img l-img-2" src="assets/lame.gif" alt="" />
      <img className="retro-img l-img-3" src="assets/pyramide.gif" alt="" />
      <img className="retro-img l-img-4" src="assets/heart.gif" alt="" />
      <img className="retro-img l-img-5" src="assets/smiley.gif" alt="" />
      {/*<div className="content-middle">
      <Carousel />
    </div>
    */}
      <img className="retro-img r-img-1" src="assets/sunglasses.gif" alt="" />
      <img className="retro-img r-img-2" src="assets/lips.png" alt="" />
      <img className="retro-img r-img-3" src="assets/ksigns.gif" alt="" />
      <img className="retro-img r-img-4" src="assets/cherry.png" alt="" />
    </div>
  );
};

export default Content;

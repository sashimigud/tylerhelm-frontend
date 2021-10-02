import React, { FC } from 'react';
import './content.styles.scss';

import RetroContent from './retro-content/RetroContent.component';
import Carousel from '../../../common/carousel/Carousel.component';

import { useRouteMatch } from 'react-router';

const Content: FC = () => {
  const { path, url } = useRouteMatch();
  console.log('path: ', path);
  console.log('url: ', url);

  return (
    <div className="content-container">
      <RetroContent />
      <Carousel />
    </div>
  );
};

export default Content;

import React, { FC } from 'react';
import './boringHomeContent.styles.scss';

import Carousel from '../../../common/carousel/Carousel.component';

const BoringHomeContent: FC = () => {
  return (
    <div className="bh-content-container">
      <Carousel />
    </div>
  )
}

export default BoringHomeContent


import React, { FC } from 'react';
import './carouselThumb.styles.scss';

interface ICarouselThumbProps {
  onClick?: () => void;
}

const CarouselThumb: FC<ICarouselThumbProps> = () => {
  return <div className="carousel-thumb-container">thumb</div>;
};

export default CarouselThumb;

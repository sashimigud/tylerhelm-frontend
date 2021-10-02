import React, { FC } from 'react';
import './carouselitem.styles.scss';

type carouselItemProps = {
  imgsrc;
};

const CarouselItem: FC<carouselItemProps> = ({ imgsrc }: carouselItemProps) => {
  return (
    <div className="carousel-item-container">
      <img src={'/' + imgsrc} alt="" />
    </div>
  );
};

export default CarouselItem;

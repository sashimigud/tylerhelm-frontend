import React, { FC } from 'react';
import './carouselitem.styles.scss';

type carouselItemProps = {
  ori: string
}

const CarouselItem: FC<carouselItemProps> = ({ ori }: carouselItemProps) => {

  return (
    <div className="carousel-item-container">
      <p>tittellaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaang</p>
      <div className="carousel-item-img"></div>
    </div>
  )
}

export default CarouselItem;
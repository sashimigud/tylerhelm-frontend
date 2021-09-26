import React, { FC, MouseEventHandler } from 'react';
import './carouselThumb.styles.scss';

interface ICarouselThumbProps {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  img?: string;
}

const CarouselThumb: FC<ICarouselThumbProps> = ({
  img,
  onClick,
}: ICarouselThumbProps) => {
  return (
    <div className="carousel-thumb-container" onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default CarouselThumb;

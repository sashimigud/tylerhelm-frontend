import React, { FC } from "react";
import "./carousel.styles.scss";
import { useSpringCarousel } from "react-spring-carousel-js";

const Carousel: FC = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withThumbs: true,
      items: [
        {
          id: "item-1",
          renderItem: <div>Item 1</div>,
        },
        {
          id: "item-2",
          renderItem: <div>Item 2</div>,
        },
      ],
    });

  return (
    <div className="carousel-container">
      {/*
    <p>tittel</p>
    mulig at renderItem kan ha tittel også
    */}
      <div className="carousel-wrapper">{carouselFragment}</div>
    </div>
  );
};

export default Carousel;

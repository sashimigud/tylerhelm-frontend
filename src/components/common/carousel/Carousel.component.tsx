import React, { FC } from "react";
import "./carousel.styles.scss";
import { useSpringCarousel } from "react-spring-carousel-js";

import { useStore } from '../../../utils/globalStore';

const Carousel: FC = () => {
  const { state } = useStore();

  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem, slideToItem } =
    useSpringCarousel({
      //index of item to start with
      initialActiveItem: 1,
      withThumbs: true,
      items: [
        {
          id: "item-1",
          renderItem: <div>Item 1</div>,
          //slideToItem takes index and id
          renderThumb: (<div onClick={() => slideToItem("item-1")}>
            thumb
            </div>)
        },
        {
          id: "item-2",
          renderItem: <div>Item 2</div>,
          renderThumb: (<div>
            thumb
          </div>)
        },
      ],
    });

  return (
    <div className="carousel-container">
      {/*
    <p>tittel</p>
    det er mulig at renderItem kan ha tittel også
    */}
      <div className="carousel-wrapper">
        { state.retroMode ? <button onClick={slideToNextItem}>next</button> : <button>normal next</button> }     
        {carouselFragment}
        { state.retroMode ? <button onClick={slideToPrevItem}>back</button> : <button>normal back</button> }
      </div>
      <div className="thumbs-wrapper">
        {thumbsFragment}
      </div>
    </div>
  );
};

export default Carousel;

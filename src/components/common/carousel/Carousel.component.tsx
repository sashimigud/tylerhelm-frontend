import React, { FC, useState } from 'react';
import './carousel.styles.scss';
import { useSpringCarousel } from 'react-spring-carousel-js';

import { useStore } from '../../../utils/globalStore';

import CarouselItem from './carousel-item/CarouselItem.component';

const Carousel: FC = () => {
  const { state } = useStore();
  const [imageOrientation, setImageOrientation] = useState('landscape');

  const images = [
    {
      src: "test-images/pagliacci-test.jpg",
      orientation: "landscape"
    },
    {
      src: "test-images/flinkpike-test.png",
      orientation: "portrait"
    }
  ]

  const { carouselFragment, thumbsFragment, useListenToCustomEvent, slideToPrevItem, slideToNextItem, slideToItem } =
    useSpringCarousel({
      //index of item to start with
      initialActiveItem: 1,
      withThumbs: true,
      items: [
        {
          id: "item-1",
          renderItem: <CarouselItem imgsrc={images[0].src} />,
          //slideToItem takes index and id
          renderThumb: (<div onClick={() => slideToItem("item-1")}>
            thumb
            </div>)
        },
        {
          id: "item-2",
          renderItem: <CarouselItem imgsrc={images[1].src}/>,
          renderThumb: (<div>
            thumb
          </div>)
        },
      ],
    });

    useListenToCustomEvent(event => {
      if (event.eventName === 'onSlideStartChange') {
        const activeImage = images[event.nextItem]
        setImageOrientation(activeImage.orientation)
      }
    })

  return (
    <div className="carousel-container">
      {/*
    <p>tittel</p>
    det er mulig at renderItem kan ha tittel også
    */}
      <div className={imageOrientation === "landscape" ? "carousel-wrapper-landscape" : "carousel-wrapper-portrait"}>
        {carouselFragment}
      </div>
        { state.retroMode ? <button onClick={slideToPrevItem}>back</button> : <button>normal back</button> }
        { state.retroMode ? <button onClick={slideToNextItem}>next</button> : <button>normal next</button> }     
      <div className="thumbs-wrapper">
        {thumbsFragment}
      </div>
    </div>
  );
};

export default Carousel;

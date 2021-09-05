import React, { FC, useState } from 'react';
import './carousel.styles.scss';
import { useSpringCarousel } from 'react-spring-carousel-js';

import { useStore } from '../../../utils/globalStore';

import CarouselItem from './carousel-item/CarouselItem.component';
import RetroBtn from './retro-carousel-btns/RetroBtn.component';
import { BUTTON_DIRECTIONS } from '../../../_constants/buttonSettings';

const Carousel: FC = () => {
  const { state } = useStore();
  const [imageOrientation, setImageOrientation] = useState('landscape');

  const images = [
    {
      src: 'test-images/pagliacci-test.jpg',
      orientation: 'landscape',
    },
    {
      src: 'test-images/flinkpike-test.png',
      orientation: 'portrait',
    },
    {
      orientation: 'portrait',
    },
    {
      orientation: 'portrait',
    },
    {
      orientation: 'portrait',
    },
    {
      orientation: 'landscape',
    },
    {
      orientation: 'portrait',
    },
    {
      orientation: 'landscape',
    },
  ];

  const {
    carouselFragment,
    thumbsFragment,
    useListenToCustomEvent,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    //index of item to start with
    initialActiveItem: 0,
    withThumbs: true,
    items: [
      {
        id: 'item-1',
        renderItem: <CarouselItem imgsrc={images[0].src} />,
        //slideToItem takes index and id
        renderThumb: <div onClick={() => slideToItem('item-1')}>thumb</div>,
      },
      {
        id: 'item-2',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        //slideToItem takes index and id
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-3',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-4',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-5',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-6',
        renderItem: <CarouselItem imgsrc={images[0].src} />,
        //slideToItem takes index and id
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-7',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <div>thumb</div>,
      },
      {
        id: 'item-6',
        renderItem: <CarouselItem imgsrc={images[0].src} />,
        //slideToItem takes index and id
        renderThumb: <div>thumb</div>,
      },
    ],
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      const activeImage = images[event.nextItem];
      setImageOrientation(activeImage.orientation);
    }
  });

  return (
    <div className="carousel-container">
      {/*
    <p>tittel</p>
    det er mulig at renderItem kan ha tittel også
    */}
      <div
        className={
          imageOrientation === 'landscape'
            ? 'carousel-wrapper-landscape'
            : 'carousel-wrapper-portrait'
        }>
        {carouselFragment}
      </div>
      <div className="controls-container">
        {state.retroMode ? (
          <RetroBtn
            onClick={slideToPrevItem}
            direction={BUTTON_DIRECTIONS.PREVIOUS}
          />
        ) : (
          <button onClick={slideToPrevItem}>normal back</button>
        )}
        {state.retroMode ? (
          <RetroBtn
            onClick={slideToNextItem}
            direction={BUTTON_DIRECTIONS.NEXT}
          />
        ) : (
          <button onClick={slideToNextItem}>normal next</button>
        )}
      </div>
      <div className="thumbs-wrapper">{thumbsFragment}</div>
    </div>
  );
};

export default Carousel;

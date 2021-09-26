import React, { FC, useState } from 'react';
import './carousel.styles.scss';
import { useSpringCarousel } from 'react-spring-carousel-js';

import Controls from '../controls/Controls.component';
import CarouselItem from './carousel-item/CarouselItem.component';
import CarouselThumb from './carousel-thumb/CarouselThumb.component';

const Carousel: FC = () => {
  const images = [
    {
      src: 'test-images/pagliacci-test.jpg',
      orientation: 'landscape',
      title: 'title1',
    },
    {
      src: 'test-images/flinkpike-test.png',
      orientation: 'portrait',
      title: 'title2',
    },
    {
      orientation: 'portrait',
      title: 'title3',
    },
    {
      orientation: 'portrait',
      title: 'title4',
    },
    {
      orientation: 'portrait',
      title: 'title5',
    },
    {
      orientation: 'landscape',
      title: 'title6',
    },
    {
      orientation: 'portrait',
      title: 'title7',
    },
    {
      orientation: 'landscape',
      title: 'title8',
    },
  ];

  const [imageOrientation, setImageOrientation] = useState('landscape');
  const [title, setTitle] = useState<string>(images[0].title);

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
        renderThumb: (
          <CarouselThumb
            img={images[0].src}
            onClick={() => slideToItem('item-1')}
          />
        ),
      },
      {
        id: 'item-2',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        //slideToItem takes index and id
        renderThumb: (
          <CarouselThumb
            img={images[1].src}
            onClick={() => slideToItem('item-2')}
          />
        ),
      },
      {
        id: 'item-3',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <CarouselThumb />,
      },
      {
        id: 'item-4',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <CarouselThumb />,
      },
      {
        id: 'item-5',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <CarouselThumb />,
      },
      {
        id: 'item-6',
        renderItem: <CarouselItem imgsrc={images[0].src} />,
        //slideToItem takes index and id
        renderThumb: <CarouselThumb />,
      },
      {
        id: 'item-7',
        renderItem: <CarouselItem imgsrc={images[1].src} />,
        renderThumb: <CarouselThumb />,
      },
      {
        id: 'item-8',
        renderItem: <CarouselItem imgsrc={images[0].src} />,
        //slideToItem takes index and id
        renderThumb: <CarouselThumb />,
      },
    ],
  });

  useListenToCustomEvent((event) => {
    if (event.eventName === 'onSlideStartChange') {
      const activeImage = images[event.nextItem];
      setImageOrientation(activeImage.orientation);
      setTitle(activeImage.title);
    }
  });

  return (
    <div className="carousel-container">
      <p className="image-title">{title}</p>
      <div
        className={
          imageOrientation === 'landscape'
            ? 'carousel-wrapper-landscape'
            : 'carousel-wrapper-portrait'
        }>
        {carouselFragment}
      </div>
      <Controls
        slideToNextItem={slideToNextItem}
        slideToPrevItem={slideToPrevItem}
      />
      <div className="thumbs-wrapper">{thumbsFragment}</div>
    </div>
  );
};

export default Carousel;

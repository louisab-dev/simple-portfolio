import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import React from "react";

function Carousel(carouselElements) {
  return (
    <AliceCarousel
      mouseTracking={true}
      disableDotsControls={true}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      }}
      infinite={true}
      items={carouselElements.children}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  );
}

export default Carousel;

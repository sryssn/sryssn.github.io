import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselSection() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="HomePage/carousel-1.jpg"
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>COFFEE FACTORY</h3>
          <img src="HomePage/carousel-coffee-separator.png" loading="lazy" alt="coffee separator" className="mt-3 mb-3" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="HomePage/carousel-2.jpg"
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>COFFEE FACTORY</h3>
          <img src="HomePage/carousel-coffee-separator.png" loading="lazy" alt="coffee separator" className="mt-3 mb-3" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="HomePage/carousel-3.jpg"
          alt="First slide"
          loading="lazy"
        />
        <Carousel.Caption>
          <h3>COFFEE FACTORY</h3>
          <img src="HomePage/carousel-coffee-separator.png" loading="lazy" alt="coffee separator" className="mt-3 mb-3" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;

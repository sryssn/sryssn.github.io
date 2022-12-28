import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselClients() {
  return (
    <Carousel fade className="carousel-clients pt-5 pb-5">
      <Carousel.Item interval={2000} className="d-flex justify-content-center align-items-center">
        <img
          className="d-block"
          src="HomePage/clients-1.png"
          alt="Client 1"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="d-flex justify-content-center align-items-center">
        <img
          className="d-block"
          src="HomePage/clients-2.png"
          alt="Client 2"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="d-flex justify-content-center align-items-center">
        <img
          className="d-block"
          src="HomePage/clients-3.png"
          alt="Client 3"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="d-flex justify-content-center align-items-center">
        <img
          className="d-block"
          src="HomePage/clients-4.png"
          alt="Client 4"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="d-flex justify-content-center align-items-center">
        <img
          className="d-block"
          src="HomePage/clients-5.png"
          alt="Client 5"
          loading="lazy"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselClients;

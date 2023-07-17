import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../assets/brand/1376569_BrandHealth-Image_1200x800_060722.png'
import brand2 from '../assets/brand/brand-image.png'

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand2}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brand1}
          alt="Second slide"
        />

     
      </Carousel.Item>
    
    </Carousel>
    );
};

export default BrandCarousel;
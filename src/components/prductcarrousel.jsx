import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../img/Caroussel1.png';
import carousel2 from '../img/Caroussel2.jpg';
import carousel3 from '../img/Caroussel3.png'; 

const CarouselFadeExample = () => {
  return (
    <div className="carousel-container">
      <style>
        {`
          .carousel-container {
            width: 100%;
            margin: 0 auto;
          }

          .carousel-image {
            height: 600px; /* Adjust height for better visual balance */
            object-fit: cover; 
          }

          .carousel-caption {
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for captions */
            color: black; /* Set the caption text color to black */
          }

          .carousel-caption h3 {
            font-size: 2em; /* Increase font size for captions */
          }

          .carousel-caption p {
            font-size: 1.2em; /* Increase font size for caption descriptions */
          }
        `} 
      </style>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" 
            src= {carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Explorer les meilleurs universités en France </h3> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" 
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Aide aux démarches pour étudier en France</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image" 
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Pour une meilleure intégration</h3> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
} 

export default CarouselFadeExample;

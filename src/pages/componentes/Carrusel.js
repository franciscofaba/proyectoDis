import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from './fotos/foto1.jpg'
import foto2 from './fotos/NO.jpg'
import foto3 from './fotos/foto3.jpg'
import React  from 'react';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={foto1} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto2} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={foto3} class="d-block w-100" alt="..."/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;


import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; 
import jova from './fotos/jova.jpg' ;
import faba from './fotos/yo.jpeg';
function ControlledCarousel2() {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handleSelect1 = (selectedIndex) => {
    setIndex1(selectedIndex);
  };

  const handleSelect2 = (selectedIndex) => {
    setIndex2(selectedIndex);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Primer Carrusel */}
      <Carousel activeIndex={index1} onSelect={handleSelect1}>
        <Carousel.Item>
          <img src={jova} className="d-block w-100" alt={'...'}  />
          <Carousel.Caption>
            <h3>Jovanka Espinoza Cajas</h3>
          </Carousel.Caption>
        </Carousel.Item>


        <img src={jova} className="d-block w-100" alt={'...'}  />
          <Carousel.Caption>
            <h3 > Jovanka Espinoza Cajas</h3>
          </Carousel.Caption>
      
      </Carousel>

      {/* Segundo Carrusel */}
      <Carousel activeIndex={index2} onSelect={handleSelect2}>
        <Carousel.Item>
          <img src={faba} className="d-block w-100" alt="70px" />
          <Carousel.Caption>
          <h3 > Franciso faba</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={faba} className="d-block w-100" alt="70px" />
          <Carousel.Caption>
          <h3 > Franciso faba</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel2;

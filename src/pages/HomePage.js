import React, { useState, useEffect } from 'react';

import Footer from './componentes/Footer';
import ControlledCarousel from './componentes/Carrusel';
import Incentivos from './componentes/Incentivos';
import Galeria from './componentes/galeria';


function HomePage() {
  const [color, setColor] = useState('#777067');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => (prevColor === '#777067' ? 'white' : '#777067'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     
     

     
      <div
        style={{
          backgroundColor: '#333', 
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          fontSize: '18px',
          fontFamily: 'copperplate',
        }}
      >
        ¡Envío gratis en pedidos superiores a $50.000! 
      </div>

      <div className='container text-center' style={{ color: '#746ab0' }}>
        <h1 style={{ color, fontFamily: 'Copperplate', fontSize: 100 }}>
          ¡Bienvenidos a nuestra tienda!
        </h1>
        
        <ControlledCarousel></ControlledCarousel>
        <Incentivos></Incentivos>
        <Galeria></Galeria>
      </div>

    
      
      <div
        style={{
          backgroundColor: '#333', 
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          fontSize: '18px',
          fontFamily: 'copperplate',
        }}
      >
        ¡Uilizando el codigo 2OOFF obtén un 20% de descuento en tu primera compra! 
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomePage;

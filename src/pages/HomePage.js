import React, { useState, useEffect } from 'react';
import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import ControlledCarousel from './componentes/Carrusel';
import Incentivos from './componentes/Incentivos';

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
     
     

     
      <Navbars></Navbars>
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
        <h1 style={{ color, fontFamily: 'Copperplate', fontSize: 80 }}>
          ¡Bienvenidos a nuestra tienda!
        </h1>
        
        <ControlledCarousel></ControlledCarousel>
      </div>

      <Incentivos></Incentivos>
      <Footer></Footer>
    </>
  );
}

export default HomePage;

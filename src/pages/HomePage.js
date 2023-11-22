


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
    }, 1000); // Cambia de color cada segundo (1000 milisegundos)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <>
      <Navbars></Navbars>

      <div className='container custom-background p-3 text-center'>
        <h1 style={{ color, fontFamily: 'Copperplate' }}>¡Bienvenidos a nuestra tienda!</h1>
        <div className='row p-3'>
          <div className='col-2'></div>
          <div className='col-8 text-center'>
            <ControlledCarousel></ControlledCarousel>
          </div>
        </div>
      </div>
      <Incentivos></Incentivos>
      <Footer></Footer>
    </>
  );
}

export default HomePage;

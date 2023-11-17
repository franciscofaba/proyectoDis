import React from 'react';

import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
function AcercaDe() {
    return (
        <>

          <Navbars></Navbars>
          <div className='container bg-light p-3'>
            <div className='row p-3'>
                <div className='col-2'>
                </div>
                <div className='col-8 text-center'>
                  <h1>Quiénes somos</h1>
                </div>
            </div>
            <div className='row p-5'>
              <h2>¿De dónde viene?</h2>
              <p>Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>

            </div>
            <div className='row p-5'>

            </div>
            <div className='row p-5'>

            </div>
            <div className='row p-5'>


            </div>
            <div className='row p-5'>

            </div>
          </div>
          <Footer></Footer>
        </>

    );
}

export default AcercaDe;
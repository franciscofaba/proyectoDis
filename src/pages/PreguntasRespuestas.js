import React from 'react';
import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import CardFAQ from './componentes/CardFAQ';

function PreguntasRespuestas() {
  return (
    <>
      <Navbars></Navbars>

      <div className='container bg-light p-3'>
        <div className='row p-3'>
          <div className='col-8 m-2 p-3'>
            <h1 style= {{fontFamily:'copperplate'}}>Preguntas frecuentes (FAQ):</h1>
            <br></br>
            <CardFAQ pregunta="¿Cuál es la política de devoluciones?"></CardFAQ>
            <br></br>
            <CardFAQ pregunta= '¿Cuáles son los métodos de pago aceptados? '></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cómo puedo realizar un seguimiento de mi pedido?"></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cuánto cuesta el envío?"></CardFAQ>
            <br></br>
            <CardFAQ pregunta="¿Cúales son los tiempos estimados de entrega?"></CardFAQ>
          </div>
        </div>
        <div className='row p-5'></div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PreguntasRespuestas;

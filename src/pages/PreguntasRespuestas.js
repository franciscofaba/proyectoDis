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
                        <h1>Preguntas frecuentes (FAQ):</h1>
                        <br></br>
                        <CardFAQ></CardFAQ>
                        <br></br>
                        <CardFAQ></CardFAQ>
                        <br></br>
                        <CardFAQ></CardFAQ>
                        <br></br>
                        <CardFAQ></CardFAQ>

                    </div>
                </div>
                <div className='row p-5'>

                </div>

          </div>
          <Footer></Footer>
        </>
    );
}

export default PreguntasRespuestas;
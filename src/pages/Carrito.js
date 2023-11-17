import React from 'react';
import {Link} from "react-router-dom";
import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import Formcarrito from './componentes/FormCarrito';
function Carrito() {
    return (
        <>
          <Navbars></Navbars>
          <div className='container bg-light p-3'>
            <div className='row p-3'>
                <div className='col-2'>
                </div>
                <div className='col-8'>
                <Formcarrito></Formcarrito>
                </div>
            </div>
            <div className='row p-5'>

            </div>
          </div>
          <Footer></Footer>
        </>
    );
}

export default Carrito;
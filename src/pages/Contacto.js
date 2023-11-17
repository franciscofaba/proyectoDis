import React from 'react';

import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import FormContacto from './componentes/FormContacto';

function Contacto() {
    return (
    <div>
        <Navbars></Navbars>
            <div className='container bg-light p-3'>
                <div className='row p-3'>
                    <div className='col-2'>

                    </div>
                    <div className='col-8 text-center'>
                        <h1 className='m-4'>¿Como podemos ayudarte?</h1>
                        <FormContacto></FormContacto>
                    </div>
                </div>
                <div className='row p-5'>

                </div>
                <div className='row p-5'>
                    
                </div>

            </div>
            <Footer></Footer>
            
    </div>
    );
}

export default Contacto;
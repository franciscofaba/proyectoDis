import React from 'react';
import Cardproducto from './componentes/Cardproducto';
import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import { useMiContexto } from './Contexto';

const ProductoIndividual = () =>{
    const { datoCompartido } = useMiContexto();
    return (
        <>
          <Navbars></Navbars>
          <div className='container bg-light p-3'>
                <div className='row p-3'>
                    <div className='col-1'>

                    </div>
                    <div className='col-10'>
                        <Cardproducto></Cardproducto>
                        <p>Dato compartido en Componente: {datoCompartido.prop_title}</p>
                    </div>
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

export default ProductoIndividual;
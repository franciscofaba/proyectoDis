import React from 'react';
import Navbars from './componentes/Navbars';
import Footer from './componentes/Footer';
import ControlledCarousel from './componentes/Carrusel';
import Incentivos from './componentes/Incentivos';


function HomePage() {
    return (
        <>
          <Navbars></Navbars>
          <div className='container bg-light p-3 text-center'>
                <h1>!Bienvendios a nuestra tienda!</h1>
                <div className='row p-3'>
                    <div className='col-2'>

                    </div>
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
import React from 'react';
import FakeStorePage from './ApiFakestore';
import CardTop from './CardTop';

function CardContainer() {
    return (
        <div className='container bg-light p-3'>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-sm-10 m-1'>
                    <CardTop></CardTop>
                    <div className='row m-4 d-flex'>
                        <FakeStorePage></FakeStorePage>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default CardContainer;
import React from 'react';
import FakeStorePage from './ApiFakestore';
import CardTop from './CardTop';

function CardContainer() {
    const containerStyle = {
        boxShadow: '0 4px 4px rgb(240, 54, 228)',
    }
    return (
        <div className='container bg-light p-3' style={containerStyle}>
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
import React from 'react';
import Card from './Card';
import dropdown from 'react-bootstrap/';
import CardTop from './CardTop';

function CardContainer() {
    return (
        <div className='container bg-light p-3'>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-sm-10 m-1'>
                    <CardTop></CardTop>
                    <div className='row m-4'>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                    </div>
                    <div className='row m-4'>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card></Card>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default CardContainer;
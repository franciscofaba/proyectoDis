import React from 'react';
import CardTop from './CardTop';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { Card as BootstrapCard } from 'react-bootstrap';



const CardContainer = ({
    allProducts,
    setAllProducts,
    countProducts,
	setCountProducts,
	total,
	setTotal, })=>{
    const onAddProduct = product => {
		

		setTotal(total + product.price);
		setCountProducts(countProducts + 1);
		setAllProducts([...allProducts, product]);
	};

    const containerStyle = {boxShadow: '0 4px 4px rgb(240, 54, 228)',}

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((response) => {
        setProducts(response.data);
        })
        .catch((error) => {
        console.error('Error al cargar productos:', error);
        });
    }, []);



    return (
        
        <div className='container bg-light p-3' style={containerStyle}>
            <div className='row'>
                <div className='col-1'>

                </div>
                <div className='col-sm-10 m-1'>
                    <CardTop></CardTop>
                    <div className='row m-4 d-flex'>
                        <div>
                            {products.map((product) => (
                                            <div className='col-sm-4 d-inline-flex' key={product.id}>
                                                <BootstrapCard style={{ width: '20rem' , height:'36rem'}}>
                                                    <br></br>
                                                    <div className='d-flex justify-content-center m-2'>
                                                        <BootstrapCard.Img variant="top" src={product.image} style={{ width: '13rem' , height:'13rem'}} />
                                                    </div>
                                                    <BootstrapCard.Body>
                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-12'style={{ width: '20rem' , height:'7rem'}}>
                                                                    <h5 class="card-title text-align-center d-flex justify-content-center">{product.title}</h5>
                                                                </div>
                                                            </div>
                                                            <h5 class="card-title text-align-center d-flex justify-content-center">{product.price}$</h5>
                                                            <br></br>
                                                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                                                            <Link class="btn btn-outline-primary d-flex justify-content-center m-2"  to='/productoindividual' onClick={() => onAddProduct(product)}>Ir al producto</Link>
                                                            
                                                        </div>
                                                    </BootstrapCard.Body>
                                                </BootstrapCard>
                                          </div>
                            ))}
                        </div>   
                    </div>

                </div>


            </div>
        </div>
	);
};

export default CardContainer; 


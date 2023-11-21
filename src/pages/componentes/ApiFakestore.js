import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
function FakeStorePage() {
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
        <div>
            {products.map((product) => (
                            <Cards 
                                title={product.title}
                                id={product.id}
                                price={product.price}
                                category={product.category}
                                description={product.description}
                                imageUrl={product.image}
                            />
            ))}
        </div>    
                        

    );
  }

  export default FakeStorePage;
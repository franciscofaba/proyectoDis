
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useMiContexto } from '../Contexto';

const Card = (props) => {
  const { id, title, price, category , description, imageUrl } = props;
  const { datoCompartido, setDatoCompartido } = useMiContexto();

  const actualizarDato = () => {
    setDatoCompartido(
      {
        prop_id:props.id,
        prop_title:props.title,
        prop_price:props.price,
        prop_category:props.category,
        prop_description:props.description,
        prop_imageUrl:props.imageUrl,
      });
  };

  return (
    <div className='col-sm-4 d-inline-flex'>
        <BootstrapCard style={{ width: '20rem' , height:'32rem'}}>
          <br></br>
          <div className='d-flex justify-content-center m-2'>
            <BootstrapCard.Img variant="top" src={imageUrl} style={{ width: '13rem' , height:'13rem'}} />
          </div>
          <BootstrapCard.Body>
            <div>
              <div className='row'>
                <div className='col-12'style={{ width: '20rem' , height:'8rem'}}>
                    <h5 class="card-title text-align-center d-flex justify-content-center">{title}</h5>
                </div>
              </div>
              <h5 class="card-title text-align-center d-flex justify-content-center">{price}$</h5>
              <br></br>
              <Link class="btn btn-outline-primary d-flex justify-content-center " onClick={actualizarDato} to='/productoindividual'>Ir al producto</Link>
            </div>
          </BootstrapCard.Body>
        </BootstrapCard>
      </div>
  );
};

export default Card;
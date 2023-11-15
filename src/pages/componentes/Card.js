import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Imagen from './fotos/box.png';
function Card() {
    return (
        <div class="card w-100">
        <img src={Imagen} class="card-img-top p-4" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
            </ul>
            <div class="card-body">
            <a href="#" class="btn btn-outline-primary"><Link class="nav-link active" to="/productoindividual"> Ir al producto</Link></a>
            </div>
        </div>
    );
}

export default Card;
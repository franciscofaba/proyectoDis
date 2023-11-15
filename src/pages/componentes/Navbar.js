import React from 'react';
import {Link, useLocation} from "react-router-dom";
import miImagen from './fotos/carrito.png';

function AcercaDe() {
    const location = useLocation();

    const paginaActiva = (ruta) => {
        return location.pathname === ruta ? 'nav-link active' : 'nav-link';
      };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Logo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" className={paginaActiva('/acercade')}to="/acercade">Nosotros</Link>
                        <Link class="nav-link" className={paginaActiva('/contacto')} to="/contacto">Contacto</Link>
                        <Link class="nav-link" className={paginaActiva('/faq')} to="/faq">FAQ's</Link>
                        <Link class="nav-link" className={paginaActiva('/productos')} to="/productos">Productos</Link>
                    </div>
                </div>
                <div>
                    <Link class="nav-link" className={paginaActiva('/carrito')} to="/carrito">
                        <img src={miImagen} style={{ width: '40px', height: 'auto',margin: '10px'}} class="object-fit-m-contain border rounded" class="border border-5"/>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default AcercaDe;
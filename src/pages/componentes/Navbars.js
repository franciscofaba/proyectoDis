import React from 'react';
import {Link, useLocation} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
    const location = useLocation();

    const paginaActiva = (ruta) => {
        return location.pathname === ruta ? 'nav-link active' : 'nav-link';
      };
    return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link class="navbar-brand" to="/">logo</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link class="nav-link" className={paginaActiva('/productos')} to="/productos">Productos</Link>
            </Nav.Link>
            <Nav.Link>
                <Link class="nav-link" className={paginaActiva('/contacto')} to="/contacto">Contacto</Link>
            </Nav.Link>
            <Nav.Link>
                <Link class="nav-link" className={paginaActiva('/faq')} to="/faq">FAQ's</Link>
            </Nav.Link>
            <Nav.Link>
              <Link class="nav-link" className={paginaActiva('/acercade')}to="/acercade">Nosotros</Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link >
                <Link class="nav-link" className={paginaActiva('/carrito')} to="/carrito">Carrito <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></Link>
                
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
        
    );
}

export default Navbars;
import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAppState } from './AppStateContext';
function  Navbars (){

  const location = useLocation();


  const { mostrarComponente, setMostrarComponente } = useAppState();



  return (
    <>
      <Navbar  data-bs-theme="dark">
        <Container style={{  display: 'flex', justifyContent: 'center', fontFamily:'copperplate' }}>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/" style={{ color: 'black' }}>
              Home
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Button variant="nav-link"
                onClick={() => setMostrarComponente(false)}
              >
                <Link
                  className={`nav-link }`}
                  to="/productos"style={{ color: 'black' }}
                >
                  Productos
                </Link>
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="nav-link">
                <Link
                  className={`nav-link }`}
                  to="/contacto" style={{ color: 'black' }}
                >
                  Contacto
                </Link>
                
              </Button>
              
            </Nav.Link>
            <Nav.Link>
              <Button variant="nav-link">
                <Link
                  className={`nav-link `}
                  to="/faq"style={{ color: 'black' }}
                >
                  FAQ's
                </Link>
                
              </Button>
              
            </Nav.Link>
            <Nav.Link>
              <Button variant="nav-link">
                <Link
                  className={`nav-link ')}`}
                  to="/acercade"style={{ color: 'black' }}
                >
                  Nosotros
                </Link>

              </Button>
            </Nav.Link>
          </Nav>

          <Nav style={{ display: 'flex', justifyContent: 'center' ,fontFamily: 'copperplate'}}>
            <Nav.Link>
              <Button
                className={`nav-link `}
                style={{ color: 'black' }}
                onClick={() => setMostrarComponente(true)}
              >
                <Link
                className={`nav-link`}
                to="/productos"style={{ color: 'black' }}
                >
                
                  Carrito{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                </Link>
              </Button>
              
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;

import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAppState} from './AppStateContext';
function  Navbars (){


  const { setMostrarComponente } = useAppState();

  const location = useLocation();

  return (
    <>
      <Navbar  data-bs-theme="dark" style={{color: "white",backgroundColor : '#333' }}>
        <Container style={{ margintop:'-10px',marginBottom:'-10px',display: 'flex', justifyContent: 'center', fontFamily:'copperplate', fontSize: '24px',}}>
         
          <Nav className="me-auto">

            <Button variant="nav-link ">
              <Link className={"nav-link"} to="/" style={{ marginRight:'10px'}}>
                <h5>Home</h5>
              </Link>
            </Button>

              <Button variant="nav-link p-0"
                onClick={() => setMostrarComponente(false)}
              >
                <Link
                  className={`nav-link `}
                  to="/productos"
                  
                >
                  <h5>Productos</h5>
                </Link>
              </Button>


              <Button variant="nav-link">
                <Link
                  className={`nav-link }`}
                  to="/contacto" 
                  
                >
                  <h5>Contacto</h5>
                </Link>
                
              </Button>
              

              <Button variant="nav-link p-0">
                <Link
                  className={`nav-link `}
                  to="/faq"
                  
                >
                  <h5>FAQ's</h5>
                </Link>
                
              </Button>
              

              <Button variant="nav-link">
                <Link
                  className={`nav-link `}
                  to="/acercade"
                  
                >
                 <h5>
                 Nosotros
                  </h5> 
                  
                </Link>

              </Button>

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
                to="/productos"
                
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

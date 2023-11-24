import React  from 'react';

import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';

import AcercaDe from './pages/AcercaDe'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import FAQ from './pages/PreguntasRespuestas'
import ProductoIndividual from './pages/ProductoIndividual'
import Productos from './pages/productos'



function App() {
  return (
    <div  style={{backgroundColor: 'rgba(244, 244, 244, 0.906)'}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="acercade" element={< AcercaDe/>} />
              <Route path="carrito" element={<Carrito />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="productoindividual" element={<ProductoIndividual />} />
              <Route path="productos" element={<Productos />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;

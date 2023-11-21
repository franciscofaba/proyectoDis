// Contexto.js
import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

export const ProveedorContexto = ({ children }) => {
  const [datoCompartido, setDatoCompartido] = useState({
    prop_id:'',
    prop_title:'',
    prop_price:'',
    prop_category:'',
    prop_description:'',
    prop_imageUrl:'',
  });

  return (
    <MiContexto.Provider value={{ datoCompartido, setDatoCompartido }}>
      {children}
    </MiContexto.Provider>
  );
};

export const useMiContexto = () => {
  return useContext(MiContexto);
};
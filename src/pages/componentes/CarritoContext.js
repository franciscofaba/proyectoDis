import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [numeroDeElementosEnCarrito, setNumeroDeElementosEnCarrito] = useState(0);
  const [mostrarComponente2, setMostrarComponente2] = useState(false);

  const actualizarCarrito = (nuevoNumero) => {
    setNumeroDeElementosEnCarrito(nuevoNumero);
  };

  return (
    <CarritoContext.Provider value={{ numeroDeElementosEnCarrito, actualizarCarrito, mostrarComponente2, setMostrarComponente2}}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
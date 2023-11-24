import { Outlet } from "react-router-dom";

import React from 'react';
import Navbars from "./pages/componentes/Navbars";
import { AppStateProvider } from './pages/componentes/AppStateContext';



const Layout = () => {
  

  return (
      <>

        <AppStateProvider>
          <Navbars/>
            
          <Outlet></Outlet>
        </AppStateProvider>

         
      
      </>
    )
  };

export default Layout;

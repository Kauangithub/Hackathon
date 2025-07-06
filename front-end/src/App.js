import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

/* Imagens: */
import Logo from './img/Logo.png';


/* Rotas */
function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );
}
/* <Route path="cadastro_explorador" element={<CadastrarExplorador />} />
         <Route path="cadastro_organizador" element={<CadastrarOrganizador />} />
         <Route path="detalheevento" element={<DetalheEvento />} />
         <Route path="perfil" element={<Perfil />} />
*/

const Layout = () => {
  return(
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}

const Home = () => {
  return(
    <>
      <header>
        <img src={Logo} alt='Logo da empresa' id='Logo'></img>
        <h1>Partiu!</h1>
        <div>
          <div className='AdcEvento'></div>
          <div className='Calendario'></div>
          <div className='Map'></div>
        </div>
      </header>
    </>
  )
}

const Cadastrar = () => {
  return(
    <h3>AAA</h3>
  )
}

export default App;

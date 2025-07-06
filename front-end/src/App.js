import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="cadastro" element={<Cadastrar />} />
         <Route path="detalheevento" element={<DetalheEvento />} />
         <Route path="perfil" element={<Perfil />} />
       </Route>
     </Routes>
   </BrowserRouter>
 );
}

const Layout = () => {
  return(
    <h1>A</h1>
  )
}

const Home = () => {
  return(
    <h3>A</h3>
  )
}

const Cadastrar = () => {
  return(
    <h3>AAA</h3>
  )
}

export default App;

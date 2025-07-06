import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

/* CSS */
import './App.css'
/* Imagens: */
import Logo from './img/Logo.png';
import Event1 from './img/Event1.jpg';

/* Componentes */
import Calendar from './components/Calendar';

/* Rotas */
function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="cadastro_evento" element={<Cadastro_Evento />} />
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

function Layout(){
  return(
    <>
      <div>
        <div>
          <img className='HomeIcon'></img>
          <p>Início</p>
        </div>
        <div>
          <img className='BuscarIcon'></img>
          <p>Buscar</p>
        </div>
        <div>
          <img className='ContaIcon'></img>
          <p>Conta</p>
        </div>
      </div>
      <Outlet />
    </>
  )
}

function Home() {
  return(
    <>
      <header>
        <img src={Logo} alt='Logo da empresa' id='Logo'></img>
        <h1>Partiu!</h1>
        <div>
          <div className='AdcEvento'>

          </div>
          <div className='Calendario'>

          </div>
          <div className='Map'>

          </div>
        </div>
      </header>
      <div>
        <Calendar></Calendar>
      </div>
      <div>
        <h3>Hoje, 7 de Julho de 2025</h3>
        <TodayEvents></TodayEvents>
      </div>
      <div>
        <h3>Próximos eventos</h3>
        <Card_Event></Card_Event>
      </div>
    </>
  )
}

function Cadastro_Evento() {

}
/* Funções */

function Card_Event() {


  return(
    <div>
        <div className='card-evento horizontal'>
          <img src="" alt=""></img>
          <div className='conteudo-card'>
            <div className='data horizontal'></div>
            <h3>Título</h3>
            <p>descrição</p>
          </div>
        </div>
    </div>
  )
}

function TodayEvents() {
  if (1 + 1 == 2) {
    return (
      <>
        <p>Não há eventos hoje</p>
      </>
    )
  }
  else {
    return (
      <>
        <h3>Eventos em Destaque</h3>
        <div>
          <h3>Ver todos os eventos</h3>
        </div>
      </>
    )
  }
}



export default App;

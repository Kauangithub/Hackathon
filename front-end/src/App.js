import axios from 'axios';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

/* CSS */
import './App.css'

/* Páginas */
import Home from './pages/Home';
import Cadastro_Evento from './pages/Cadastro_Evento';
import Detalhe_Evento from './pages/Detalhe_Evento';
import Conta from './pages/Conta';
import TipoConta from './pages/TipoConta';

/* Rotas */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cadastro_evento" element={<Cadastro_Evento />} />
          <Route path="detalhe_evento" element={<Detalhe_Evento />} />
          <Route path="perfil" element={<Conta />} />
          <Route path="" element={<Conta />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <div className="navbar horizontal">
        <div className="navbar-item">
          <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.375 22.4166V11.9999H14.625V22.4166M2.125 8.87492L11.5 1.58325L20.875 8.87492V20.3333C20.875 20.8858 20.6555 21.4157 20.2648 21.8064C19.8741 22.1971 19.3442 22.4166 18.7917 22.4166H4.20833C3.6558 22.4166 3.12589 22.1971 2.73519 21.8064C2.34449 21.4157 2.125 20.8858 2.125 20.3333V8.87492Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Início</p>
        </div>

        <div className="navbar-item">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.375 22.375L17.8437 17.8437M20.2917 11.9583C20.2917 16.5607 16.5607 20.2917 11.9583 20.2917C7.35596 20.2917 3.625 16.5607 3.625 11.9583C3.625 7.35596 7.35596 3.625 11.9583 3.625C16.5607 3.625 20.2917 7.35596 20.2917 11.9583Z" stroke="#2E2E2E" stroke-opacity="0.6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Buscar</p>
        </div>

        <div className="navbar-item">
          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8334 22.375V20.2917C20.8334 19.1866 20.3944 18.1268 19.613 17.3454C18.8316 16.564 17.7718 16.125 16.6667 16.125H8.33335C7.22828 16.125 6.16848 16.564 5.38708 17.3454C4.60567 18.1268 4.16669 19.1866 4.16669 20.2917V22.375M16.6667 7.79167C16.6667 10.0929 14.8012 11.9583 12.5 11.9583C10.1988 11.9583 8.33335 10.0929 8.33335 7.79167C8.33335 5.49048 10.1988 3.625 12.5 3.625C14.8012 3.625 16.6667 5.49048 16.6667 7.79167Z" stroke="#2E2E2E" stroke-opacity="0.6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p>Conta</p>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default App;
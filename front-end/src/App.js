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

function Home() {
  return (
    <>
      <section>

        <header className='horizontal'>
          <div className="logo horizontal">
            <img src={Logo} alt='Logo da empresa' id='Logo'></img>
            <h1>Partiu!</h1>
          </div>
          <div className="botoes horizontal">

            <div className="botao border" id="adicionar">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6.25V23.75M6.25 15H23.75" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="botao border" id="calendario">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5V7.5M10 2.5V7.5M3.75 12.5H26.25M6.25 5H23.75C25.1307 5 26.25 6.11929 26.25 7.5V25C26.25 26.3807 25.1307 27.5 23.75 27.5H6.25C4.86929 27.5 3.75 26.3807 3.75 25V7.5C3.75 6.11929 4.86929 5 6.25 5Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className="botao border" id="mapa">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 22.5L1.25 27.5V7.5L10 2.5M10 22.5L20 27.5M10 22.5V2.5M20 27.5L28.75 22.5V2.5L20 7.5M20 27.5V7.5M20 7.5L10 2.5" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

          </div>

        </header>

        <div>
          <Calendar></Calendar>
        </div>


        <h3>Hoje, 7 de Julho de 2025</h3>
        <TodayEvents></TodayEvents>
      </section>
      

      <hr />

      
      <section>
        <h3>Próximos eventos</h3>
        <Card_Event></Card_Event>
      </section>
      
    </>
  )
}

function Cadastro_Evento() {
  return (
    <>
      <div>
        <h3>Cadastrar evento</h3>
        <div>
          <div>
            <img className='PhotoIcon'></img>
            <h4>Imagens</h4>
          </div>
          <p>Adicione de 1 a 10 imagens do local ou evento.</p>
          <div>
            <Imagens_Evento></Imagens_Evento>
          </div>
          <div>
            <img></img>
            <p>Adicionar imagens</p>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <h5>Título</h5>
          </div>
          <div>
            <input type='text'></input>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <h5>Descrição</h5>
          </div>
          <div>
            <input type='text'></input>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <h5>Início</h5>
          </div>
          <div>
            <div>
              <img></img>
              <div>
                <p>Data de Início</p>
                <p>09/07/2025</p>
              </div>
            </div>
            <div>
              <img></img>
              <div>
                <p>Horário de Início</p>
                <p>06:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <h5>Fim</h5>
            <input type='checkbox'></input>
          </div>
          <div>
            <div>
              <img></img>
              <div>
                <p>Data de Fim</p>
                <p>09/07/2025</p>
              </div>
            </div>
            <div>
              <img></img>
              <div>
                <p>Horário de Fim</p>
                <p>18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <img className='Map_Icon'></img>
            <h5>Localização</h5>
          </div>
          <div>
            <input type='text'></input>
          </div>
          <div>
            <input type='text'></input>
          </div>
          <div>
            <img className='MapPing_Icon'></img>
            <p>Selecionar no mapa</p>
          </div>
        </div>
        <div className='Bluebox'>
          <div>
            <h5>Outro contato</h5>
            <input type='checkbox'></input>
          </div>
          <div>
            <img className='Phone'></img>
            <input type='text'></input>
          </div>
        </div>
        <div>
          <h3>Cadastrar evento</h3>
        </div>
      </div>
    </>
  )
}

/* Funções */

function Card_Event() {


  return (
    <div>
      <div className='card-evento horizontal border'>
        <img src="" alt=""></img>
        <div className='conteudo-card'>
          <div className='data horizontal'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
          </div>
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

function Imagens_Evento() {

  return (
    <>
      <div className='img_evento 1'>
        <div className='Lixeira'>
          <img className='Lixeira_icon'></img>
        </div>
      </div>
      <div className='img_evento 2'>
        <div className='Lixeira'>
          <img className='Lixeira_icon'></img>
        </div>
      </div>
      <div className='img_evento 3'>
        <div className='Lixeira'>
          <img className='Lixeira_icon'></img>
        </div>
      </div>
    </>
  )
}

export default App;

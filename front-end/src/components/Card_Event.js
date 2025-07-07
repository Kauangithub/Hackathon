import { Link } from "react-router-dom";
import { MainContext } from "../context/maincontext";

const Card_Event = ({ title, local, desc, dateStart, dateEnd, published, author }) => {


  return (
    <div>
      <Link to='/detalhe_evento'>
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
      </Link>
      <div className="cards-container" id="cards-container">

      </div>
      </div>
      
  )
}
  async function fetchEventos() {
        try {
          
            const response = await fetch('http://localhost:3000/eventos');
            const eventos = await response.json();
            console.log(eventos);   
            const cardsContainer = document.getElementById('cards-container');



            cardsContainer.innerHTML = '';

            eventos.forEach(evento => {
              console.log(evento);
                const card = document.createElement('div');
                card.className = 'card-evento horizontal border';
                card.innerHTML = `
                    <Link to='/detalhe_evento/${evento.id}'>
                      <img src="${evento.imagem}" alt="${evento.title}">
                      <div class="conteudo-card">
                          <div class="data horizontal">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" /></svg>
                          </div>
                          <h3>${evento.title}</h3>
                          <p>${evento.desc}</p>
                      </div>
                    </Link>
                `;
                cardsContainer.appendChild(card);
            }
            )
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
        }
    }
;
fetchEventos()
export default Card_Event
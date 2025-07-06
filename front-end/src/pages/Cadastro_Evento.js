/* Componentes */
import Imagens_Evento from '../components/Imagens_Evento'


function Cadastro_Evento() {
  return (
    <>
      <section>
        <h3>Cadastrar evento</h3>

        <div className='bloco'>
          <div className="horizontal title">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25ZM6.25 26.25L20 12.5L26.25 18.75M12.5 10.625C12.5 11.6605 11.6605 12.5 10.625 12.5C9.58947 12.5 8.75 11.6605 8.75 10.625C8.75 9.58947 9.58947 8.75 10.625 8.75C11.6605 8.75 12.5 9.58947 12.5 10.625Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h5>Imagens</h5>
          </div>
          <p>Adicione de 1 a 10 imagens do local ou evento.</p>

          <div>
            <Imagens_Evento></Imagens_Evento>
          </div>

          <button className='horizontal border'>
            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 6.25V23.75M6.75 15H24.25" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Adicionar imagens</p>
          </button>

        </div>

        <div className='bloco'>
          <h5>Título</h5>
          <input type='text' placeholder='Título do evento'></input>
        </div>

        <div className='bloco'>
          <h5>Descrição</h5>
          <input type='text' placeholder='Descrição do evento'></input>
        </div>

        <div className='bloco'>

          <h5>Início</h5>

          <div className='horizontal'>
            <div className='horizontal data'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5V7.5M10 2.5V7.5M3.75 12.5H26.25M6.25 5H23.75C25.1307 5 26.25 6.11929 26.25 7.5V25C26.25 26.3807 25.1307 27.5 23.75 27.5H6.25C4.86929 27.5 3.75 26.3807 3.75 25V7.5C3.75 6.11929 4.86929 5 6.25 5Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>
                <h5>Data de Início</h5>
                <p>09/07/2025</p>
              </div>
            </div>

            <div className='horizontal data'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7.5V15L20 17.5M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>
                <h5>Horário de Início</h5>
                <p>06:00</p>
              </div>
            </div>

          </div>
        </div>

        <div className='bloco'>
          <div className='horizontal justify'>
            <h5>Fim</h5>
            <label class="switch">
              <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
          </div>

          <hr />

          <div className='horizontal'>
            <div className='horizontal data'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.5V7.5M10 2.5V7.5M3.75 12.5H26.25M6.25 5H23.75C25.1307 5 26.25 6.11929 26.25 7.5V25C26.25 26.3807 25.1307 27.5 23.75 27.5H6.25C4.86929 27.5 3.75 26.3807 3.75 25V7.5C3.75 6.11929 4.86929 5 6.25 5Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>
                <h5>Data final</h5>
                <p>09/07/2025</p>
              </div>
            </div>

            <div className='horizontal data'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7.5V15L20 17.5M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div>
                <h5>Horário final</h5>
                <p>06:00</p>
              </div>
            </div>

          </div>
        </div>

        <div className='bloco'>

          <div className='horizontal title'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 22.5L1.25 27.5V7.5L10 2.5M10 22.5L20 27.5M10 22.5V2.5M20 27.5L28.75 22.5V2.5L20 7.5M20 27.5V7.5M20 7.5L10 2.5" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h5>Localização</h5>
          </div>

          <div>
            <input type='text' placeholder='Endereço'></input>
          </div>

          <div>
            <input type='text' placeholder='Ponto de referência (opcional)'></input>
          </div>

          <div>
            <img className='MapPing_Icon'></img>
            <p>Selecionar no mapa</p>
          </div>

        </div>

        <div className='bloco'>

          <div className='horizontal justify'>
            <h5>Outro contato</h5>
            <label class="switch">
              <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
          </div>

          <hr />

          <div>
            <img className='Phone'></img>
            <input type='text' placeholder='Telefone'></input>
          </div>

        </div>

        <button type='submit' className='border horizontal'><p>Cadastrar evento</p></button>
      </section>
    </>
  )
}

export default Cadastro_Evento
/* Componentes */
import Imagens_Evento from '../components/Imagens_Evento'


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

export default Cadastro_Evento
/* Imagens: */
import Logo from '../img/Logo.png';

/* Componentes */
import Calendar from '../components/Calendar';
import Card_Event from '../components/Card_Event';
import TodayEvents from '../components/TodayEvents';

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

export default Home
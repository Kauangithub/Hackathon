import Card_Event from "../components/Card_Event"

function Detalhe_Evento() {
  return (
    <>
      <section>
        <div class="horizontal title">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.75 15H6.25M6.25 15L15 23.75M6.25 15L15 6.25" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h3>Detalhes do evento</h3>
        </div>
        
        <img className='ImgEvento' src="https://i0.wp.com/jornalagoralitoralnorte.com.br/wp-content/uploads/2025/07/tainha-1.jpeg?resize=1024%2C600&ssl=1.sp.gov.br/pmc/wp-content/uploads/2022/07/1-12-825x305.jpg"></img> 
        
        <div className="horizontal title">
          <div className="data-destaque">
            <p>09/07 - 13/07</p>   
          </div>
        </div>
        
        <h2>20° Festival da Tainha</h2> 

        <h5>Descrição do evento</h5>
        <p>O Festival da Tainha é um dos eventos mais tradicionais de Caraguatatuba, reunindo moradores e turistas em uma grande celebração da cultura caiçara. Realizado anualmente durante a temporada da pesca da tainha, o festival oferece uma rica programação com apresentações musicais, danças típicas, feira de artesanato e, principalmente, uma variedade de pratos preparados com a estrela do evento: a tainha.</p>
        <p>Além de valorizar os saberes e sabores locais, o festival também movimenta a economia da cidade e reforça o vínculo entre a população e suas raízes. É o lugar ideal para quem busca vivenciar a autenticidade do litoral norte paulista em clima de festa, tradição e boa comida.</p>

        <div className="bloco">
          <div class="datas horizontal">
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

        <div className="bloco">
          <div className='horizontal title'>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 22.5L1.25 27.5V7.5L10 2.5M10 22.5L20 27.5M10 22.5V2.5M20 27.5L28.75 22.5V2.5L20 7.5M20 27.5V7.5M20 7.5L10 2.5" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h5>Localização</h5>
          </div>
          <p>Praça de Eventos do Porto</p>
          <p>Alameda José Francesconi, 1690 - Porto Novo, Caraguatatuba - SP, 11667-700</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.2702093867304!2d-45.42626270861244!3d-23.636872036261888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd631551d2d585%3A0xbe6efd4b81fb3cd0!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%20-%20IFSP%20C%C3%A2mpus%20Caraguatatuba!5e0!3m2!1spt-BR!2sbr!4v1751839554432!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border"></iframe>

          <button className="horizontal border">
            <img className='MapPing_Icon'></img>
            <h3>Abrir no Google Maps</h3>
          </button>
        </div>

        <div className="bloco">
          
          <div> 
            <img className='Icon'></img>
            <div className="horizontal">
              <h5>Organizado por</h5>
              <p>Letícia de Deus</p>
            </div>
          </div>

          <div class="horizontal">
            <button className="horizontal border">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_70_433)">
                    <path d="M19.3125 6.25C20.5334 6.48821 21.6555 7.08532 22.5351 7.96492C23.4147 8.84452 24.0118 9.96658 24.25 11.1875M19.3125 1.25C21.8491 1.5318 24.2145 2.66772 26.0203 4.47126C27.8261 6.2748 28.965 8.63876 29.25 11.175M28 21.15V24.9C28.0014 25.2481 27.9301 25.5927 27.7906 25.9117C27.6512 26.2307 27.4466 26.517 27.1901 26.7523C26.9336 26.9877 26.6307 27.1669 26.3009 27.2784C25.9712 27.3899 25.6217 27.4313 25.275 27.4C21.4285 26.9821 17.7337 25.6677 14.4875 23.5625C11.4673 21.6433 8.90667 19.0827 6.9875 16.0625C4.87497 12.8015 3.5603 9.08874 3.15 5.225C3.11876 4.87933 3.15984 4.53095 3.27063 4.20203C3.38141 3.87311 3.55946 3.57086 3.79346 3.31453C4.02745 3.05819 4.31226 2.85339 4.62974 2.71315C4.94722 2.57292 5.29043 2.50033 5.6375 2.5H9.3875C9.99413 2.49403 10.5822 2.70885 11.0422 3.10442C11.5022 3.49998 11.8026 4.04931 11.8875 4.65C12.0458 5.85008 12.3393 7.02841 12.7625 8.1625C12.9307 8.6099 12.9671 9.09614 12.8674 9.5636C12.7677 10.0311 12.5361 10.4601 12.2 10.8L10.6125 12.3875C12.3919 15.5169 14.9831 18.1081 18.1125 19.8875L19.7 18.3C20.0399 17.9639 20.4689 17.7323 20.9364 17.6326C21.4039 17.5329 21.8901 17.5693 22.3375 17.7375C23.4716 18.1607 24.6499 18.4542 25.85 18.6125C26.4572 18.6982 27.0118 19.004 27.4082 19.4719C27.8046 19.9397 28.0152 20.537 28 21.15Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_433">
                      <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                    </clipPath>
                  </defs>
                </svg>
                <h4>Ligar</h4>
            </button>

            <div className='botao border'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.25 14.375C26.2543 16.0249 25.8688 17.6524 25.125 19.125C24.243 20.8897 22.8872 22.374 21.2093 23.4116C19.5314 24.4493 17.5978 24.9993 15.625 25C13.9752 25.0043 12.3476 24.6189 10.875 23.875L3.75 26.25L6.125 19.125C5.38116 17.6524 4.9957 16.0249 5 14.375C5.00076 12.4022 5.55076 10.4686 6.5884 8.79072C7.62603 7.11285 9.11032 5.75699 10.875 4.87504C12.3476 4.1312 13.9752 3.74573 15.625 3.75004H16.25C18.8554 3.89378 21.3163 4.99349 23.1614 6.83861C25.0065 8.68373 26.1063 11.1446 26.25 13.75V14.375Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div className='botao border'>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 16.25C15.6904 16.25 16.25 15.6904 16.25 15C16.25 14.3096 15.6904 13.75 15 13.75C14.3096 13.75 13.75 14.3096 13.75 15C13.75 15.6904 14.3096 16.25 15 16.25Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.75 16.25C24.4404 16.25 25 15.6904 25 15C25 14.3096 24.4404 13.75 23.75 13.75C23.0596 13.75 22.5 14.3096 22.5 15C22.5 15.6904 23.0596 16.25 23.75 16.25Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.25 16.25C6.94036 16.25 7.5 15.6904 7.5 15C7.5 14.3096 6.94036 13.75 6.25 13.75C5.55964 13.75 5 14.3096 5 15C5 15.6904 5.55964 16.25 6.25 16.25Z" stroke="#006C8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>


          </div>

        </div>

        <h2>Outros eventos</h2>
        <div>
        
        </div>
      </section>
    </>
  )
}

export default Detalhe_Evento
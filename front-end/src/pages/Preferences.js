function Preferences() {
    return (
        <>
            <section>
                <h3>Preferências de eventos</h3>
                <p>Para que possamos recomendar os melhores eventos, selecione suas categorias e horários preferidos. Assim, você recebe sugestões que são a sua cara!</p>
                <p>Selecione uma ou mais opções</p> 
                <h2>Tipos de Eventos</h2>
                <div>
                    <div class="cards-preferencias">
                            <div class="card-preferencia border" id="culinaria">
                                <h4>Culinária</h4>
                            </div>
                            <div class="card-preferencia border" id="shows">
                                <h4>Shows</h4>
                            </div>
                            <div class="card-preferencia border" id="arte">
                                <h4>Arte</h4>
                            </div>
                            <div class="card-preferencia border" id="passeios">
                                <h4>Passeios</h4>
                            </div>
                            <div class="card-preferencia border" id="trilhas">
                                <h4>Trilhas</h4>
                            </div>
                            <div class="card-preferencia border" id="compras">
                                <h4>Compras</h4>
                            </div>
                            <div class="card-preferencia border" id="lazer">
                                <h4>Lazer</h4>
                            </div>
                            <div class="card-preferencia border" id="cultura">
                                <h4>Cultura</h4>
                            </div>
                            <div class="card-preferencia border" id="esportes">
                                <h4>Esportes</h4>
                            </div>
                    </div>
                </div>
                <hr/>
                    <h2>Horários</h2>
                    <div class="cards-turno">

                        <div class="card-turno border" id="manha">
                            <h4>Manhã</h4>
                        </div>

                        <div class="card-turno border" id="tarde">
                            <h4>Tarde</h4>
                        </div>

                        <div class="card-turno border" id="noite">
                            <h4>Noite</h4>
                        </div>

                        <div class="card-turno border" id="madrugada">
                            <h4>Madrugada</h4>
                        </div>

                    </div>
                    <hr/>
                <button type='submit' className='border horizontal'><p>Concluir</p></button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </section>
        </>
    )
}

export default Preferences
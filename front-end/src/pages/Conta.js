import { Link } from "react-router-dom";

import Logo from '../img/Logo.png';

function Conta() {
    var organizador = 1
    var explorador = 2

    if (explorador == organizador) {
        return (
            <>
                 <div>
                    <div className="logo horizontal">
                        <img src={Logo} alt='Logo da empresa' id='Logo'></img>
                        <h1>Partiu!</h1>
                    </div>
                    <div>
                        <img className="Leledomal"></img>
                        <div>
                            <h3>Letícia de Deus</h3>
                            <h6>Explorador</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img></img>
                            <h6>Editar perfil</h6>
                        </div>
                        <div>
                            <img></img>
                            <h6>Preferências</h6>
                        </div>
                        <div>
                            <img></img>
                            <h6>Tornar organizador</h6>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img></img>
                            <h6>Favoritos</h6>
                        </div>
                        <div>
                            <img></img>
                            <h6>Ajuda e suporte</h6>
                        </div>
                        <div>
                            <img></img>
                            <h6>Sair da conta</h6>
                        </div>
                    </div>
                 </div>
            </>
        )
    }
    if (organizador == explorador) {
        return(
            <>
            </>
        )
    }
    else {
        return (
            <>
                <section className="bottom">
                    <h2>Você entrou como visitante</h2>
                    <p>Para acessar todas as funcionalidades, como receber recomendações personalizadas, salvar eventos favoritos ou cadastrar um evento, faça login ou crie uma conta.</p>
                    <button className="horizontal">Já tenho uma conta</button>
                    <Link to='/tipo_conta'><button>Criar uma conta</button> </Link>
                </section>
            </>
        ) 
    } 
}

export default Conta 
import { Link } from "react-router-dom";

function TipoConta() {
    return (
        <>
            <div>
               <h3>Como você quer usar a plataforma</h3>
               <Link to='/cadastro_usuario/1'>
                   <div>
                        <h4>Explorador</h4>
                        <p>Receba recomendações personalizadas de eventos perto de você e monte sua própria agenda.</p>
                        <p>Você pode alterar isso depois.</p>
                   </div>
               </Link>
               <Link to='/cadastro_usuario/1'>
                   <div>
                        <h4>Explorador e Organizador</h4>
                        <p>Além de descobrir eventos, use esta conta para também cadastrar, divulgar e gerenciar seus próprios eventos de forma prática e eficiente.</p>
                   </div>
               </Link>
            </div>
        </>
    )
}

export default TipoConta
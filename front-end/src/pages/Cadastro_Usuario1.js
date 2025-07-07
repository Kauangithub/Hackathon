import { Link } from "react-router-dom";

import {TipoConta} from "./TipoConta";
import { useContext } from "react";

function Cadastro_Usuario1() {
    const [ tipoConta, setTipoConta] = useContext(TipoConta)
   if (tipoConta = "Organizador") {
    return(
        <>
            <div>
                <h3>Criar conta de explorador e organizador</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Nome completo'></input>
                </div> 
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Seu e-mail'></input>
                </div>
                <Link to='/cadastro_usuario/2'>
                    <button type='submit' className='border horizontal'><p>Continuar</p></button>
                </Link>
                <div>
                    
                </div>
            </div>
        </>
     )
   }
   else {
     return(
        <>
            <div>
                <h3>Criar conta de explorador</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Nome completo'></input>
                </div> 
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Seu e-mail'></input>
                </div>
                <Link to='/cadastro_usuario/2'>
                    <button type='submit' className='border horizontal'><p>Continuar</p></button>
                </Link>                
                <div>

                </div>
            </div>
        </>
     )
   }
}

export default Cadastro_Usuario1
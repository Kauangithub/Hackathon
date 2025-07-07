import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { MainContext } from "../context/maincontext";

function Cadastro_Usuario1() {
    const [tipoConta] = useContext(MainContext);
    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
   if (tipoConta === "Organizador") {
    return(
        <>
            <div>
                <h3>Criar conta de explorador e organizador</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Nome completo' value={name} onChange={setName}></input>
                </div> 
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Seu e-mail' value={email} onChange={setEmail}></input>
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
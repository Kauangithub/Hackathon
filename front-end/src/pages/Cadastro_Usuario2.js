import { useState } from "react"
import { Link } from "react-router-dom";

function Cadastro_Usuario2() {

    const [ senha, setSenha ] = useState('')
    const [ senha2, setSenha2] = useState('')

     
    /* pretendemos adicionar uma validação de senha, incluindo um sistema de navigation, 
    para fins de desenvolvimento será usado o Link To direto */

    const handleLogin = async () => {
        
    }
    

    

   if (1 == 1) {
    return(
        <>
            <div>
                <form method="POST">
                <h3>Crie uma senha</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='password' placeholder='Crie uma senha'></input>
                    <img></img>
                </div> 
                <p>A senha deve ter no mínimo 9 caracteres</p>
                <div className='bloco'>
                    <img></img>
                    <input type='password' placeholder='Confirme a senha'></input>
                    <img></img>
                </div>
                <Link to='/cadastro_usuario/3'>
                <button type='submit' className='border horizontal' onClick={handleLogin}><p>Continuar</p></button>
                </Link>
                <div>
                    
                </div>
                </form>
            </div>
        </>
     )
   }
   else {
     return(
        <>
            <div>
                <h3>Crie uma senha</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Crie uma senha'></input>
                    <img></img>
                </div> 
                <p>A senha deve ter no mínimo 9 caracteres</p>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Confirme a senha'></input>
                    <img></img>
                </div>
                <Link to='/cadastro_usuario/3'>
                <button type='submit' className='border horizontal'><p>Continuar</p></button>
                </Link>
                <div>
                    
                </div>
            </div>
        </>
     )
   }
}

export default Cadastro_Usuario2
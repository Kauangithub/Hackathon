import { useState } from "react"
import { Link } from "react-router-dom";


BASE_URL = 'http://localhost:3000/'

function Cadastro_Usuario2() {
    const [ senha, setSenha ] = useState('')
    const [ senha2, setSenha2] = useState('')

    const postLogin = async (loginInfo) => {
        const response = await fetch(`${BASE_URL}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(loginInfo)
        });
        if (!response.ok) {
            throw new Error('Error posting login');
        }
        const data = await response.json();
        console.log(data);
        setCustomer(data);
        setIsAdmin(data.is_admin);
        return data;
    }

    const handleLogin = async () => {
        if (senha == senha2) {
            console.log('usuario validado')
            postLogin();
         
        } else {

        }
    }
    

    

   if (1 == 1) {
    return(
        <>
            <div>
                <form method="POST">
                <h3>Crie uma senha</h3>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Crie uma senha' value={senha} onChange={setSenha}></input>
                    <img></img>
                </div> 
                <p>A senha deve ter no mínimo 9 caracteres</p>
                <div className='bloco'>
                    <img></img>
                    <input type='text' placeholder='Confirme a senha' value={senha2} onChange={setSenha2}></input>
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
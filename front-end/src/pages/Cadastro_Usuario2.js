import { Link } from "react-router-dom";

function Cadastro_Usuario2() {
   if (1 + 1 == 2) {
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
                <button type='submit' className='border horizontal'><p>Continuar</p></button>
                <div>
                    
                </div>
            </div>
        </>
     )
   }
}

export default Cadastro_Usuario2